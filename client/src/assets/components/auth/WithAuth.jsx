import Login from "../../views/Login";

export const withAuth = (Component) => {
    const AuthRoute = () => {
        let isAuth = JSON.parse(localStorage.getItem("token"));
      if (isAuth) {
        return <Component />;
      } else {
        return <Login />;
      }
    };
  
    return AuthRoute;
  };