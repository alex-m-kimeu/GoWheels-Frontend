import { Home } from "./pages/Home/Home";

const routes = [
    {
        path: "/",
        Element: Home,
        isAuthenticated: false,
        layout: "Main",
    }
];

export default routes;