"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Goede base dimensions voor mooie scaling
      const baseWidth = 1400;
      const baseHeight = 900;
      
      // Gebruik het meeste van het scherm
      const scaleX = (viewportWidth * 0.95) / baseWidth;
      const scaleY = (viewportHeight * 0.90) / baseHeight;
      
      // Gebruik de kleinste schaalfactor
      const newScale = Math.min(scaleX, scaleY);
      
      setScale(Math.max(newScale, 0.4)); // Minimum scale
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  const pwnColors = {
    blue: '#0077C8',
    lightBlue: '#00A0E3',
    green: '#75B72A',
    white: '#FFFFFF'
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <div style={{
        width: '1400px',
        height: '900px',
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        overflow: 'visible',
        position: 'relative',
        padding: '3rem',
        backgroundColor: pwnColors.white,
        fontFamily: "'Open Sans', sans-serif",
        color: '#333',
        lineHeight: '1.4',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        borderRadius: '12px',
        boxSizing: 'border-box'
      }}>
        {/* PWN Logo links onder */}
        <div style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '1.5rem',
          opacity: 0.9,
          zIndex: 0
        }}>
          <Image 
            src="https://www.vei.nl/IManager/Media/101987/2248701/EN/reg/logo-pwn-2012-zonder-achtergrond.png" 
            alt="PWN Logo" 
            width={120}
            height={40}
            style={{ height: '40px', width: 'auto' }}
          />
        </div>

        {/* Main Content */}
        <div id="onepager-content" style={{ width: '100%', height: '100%', position: 'relative' }}>
          {/* Header */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{
              color: pwnColors.blue,
              borderBottom: `2px solid ${pwnColors.green}`,
              paddingBottom: '0.4rem',
              marginBottom: '1.5rem',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
              AI Act binnen PWN: Organisatiebrede Implementatie
            </h1>
            <p style={{ marginBottom: '1.8rem', fontSize: '0.9rem', lineHeight: '1.3' }}>
              De AI Act is Europese wetgeving die kaders stelt voor het veilig en verantwoord gebruik van AI-systemen. 
              Deze wet helpt ons om risico&apos;s te beheersen en te zorgen voor een veilige, verantwoorde en ethische inzet van AI binnen PWN. 
              Volgens de AI Act is AI-geletterdheid een wettelijke plicht voor alle organisaties die AI gebruiken, en moeten alle AI-systemen geregistreerd worden.
            </p>
          </div>
          
          {/* Grid Layout - Drie kolommen */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '2rem',
            height: 'calc(100% - 200px)',
            alignItems: 'start',
            position: 'relative',
            zIndex: 1,
            padding: '0 1rem',
            maxWidth: '100%',
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}>
            {/* Kolom 1 - Wat is AI? */}
            <div style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              padding: '2rem',
              boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'auto',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }}>
              <h2 style={{
                color: pwnColors.blue,
                fontWeight: 'bold',
                marginBottom: '1rem',
                fontSize: '1rem',
                borderBottom: `1px solid ${pwnColors.lightBlue}`,
                paddingBottom: '0.4rem'
              }}>
                Wat is AI?
              </h2>
              <div style={{
                overflowY: 'auto',
                flex: 1,
                paddingRight: '0.3rem',
                fontSize: '0.75rem',
                lineHeight: '1.3'
              }}>
                <p style={{ marginBottom: '1rem' }}>
                  AI, oftewel kunstmatige intelligentie, is een technologie die computers en machines in staat stelt 
                  om taken uit te voeren die normaal gesproken menselijke intelligentie vereisen, zoals het herkennen 
                  van spraak, het nemen van beslissingen en het voorspellen van trends.
                </p>

                <h3 style={{ fontWeight: 'bold', color: pwnColors.blue, marginBottom: '0.6rem', fontSize: '0.8rem' }}>
                  Voorbeelden bij PWN:
                </h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1.2rem',
                  gap: '0.3rem'
                }}>
                  <div style={{
                    backgroundColor: pwnColors.lightBlue,
                    color: 'white',
                    padding: '0.4rem 0.2rem',
                    borderRadius: '3px',
                    fontSize: '0.65rem',
                    flex: 1,
                    textAlign: 'center'
                  }}>Copilot</div>
                  <div style={{
                    backgroundColor: pwnColors.lightBlue,
                    color: 'white',
                    padding: '0.4rem 0.2rem',
                    borderRadius: '3px',
                    fontSize: '0.65rem',
                    flex: 1,
                    textAlign: 'center'
                  }}>Chatbots</div>
                  <div style={{
                    backgroundColor: pwnColors.lightBlue,
                    color: 'white',
                    padding: '0.4rem 0.2rem',
                    borderRadius: '3px',
                    fontSize: '0.65rem',
                    flex: 1,
                    textAlign: 'center'
                  }}>Chloridemodel</div>
                </div>

                <h3 style={{ fontWeight: 'bold', color: pwnColors.blue, marginBottom: '0.6rem', fontSize: '0.8rem' }}>
                  Voor wie is de AI Act belangrijk?
                </h3>
                <p style={{ marginBottom: '0.6rem' }}>
                  AI-geletterdheid wordt verplicht vanaf 2025 voor alle organisaties die AI gebruiken of ontwikkelen. 
                  Het vereiste kennisniveau hangt af van:
                </p>
                <ol style={{ listStyleType: 'decimal', paddingLeft: '1rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                  <li style={{ marginBottom: '0.3rem' }}>De rol van de medewerker</li>
                  <li style={{ marginBottom: '0.3rem' }}>Het type AI-systeem</li>
                  <li style={{ marginBottom: '0.3rem' }}>De impact op besluitvorming</li>
                </ol>

                <div style={{ 
                  fontSize: '0.7rem', 
                  fontStyle: 'italic', 
                  backgroundColor: '#f0f8ff', 
                  padding: '0.8rem',
                  borderRadius: '3px',
                  borderLeft: '3px solid ' + pwnColors.lightBlue
                }}>
                  Goede omgang met AI is belangrijk voor iedereen, ongeacht functie, om te begrijpen wat AI betekent 
                  voor het eigen werk en welke regels gelden.
                </div>
              </div>
            </div>

            {/* Kolom 2 - Risiconiveaus */}
            <div style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              padding: '2rem',
              boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'auto',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }}>
              <h2 style={{
                color: pwnColors.blue,
                fontWeight: 'bold',
                marginBottom: '1rem',
                fontSize: '1rem',
                borderBottom: `1px solid ${pwnColors.lightBlue}`,
                paddingBottom: '0.4rem'
              }}>
                Risiconiveaus volgens AI Act
              </h2>
              <div style={{
                overflowY: 'auto',
                flex: 1,
                paddingRight: '0.3rem',
                fontSize: '0.72rem',
                lineHeight: '1.3'
              }}>
                {/* Onaanvaardbaar risico */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '0.8rem',
                  padding: '0.6rem',
                  backgroundColor: '#fff5f5',
                  borderRadius: '4px',
                  borderLeft: '3px solid #FF4136'
                }}>
                  <div style={{
                    width: '0.8rem',
                    height: '0.8rem',
                    borderRadius: '50%',
                    marginRight: '0.6rem',
                    flexShrink: 0,
                    backgroundColor: '#FF4136'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.3rem', fontSize: '0.75rem' }}>Onaanvaardbaar risico</h3>
                    <p style={{ margin: 0, fontSize: '0.7rem' }}>
                      Social scoring, realtime biometrische identificatie in openbare ruimtes, emotieherkenning op werk of school.
                      <span style={{ color: '#dc2626', fontWeight: 'bold' }}> → Verboden</span>
                    </p>
                  </div>
                </div>

                {/* Hoog risico */}
                <div style={{ 
                  marginBottom: '0.8rem',
                  padding: '0.6rem',
                  backgroundColor: '#fff8f0',
                  borderRadius: '4px',
                  borderLeft: '3px solid #FF851B'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <div style={{
                      width: '0.8rem',
                      height: '0.8rem',
                      borderRadius: '50%',
                      marginRight: '0.6rem',
                      flexShrink: 0,
                      backgroundColor: '#FF851B'
                    }}></div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: 'bold', marginBottom: '0.3rem', fontSize: '0.75rem' }}>Hoog risico</h3>
                      <p style={{ margin: 0, fontSize: '0.7rem', marginBottom: '0.3rem' }}>
                        AI in werving & selectie, kredietbeoordeling, onderwijs, gezondheidszorg.
                      </p>
                      <p style={{ margin: 0, fontSize: '0.65rem', color: '#666' }}>
                        Verplichtingen: risicobeoordeling, transparantie, menselijk toezicht, EU-database registratie vanaf 2026.
                      </p>
                    </div>
                  </div>
                  
                  {/* Kritieke infrastructuur als subvakje */}
                  <div style={{
                    marginLeft: '1.4rem',
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    backgroundColor: '#fff4e6',
                    borderRadius: '3px',
                    borderLeft: '2px solid #ea580c',
                    border: '1px dashed #ea580c'
                  }}>
                    <h4 style={{ 
                      fontWeight: 'bold', 
                      color: '#ea580c', 
                      marginBottom: '0.2rem', 
                      fontSize: '0.7rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <i className="fas fa-arrow-right" style={{ marginRight: '0.3rem', fontSize: '0.6rem' }}></i>
                      Kritieke infrastructuur
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.65rem', lineHeight: '1.3' }}>
                      Watervoorziening valt onder kritieke infrastructuur. Een veiligheidscomponent beschermt de fysieke integriteit of veiligheid van mensen en eigendommen.
                    </p>
                  </div>
                </div>

                {/* Beperkt risico */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '0.8rem',
                  padding: '0.6rem',
                  backgroundColor: '#fffbf0',
                  borderRadius: '4px',
                  borderLeft: '3px solid #FFDC00'
                }}>
                  <div style={{
                    width: '0.8rem',
                    height: '0.8rem',
                    borderRadius: '50%',
                    marginRight: '0.6rem',
                    flexShrink: 0,
                    backgroundColor: '#FFDC00'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.3rem', fontSize: '0.75rem' }}>Beperkt risico</h3>
                    <p style={{ margin: 0, fontSize: '0.7rem' }}>
                      Chatbots en deepfakes zijn toegestaan, maar vallen onder transparantieverplichtingen. 
                      Gebruikers moeten geïnformeerd worden dat ze met een AI-systeem te maken hebben.
                    </p>
                  </div>
                </div>

                {/* Minimaal risico */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  padding: '0.6rem',
                  backgroundColor: '#f0fff4',
                  borderRadius: '4px',
                  borderLeft: '3px solid #2ECC40'
                }}>
                  <div style={{
                    width: '0.8rem',
                    height: '0.8rem',
                    borderRadius: '50%',
                    marginRight: '0.6rem',
                    flexShrink: 0,
                    backgroundColor: '#2ECC40'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.3rem', fontSize: '0.75rem' }}>Minimaal risico</h3>
                    <p style={{ margin: 0, fontSize: '0.7rem' }}>
                      AI-systemen in videogames of spamfilters mogen vrij worden gebruikt zonder specifieke verplichtingen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom 3 - Tijdlijn & Acties */}
            <div style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              padding: '2rem',
              boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'auto',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }}>
              <h2 style={{
                color: pwnColors.blue,
                fontWeight: 'bold',
                marginBottom: '1rem',
                fontSize: '1rem',
                borderBottom: `1px solid ${pwnColors.lightBlue}`,
                paddingBottom: '0.4rem'
              }}>
                Tijdlijn & Acties
              </h2>
              <div style={{
                overflowY: 'auto',
                flex: 1,
                paddingRight: '0.3rem',
                fontSize: '0.72rem',
                lineHeight: '1.3'
              }}>
                {/* Timeline */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1.2rem',
                  position: 'relative',
                  padding: '0.6rem 0'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '1.2rem',
                    left: 0,
                    right: 0,
                    height: '1px',
                    backgroundColor: pwnColors.lightBlue,
                    zIndex: -1
                  }}></div>
                  {[
                    { year: '2024', desc: 'Start' },
                    { year: 'Feb 2025', desc: 'Eerste verplichtingen' },
                    { year: '2025-2026', desc: 'Systeem implementatie' },
                    { year: '2027', desc: 'Volledige naleving' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flex: 1
                    }}>
                      <div style={{
                        width: '0.7rem',
                        height: '0.7rem',
                        borderRadius: '50%',
                        backgroundColor: pwnColors.blue,
                        marginBottom: '0.4rem'
                      }}></div>
                      <span style={{ fontSize: '0.65rem', fontWeight: 'bold', textAlign: 'center' }}>{item.year}</span>
                      <span style={{ fontSize: '0.55rem', textAlign: 'center' }}>{item.desc}</span>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontWeight: 'bold', color: pwnColors.blue, marginBottom: '0.8rem', fontSize: '0.8rem' }}>
                  Wat gaan we doen bij PWN?
                </h3>
                
                {/* Acties */}
                {[
                  { icon: 'fas fa-list-check', title: 'Registratie & Identificatie', desc: 'In kaart brengen van alle AI-systemen binnen PWN' },
                  { icon: 'fas fa-graduation-cap', title: 'Trainingen & Workshops', desc: 'Kennisvergroting over AI onder medewerkers' },
                  { icon: 'fas fa-shield-alt', title: 'Borging & Compliance', desc: 'Zorgen voor naleving van alle verplichtingen' }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <div style={{
                      backgroundColor: pwnColors.lightBlue,
                      color: 'white',
                      width: '1.6rem',
                      height: '1.6rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.8rem',
                      flexShrink: 0,
                      fontSize: '0.7rem'
                    }}>
                      <i className={item.icon}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontWeight: 'bold', marginBottom: '0.2rem', fontSize: '0.75rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.65rem', lineHeight: '1.2', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}

                <h3 style={{ fontWeight: 'bold', color: pwnColors.blue, marginBottom: '0.6rem', fontSize: '0.8rem', marginTop: '1rem' }}>
                  Wat kun je doen als medewerker?
                </h3>
                <ol style={{ listStyleType: 'decimal', paddingLeft: '1rem', marginBottom: '1rem', fontSize: '0.7rem', lineHeight: '1.4' }}>
                  <li style={{ marginBottom: '0.3rem' }}>Identificeer AI-systemen op je afdeling</li>
                  <li style={{ marginBottom: '0.3rem' }}>Bepaal wie verantwoordelijk is voor elk AI-systeem</li>
                  <li style={{ marginBottom: '0.3rem' }}>Stuur jouw lijst vòòr 30 juli 2025 in via het Forms formulier: <span style={{ color: pwnColors.blue, fontWeight: 'bold' }}>AI Registratie</span></li>
                </ol>

                <h3 style={{ fontWeight: 'bold', color: pwnColors.blue, marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                  Toezichthouders
                </h3>
                <div style={{
                  backgroundColor: '#f0f8ff',
                  padding: '0.8rem',
                  borderRadius: '4px',
                  borderLeft: '3px solid ' + pwnColors.blue
                }}>
                  <p style={{ fontSize: '0.7rem', lineHeight: '1.3', margin: 0, marginBottom: '0.4rem' }}>
                    <span style={{ fontWeight: 'bold', color: pwnColors.blue }}>Coördinerend toezichthouder:</span><br />
                    Autoriteit Persoonsgegevens (AP)
                  </p>
                  <p style={{ fontSize: '0.7rem', lineHeight: '1.3', margin: 0 }}>
                    <span style={{ fontWeight: 'bold', color: pwnColors.blue }}>Voor drinkwatervoorziening:</span><br />
                    Rijksinspectie Digitale Infrastructuur (RDI) en Inspectie Leefomgeving en Transport (ILT)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}