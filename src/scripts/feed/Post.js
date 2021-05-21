import { deleteLike, deletePost, getCurrentUser, getLikes, getUsers, sendLike } from "../data/provider.js"
const applicationElement = document.querySelector(".giffygram")


// function that returns html for post
export const Post = (postObject) => {

    const users = getUsers()
    let foundUser = users.find(userObject => {
        if (userObject.id === postObject.userId) {
            return userObject
        }
    })

    const timestamp = postObject.timestamp

    let likedPost = ""
    const likes = getLikes()
    const foundLike = likes.find(likeObj => postObject.id === likeObj.postId)
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
    const currentUser = getCurrentUser()
    if (currentUser === postObject.userId) {
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
        Posted by 
        <a href="#" class="profileLink" id="profile--1">${foundUser.name}</a>
        on ${new Date(timestamp).toLocaleDateString("en-US")}
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
        const foundLike = likes.find(likeObj => postId === likeObj.postId)

        if (foundLike) {
            deleteLike(foundLike.id)
        } else {
            const currentUser = getCurrentUser()
            const sendToAPI = {
                postId: postId,
                userId: currentUser
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