'use client';

import React from 'react';

const Hero = () => (
  <div style={{
    position: 'relative',
    height: '600px', // Höhe des Hero-Bereichs
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    backgroundImage: 'url("https://images.unsplash.com/photo-1506929113675-b55f949b6503?auto=format&fit=crop&w=1920&q=80")', // Karibik-Feeling
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    {/* Overlay für bessere Lesbarkeit */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1
    }}></div>

    <div style={{ zIndex: 2 }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Awesome Travel
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
        Dein nächstes Abenteuer beginnt hier.
      </p>
      <a href="/api/auth/login" style={{
        padding: '12px 30px',
        backgroundColor: '#eb6f33',
        color: 'white',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.1rem'
      }}>
        Jetzt Reise starten
      </a>
    </div>
  </div>
);

export default Hero;
