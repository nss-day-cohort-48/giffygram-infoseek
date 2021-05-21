import { getLikes, getPosts, getUsers } from "../data/provider.js"


const posts = getPosts()
const users = getUsers()
const likes = getLikes()

users.filter(u => {
    if (u.id === posts.filter(p => {
        return p.userId
    }).userId) {
        return posts
    }
})

export const Footer = () => {
    return `
    <footer class="footer">
        <div class="footer__item">
            Posts since
            <select id="yearSelection" ></select>
            <span id="postCount">6</span>
        </div>
        <div class="footer__item">
            Posts by user
            <select id="userSelection" ></select>
        </div>
        <div class="footer__item">
            Show only favorites
            <input id="showOnlyFavorites" type="checkbox" />
        </div>
    </footer>
    `
}