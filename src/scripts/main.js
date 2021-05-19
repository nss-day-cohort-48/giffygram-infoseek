import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js";

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm()
    }
}

renderApp()