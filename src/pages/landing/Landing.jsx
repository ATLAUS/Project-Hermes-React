import { LoginButton } from '../../components'
import { LogoutButton } from '../../components'
import { useAuth0 } from '@auth0/auth0-react'
import './Landing.scss'

export const Landing = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <section className="landing-container">
        <div className="hero-container">
          <nav className="nav-bar">
            <img
              className="logo"
              src="https://i.imgur.com/pbsxqJi.png"
              alt="Globe icon with branding."
            />
            {/* TODO Style the buttons. */}
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </nav>
          <div className="title-container">
            <h1 className="title">
              PROJECT
              <br />
              HERMES
            </h1>
          </div>
        </div>
        <div className="info-container">
          <div className="display-container">
            {/* Product snippet goes here. */}
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
            {/* Product snippet goes here. */}
          </div>
        </div>
        <div className="info-container">
          <div className="display-container">
            {/* Product snippet goes here. */}
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
          <ul className="links-list">
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </footer>
      </section>
    </>
  )
}
