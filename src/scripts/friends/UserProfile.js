import { getCurrentUser, getFeed, getUsers } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const UserProfile = () => {
    const feed = getFeed()
    const userProfileId = feed.userProfile
    const users = getUsers()
    const userProfile = users.find(user => user.id = userProfileId)

    return `
    <div class="user__profile">
    <div class="userOptions">
    <h3>${userProfile.name}</h3>
    <button id="followUser">Follow</button>
    <div>
    </div>
    `
}

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "followUser") {
        const userId = parseInt(localStorage.getItem("gg_user"))
        console.log(userId)

    }
})