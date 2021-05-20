import { MessageForm } from "../message/MessageForm.js";
const applicationElement = document.querySelector(".giffygram")

export const NavBar = () => {
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
            <div class="notification__count">
                0
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
        `
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.class === "notification__count") {
        applicationElement.innerHTML = `
        ${NavBar()}
        `
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout") {
        
    }
})