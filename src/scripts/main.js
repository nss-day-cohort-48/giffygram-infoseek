import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js";
import { fetchFollows, fetchLikes, fetchMessages, fetchPosts, fetchUsers, getRegisterUser } from "./data/provider.js";
import { Register } from "./auth/Register.js";

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {

    fetchUsers()
        .then(fetchPosts)
        .then(fetchLikes)
        .then(fetchMessages)
        .then(fetchFollows)
        .then(
            () => {

                const user = parseInt(localStorage.getItem("gg_user"))
                
                if (user) {
                    applicationElement.innerHTML = GiffyGram()
                } else {
                    const registerStateChange = getRegisterUser()
                    if (registerStateChange === true) {
                        applicationElement.innerHTML = Register()
                    } else {
                        applicationElement.innerHTML = LoginForm()
                    }
                }
            }
        )
}

renderApp()

applicationElement.addEventListener(
    "stateChanged",
    customEvent => {renderApp()}
)
