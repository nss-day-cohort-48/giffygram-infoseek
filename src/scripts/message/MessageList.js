import { getMessages } from "../data/provider.js";
import { DirectMessage } from "../friends/DirectMessage.js";
import { getCurrentUser } from "../data/provider.js";


export const MessageList = () => {

    const currentUser = getCurrentUser()
    const messages = getMessages()

    let html = `<div class="messages"><div class="messageList">`
    const currentUserMessages = messages.filter(message => {
        if (message.recipientId === currentUser) {
            return true
        }

    }
    )
    if (currentUserMessages.length > 0) {
        const messageArrayOfStrings = currentUserMessages.map(messageObject => {
            const messageHTML = DirectMessage(messageObject)
            return messageHTML
        })
        html += messageArrayOfStrings.join("")
    }
    else {
        html = `<div class ="emptyInbox"> Hello! You have no messages in your inbox. </div>`
    }
    html += `</div></div>`
    return html
}


