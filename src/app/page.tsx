"use client"


import Image from 'next/image';

export default function HomePage() {

  const pwnColors = {
    blue: '#0077C8',
    lightBlue: '#00A0E3',
    green: '#75B72A',
    white: '#FFFFFF'
  };

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: pwnColors.white,
      fontFamily: "'Open Sans', sans-serif",
      color: '#333',
      lineHeight: '1.4',
      overflow: 'auto',
      padding: '2rem',
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
              Verder stelt de AI Act dat AI-geletterdheid een wettelijke plicht is voor alle organisaties die AI gebruiken, en dat alle AI-systemen geregistreerd moeten worden.
            </p>
          </div>
          
          {/* Grid Layout - Drie kolommen */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '2rem',
            alignItems: 'start',
            position: 'relative',
            zIndex: 1,
            padding: '0 1rem',
            maxWidth: '100%',
            boxSizing: 'border-box',
            minHeight: '0'
          }}>
            {/* Kolom 1 - Wat is AI? */}
            <div style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              padding: '2rem',
              boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
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
                  Wat zijn de belangrijkste verplichtingen?
                </h3>
                <p style={{ marginBottom: '0.6rem' }}>
                  De AI Act stelt meerdere verplichtingen voor organisaties die AI gebruiken. De belangrijkste zijn:
                </p>
                <ol style={{ listStyleType: 'decimal', paddingLeft: '1rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                  <li style={{ marginBottom: '0.3rem' }}><strong>Registratie van AI-systemen:</strong> Alleen hoog-risico AI-systemen moeten geregistreerd worden in de EU-database (vanaf augustus 2026)</li>
                  <li style={{ marginBottom: '0.3rem' }}><strong>AI-geletterdheid:</strong> Verplicht sinds februari 2025 voor alle medewerkers</li>
                  <li style={{ marginBottom: '0.3rem' }}><strong>Risicobeoordeling:</strong> Vooral voor hoog-risico AI-systemen</li>
                  <li style={{ marginBottom: '0.3rem' }}><strong>Transparantie:</strong> Gebruikers informeren over AI-gebruik</li>
                </ol>

                <div style={{ 
                  fontSize: '0.7rem', 
                  fontStyle: 'italic', 
                  backgroundColor: '#f0f8ff', 
                  padding: '0.8rem',
                  borderRadius: '3px',
                  borderLeft: '3px solid ' + pwnColors.lightBlue
                }}>
                  Voor PWN als drinkwaterbedrijf zijn deze verplichtingen extra belangrijk omdat we onder kritieke infrastructuur vallen. 
                  Als publieke instantie moeten we hoog-risico AI-systemen registreren voordat we ze in gebruik nemen.
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
              maxWidth: '100%',
              boxSizing: 'border-box',
              position: 'relative'
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
                paddingRight: '0.3rem',
                fontSize: '0.72rem',
                lineHeight: '1.3'
              }}>
                {/* Interactive Timeline */}
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
                    { 
                      date: '1 aug 2024', 
                      desc: 'Start', 
                      title: 'AI-Act van kracht - PWN voorbereidingen',
                      details: 'AI-Act treedt formeel in werking. Voor PWN betekent dit het begin van een periode om alle AI-toepassingen in kaart te brengen.',
                      audience: 'Alle PWN medewerkers die AI gebruiken',
                      actions: 'Inventariseer alle AI-tools op uw afdeling (Copilot, chatbots, analysetools, voorspellingsmodellen voor waterkwaliteit, etc.)',
                      status: 'completed'
                    },
                    { 
                      date: '2 feb 2025', 
                      desc: 'Eerste verplichtingen', 
                      title: 'AI-literacy training verplicht voor PWN',
                      details: 'Als publieke organisatie moet PWN alle medewerkers trainen in AI-geletterdheid. Verboden AI-praktijken zoals social scoring worden illegaal.',
                      audience: 'Alle PWN medewerkers',
                      actions: 'Volg de verplichte AI-literacy training. PWN richt trainingen in over verantwoord AI-gebruik in watervoorziening.',
                      status: 'active'
                    },
                    { 
                      date: '2 aug 2025', 
                      desc: 'GPAI-regels', 
                      title: 'Generative AI governance - beperkte impact PWN',
                      details: 'Regels voor grote AI-modellen zoals ChatGPT. Voor PWN vooral relevant bij gebruik van externe AI-diensten.',
                      audience: 'PWN afdelingen die externe AI-diensten gebruiken',
                      actions: 'Check contracten met AI-leveranciers. Zorg dat zij voldoen aan nieuwe transparantie-eisen over trainingsdata.',
                      status: 'upcoming'
                    },
                    { 
                      date: '2 aug 2026', 
                      desc: 'High-risk systemen', 
                      title: 'Kritieke infrastructuur - hoofdfocus PWN',
                      details: 'AI-systemen in kritieke infrastructuur (drinkwatervoorziening) worden high-risk. PWN moet deze registreren in EU-database en impact-assessments uitvoeren.',
                      audience: 'PWN als drinkwatervoorziener en kritieke infrastructuur',
                      actions: 'Identificeer AI in pompstations, waterzuivering en distributie. Stel risicobeheersysteem op. Bereid EU-database registratie voor.',
                      status: 'upcoming'
                    },
                    { 
                      date: '2 aug 2027', 
                      desc: 'Volledige naleving', 
                      title: 'Alle PWN AI-systemen compliant',
                      details: 'Ook oudere AI-systemen en AI in gereguleerde waterbehandelingsapparatuur moeten nu voldoen aan alle AI-Act vereisten.',
                      audience: 'PWN technische diensten en IT',
                      actions: 'Upgrade oudere voorspellingsmodellen en sensorsystemen. Integreer AI-compliance in bestaande waterkwaliteit procedures.',
                      status: 'upcoming'
                    },
                    { 
                      date: '31 dec 2030', 
                      desc: 'EU-systemen', 
                      title: 'EU-brede standaarden - lange termijn PWN',
                      details: 'Harmonisatie van AI-standaarden in Europese infrastructuur. Minder direct relevant voor PWN watervoorziening.',
                      audience: 'PWN strategische planning',
                      actions: 'Monitor ontwikkelingen in EU-brede waterinfrastructuur AI-standaarden voor toekomstige samenwerking.',
                      status: 'future'
                    }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flex: 1,
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      const tooltip = e.currentTarget.querySelector('.timeline-tooltip');
                      if (tooltip) {
                        tooltip.style.display = 'block';
                        // Adjust position if tooltip would go off-screen
                        const rect = e.currentTarget.getBoundingClientRect();
                        const tooltipRect = tooltip.getBoundingClientRect();
                        if (rect.left + tooltipRect.width/2 > window.innerWidth - 20) {
                          tooltip.style.left = 'auto';
                          tooltip.style.right = '0';
                          tooltip.style.transform = 'none';
                        } else if (rect.left - tooltipRect.width/2 < 20) {
                          tooltip.style.left = '0';
                          tooltip.style.right = 'auto';  
                          tooltip.style.transform = 'none';
                        }
                      }
                    }}
                    onMouseLeave={(e) => {
                      const tooltip = e.currentTarget.querySelector('.timeline-tooltip');
                      if (tooltip) {
                        tooltip.style.display = 'none';
                        // Reset positioning
                        tooltip.style.left = '50%';
                        tooltip.style.right = 'auto';
                        tooltip.style.transform = 'translateX(-50%)';
                      }
                    }}>
                      <div style={{
                        width: '0.8rem',
                        height: '0.8rem',
                        borderRadius: '50%',
                        backgroundColor: item.status === 'completed' ? pwnColors.green : 
                                       item.status === 'active' ? '#FF851B' : 
                                       item.status === 'future' ? '#888' : pwnColors.blue,
                        marginBottom: '0.4rem',
                        border: item.status === 'active' ? '2px solid #fff' : 'none',
                        boxShadow: item.status === 'active' ? '0 0 0 2px #FF851B' : 'none',
                        transition: 'all 0.2s ease'
                      }}></div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 'bold', textAlign: 'center' }}>{item.date}</span>
                      <span style={{ fontSize: '0.5rem', textAlign: 'center' }}>{item.desc}</span>
                      
                      {/* Tooltip */}
                      <div className="timeline-tooltip" style={{
                        display: 'none',
                        position: 'absolute',
                        top: '60px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'white',
                        border: `2px solid ${pwnColors.blue}`,
                        borderRadius: '6px',
                        padding: '0.8rem',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        zIndex: 9999,
                        width: '280px',
                        fontSize: '0.65rem',
                        lineHeight: '1.3'
                      }}>
                        {/* Arrow pointing up */}
                        <div style={{
                          position: 'absolute',
                          top: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderBottom: `8px solid ${pwnColors.blue}`
                        }}></div>
                        
                        <div style={{ 
                          fontWeight: 'bold', 
                          color: pwnColors.blue, 
                          marginBottom: '0.4rem', 
                          fontSize: '0.7rem',
                          borderBottom: `1px solid ${pwnColors.lightBlue}`,
                          paddingBottom: '0.3rem'
                        }}>
                          {item.title}
                        </div>
                        <div style={{ marginBottom: '0.5rem' }}>
                          <strong>Wat verandert er:</strong><br />
                          {item.details}
                        </div>
                        <div style={{ marginBottom: '0.5rem' }}>
                          <strong>Wie wordt geraakt:</strong><br />
                          {item.audience}
                        </div>
                        <div style={{ 
                          backgroundColor: '#f8f9fa', 
                          padding: '0.4rem', 
                          borderRadius: '3px',
                          border: `1px solid ${pwnColors.lightBlue}`
                        }}>
                          <strong style={{ color: pwnColors.blue }}>Actiepunten:</strong><br />
                          {item.actions}
                        </div>
                      </div>
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
                  <li style={{ marginBottom: '0.3rem' }}>Stuur jouw lijst in via het Forms formulier: <span style={{ color: pwnColors.blue, fontWeight: 'bold' }}>AI Registratie</span></li>
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
  )
}