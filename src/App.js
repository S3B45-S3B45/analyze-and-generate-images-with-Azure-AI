import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  return (
    <div>
      <h1>Computer Vision</h1>
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Enter URL to analyze or textual prompt to generate image"
      />
      <br/><br/>
      <button>Analyze</button>
      <button>Generate</button>
    </div>
  );
}

export default App;