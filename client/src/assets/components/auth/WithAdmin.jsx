import Home from "../../views/Home";

export const withAdmin = (Component) => {
    const AuthAdminRoute = () => {
        let isAuth = JSON.parse(localStorage.getItem("token"));
        let isAdmin = JSON.parse(localStorage.getItem("user")).isAdmin;
      if (isAdmin && isAuth) {
        return <Component />;
      } else {
        return <Home />;
      }
    };
  
    return AuthAdminRoute;
  };