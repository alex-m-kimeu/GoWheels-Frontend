import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer";
import routes from './routes';
import AuthWrapper from "./AuthWrapper";

const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow">
      {children}
    </div>
    <Footer />
  </div>
);

export const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const { Element, path, isAuthenticated, layout } = route;
          const LayoutComponent = layout === "Main" ? MainLayout : React.Fragment;
          return (
            <Route
              exact
              key={index}
              path={path}
              element={
                <LayoutComponent>
                  {isAuthenticated && <AuthWrapper />}
                  <Element />
                </LayoutComponent>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}