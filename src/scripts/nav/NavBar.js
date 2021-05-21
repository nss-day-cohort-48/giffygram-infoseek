import { getCurrentUser, getMessages } from "../data/provider.js";
import { PostList } from "../feed/PostList.js";
import { MessageForm } from "../message/MessageForm.js";
const applicationElement = document.querySelector(".giffygram")

export const NavBar = () => {
    const current = getCurrentUser()
    const messages = getMessages()
    return `
    <nav class="navigation">
        <div class="navigation__item navigation__icon">
            <img src="./images/pb.png" alt="Giffygram icon" id="logo">
        </div>
        <div class="navigation__item navigation__name">
            Giffygram
        </div>
        <div class="navigation__item navigation__message">
            <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
            <div class="notification__count" id="unreadIcon">
                ${messages.filter(message => message.recipientId === current && message.read === false).length}
            </div>
        </div>
        <div class="navigation__item navigation__logout">
            <button id="logout" class="fakeLink">Logout</button>
        </div>
    </nav>
    `
}

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logo") {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessageIcon") {
        applicationElement.innerHTML = `
        ${NavBar()}
        ${MessageForm()}
        ${PostList()}
        `
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "unreadIcon") {
        applicationElement.innerHTML = `
        ${NavBar()}
        `
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout") {
        localStorage.removeItem('gg_user')
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})