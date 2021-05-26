import { getFeed, getPosts,getLikes } from "../data/provider.js";
import { Post } from "./Post.js";

export const PostList = () => {
    
    const user = parseInt(localStorage.getItem("gg_user"))
    const posts = getPosts()
    const likes = getLikes()
    const feed = getFeed()
    const chosenUser = feed.chosenUser
    const displayFavorites = feed.displayFavorites
    const chosenYear = feed.chosenYear 

    const sortedPosts = posts.sort((a,b) => b.timestamp - a.timestamp)
    let feedHTML
    
    if (chosenYear) {

        const yearPosts = sortedPosts.filter(post => {
            const date = new Date(post.timestamp)
            const postYear = date.getFullYear()
            if (postYear >= chosenYear) {
                return post
            }
        })
        feedHTML = `${yearPosts.map(Post).join("")}`
    
    } else if (chosenUser) {   

        const userPosts = sortedPosts.filter(post => post.userId === chosenUser)
        feedHTML = `${userPosts.map(Post).join("")}`

    } else if (displayFavorites) {

        const likedPosts = []
        const userLikes = likes.filter(like => user === like.userId)
        for (const userLike of userLikes) {
            for (const post of posts) {
                if (post.id === userLike.postId) {
                    likedPosts.push(post)
                }
            }
        }
        const sortedLikedPosts = likedPosts.sort((a,b) => b.timestamp - a.timestamp)
        feedHTML = `${sortedLikedPosts.map(Post).join("")}`

    } else {

        feedHTML = `${sortedPosts.map(Post).join("")}`

    }

return feedHTML

}