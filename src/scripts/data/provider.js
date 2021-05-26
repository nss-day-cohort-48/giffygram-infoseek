const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    users: [],
    posts: [],
    likes: [],
    messages: [],
    follows: [],
    currentUser: null,
    feed: {
        chosenUser: null,
        displayFavorites: false,
        chosenYear: null,
        displayPostEntry: false,
        displayMessageForm: false,
        displayMessages: false,
        userProfile: null
    },
    registerUser: false
}

//set functions

export const resetTransState = () => {
    applicationState.feed.chosenUser = null
    applicationState.feed.displayFavorites = false
    applicationState.feed.chosenYear = null
    applicationState.feed.displayPostEntry = false
    applicationState.feed.displayMessageForm = false
    applicationState.feed.displayMessages = false
    applicationState.feed.userProfile = null
}

export const setCurrentUser = (id) => {
    return applicationState.currentUser = id
}

export const setChosenUser = (id) => {
    applicationState.feed.chosenUser = id
    applicationState.feed.displayFavorites = false
    applicationState.feed.chosenYear = null
}

export const setDisplayFavorites = (boolean) => {
    applicationState.feed.displayFavorites = boolean
    applicationState.feed.chosenUser = null
    applicationState.feed.chosenYear = null
}

export const setChosenYear = (year) => {
    applicationState.feed.chosenYear = year
    applicationState.feed.chosenUser = null
    applicationState.feed.displayFavorites = false
}

export const setDisplayPostEntry = (boolean) => {
    applicationState.feed.displayPostEntry = boolean
}

export const setDisplayMessageForm = (boolean) => {
    applicationState.feed.displayMessageForm = boolean
}

export const setDisplayMessages = (boolean) => {
    applicationState.feed.displayMessages = boolean
}

export const setUserProfile = (id) => {
    applicationState.feed.userProfile = id
}

export const setRegisterUser = () => {
    applicationState.registerUser = true
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}

//get functions

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

export const getCurrentUser = () => {
    return applicationState.currentUser
}

export const getFeed = () => {
    return { ...applicationState.feed }
}

export const getRegisterUser = () => {
    return applicationState.registerUser
}

//fetch functions

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
    
//fetch POST functions

export const sendUser = (userObj) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        }
        return fetch(`${apiURL}/users`, fetchOptions)
        .then(response => response.json())
        .then(
            (newUser) => {
                applicationState.registerUser = false
                localStorage.setItem("gg_user", newUser.id)
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
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
    .then(response => response.json())
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
    .then(response => response.json())
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
    .then(response => response.json())
    .then(
        () => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const sendFollow = (followObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(followObj)
    }
    return fetch(`${apiURL}/follows`, fetchOptions)
    .then(response => response.json())
    .then(
        () => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

//fetch DELETE functions

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

export const deleteFollow = (followId) => {
    return fetch(`${apiURL}/follows/${followId}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}