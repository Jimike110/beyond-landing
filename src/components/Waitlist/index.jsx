import React, { useState } from 'react';
import './index.css';
import supabase from '../../supabaseClient'; 
import { coin3, coin4, paper_plane, screenshot } from '../../imports';

const Waitlist = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistPhone, setWaitlistPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email: waitlistEmail, name: waitlistName, phone: waitlistPhone }])
      .select();

    if (error) {
      console.error('Error inserting into waitlist:', error.message);
      setMessage("❌ Something went wrong. Please try again.");
      setIsError(true);
      return;
    }

    console.log('Inserted:', data);

    setMessage("✅ You’ve joined the waitlist successfully! We’ll notify you when we launch.");
    setIsError(false);
      setTimeout(() => {
  setMessage('');
}, 6000);

    // Clear inputs
    setWaitlistEmail('');
    setWaitlistName('');
    setWaitlistPhone('');
  };

  return (
    <section id='waitlist' className="waitlist-section-container">
      <div className="waitlist-section container">
        <div className="waitlist-content">
          <div className="waitlist-left">
            <h2>Beyond Finance</h2>
            <div className="waitlist-image-container">
              <img src={coin4} alt="Tether coin" className="floating-asset waitlist-coin-1" />
              <img src={screenshot} alt="Crypto transactions on phone" className="waitlist-phone-img" />
              <img src={paper_plane} alt="Paper plane" className="floating-asset paper-plane plane-1" />
              <img src={coin3} alt="Bitcoin coin" className="floating-asset waitlist-coin-2" />
            </div>
            <span className='waitlist-left-tagline-container'>
              <img src={paper_plane} alt="Paper plane" className="plane-2" />
              <p className="waitlist-left-tagline">Your gateway to financial freedom.</p>
            </span>
          </div>

          <div className="waitlist-right">
            <div className="waitlist-right-container">
              <svg className="waitlist-right-bg-lines" width="223" height="206" viewBox="0 0 223 206" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M111.5 2C129.223 37.3333 147.4 72 191 89.5C147.4 107 129.223 141.667 111.5 177C93.7773 141.667 75.6 107 32 89.5C75.6 72 93.7773 37.3333 111.5 2Z" stroke="white" strokeWidth="3" /></svg>
              <div className="status-pill">
                <div className="status-pill-dot"><div className="status-pill-inner-dot"></div></div>
                <span>Available before 2025 ends</span>
              </div>
              <p className='waitlist-description'>Be the first to know when we launch! Sign up below to secure your spot and get early access.</p>
              
              {/* Form */}
              <form onSubmit={handleWaitlistSubmit}>
                <input 
                  type="email" 
                  placeholder="Enter your mail to join the waitlist" 
                  value={waitlistEmail} 
                  onChange={(e) => setWaitlistEmail(e.target.value)} 
                  required 
                />
                <label>Are you a campus ambassador?</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  value={waitlistName} 
                  onChange={(e) => setWaitlistName(e.target.value)} 
                />
                <input 
                  type="tel" 
                  placeholder="Enter your whatsapp phone no." 
                  value={waitlistPhone} 
                  onChange={(e) => setWaitlistPhone(e.target.value)} 
                />
                <button type="submit" className="waitlist-submit-btn">Join the waitlist</button>
              </form>

              {/* Feedback Message */}
              {message && (
                <div className={`message ${isError ? 'error' : 'success'}`}>
                  {message}
                </div>
              )}

              {/* Social Proof */}
              <div className="social-proof">
                <div className="avatar-group">
                  <div className="avatar" style={{ backgroundColor: '#FFDDC2', color: '#854d0e' }}>J</div>
                  <div className="avatar" style={{ backgroundColor: '#C2F5FF', color: '#0e7490' }}>D</div>
                  <div className="avatar" style={{ backgroundColor: '#DDC2FF', color: '#5b21b6' }}>S</div>
                </div>
                <span>Join <strong>530+</strong> others on the waitlist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Waitlist;
