import { getFeed, getFollows, getUsers, sendFollow, deleteFollow } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const UserProfile = () => {
    const feed = getFeed()
    const users = getUsers()
    const userProfileId = feed.userProfile
    const userProfile = users.find(user => user.id === userProfileId)
    const currentUser = parseInt(localStorage.getItem("gg_user"))
    const follows = getFollows()
    const foundFollow = follows.find(follow => follow.userId === currentUser && follow.followingId === userProfileId)

    if (currentUser === userProfileId) {
    return `
    <div class="user__profile">
    <div class="userOptions">
    <h3 class="profileName">${userProfile.name}</h3>
    <p>${userProfile.email}</p>
    <div>
    </div>
    `
    } else if (foundFollow) {
    return `
    <div class="user__profile">
    <div class="userOptions">
    <h3 class="profileName">${userProfile.name}</h3>
    <p>${userProfile.email}</p>
    <button id="unfollow--${foundFollow.id}">Unfollow</button>
    <div>
    </div>
    `        
    } else {
    return `
    <div class="user__profile">
    <div class="userOptions">
    <h3 class="profileName">${userProfile.name}</h3>
    <p>${userProfile.email}</p>
    <button id="followUser--${userProfile.id}">Follow</button>
    <div>
    </div>
    `
    }
}

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("followUser--")) {
        const userId = parseInt(localStorage.getItem("gg_user"))
        const [, followIdString] = clickEvent.target.id.split("--")
        const followId = parseInt(followIdString)
        
        const sendToAPI = {
            userId: userId,
            followingId: followId
        }

        sendFollow(sendToAPI)
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("unfollow--")) {
        const [, followIdString] = clickEvent.target.id.split("--")
        deleteFollow(parseInt(followIdString))
    }
})