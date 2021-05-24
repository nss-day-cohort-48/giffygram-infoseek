import { getMessages } from "../data/provider.js";
import { DirectMessage } from "../friends/DirectMessage.js";




export const MessageList = () => {
    const messages = getMessages()
    
    return `
    <div class="messages">
        ${messages.map(DirectMessage).join("")}
    </div>
    `

}