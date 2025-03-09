import { useState } from 'react'

import './TranslatePage.css'
import { useNavigate } from 'react-router-dom';
import { OpenAI } from 'openai';

function TranslatePage() {
    const navigate = useNavigate()
    const [inputText, setInputText] = useState("How are you?")
    const [selectedLanguage, setSelectedLanguage] = useState("")
  
    const handleTranslate = async () => {
      if (inputText.trim() === "") {
        alert("Please enter a text to translate.");
        return;
      }
      if (selectedLanguage === "") {
        alert("Please select a language.");
        return;
      }
      console.log(inputText, selectedLanguage)
      const openai_key = import.meta.env.VITE_OPENAI_API_KEY
      console.log(openai_key)
      // Here you can add your translation logic
      //const translatedText = `Translated: ${inputText}` // Placeholder for actual translation

      const openai = new OpenAI({
        apiKey: openai_key,
        dangerouslyAllowBrowser: true
      })

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{role: "system", content: `You are an expert translator, you will be given a text and you will need to translate it to  ${selectedLanguage}.`},
      {role: "user", content: `${inputText}`}]
      })

      console.log(response)
      const translatedText = response.choices[0].message.content
      console.log(translatedText)
      // Navigate to result page with the texts
      navigate('/result', {
        state: {
          originalText: inputText,
          translatedText: translatedText,
          targetLanguage: selectedLanguage
        }
      })
    }

  return (
      <>
        <div style={{ width: '390px', height: '750px' }}>
          <div style={{ height: '213px' }}>
            <img src="src/assets/pollyglot.png"  />
          </div>
          <div style={{ height: '487px', border: '4px solid #252F42', marginLeft: '9px', marginRight: '9px', marginTop: '31px', marginBottom: '31px', borderRadius: '8px' }}>
            
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

          <div style={{ paddingTop: '20px' }}>
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
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
              Select language 👇
            </div>
            <div style={{ marginTop: '20px', width: '219px', marginLeft: '66px' }}>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" name="language" value="french" checked={selectedLanguage === "french"}
                      onChange={(e) => setSelectedLanguage(e.target.value)} style={{marginRight: '8px'}} />
                    <span style={{
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      display: 'inline-block'
                    }}>French</span>
                    <img 
                      src="src/assets/fr-flag.png" 
                      alt="French flag"
                      style={{
                        width: '30px',
                        height: '20px',
                        marginLeft: '12px',
                        verticalAlign: 'middle',
                        display: 'inline-block'
                      }}
                    />
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" name="language" value="spanish" checked={selectedLanguage === "spanish"}
                      onChange={(e) => setSelectedLanguage(e.target.value)} style={{marginRight: '8px'}} />
                    <span style={{
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      display: 'inline-block'
                    }}>Spanish</span>
                    <img 
                      src="src/assets/sp-flag.png" 
                      alt="Spanish flag"
                      style={{
                        width: '30px',
                        height: '20px',
                        marginLeft: '12px',
                        verticalAlign: 'middle',
                        display: 'inline-block'
                      }}
                    />
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" name="language" value="japanese" checked={selectedLanguage === "japanese"}
                      onChange={(e) => setSelectedLanguage(e.target.value)} style={{marginRight: '8px'}} />
                    <span style={{
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      display: 'inline-block'
                    }}>Japanese</span>
                    <img 
                      src="src/assets/jpn-flag.png" 
                      alt="Japanese flag"
                      style={{
                        width: '30px',
                        height: '20px',
                        marginLeft: '12px',
                        verticalAlign: 'middle',
                        display: 'inline-block'
                      }}
                    />
                  </label>
            </div>
          
          <div>
          <button
            onClick={handleTranslate}
            style={{
              marginTop: '30px',
              width: '322px',
              height: '50px',
              color: '#FFFFFF',
              backgroundColor: '#035A9D',
              borderRadius: '8px',
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
            }}>Translate</span>
          </button>
        </div>
          </div>
        </div>
      </>
  )
}

export default TranslatePage
