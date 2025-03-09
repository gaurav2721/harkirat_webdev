import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './ResultPage.css'

function ResultPage() {

  const location = useLocation()
  const navigate = useNavigate()
  const { originalText, translatedText } = location.state || {
    originalText: "How are you?",
    translatedText: "Comment Allez-vous?"
  }

  return (
      <>
        <div style={{ width: '390px', height: '750px' }}>
          <div style={{ height: '213px' }}>
            <img src="src/assets/pollyglot.png"  />
          </div>
          <div style={{ height: '517px', border: '4px solid #252F42', marginLeft: '9px', marginRight: '9px', marginTop: '31px', marginBottom: '31px', borderRadius: '8px' }}>
            
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
              Original text 👇
            </div>

            <div style={{ paddingTop: '20px' }}>
              <textarea 
                value={originalText}
                style={{
                  width: '317px',
                  height: '118px',
                  backgroundColor: '#EFF0F4',
                  borderRadius: '8px',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  textAlign: 'left'
                }}
              />
            </div>

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
              Your Translation 👇
            </div>
            <div style={{ paddingTop: '20px' }}>
              <textarea 
                value={translatedText}
                style={{
                  width: '317px',
                  height: '118px',
                  backgroundColor: '#EFF0F4',
                  borderRadius: '8px',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  textAlign: 'left'
                }}
              />
            </div>
          <div>
              <button
              onClick={() => {
                window.location.href = "/";
              }}
              style={{
                // marginLeft: '30px',
                marginTop: '30px',
                width: '322px',
                height: '50px',
                color: '#FFFFFF',
                backgroundColor: '#035A9D',
                borderRadius: '8px',
                // border: '1px solid #035A9D',
                cursor: 'pointer'
              }}
            >
              <span style={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle'
              }}>Start Over</span>
            </button>
          </div>
          </div>
        </div>
      </>
  )
}

export default ResultPage
