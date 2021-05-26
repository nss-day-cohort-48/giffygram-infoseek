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
    
    const userProfileFollows = follows.filter(follow => follow.userId === userProfileId)
    let userProfileUsersFollowing = []
    for (const follow of userProfileFollows) {
        for (const user of users) {
            if (follow.followingId === user.id) {
                userProfileUsersFollowing.push(user)
            }
        }
    }

    let followButton
    if (currentUser === userProfileId) {
        followButton = ""
    } else if (foundFollow) {
        followButton = `<button id="unfollow--${foundFollow.id}">Unfollow</button>`
    } else {
        followButton = `<button id="followUser--${userProfile.id}">Follow</button>`
    }

    return `
    <div class="user__profile">
    <div class="userOptions">
    <h3 class="profileName">${userProfile.name}</h3>
    <p>${userProfile.email}</p>
    ${followButton}
    </div>
    <div class="usersFollowing">
    Following:
    ${userProfileUsersFollowing.map(user => {
        return `
        <div class="profileLink" id="profile--${user.id}">${user.name}</div>`
    }).join("")
    }
    </div>
    </div>
    `
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