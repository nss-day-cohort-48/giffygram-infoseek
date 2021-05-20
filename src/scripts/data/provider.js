const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    users: [],
    posts: [],
    likes: [],
    messages: [],
    follows: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}

export const getUsers = () => {
    return [...applicationState.users]
}

export const getPosts = () => {
    return [...applicationState.posts]
}

export const getLikes = () => {
    return [...applicationState.likes]
}

export const getMessages = () => {
    return [...applicationState.messages]
}

export const getFollows = () => {
    return [...applicationState.follows]
}

export const fetchUsers = () => {
    return fetch(`${apiURL}}/users`) //accessing giffygram.json (whose address is stored in the apiURL const defined at the top of the page) /users
        .then(response => response.json())
        .then(
            (users) => {
                // Store the external state in application state
                applicationState.users = users
            }
        )
}

export const fetchPosts = () => {
    return fetch(`${apiURURL}/posts`)
        .then(response => response.json())
        .then(
            (posts) => {
                applicationState.posts = posts
            }
        )
}

export const fetchLikes = () => {
    return fetch(`${apiURURL}/likes`)
        .then(response => response.json())
        .then(
            (likes) => {
                applicationState.likes = likes
            }
        )
}

export const fetchMessages = () => {
    return fetch(`${apiURURL}/messages`)
        .then(response => response.json())
        .then(
            (messages) => {
                applicationState.messages = messages
            }
        )
}

export const fetchFollows = () => {
    return fetch(`${apiURURL}/follows`)
        .then(response => response.json())
        .then(
            (follows) => {
                applicationState.follows = follows
            }
        )
}