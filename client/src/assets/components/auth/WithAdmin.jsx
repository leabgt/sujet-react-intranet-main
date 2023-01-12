import Home from "../../views/Home";
import * as Storage from "../../services/storageService";

export const withAdmin = (Component) => {
  const AuthAdminRoute = () => {
    let isAuth = Storage.get("token");
    let isAdmin = Storage.getJSON("user").isAdmin;
    if (isAdmin && isAuth) {
      return <Component />;
    } else {
      return <Home />;
    }
  };

  return AuthAdminRoute;
};
