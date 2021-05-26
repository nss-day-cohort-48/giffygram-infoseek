import { getMessages, setDisplayMessages, setDisplayMessageForm, resetFeed, resetFilters, getUsers, setDisplayUserProfile } from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram")

export const NavBar = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    const messages = getMessages()
    return `
    <nav class="navigation">
        <div class="navigation__item navigation__icon">
            <img src="./images/pb.png" alt="Giffygram icon" id="logo">
        </div>
        <div class="navigation__item navigation__name">
            Giffygram
        </div>
        <div class="navigation__item user__search">
        <input type="text" placeholder="Search users" id="userSearch" />
        </div>
        <div class="search__icon">
        <img id="search__icon" src="../../images/search_icon.png" alt="searchIcon">
        </div>
        <div class="navigation__item navigation__message">
            <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
            <div class="notification__count" id="unreadIcon">
                ${messages.filter(message => message.recipientId === user && message.read === false).length}
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
        resetFeed()
        resetFilters()
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "search__icon") {       
        const searchEntry = document.querySelector("input[id='userSearch']").value.toLowerCase()
        const users = getUsers()
        const foundUser = users.find(user => user.name.toLowerCase().includes(searchEntry))
        if (foundUser) {
            resetFeed()
            setDisplayUserProfile(foundUser.id)
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        } else {
            window.alert("User not found")
        }
        }
    });

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessageIcon") {
        resetFeed()
        setDisplayMessageForm(true)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "unreadIcon") {
        resetFeed()
        setDisplayMessages(true)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout") {
        resetFeed()
        resetFilters()
        localStorage.removeItem('gg_user')
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})