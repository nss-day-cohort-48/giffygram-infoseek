import { getUserProfile, getUsers } from "../data/provider.js"


export const UserProfile = () => {
    const userProfile = getUserProfile()
    const users = getUsers()
    const foundUser = users.find(user => user.id = userProfile)
    console.log(foundUser.name)

    return `
    <div class="userProfile">
    <h3>${foundUser.name}</h3>
    </div>
    `
}