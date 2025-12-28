import React, { useState } from 'react';

// Hand-drawn style SVG components
const WobblyBorder = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
    <path
      d="M0,0 Q10,5 20,2 T40,5 T60,2 T80,6 T100,0 L100,100 Q90,95 80,98 T60,95 T40,98 T20,94 T0,100 Z"
      fill="currentColor"
    />
  </svg>
);

const StarDoodle = ({ style, color = "#FFD700" }) => (
  <svg style={style} width="40" height="40" viewBox="0 0 40 40">
    <path
      d="M20,2 L23,15 L36,15 L26,23 L30,36 L20,28 L10,36 L14,23 L4,15 L17,15 Z"
      fill={color}
      stroke="#333"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartDoodle = ({ style, color = "#FF6B9D" }) => (
  <svg style={style} width="35" height="35" viewBox="0 0 35 35">
    <path
      d="M17.5,30 C17.5,30 3,20 3,11 C3,5 8,2 12,4 C14,5 16,7 17.5,10 C19,7 21,5 23,4 C27,2 32,5 32,11 C32,20 17.5,30 17.5,30 Z"
      fill={color}
      stroke="#333"
      strokeWidth="1.5"
    />
  </svg>
);

const FlowerDoodle = ({ style, color = "#9B59B6" }) => (
  <svg style={style} width="45" height="45" viewBox="0 0 45 45">
    <circle cx="22.5" cy="10" r="7" fill={color} stroke="#333" strokeWidth="1.5"/>
    <circle cx="32" cy="18" r="7" fill={color} stroke="#333" strokeWidth="1.5"/>
    <circle cx="30" cy="30" r="7" fill={color} stroke="#333" strokeWidth="1.5"/>
    <circle cx="15" cy="30" r="7" fill={color} stroke="#333" strokeWidth="1.5"/>
    <circle cx="13" cy="18" r="7" fill={color} stroke="#333" strokeWidth="1.5"/>
    <circle cx="22.5" cy="22" r="6" fill="#FFE135" stroke="#333" strokeWidth="1.5"/>
  </svg>
);

const RainbowDoodle = ({ style }) => (
  <svg style={style} width="60" height="35" viewBox="0 0 60 35">
    <path d="M5,32 Q5,5 30,5 Q55,5 55,32" fill="none" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round"/>
    <path d="M10,32 Q10,10 30,10 Q50,10 50,32" fill="none" stroke="#FFB347" strokeWidth="4" strokeLinecap="round"/>
    <path d="M15,32 Q15,15 30,15 Q45,15 45,32" fill="none" stroke="#FFEB3B" strokeWidth="4" strokeLinecap="round"/>
    <path d="M20,32 Q20,20 30,20 Q40,20 40,32" fill="none" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round"/>
    <path d="M25,32 Q25,25 30,25 Q35,25 35,32" fill="none" stroke="#9B59B6" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const CloudDoodle = ({ style }) => (
  <svg style={style} width="50" height="30" viewBox="0 0 50 30">
    <ellipse cx="15" cy="20" rx="10" ry="8" fill="white" stroke="#333" strokeWidth="1.5"/>
    <ellipse cx="25" cy="15" rx="12" ry="10" fill="white" stroke="#333" strokeWidth="1.5"/>
    <ellipse cx="38" cy="18" rx="9" ry="7" fill="white" stroke="#333" strokeWidth="1.5"/>
    <ellipse cx="30" cy="22" rx="8" ry="6" fill="white" stroke="#333" strokeWidth="1.5"/>
  </svg>
);

// iPhone Case Mockup Component
const IPhoneCase = ({ design, name, price }) => (
  <div style={{
    background: 'white',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '4px 4px 0 #333',
    border: '3px solid #333',
    transform: 'rotate(-1deg)',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(1deg) scale(1.02)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-1deg)'}
  >
    {/* Phone shape */}
    <div style={{
      width: '140px',
      height: '280px',
      borderRadius: '25px',
      border: '4px solid #333',
      background: design.background,
      position: 'relative',
      overflow: 'hidden',
      margin: '0 auto'
    }}>
      {/* Camera bump */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        width: '45px',
        height: '45px',
        borderRadius: '12px',
        background: '#333',
        border: '2px solid #555'
      }}>
        <div style={{
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          background: '#1a1a1a',
          border: '2px solid #444',
          position: 'absolute',
          top: '5px',
          left: '5px'
        }}/>
        <div style={{
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          background: '#1a1a1a',
          border: '2px solid #444',
          position: 'absolute',
          bottom: '5px',
          right: '5px'
        }}/>
      </div>
      {/* Design elements */}
      {design.elements}
    </div>
    <h3 style={{
      fontFamily: "'Indie Flower', cursive",
      fontSize: '1.3rem',
      textAlign: 'center',
      marginTop: '15px',
      marginBottom: '5px',
      color: '#333'
    }}>{name}</h3>
    <p style={{
      fontFamily: "'Patrick Hand', cursive",
      fontSize: '1.1rem',
      textAlign: 'center',
      color: '#666',
      margin: 0
    }}>${price}</p>
  </div>
);

// Phone Charm Mockup Component
const PhoneCharm = ({ design, name, price }) => (
  <div style={{
    background: 'white',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '4px 4px 0 #333',
    border: '3px solid #333',
    transform: 'rotate(1deg)',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(-1deg) scale(1.02)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(1deg)'}
  >
    <div style={{
      width: '100px',
      height: '160px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* String */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        width: '3px',
        height: '40px',
        background: design.stringColor || '#FFB6C1',
        transform: 'translateX(-50%)'
      }}/>
      {/* Loop */}
      <div style={{
        position: 'absolute',
        top: '-5px',
        left: '50%',
        width: '20px',
        height: '15px',
        border: `3px solid ${design.stringColor || '#FFB6C1'}`,
        borderBottom: 'none',
        borderRadius: '10px 10px 0 0',
        transform: 'translateX(-50%)'
      }}/>
      {/* Charm body */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        ...design.charmStyle
      }}>
        {design.charmContent}
      </div>
    </div>
    <h3 style={{
      fontFamily: "'Indie Flower', cursive",
      fontSize: '1.2rem',
      textAlign: 'center',
      marginTop: '10px',
      marginBottom: '5px',
      color: '#333'
    }}>{name}</h3>
    <p style={{
      fontFamily: "'Patrick Hand', cursive",
      fontSize: '1rem',
      textAlign: 'center',
      color: '#666',
      margin: 0
    }}>${price}</p>
  </div>
);

export default function SansaCases() {
  const [activeSection, setActiveSection] = useState('home');

  // Phone case designs
  const caseDesigns = [
    {
      name: "Rainbow Dreams",
      price: "15",
      design: {
        background: 'linear-gradient(180deg, #87CEEB 0%, #FFB6C1 50%, #DDA0DD 100%)',
        elements: (
          <>
            <RainbowDoodle style={{ position: 'absolute', top: '80px', left: '40px' }}/>
            <CloudDoodle style={{ position: 'absolute', top: '60px', left: '5px' }}/>
            <CloudDoodle style={{ position: 'absolute', top: '140px', right: '-5px' }}/>
            <StarDoodle style={{ position: 'absolute', bottom: '60px', left: '20px' }}/>
            <StarDoodle style={{ position: 'absolute', bottom: '40px', right: '25px', transform: 'scale(0.7)' }}/>
          </>
        )
      }
    },
    {
      name: "Flower Garden",
      price: "15",
      design: {
        background: 'linear-gradient(180deg, #98FB98 0%, #90EE90 100%)',
        elements: (
          <>
            <FlowerDoodle style={{ position: 'absolute', top: '70px', left: '10px' }} color="#FF69B4"/>
            <FlowerDoodle style={{ position: 'absolute', top: '120px', right: '5px' }} color="#9B59B6"/>
            <FlowerDoodle style={{ position: 'absolute', bottom: '80px', left: '50px' }} color="#FF6B6B"/>
            <FlowerDoodle style={{ position: 'absolute', bottom: '30px', left: '5px' }} color="#FFB347"/>
            {/* Grass strokes */}
            <svg style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '40px' }}>
              <path d="M5,40 Q7,20 10,40" stroke="#228B22" strokeWidth="3" fill="none"/>
              <path d="M20,40 Q25,15 28,40" stroke="#228B22" strokeWidth="3" fill="none"/>
              <path d="M40,40 Q42,25 45,40" stroke="#228B22" strokeWidth="3" fill="none"/>
              <path d="M60,40 Q65,10 68,40" stroke="#228B22" strokeWidth="3" fill="none"/>
              <path d="M80,40 Q82,20 85,40" stroke="#228B22" strokeWidth="3" fill="none"/>
              <path d="M100,40 Q105,18 108,40" stroke="#228B22" strokeWidth="3" fill="none"/>
              <path d="M120,40 Q122,22 125,40" stroke="#228B22" strokeWidth="3" fill="none"/>
            </svg>
          </>
        )
      }
    },
    {
      name: "Sparkle Hearts",
      price: "15",
      design: {
        background: 'linear-gradient(180deg, #FFB6C1 0%, #FF69B4 100%)',
        elements: (
          <>
            <HeartDoodle style={{ position: 'absolute', top: '70px', left: '20px' }} color="#FF1493"/>
            <HeartDoodle style={{ position: 'absolute', top: '100px', right: '15px', transform: 'scale(0.8)' }} color="#FF6B9D"/>
            <HeartDoodle style={{ position: 'absolute', top: '160px', left: '50px', transform: 'scale(1.2)' }} color="#DC143C"/>
            <HeartDoodle style={{ position: 'absolute', bottom: '60px', left: '10px', transform: 'scale(0.7)' }} color="#FF69B4"/>
            <HeartDoodle style={{ position: 'absolute', bottom: '40px', right: '20px', transform: 'scale(0.9)' }} color="#FF1493"/>
            <StarDoodle style={{ position: 'absolute', top: '130px', left: '15px', transform: 'scale(0.5)' }} color="#FFD700"/>
            <StarDoodle style={{ position: 'absolute', bottom: '100px', right: '10px', transform: 'scale(0.5)' }} color="#FFD700"/>
          </>
        )
      }
    },
    {
      name: "Kitty Cat",
      price: "18",
      design: {
        background: 'linear-gradient(180deg, #E6E6FA 0%, #DDA0DD 100%)',
        elements: (
          <>
            {/* Cat face */}
            <svg style={{ position: 'absolute', top: '80px', left: '25px' }} width="90" height="100" viewBox="0 0 90 100">
              {/* Ears */}
              <path d="M15,40 L5,5 L30,25 Z" fill="#FFB6C1" stroke="#333" strokeWidth="2"/>
              <path d="M75,40 L85,5 L60,25 Z" fill="#FFB6C1" stroke="#333" strokeWidth="2"/>
              {/* Face */}
              <ellipse cx="45" cy="55" rx="35" ry="30" fill="#FFB6C1" stroke="#333" strokeWidth="2"/>
              {/* Eyes */}
              <ellipse cx="30" cy="50" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1.5"/>
              <ellipse cx="60" cy="50" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1.5"/>
              <circle cx="30" cy="52" r="4" fill="#333"/>
              <circle cx="60" cy="52" r="4" fill="#333"/>
              <circle cx="32" cy="50" r="1.5" fill="white"/>
              <circle cx="62" cy="50" r="1.5" fill="white"/>
              {/* Nose */}
              <path d="M45,60 L42,65 L48,65 Z" fill="#FF69B4"/>
              {/* Mouth */}
              <path d="M45,65 Q45,72 38,70" stroke="#333" strokeWidth="1.5" fill="none"/>
              <path d="M45,65 Q45,72 52,70" stroke="#333" strokeWidth="1.5" fill="none"/>
              {/* Whiskers */}
              <line x1="5" y1="55" x2="25" y2="58" stroke="#333" strokeWidth="1.5"/>
              <line x1="5" y1="62" x2="25" y2="62" stroke="#333" strokeWidth="1.5"/>
              <line x1="65" y1="58" x2="85" y2="55" stroke="#333" strokeWidth="1.5"/>
              <line x1="65" y1="62" x2="85" y2="62" stroke="#333" strokeWidth="1.5"/>
            </svg>
            <HeartDoodle style={{ position: 'absolute', bottom: '50px', left: '15px', transform: 'scale(0.6)' }} color="#FF69B4"/>
            <HeartDoodle style={{ position: 'absolute', bottom: '60px', right: '15px', transform: 'scale(0.6)' }} color="#FF69B4"/>
          </>
        )
      }
    }
  ];

  // Phone charm designs
  const charmDesigns = [
    {
      name: "Strawberry",
      price: "8",
      design: {
        stringColor: '#90EE90',
        charmStyle: {
          width: '50px',
          height: '60px'
        },
        charmContent: (
          <svg width="50" height="60" viewBox="0 0 50 60">
            {/* Leaves */}
            <path d="M25,8 L15,0 L20,10 Z" fill="#228B22" stroke="#333" strokeWidth="1.5"/>
            <path d="M25,8 L35,0 L30,10 Z" fill="#228B22" stroke="#333" strokeWidth="1.5"/>
            <path d="M25,5 L25,0" stroke="#228B22" strokeWidth="3"/>
            {/* Berry */}
            <path d="M25,10 Q45,20 40,40 Q35,58 25,58 Q15,58 10,40 Q5,20 25,10 Z" fill="#FF6B6B" stroke="#333" strokeWidth="2"/>
            {/* Seeds */}
            <ellipse cx="20" cy="25" rx="2" ry="3" fill="#FFD700"/>
            <ellipse cx="30" cy="28" rx="2" ry="3" fill="#FFD700"/>
            <ellipse cx="18" cy="38" rx="2" ry="3" fill="#FFD700"/>
            <ellipse cx="32" cy="40" rx="2" ry="3" fill="#FFD700"/>
            <ellipse cx="25" cy="48" rx="2" ry="3" fill="#FFD700"/>
          </svg>
        )
      }
    },
    {
      name: "Rainbow Star",
      price: "7",
      design: {
        stringColor: '#FFB347',
        charmStyle: {
          width: '55px',
          height: '55px'
        },
        charmContent: (
          <svg width="55" height="55" viewBox="0 0 55 55">
            <defs>
              <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B"/>
                <stop offset="25%" stopColor="#FFB347"/>
                <stop offset="50%" stopColor="#FFEB3B"/>
                <stop offset="75%" stopColor="#4ECDC4"/>
                <stop offset="100%" stopColor="#9B59B6"/>
              </linearGradient>
            </defs>
            <path
              d="M27.5,2 L32,20 L50,20 L36,32 L42,50 L27.5,38 L13,50 L19,32 L5,20 L23,20 Z"
              fill="url(#rainbow)"
              stroke="#333"
              strokeWidth="2"
            />
            {/* Sparkles */}
            <circle cx="27.5" cy="27" r="3" fill="white" opacity="0.8"/>
          </svg>
        )
      }
    },
    {
      name: "Butterfly",
      price: "9",
      design: {
        stringColor: '#DDA0DD',
        charmStyle: {
          width: '60px',
          height: '50px'
        },
        charmContent: (
          <svg width="60" height="50" viewBox="0 0 60 50">
            {/* Wings */}
            <ellipse cx="18" cy="18" rx="15" ry="14" fill="#FF69B4" stroke="#333" strokeWidth="2"/>
            <ellipse cx="42" cy="18" rx="15" ry="14" fill="#FF69B4" stroke="#333" strokeWidth="2"/>
            <ellipse cx="15" cy="38" rx="12" ry="10" fill="#DDA0DD" stroke="#333" strokeWidth="2"/>
            <ellipse cx="45" cy="38" rx="12" ry="10" fill="#DDA0DD" stroke="#333" strokeWidth="2"/>
            {/* Wing patterns */}
            <circle cx="18" cy="16" r="5" fill="#FFB6C1" stroke="#333" strokeWidth="1"/>
            <circle cx="42" cy="16" r="5" fill="#FFB6C1" stroke="#333" strokeWidth="1"/>
            <circle cx="15" cy="38" r="4" fill="#E6E6FA" stroke="#333" strokeWidth="1"/>
            <circle cx="45" cy="38" r="4" fill="#E6E6FA" stroke="#333" strokeWidth="1"/>
            {/* Body */}
            <ellipse cx="30" cy="28" rx="4" ry="18" fill="#333"/>
            {/* Antennae */}
            <path d="M28,12 Q22,5 18,2" stroke="#333" strokeWidth="2" fill="none"/>
            <path d="M32,12 Q38,5 42,2" stroke="#333" strokeWidth="2" fill="none"/>
            <circle cx="18" cy="2" r="2" fill="#333"/>
            <circle cx="42" cy="2" r="2" fill="#333"/>
          </svg>
        )
      }
    },
    {
      name: "Happy Cloud",
      price: "7",
      design: {
        stringColor: '#87CEEB',
        charmStyle: {
          width: '60px',
          height: '45px'
        },
        charmContent: (
          <svg width="60" height="45" viewBox="0 0 60 45">
            {/* Cloud shape */}
            <ellipse cx="18" cy="28" rx="14" ry="12" fill="white" stroke="#333" strokeWidth="2"/>
            <ellipse cx="30" cy="20" rx="16" ry="14" fill="white" stroke="#333" strokeWidth="2"/>
            <ellipse cx="45" cy="26" rx="12" ry="10" fill="white" stroke="#333" strokeWidth="2"/>
            <ellipse cx="35" cy="32" rx="10" ry="8" fill="white" stroke="#333" strokeWidth="2"/>
            {/* Happy face */}
            <circle cx="24" cy="22" r="3" fill="#333"/>
            <circle cx="38" cy="22" r="3" fill="#333"/>
            <circle cx="25" cy="21" r="1" fill="white"/>
            <circle cx="39" cy="21" r="1" fill="white"/>
            <path d="M26,30 Q31,36 36,30" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Blush */}
            <ellipse cx="20" cy="28" rx="4" ry="2" fill="#FFB6C1" opacity="0.6"/>
            <ellipse cx="42" cy="28" rx="4" ry="2" fill="#FFB6C1" opacity="0.6"/>
          </svg>
        )
      }
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FFF0F5 0%, #E6F3FF 50%, #F0FFF0 100%)',
      fontFamily: "'Patrick Hand', cursive",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Patrick+Hand&family=Shadows+Into+Light&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>

      {/* Floating decorations */}
      <StarDoodle style={{ position: 'fixed', top: '10%', left: '5%', animation: 'float 3s ease-in-out infinite', opacity: 0.6 }} color="#FFD700"/>
      <HeartDoodle style={{ position: 'fixed', top: '20%', right: '8%', animation: 'float 4s ease-in-out infinite', opacity: 0.6 }}/>
      <FlowerDoodle style={{ position: 'fixed', bottom: '15%', left: '3%', animation: 'float 3.5s ease-in-out infinite', opacity: 0.5 }}/>
      <StarDoodle style={{ position: 'fixed', bottom: '25%', right: '5%', animation: 'float 2.5s ease-in-out infinite', opacity: 0.6 }} color="#FF69B4"/>
      <CloudDoodle style={{ position: 'fixed', top: '40%', left: '2%', animation: 'float 5s ease-in-out infinite', opacity: 0.4 }}/>

      {/* Header */}
      <header style={{
        padding: '20px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'white',
          padding: '15px 40px',
          borderRadius: '30px',
          border: '4px solid #333',
          boxShadow: '6px 6px 0 #FF69B4',
          animation: 'wiggle 2s ease-in-out infinite'
        }}>
          <h1 style={{
            fontFamily: "'Shadows Into Light', cursive",
            fontSize: '3rem',
            margin: 0,
            background: 'linear-gradient(90deg, #FF6B6B, #FFB347, #FFEB3B, #4ECDC4, #9B59B6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            ✨ Sansa's Creations ✨
          </h1>
          <p style={{
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '1.3rem',
            color: '#666',
            margin: '5px 0 0 0'
          }}>
            Handmade iPhone Cases & Charms! 🎨
          </p>
        </div>

        {/* Navigation */}
        <nav style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          {['home', 'cases', 'charms', 'about'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              style={{
                fontFamily: "'Indie Flower', cursive",
                fontSize: '1.2rem',
                padding: '10px 25px',
                border: '3px solid #333',
                borderRadius: '20px',
                background: activeSection === section ? '#FFB6C1' : 'white',
                cursor: 'pointer',
                boxShadow: '3px 3px 0 #333',
                transition: 'all 0.2s',
                transform: activeSection === section ? 'translateY(2px)' : 'none'
              }}
            >
              {section === 'home' && '🏠 '}
              {section === 'cases' && '📱 '}
              {section === 'charms' && '🌟 '}
              {section === 'about' && '💝 '}
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Home Section */}
        {activeSection === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'white',
              borderRadius: '30px',
              padding: '40px',
              border: '4px solid #333',
              boxShadow: '8px 8px 0 #4ECDC4',
              marginBottom: '40px'
            }}>
              <h2 style={{
                fontFamily: "'Shadows Into Light', cursive",
                fontSize: '2.5rem',
                color: '#FF6B6B',
                marginBottom: '20px'
              }}>
                Welcome to My Shop! 🌈
              </h2>
              <p style={{
                fontSize: '1.4rem',
                lineHeight: '1.8',
                color: '#555',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Hi! I'm <span style={{ color: '#FF69B4', fontWeight: 'bold' }}>Sansa</span> and I
                <HeartDoodle style={{ display: 'inline-block', verticalAlign: 'middle', width: '25px', height: '25px', margin: '0 5px' }}/>
                making art! Me and my friend paint super cute designs on phone cases and charms.
                Every single one is made by hand with lots of love! 💕
              </p>
              <RainbowDoodle style={{ margin: '30px auto', display: 'block' }}/>
              <p style={{ fontSize: '1.2rem', color: '#888' }}>
                ⬇️ Check out our creations below! ⬇️
              </p>
            </div>

            {/* Featured Items Preview */}
            <h3 style={{
              fontFamily: "'Indie Flower', cursive",
              fontSize: '2rem',
              color: '#9B59B6',
              marginBottom: '20px'
            }}>
              ⭐ Featured Items ⭐
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '25px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <IPhoneCase {...caseDesigns[0]} />
              <PhoneCharm {...charmDesigns[0]} />
              <IPhoneCase {...caseDesigns[2]} />
              <PhoneCharm {...charmDesigns[2]} />
            </div>
          </div>
        )}

        {/* Cases Section */}
        {activeSection === 'cases' && (
          <div>
            <h2 style={{
              fontFamily: "'Shadows Into Light', cursive",
              fontSize: '2.5rem',
              textAlign: 'center',
              color: '#FF6B6B',
              marginBottom: '30px'
            }}>
              📱 iPhone Cases 📱
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '30px'
            }}>
              Each case is hand-painted with love! 🎨
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              justifyItems: 'center'
            }}>
              {caseDesigns.map((design, index) => (
                <IPhoneCase key={index} {...design} />
              ))}
            </div>
          </div>
        )}

        {/* Charms Section */}
        {activeSection === 'charms' && (
          <div>
            <h2 style={{
              fontFamily: "'Shadows Into Light', cursive",
              fontSize: '2.5rem',
              textAlign: 'center',
              color: '#9B59B6',
              marginBottom: '30px'
            }}>
              🌟 Phone Charms 🌟
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '30px'
            }}>
              Super cute charms to decorate your phone! ✨
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '30px',
              justifyItems: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {charmDesigns.map((design, index) => (
                <PhoneCharm key={index} {...design} />
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div style={{
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '30px',
              padding: '40px',
              border: '4px solid #333',
              boxShadow: '8px 8px 0 #FFB347',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontFamily: "'Shadows Into Light', cursive",
                fontSize: '2.5rem',
                color: '#4ECDC4',
                marginBottom: '20px'
              }}>
                💝 About Us 💝
              </h2>

              <div style={{
                background: '#FFF0F5',
                borderRadius: '20px',
                padding: '20px',
                marginBottom: '20px',
                border: '3px dashed #FF69B4'
              }}>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#555' }}>
                  Hi! I'm <strong style={{ color: '#FF69B4' }}>Sansa</strong> and I'm 10 years old!
                  I love art, rainbows, and making pretty things! 🌈
                </p>
              </div>

              <div style={{
                background: '#F0FFF0',
                borderRadius: '20px',
                padding: '20px',
                marginBottom: '20px',
                border: '3px dashed #4ECDC4'
              }}>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#555' }}>
                  Me and my best friend started making phone cases because we wanted
                  to have the cutest phones ever! Then everyone wanted one too! 😊
                </p>
              </div>

              <FlowerDoodle style={{ margin: '20px auto', display: 'block' }}/>

              <div style={{
                background: '#FFF8E7',
                borderRadius: '20px',
                padding: '20px',
                border: '3px dashed #FFB347'
              }}>
                <h3 style={{
                  fontFamily: "'Indie Flower', cursive",
                  fontSize: '1.5rem',
                  color: '#FF6B6B',
                  marginBottom: '10px'
                }}>
                  How to Order! 📝
                </h3>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>
                  Ask your mom or dad to send us a message! 💌<br/>
                  We can make custom designs too! 🎨<br/>
                  (Grown-ups: Please contact us for orders!)
                </p>
              </div>

              <div style={{ marginTop: '30px' }}>
                <StarDoodle style={{ display: 'inline-block', margin: '0 10px' }}/>
                <HeartDoodle style={{ display: 'inline-block', margin: '0 10px' }}/>
                <StarDoodle style={{ display: 'inline-block', margin: '0 10px' }}/>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '30px',
        marginTop: '40px'
      }}>
        <div style={{
          background: 'white',
          display: 'inline-block',
          padding: '15px 30px',
          borderRadius: '20px',
          border: '3px solid #333',
          boxShadow: '4px 4px 0 #9B59B6'
        }}>
          <p style={{
            fontFamily: "'Indie Flower', cursive",
            fontSize: '1.2rem',
            color: '#666',
            margin: 0
          }}>
            Made with 💕 by Sansa & Friend • 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
