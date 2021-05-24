import { getFeed, getPosts, getUsers, getLikes, getCurrentUser } from "../data/provider.js";
import { NavBar } from "../nav/NavBar.js";
import { Post } from "./Post.js";
import { PostEntry } from "./PostEntry.js";

const applicationElement = document.querySelector(".giffygram")

export const PostList = () => {
    const users = getUsers()
    const posts = getPosts()
    const likes = getLikes()
    const currentUser = getCurrentUser()
    const feed = getFeed()
    const chosenUser = feed.chosenUser
    const displayFavorites = feed.displayFavorites
    const chosenYear = feed.chosenYear
    const displayMessages = feed.displayMessages 

    const sortedPosts = posts.sort((a,b) => b.timestamp - a.timestamp)
    let feedHTML = `${sortedPosts.map(Post).join("")}`
    
    if (chosenYear !== null) {
        const yearPosts = posts.filter(post => {
            const date = new Date(post.timestamp)
            const postYear = date.getFullYear()
            if (postYear >= chosenYear) {
                return post
            }
        })
        const sortedYearPosts = yearPosts.sort((a,b) => b.timestamp - a.timestamp)
        feedHTML = `${yearPosts.map(Post).join("")}`
    }
    
    if (chosenUser) {      
        const userPosts = posts.filter(post => post.userId === chosenUser)
        const sortedUserPosts = userPosts.sort((a,b) => b.timestamp - a.timestamp)
        feedHTML = `${sortedUserPosts.map(Post).join("")}`
    }

    if (displayFavorites === true) {
    const likedPosts = []
    const userLikes = likes.filter(like => currentUser === like.userId)
    for (const userLike of userLikes) {
        for (const post of posts) {
            if (post.id === userLike.postId) {
                likedPosts.push(post)
            }
        }
    }
    const sortedLikedPosts = likedPosts.sort((a,b) => b.timestamp - a.timestamp)
    feedHTML = `${likedPosts.map(Post).join("")}`
}

return feedHTML

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