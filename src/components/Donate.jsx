import { useState } from 'react'

export default function Donate() {
  const [showModal, setShowModal] = useState(false)
  return (
    <section id="donate" className="donate-section">
      <div className="donate-card">
        <h6 className="step-text">TAKE THE FIRST STEP</h6>
        <h1>Be the reason a child <br/> <br /><span className="highlight">dares to dream.</span></h1>
        <br />
        <p className="donate-desc">
          Whether you volunteer your time, contribute funds, or spread the word — 
          your support gives children the wings to soar.
        </p>
        <br />
        <div className="donate-buttons">
          <a href="#donate" className="btn-primary">Join Us ➔</a>
          <br /><br />
          <button onClick={() => setShowModal(true)} className="btn-secondary">Volunteer</button>
        </div>
        <br />
        <div className="donate-features">
          <h5>✓ 80G Tax Exempt</h5>
          <h5>✓ FCRA Certified</h5>
          <h5>✓ 100% Transparent</h5>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Join as a Volunteer</h3>
            <p>Fill out your details and our team will get back to you shortly.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Application Submitted!"); setShowModal(false); }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <button type="submit" className="btn-primary">Submit Application</button>
            </form>
            <button className="close-modal" onClick={() => setShowModal(false)}>✕ Close</button>
          </div>
        </div>
      )}
      
    </section>
  )
}