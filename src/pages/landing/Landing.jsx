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
              src="src/pages/landing/stock video images/sean-stone-dkb3wApu5XQ-unsplash.jpeg"
              alt="Controller"
            />
            <LoginButton />
          </div>
          <div className="title-container">
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>
        <div className="details-1"></div>
      </section>
    </>
  );
};
