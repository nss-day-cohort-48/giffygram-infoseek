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
        <div class="post"> 
        <h2>${postObject.title}</h2>
        <img src="${postObject.gifUrl}" alt="${postObject.discription}"/>
        posted by ${foundUser.name} on ${postObject.timestamp}
        </div>
        `
    return postHTML
}