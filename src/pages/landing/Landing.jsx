import './Landing.scss'
import { LoginButton } from './components/login-button/LoginButton'

export const Landing = () => {
  return (
    <>
      <section className="landing-container">
        <div className="header-container">
          <div className="nav-container">
            <img
              className="logo"
              src="https://img.freepik.com/free-vector/video-game-controls-neon-style-brick-wall_24908-58916.jpg?w=740&t=st=1714157158~exp=1714157758~hmac=ba3c7319cd3c474dac0ed7d93b143d78b6db633459121d5e450867937ae0d352"
              alt="Controller"
            />
            <LoginButton />
          </div>
          <div className="title-container">
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>
        <div className="details">
          <img
            className="details-img"
            src="https://img.freepik.com/free-vector/video-game-controls-neon-style-brick-wall_24908-58916.jpg?w=740&t=st=1714157158~exp=1714157758~hmac=ba3c7319cd3c474dac0ed7d93b143d78b6db633459121d5e450867937ae0d352"
          ></img>
          <div>
            <h1>Feature Title</h1>
            <p>Feature Description</p>
          </div>
        </div>
        <div className="details">
          <div>
            <h1>Feature Title</h1>
            <p className="feature-desc">Feature Description</p>
          </div>
          <img
            className="details-img"
            src="https://img.freepik.com/free-vector/video-game-controls-neon-style-brick-wall_24908-58916.jpg?w=740&t=st=1714157158~exp=1714157758~hmac=ba3c7319cd3c474dac0ed7d93b143d78b6db633459121d5e450867937ae0d352"
          ></img>
        </div>
        <div className="details3">
          <img
            className="details3-img"
            src="https://img.freepik.com/free-vector/video-game-controls-neon-style-brick-wall_24908-58916.jpg?w=740&t=st=1714157158~exp=1714157758~hmac=ba3c7319cd3c474dac0ed7d93b143d78b6db633459121d5e450867937ae0d352"
          ></img>
          <div className="details3-button">
            <p>Call To Action</p>
            <LoginButton />
          </div>
        </div>
        <footer>
          <div className="footer-container">
            <p>Github</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </footer>
      </section>
    </>
  )
}
