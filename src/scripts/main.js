import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js";
import { fetchFollows, fetchLikes, fetchMessages, fetchPosts, fetchUsers, getCurrentUser, setCurrentUser } from "./data/provider.js";

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
                    setCurrentUser(user)
                    const currentUser = getCurrentUser()
                    applicationElement.innerHTML = GiffyGram()
                } else {
                    applicationElement.innerHTML = LoginForm()
                }
            }
        )
}

renderApp()

applicationElement.addEventListener("stateChanged",
    customEvent => {renderApp()}
)
