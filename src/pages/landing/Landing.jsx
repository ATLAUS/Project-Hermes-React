import { useAuth0 } from "@auth0/auth0-react";
import "./Landing.scss";
import { LoginButton } from "./components/login-button/LoginButton";
import { LogoutButton } from "./components/logout-button/LogoutButton";

export const Landing = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  const testBackendRoute = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "http://localhost:3000/",
        },
      });

      const customUserHeader = {
        "X-User-Info": JSON.stringify({
          email: user.email,
          nickname: user.nickname,
          sub: user.sub,
        }),
      };

      const testEndpoint = "http://localhost:3000/test";

      const testResponse = await fetch(testEndpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          ...customUserHeader,
        },
      });

      const response = await testResponse.json();

      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
  );
};
