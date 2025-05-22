import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  
const services = [
  {
    id: 1,
    title: 'Exterior Detailing',
    icon: 'fa-car',
    shortDesc: 'Washing, waxing, and buffing to restore your car\'s exterior.',
    longDesc: '• Full exterior wash removing dirt and grime\n• Professional waxing and buffing\n• Treatment for wheels and tires\n• Restoration of exterior trim\n• Depending on vehicle and condition\nPrice range: $40 - $200'
  },
  {
    id: 2,
    title: 'Interior Detailing',
    icon: 'fa-couch',
    shortDesc: 'Vacuuming, shampooing, and odor removal for a fresh interior.',
    longDesc: '• Deep cleaning of hard-to-reach spots and cup holders\n• Steam cleaning for seats, carpets, and upholstery\n• Cleaning and conditioning of all surfaces\n• Complete interior deodorizing\n• Depending on vehicle and condition\nPrice range: $50-$300'
  },
  {
    id: 3,
    title: 'Full Detail Package',
    icon: 'fa-spray-can',
    shortDesc: 'Complete interior and exterior detailing for a showroom finish.',
    longDesc: '• Comprehensive exterior and interior detailing\n• Deep cleaning and sanitizing of all surfaces\n• Professional waxing and surface protection\n• Perfect for vehicles needing special attention\n• Depending on vehicle Price range: $100-$500'
  },
  {
    id: 4,
    title: 'Maintenance Wash',
    icon: 'fa-tint',
    shortDesc: 'Regular washing to maintain your vehicle\'s appearance between details.',
    longDesc: '• Thorough hand wash of exterior\n• Quick interior vacuum and wipe-down\n• Tire dressing for a clean look\n• Spray wax for added protection\n• Price range: $30-$100'
  },
  {
    id: 5,
    title: 'Ceramic Coating',
    icon: 'fa-shield-alt',
    shortDesc: 'Long-lasting protection with advanced ceramic technology.',
    longDesc: '• Advanced nano-ceramic technology for superior protection\n• Guards against UV rays, chemicals, and minor scratches\n• Hydrophobic properties for easier cleaning\n• Maintains deep, glossy finish\n• 4-6 years of protection\n• Price range: $500-$2,000'
  },
  {
    id: 6,
    title: 'Paint Protection Film',
    icon: 'fa-layer-group',
    shortDesc: 'Premium clear film protection against rock chips and scratches.',
    longDesc: '• Virtually invisible urethane film for high-impact areas\n• Prevents damage from rock chips and road debris\n• Self-healing technology repairs minor scratches\n• Long-lasting protection\n• Price varies based on vehicle size and coverage area'
  }
];
  
  const toggleServiceDetails = (id) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  // Function to make integers bold
  const makeIntegersBold = (text) => {
    return text.replace(/(\$\d+)/g, '<strong>$1</strong>');
  };
  
  return (
    <section className="services section">
      <div className="container">
        <h2 className="section-title">Our Detailing Services</h2>
        <div className="services-grid grid">
          {services.map(service => (
            <div className="service-card card" key={service.id}>
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.shortDesc}</p>
                {activeService === service.id && (
                  <div className="service-details">
                    {service.longDesc.split('\n').map((item, index) => {
                      if (item.startsWith('• Price range:')) {
                        return (
                          <p key={index}>
                            {item.substring(0, 14)}
                            <strong>{item.substring(14)}</strong>
                          </p>
                        );
                      }
                      return (
                        <p key={index} dangerouslySetInnerHTML={{ __html: makeIntegersBold(item) }} />
                      );
                    })}
                  </div>
                )}
                <button 
                  className="btn btn-secondary" 
                  onClick={() => toggleServiceDetails(service.id)}
                >
                  {activeService === service.id ? 'Show Less' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;