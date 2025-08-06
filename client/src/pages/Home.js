import React from 'react';

const Home = () => (
  <div style={{ 
    padding: '2rem', 
    maxWidth: '600px', 
    margin: '2rem auto', 
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
    color: '#333',
    textAlign: 'center'
  }}>
    <h2 style={{ 
      fontSize: '2.2rem', 
      marginBottom: '1rem',
      color: '#2196f3'
    }}>
      Welcome to the Recipe Sharing App!
    </h2>
    <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
      Use the navigation to explore recipes or add your own.
    </p>
  </div>
);

export default Home;
