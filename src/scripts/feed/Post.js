import { deleteLike, deletePost, getLikes, getUsers, sendLike, resetFeed, setDisplayUserProfile } from "../data/provider.js"
const applicationElement = document.querySelector(".giffygram")


// function that returns html for post
export const Post = (postObject) => {

    const user = parseInt(localStorage.getItem("gg_user"))
    const users = getUsers()
    let postUser = users.find(user => user.id === postObject.userId)

    const timestamp = postObject.timestamp

    let likedPost = ""
    const likes = getLikes()
    const foundLike = likes.find(like => postObject.id === like.postId && like.userId === user)
    if (foundLike) {
        likedPost = `<div>
        <img id="favoritePost--${postObject.id}" class="actionIcon" src="/images/favorite-star-yellow.svg">
        </div>`
    } else {
        likedPost = `<div>
        <img id="favoritePost--${postObject.id}" class="actionIcon" src="/images/favorite-star-blank.svg">
        </div>`
    }

    let deletePost = ""
    if (user === postObject.userId) {
        deletePost = `<div>
        <img id="blockPost--${postObject.id}" class="actionIcon" src="/images/block.svg">
        </div>`
    }


    let postHTML = `
        <section class="post"> 
        <h2 class="post__title">${postObject.title}</h2>
        <img class="post__image" src="${postObject.gifURL}" alt="${postObject.description}"/>
        <div class="post__description">
        ${postObject.description}
        </div>
        <div class="post__tagline">
        Posted by <span class="profileLink" id="profile--${postUser.id}">${postUser.name}</span> on ${new Date(timestamp).toLocaleDateString("en-US")}
        </div>
        <div class="post__actions">
        ${likedPost}
        ${deletePost}
        </div>
        </section>
        `
    
    return postHTML
}

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("favoritePost--")) {

        const [, postIdString] = clickEvent.target.id.split("--")
        const postId = parseInt(postIdString)
        const likes = getLikes()
        const user = parseInt(localStorage.getItem("gg_user"))
        const foundLike = likes.find(like => postId === like.postId && user === like.userId)

        if (foundLike) {
            
            deleteLike(foundLike.id)

        } else {

            const sendToAPI = {
                postId: postId,
                userId: user
            }
            sendLike(sendToAPI)
        }
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("blockPost--")) {
        const [, postIdString] = clickEvent.target.id.split("--")
        const postId = parseInt(postIdString)
        deletePost(postId)
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("profile--")) {
        const [, profileId] = clickEvent.target.id.split("--")
        resetFeed()
        setDisplayUserProfile(parseInt(profileId))
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})