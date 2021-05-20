import { getUsers } from "../data/provider.js"

// function that returns html for post



export const Post = (postObject) => {

    const users = getUsers()
    let foundUser = users.find(userObject => {
        if (userObject.id === postObject.userId){
           return userObject
        }
    })

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
                on ${postObject.timestamp}
            </div>
        </section>
        `
    return postHTML
}