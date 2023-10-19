import axios from 'axios'
import { useState, useEffect } from 'react'
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Info from './components/Info';
import Email from './components/Email';
import Quote from './components/Quote';
import './App.css'
import { useRef } from 'react';
import dreamCloudImage from './assets/cloud.jpg';

function App() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [section, setSection] = useState('quote');
  const [quote, setQuote] = useState('');
  const [imagePosition, setImagePosition] = useState({
    left: 0,
    top: 0
  })

  const handleMouseMove = (event) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();

    const containerCenterX = containerRect.width / 2;
    const containerCenterY = containerRect.height / 2;

    const mouseX = event.clientX - containerRect.left - containerCenterX;
    const mouseY = event.clientY - containerRect.top - containerCenterY;

    const moveX = (mouseX - imageRect.left - imageRect.width / 2) * 0.3;
    const moveY = (mouseY - imageRect.top - imageRect.height / 2) * 0.3;

    requestAnimationFrame(() => {
      imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  useEffect(() => {
    axios
      .get('https://api.quotable.io/random')
      .then(response => {
        setQuote(response.data)
      })
  }, [])
  const updateSection = (event) => {
    const sectionName = event.target.id;
    setSection(sectionName);
    console.log(event.target.name);
  }
  return (
    <div>
      <div id='temp'></div>
        <div className='frame' onMouseMove={handleMouseMove}
          style={{ position: 'relative'}}
          ref={containerRef}>
        <img
            src={dreamCloudImage}
            alt="Moving Image"
            style={{
              position: 'absolute',
              transition: 'transform 0.2s',
            }}
            ref={imageRef}
          />
          <div className="header">
            <h1 className="name">Hi, I'm Jimmy Chen</h1>
            <h3> A Java Developer Learning Some Front End</h3>
            <NavBar onClick={updateSection} />
          </div>
          <div className="data">
            {section === 'info' &&
              <Info />
            }
            {section === 'projects' &&
              <Projects />
            }
            {section === 'quote' &&
              <Quote quote={quote} />
            }
            {section === 'contact' &&
              <Email />
            }
          </div>
        </div>
    </div>
  )

}

export default App
