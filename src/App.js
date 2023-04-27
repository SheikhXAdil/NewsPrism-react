import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {


  const [mode, setMode] = useState('light');
  const apiKey = "Your API key from newsapi.org"

  const [progress, setProgress] = useState(0)


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#02171c';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };



  return (
    <Router>
      <div>
        <Navbar mode={mode} toogleMode={toggleMode} />
        <LoadingBar
          height={2}
          color='#0dcaf0'
          progress={progress}

        />
        <Routes>
          <Route path="/" element={<News mode={mode} setProgress={setProgress} apikey={apiKey} key="general" pageSize={6} country="us" category="general" />} />
          <Route path="/entertainment" element={<News mode={mode} setProgress={setProgress} apikey={apiKey} key="entertainment" pageSize={6} country="us" category="entertainment" />} />
          <Route path="/business" element={<News mode={mode} setProgress={setProgress} apikey={apiKey} key="business" pageSize={6} country="us" category="business" />} />
          <Route path="/health" element={<News mode={mode} setProgress={setProgress} apikey={apiKey} key="health" pageSize={6} country="us" category="health" />} />
          <Route path="/science" element={<News mode={mode} setProgress={setProgress} apikey={apiKey} key="science" pageSize={6} country="us" category="science" />} />
          <Route path="/sports" element={<News mode={mode} setProgress={setProgress} apikey={apiKey} key="sports" pageSize={6} country="us" category="sports" />} />
          <Route path="/technology" element={<News mode={mode} setProgress={setProgress} apikey={apiKey} key="technology" pageSize={6} country="us" category="technology" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

