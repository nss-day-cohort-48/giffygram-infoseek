import { getLikes, getPosts, getUsers, setDateFilter, setUserFilter, getFilters } from "../data/provider.js"
import { PostList } from "../feed/PostList.js";

const applicationElement = document.querySelector(".giffygram")

export const Footer = () => {
    const posts = getPosts()
    const users = getUsers()
    const likes = getLikes()

    return `
    <footer class="footer">
        <div class="footer__item">
            Posts since
            <select id="yearSelection" ></select>
            <span id="postCount">6</span>
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
            const date = event.target.value
            setDateFilter(date)

            PostList()
        }
    }
)

applicationElement.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "userSelection") {
            const [, userId] = event.target.value.split("--")
            setUserFilter(parseInt(userId))

            PostList()
        }
    }
)