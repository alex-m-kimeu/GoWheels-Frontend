import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { Home } from "./pages/Home/Home";
import { Fleet } from "./pages/Fleet/Fleet";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Faq } from "./pages/FAQ/Faq";

const routes = [
    {
        path: "/signin",
        Element: SignIn,
        isAuthenticated: false,
        layout: "None",
    },
    {
        path: "/signup",
        Element: SignUp,
        isAuthenticated: false,
        layout: "None",
    },
    {
        path: "/fleet",
        Element: Fleet,
        isAuthenticated: false,
        layout: "Main",
    },
    {
        path: "/about",
        Element: About,
        isAuthenticated: false,
        layout: "Main",
    },
    {
        path: "/contact",
        Element: Contact,
        isAuthenticated: false,
        layout: "Main",
    },
    {
        path: "/faq",
        Element: Faq,
        isAuthenticated: false,
        layout: "Main",
    },
    {
        path: "/",
        Element: Home,
        isAuthenticated: false,
        layout: "Main",
    }
];

export default routes;