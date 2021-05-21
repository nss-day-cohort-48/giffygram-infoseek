import { getMessages } from "../data/provider.js";
import { DirectMessage } from "../friends/DirectMessage.js";




export const MessageList = () => {
    const messages = getMessages()
    
    return `
    ${messages.map(DirectMessage).join("")}
    `

}