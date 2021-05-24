import { getFeed, getPosts, getUsers, getLikes, getCurrentUser } from "../data/provider.js";
import { Post } from "./Post.js";


export const PostList = () => {
    const users = getUsers()
    const posts = getPosts()
    const likes = getLikes()
    const currentUser = getCurrentUser()
    const feed = getFeed()
    let chosenUser = feed.chosenUser
    let displayFavorites = feed.displayFavorites
    let chosenYear = feed.chosenYear
    let displayMessages = feed.displayMessages 

    let feedHTML = `
    <div class="giffygram__feed">
    <div class="miniMode" id="miniMode">Have a gif to post?</div>
    ${
        posts.map(Post).join("")
    }
    </div>
    `
    if (chosenUser) {
        
        const userPosts = posts.filter(post => post.userId === chosenUser)
        feedHTML = `
        <div class="giffygram__feed">
    <div class="miniMode" id="miniMode">Have a gif to post?</div>
    ${
        userPosts.map(Post).join("")
    }
    </div>
        `
    }

    if (displayFavorites === true) {
    let likedPosts = []
    const userLikes = likes.filter(like => currentUser === like.userId)
    for (const userLike of userLikes) {
        for (const post of posts) {
            if (post.id === userLike.postId) {
                likedPosts.push(post)
            }
        }
    }
    
    feedHTML = `
    <div class="giffygram__feed">
    <div class="miniMode" id="miniMode">Have a gif to post?</div>
    ${
        likedPosts.map(Post).join("")
    }
    </div>
    `
}

return feedHTML

}