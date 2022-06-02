import Chat from "../components/Chat";
import Home from "../components/Home";
import Login from "../components/Login";
import { routes } from "./consts";

export const publicRoutes = [
    { href: routes.HOME_ROUTE, component: Home },
    { href: routes.LOGIN_ROUTE, component: Login }
]
export const privateRoutes = [
    { href: routes.CHAT_ROUTE, component: Chat },
]