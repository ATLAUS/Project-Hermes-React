import { LoginButton } from '../../components'
import { LogoutButton } from '../../components'
import { useAuth0 } from '@auth0/auth0-react'
import './Landing.scss'

export const Landing = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <section className="landing-container">
        <header className="hero-container">
          <nav className="nav-bar">
            <img
              className="logo"
              src="https://i.imgur.com/XZEt6js.png"
              alt="Globe icon with branding."
              style={{ height: '160%' }}
            />
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </nav>
          <div className="title-container">
            <span className="spacer"></span>
            <div className="title-tag-container">
              <h1 className="title">
                PROJECT
                <br />
                HERMES
              </h1>
              <h2 className="tag">- FIND YOUR DUO -</h2>
            </div>
            <div className="description-container">
              <p>
                Looking to find someone to help finish a quest? Wanna run some
                ranked? Project Hermes has you covered.
              </p>
            </div>
          </div>
        </header>
        <div className="info-container">
          <div className="display-container">
            <img
              src="https://i.imgur.com/dQ2Ep9s.png"
              alt="Icon illustrating connected users."
              className="snippet-icon"
            />
          </div>
          <div className="dialog-container">
            <h2>Go beyond just games.</h2>
            <p>
              Get matched with a liked minded individual to help rank up, beat
              the boss, or make a new friend.
            </p>
          </div>
        </div>
        <div className="info-container">
          <div className="dialog-container">
            <h2>Communicate with ease.</h2>
            <p>Once matched, communicate via our low-latency text chat.</p>
          </div>
          <div className="display-container">
            <img
              src="https://i.imgur.com/EqW7iXj.png"
              alt="Messenger icon."
              className="snippet-icon"
            />
          </div>
        </div>
        <div className="info-container">
          <div className="display-container">
            <img
              src="https://i.imgur.com/l9wtDpo.png"
              alt="Icon illustrating rematch functionality."
              className="snippet-icon"
            />
          </div>
          <div className="dialog-container">
            <h2>Not the vibes?</h2>
            <p>
              No worries! Rematch with ease or leave the party to find a new
              partner.
            </p>
          </div>
        </div>
        <footer className="footer-container">
          <div className="footer">
            <div className="list-container">
              <div className="accents">
                <span className="red flair"></span>
                <span className="yellow flair"></span>
                <span className="green flair"></span>
                <span className="blue flair"></span>
              </div>
              <ul className="links-list">
                <li>ATLAUS</li>
                <li>AARON</li>
                <li>AXEL</li>
                <li>DANIEL</li>
                <li>SENAI</li>
              </ul>
            </div>
            <div className="footer-logo-container">
              <img
                className="logo"
                src="https://i.imgur.com/pbsxqJi.png"
                alt="Globe icon with branding."
              />
              <p>&copy; 2024 ATLAUS</p>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}
