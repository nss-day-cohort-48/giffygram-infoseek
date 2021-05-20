import { getUsers, getPosts } from "./data/provider.js"

const users = getUsers
const posts = getPosts

// function that returns html for post



export const post = () => {

    let post = posts.map(post => post.id);
    let user = users.map(user => user.name);
   
   postHTML = `
        <div class="post"> 
        <h2>${post.title}</h2>
        <img src="${gifUrl}" alt="${discription}"/>
        posted by ${user} on ${timestamp}
        </div>
        `
    return postHTML
}