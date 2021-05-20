import { getLikes, getUsers } from "../data/provider.js"

// function that returns html for post



export const Post = (postObject) => {

    const users = getUsers()
    let foundUser = users.find(userObject => {
        if (userObject.id === postObject.userId){
           return userObject
        }
    })

    const timestamp = postObject.timestamp

    const likes = getLikes()
    const likedPost = likes.find(likeObj => {
        if (postOject.id === likeObj.postId) {
            return likeObj
        }
    })

    if (likedPost === undefined) {
        
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
                <div>
                    <img id="favoritePost--${postObject.id}" class="actionIcon" src="/images/favorite-star-blank.svg"
                </div>
            </div>
        </section>
        `
    return postHTML
}