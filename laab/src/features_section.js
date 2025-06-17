import React from 'react';
import './features.css';

const features = [
  {
    icon: '🏠', // Replace with actual icon or SVG
    text: 'A modern, free-to-play playground that fosters curiosity and creativity',
  },
  {
    icon: '🌈', // Replace with actual icon or SVG
    text: 'An environment that values play diversity and inclusivity',
  },
  {
    icon: '🤝', // Replace with actual icon or SVG
    text: 'A sensory-rich space that is both safe and sustainable',
  },
  
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="flower-shape">
            <span className="icon">{feature.icon}</span>
          </div>
          <p className="feature-text">{feature.text}</p>
          {index < features.length - 1 && <div className="divider" />}
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
