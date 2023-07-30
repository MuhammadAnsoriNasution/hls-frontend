import { HomeLazy } from "./PageSplit";

const MainStack = {
    home: {
        path: '/',
        element: <HomeLazy />
    }
}

const routes = [
    MainStack.home
]

export default routes