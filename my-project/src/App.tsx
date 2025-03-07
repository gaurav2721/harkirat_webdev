import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <div style={{ width: '390px', height: '780px' }}>
          <div style={{ height: '213px' }}>
            <img src="src/assets/pollyglot.png"  />
          </div>
          <div style={{ height: '567px', border: '4px solid #252F42', marginLeft: '9px', marginRight: '9px', marginTop: '31px', marginBottom: '31px', borderRadius: '8px' }}>
            <div style={{ 
              marginTop: '20px', 
              marginLeft: '73px', 
              width: '219px', 
              fontFamily: 'Poppins', 
              fontWeight: 700, 
              fontSize: '20px', 
              lineHeight: '150%', 
              letterSpacing: '0%', 
              textAlign: 'center', 
              color: '#035A9D' 
            }}>
              Text to translate 👇
            </div>
            <div></div>
            <div></div>
            {/* <div>
              <button style={{
                backgroundColor: '#035A9D',
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '150%',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                marginBottom: '20px'
              }}>
                Translate
              </button>
            </div> */}
          </div>
        </div>
      </>
  )
}

export default App
