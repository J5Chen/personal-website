import axios from 'axios'
import { useState, useEffect } from 'react'
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Info from './components/Info';
import Email from './components/Email';
import Quote from './components/Quote';
import './App.css'

function App() {
  const [section, setSection] = useState('quote');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios
      .get('https://api.quotable.io/random')
      .then(response => {
        setQuote(response.data)
      })
  },[])
  const updateSection = (event) => {
    const sectionName = event.target.id;
    setSection(sectionName);
    console.log(event.target.name);
  }
  return (
    <div className='frame'>
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
          <Quote quote={quote}/>
        }

        {section === 'contact' &&
          <Email />
        }
      </div>
    </div>
  )

}

export default App
