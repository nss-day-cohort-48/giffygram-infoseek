import { getFilters, getPosts, getLikes, getFollows } from "../data/provider.js";
import { Post } from "./Post.js";

export const PostList = () => {
    
    const user = parseInt(localStorage.getItem("gg_user"))
    const posts = getPosts()
    const likes = getLikes()
    const follows = getFollows()
    const filters = getFilters()
    const displayFollowing = filters.displayFollowing
    const chosenUser = filters.chosenUser
    const displayFavorites = filters.displayFavorites
    const chosenYear = filters.chosenYear 
    const usersFollows = follows.filter(follow => follow.userId === user)

    const sortedPosts = posts.sort((a,b) => b.timestamp - a.timestamp)
    let feedHTML
    
    if (displayFollowing === false) {

        feedHTML = `${sortedPosts.map(Post).join("")}`

    } else if (chosenYear) {

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

    } else if (displayFollowing === true && usersFollows.length > 0) {
        //defining an array that will store all the posts by the user and the users they follow
        const followingPosts = []
        //adding user's posts to the followingPosts array
        for (const post of posts) {
            if (post.userId === user) {
                followingPosts.push(post)
            }
        }
        //finding all of the follows the user has and storing them in userFollowing
        const userFollowing = follows.filter(follow => user === follow.userId)
        //adding the posts of all the users that the user follows to the followingPosts array
        for (const followObj of userFollowing) {
            for (const post of posts) {
                if (post.userId === followObj.followingId) {
                    followingPosts.push(post)
                }
            }
        }
        const sortedFollowingPosts = followingPosts.sort((a,b) => b.timestamp - a.timestamp)
        feedHTML = `${sortedFollowingPosts.map(Post).join("")}`

    } else {
        feedHTML = `<div class="noFollowedUsers">You aren't following anyone.  Find some friends to follow in the "Everyone" post feed.</div>`
    }

return feedHTML

}