import { getUsers, setChosenUser, setChosenYear, getFeed, setDisplayFavorites } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const Footer = () => {
    const users = getUsers()
    const feed = getFeed()
    
    let years = ""
    for (let i = 2017; i <= 2021; i++) {
        if (feed.chosenYear === i) {
            years += `<option value="${i}" selected="selected">${i}</option>`
        } else {
            years += `<option value="${i}">${i}</option>`
        }
    }
    
    let showOnlyFavorites = ""
    if (feed.displayFavorites === false) {
        showOnlyFavorites = `<input id="showOnlyFavorites" type="checkbox"/>`
    } else {
        showOnlyFavorites = `<input id="showOnlyFavorites" type="checkbox" checked="checked"/>`
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
            <option value="default">Everyone</option>
            ${users.map(u => {
                if (feed.chosenUser === u.id) {
                    return `<option value="user--${u.id}" selected="selected">${u.name}</option>`
                } else {
                    return `<option value="user--${u.id}">${u.name}</option>`
                }
            }).join("")}
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
            const [, userId] = event.target.value.split("--")
            setChosenUser(parseInt(userId))
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

applicationElement.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "showOnlyFavorites") {
            const feed = getFeed()
            const displayFavorites = feed.displayFavorites
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