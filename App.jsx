import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Simple React Example</h1>
      <p style={styles.text}>You clicked the button {count} times.</p>
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    background: '#f5f5f5',
    padding: '20px',
  },
  title: {
    color: '#333',
  },
  text: {
    fontSize: '18px',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #888',
    background: '#fff',
  },
};
