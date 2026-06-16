import logo from '../assets/logo.png'

export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      {/* Grouped Logo and Custom Header */}
      <div className="nav-brand">
        <img src={logo} alt="NayePankh Foundation Logo" className="navbar-logo" />
        <div className='header'>
          <h2>NayePankh</h2>
          <h3>UP GOVERNMENT, 80G & 12A Registered NGO</h3>
        </div>
      </div>

      <div className="nav-links">
        <a href="#home"> Home</a>
        <a href="#about">About Us</a>
        <a href="#programs">Our Programs</a>
        
        {/* Real Toggle Switch matching the design */}
        <label className="theme-switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          <span className="slider">
            <span className="icon">{isDarkMode ? '🌙' : '☀️'}</span>
          </span>
        </label>

        <a href="#donate" className="nav-donate-btn">Donate Now</a>
      </div>
    </nav>
  )
}