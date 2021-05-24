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

export const setCurrentUser = (id) => {
    return applicationState.currentUser = id
}

export const getCurrentUser = () => {
    return applicationState.currentUser
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
    return fetch(`${apiURL}/users`) //accessing giffygram.json (whose address is stored in the apiURL const defined at the top of the page) /users
        .then(response => response.json())
        .then(
            (users) => {
                // Store the external state in application state
                applicationState.users = users
            }
        )
}

export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(
            (posts) => {
                applicationState.posts = posts
            }
        )
}

export const fetchLikes = () => {
    return fetch(`${apiURL}/likes`)
        .then(response => response.json())
        .then(
            (likes) => {
                applicationState.likes = likes
            }
        )
}

export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
        .then(response => response.json())
        .then(
            (messages) => {
                applicationState.messages = messages
            }
        )
}

export const fetchFollows = () => {
    return fetch(`${apiURL}/follows`)
        .then(response => response.json())
        .then(
            (follows) => {
                applicationState.follows = follows
            }
        )
}

export const sendPost = (postObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    }
    return fetch(`${apiURL}/posts`, fetchOptions)
    .then(response => response.json)
    .then(
        () => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const sendLike = (likeObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(likeObj)
    }
    return fetch(`${apiURL}/likes`, fetchOptions)
    .then(response => response.json)
    .then(
        () => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const sendMessage = (messageObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObj)
    }
    return fetch(`${apiURL}/messages`, fetchOptions)
    .then(response => response.json)
    .then(
        () => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const deletePost = (postId) => {
    return fetch(`${apiURL}/posts/${postId}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const deleteLike = (likeId) => {
    return fetch(`${apiURL}/likes/${likeId}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}