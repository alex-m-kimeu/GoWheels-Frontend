import { useEffect } from "react";
import { useNavigate } from "react-router";

const AuthWrapper = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/sign-in");
    }
  }, [isAuthenticated, navigate]);

  return <div>{children}</div>;
};

export default AuthWrapper;