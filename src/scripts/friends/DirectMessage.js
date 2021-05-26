import { getUsers, patchRead } from "../data/provider.js"

export const DirectMessage = (message) => {

    const users = getUsers()


    const foundUser = users.find(user => user.id === message.userId)

    let directMessageHTML = `
    <div class="message read--${message.read}" id="message--${message.id}">
        <div class="message__author">From ${foundUser.name}</div>
        <div class="message__text">${message.text}</div>
    </div>
    `
    const sendToAPI = {
        id: message.id,
        read: true
    }
    patchRead(sendToAPI)

    return directMessageHTML
}