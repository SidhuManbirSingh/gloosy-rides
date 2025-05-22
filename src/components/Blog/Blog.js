import React, { useState, useEffect } from 'react';
import './Blog.css';

const CACHE_KEY = 'blogPosts';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        
        // Check cache first
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { timestamp, posts } = JSON.parse(cachedData);
          const now = new Date().getTime();
          
          // If cache is less than 15 minutes old, use it
          if (now - timestamp < CACHE_DURATION) {
            setBlogPosts(posts);
            setLoading(false);
            return;
          }
        }
        
        // Cache expired or doesn't exist, fetch new data
        const response = await fetch(
          `https://gnews.io/api/v4/search?q="car+detailing"+OR+"auto+detailing"+OR+"vehicle+maintenance"&token=${process.env.REACT_APP_GNEWS_API_KEY}&max=9`
        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        // Transform and filter the data to ensure automotive relevance
        const formattedPosts = data.articles
          .filter(article => 
            article.title.toLowerCase().includes('car') ||
            article.title.toLowerCase().includes('auto') ||
            article.title.toLowerCase().includes('detail') ||
            article.title.toLowerCase().includes('vehicle') ||
            article.description.toLowerCase().includes('detailing')
          )
          .map((article, index) => ({
            id: index + 1,
            title: article.title,
            snippet: article.description.substring(0, 100) + '...',
            imageUrl: article.image || 'https://images.unsplash.com/photo-1505236269464-ae38e7e55a9d?auto=format&fit=crop&w=800&q=80',
            sourceUrl: article.url,
            sourceName: article.source.name,
            publishedAt: new Date(article.publishedAt).toLocaleDateString()
          }));
        
        // Save to cache with timestamp
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: new Date().getTime(),
          posts: formattedPosts
        }));
        
        setBlogPosts(formattedPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        
        // If fetch fails, try to use cached data even if expired
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { posts } = JSON.parse(cachedData);
          setBlogPosts(posts);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogPosts();
  }, []);

  // Get either first 3 posts or all posts based on showAll state
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 3);
  
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">Latest Updates from the Auto Detailing World</p>
        
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading articles...</p>
          </div>
        )}
        
        {error && <p className="error-message">{error}</p>}
        
        <div className="blog-grid">
          {displayedPosts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.imageUrl} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-source">{post.sourceName}</span>
                  <span className="blog-date">{post.publishedAt}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.snippet}</p>
                <a 
                  href={post.sourceUrl} 
                  className="read-more-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {blogPosts.length > 3 && (
          <div className="view-more-container">
            <button 
              className="btn btn-secondary view-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'View More Articles'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;