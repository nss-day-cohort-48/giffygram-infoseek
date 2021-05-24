import { getLikes, getPosts, getUsers, setDateFilter, setChosenUser, getFeed, setDisplayFavorites } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const Footer = () => {
    const posts = getPosts()
    const users = getUsers()
    const likes = getLikes()

    return `
    <footer class="footer">
        <div class="footer__item">
            Posts since
            <select id="yearSelection">
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
                </select>
            </select>
            <span id="postCount"></span>
        </div>
        <div class="footer__item">
            Posts by user
            <select id="userSelection" >
            <option value="default">Select a user...</option>
            ${users.map(u => {
                return `<option value="user--${u.id}">${u.name}</option>`
            }).join("")}
            </select>
        </div>
        <div class="footer__item">
            Show only favorites
            <input id="showOnlyFavorites" type="checkbox" />
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
            setDateFilter(parseInt(year))
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