export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        
        <div className="hero-badge">
          🕊️ EMPOWERING LIVES SINCE 2019
        </div>

        <h1>
          New Wings for <br/>
          <span className="highlight">Every Child.</span> <br/>
          Every Dream.
        </h1>
        <p className="hero-desc">
          NayePankh Foundation provides underprivileged youth with education, 
          mentorship, and opportunity — because potential knows no boundary, only circumstance.
        </p>

        <div className="hero-buttons">
          <a href="#donate" className="btn-primary">Join Us ➔</a>
          <a href="#programs" className="btn-secondary">Our Programs</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h2>12,000<span>+</span></h2>
            <p>Children Reached</p>
          </div>
          <div className="stat">
            <h2>35<span>+</span></h2>
            <p>Cities</p>
          </div>
          <div className="stat">
            <h2>500<span>+</span></h2>
            <p>Volunteers</p>
          </div>
        </div>

      </div>
    </section>
  )
}