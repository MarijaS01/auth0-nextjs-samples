import React from 'react';

const Hero = () => (
  <div 
    className="hero-container" 
    style={{
      position: 'relative',
      padding: '100px 20px',
      textAlign: 'center',
      backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      minHeight: '500px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {/* Dunkler Layer, damit man den Text lesen kann */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      zIndex: 1
    }}></div>

    <div style={{ position: 'relative', zIndex: 2 }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Awesome Travel</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>
        Dein nächstes Abenteuer beginnt hier.
      </p>
    </div>
  </div>
);

export default Hero;
