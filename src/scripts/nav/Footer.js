import { getUsers, setChosenUser, setChosenYear, getFilters, setDisplayFavorites, setdisplayFollowing, getFollows } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const Footer = () => {
    const currentUser = parseInt(localStorage.getItem("gg_user")) 
    const users = getUsers()
    const follows = getFollows()
    const userFollows = follows.filter(follow => follow.userId === currentUser)
    let followedUsers = []
    for (const follow of userFollows) {
        for (const user of users) {
            if (user.id === follow.followingId) {
                followedUsers.push(user)
            }
        }
    }
    const filters = getFilters()
    
    let years = ""
    for (let i = 2017; i <= 2021; i++) {
        if (filters.chosenYear === i) {
            years += `<option value="${i}" selected="selected">${i}</option>`
        } else {
            years += `<option value="${i}">${i}</option>`
        }
    }
    
    let showOnlyFavorites = ""
    if (filters.displayFavorites === false) {
        showOnlyFavorites = `<input id="showOnlyFavorites" type="checkbox"/>`
    } else {
        showOnlyFavorites = `<input id="showOnlyFavorites" type="checkbox" checked="checked"/>`
    }

    let showEveryone = ""
    if (filters.displayFollowing === false) {
            showEveryone = `<option value="allUsers" selected="selected">Everyone</option>`
        } else {
            showEveryone = `<option value="allUsers">Everyone</option>`
        }

    return `
    <footer class="footer">
        <div class="footer__item">
            Posts since
            <select id="yearSelection">
                ${years}
                </select>
            </select>
            <span id="postCount"></span>
        </div>
        <div class="footer__item">
            Posts by user
            <select id="userSelection" >
            <option value="following">Following</option>
            ${followedUsers.map(u => {
                if (filters.chosenUser === u.id) {
                    return `<option value="user--${u.id}" selected="selected">${u.name}</option>`
                } else {
                    return `<option value="user--${u.id}">${u.name}</option>`
                }
            }).join("")}
            ${showEveryone}
            </select>
        </div>
        <div class="footer__item">
            Show only favorites
            ${showOnlyFavorites}
        </div>
    </footer>
    `
}

applicationElement.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "yearSelection") {
            const dropdown = document.querySelector("select[id='yearSelection']")
            const year = dropdown.options[dropdown.selectedIndex].value
            setChosenYear(parseInt(year))
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

applicationElement.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "userSelection") {
            const dropdown = document.querySelector("select[id='userSelection']")
            const user = dropdown.options[dropdown.selectedIndex].value
            if (user === "allUsers") {
                setdisplayFollowing(false)
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            } else if (user.startsWith("user--")) {
                const [, userId] = event.target.value.split("--")
                setChosenUser(parseInt(userId))
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            } else {
                setdisplayFollowing(true)
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        }
    }
)

applicationElement.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "showOnlyFavorites") {
            const filters = getFilters()
            const displayFavorites = filters.displayFavorites
            if (displayFavorites) {
                setDisplayFavorites(false)
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            } else {
                setDisplayFavorites(true)
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        }
    }
)