import { getPosts } from "../data/provider.js";
import { NavBar } from "../nav/NavBar.js";
import { Post } from "./Post.js";
import { PostEntry } from "./PostEntry.js";

const applicationElement = document.querySelector(".giffygram")

export const PostList = () => {
    const posts = getPosts()

    return `
    ${posts.map(Post).join("")}
    `

}


applicationElement.addEventListener(
    "click",
    event => {
        if (event.target.id === "miniMode") {
            applicationElement.innerHTML = `
            ${NavBar()}
            <div class="giffygram__feed">
                ${PostEntry()}
                ${PostList()}
            </div>
        `
        }
    }
)