import { getUsers, sendMessage, setDisplayMessageForm } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram")

export const MessageForm = () => {
    const users = getUsers()
    return `
        <div class="directMessage">
            <div class="dropdown select--friends">
                <lable>Recipient:</lable>
                <select name="directMessage__userSelect" class="message__input">
                    <option value="default">Select a user...</option>
                    ${users.map(u => {
                    return `<option value="user--${u.id}">${u.name}</option>`
                    }).join("")}
                </select>   
            </div>
            <div class="message__section">
                <lable for="message">Message:</lable>
                <input type="text" name="message" class="message__input" autofocus placeholder="Enter message here" />
            </div>
            <button id="directMessage__submit">Save</button>
            <button id="directMessage__cancel">Cancel</button>
            <button id="directMessage__close">x</button>
        </div>
    `
}

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__submit") {
        const text = document.querySelector("input[name='message']").value
        const dropdown = document.querySelector("select[name='directMessage__userSelect']")
        const recipient = dropdown.options[dropdown.selectedIndex].value
        const [, recipientIdString] = recipient.split("--")
        const recipientId = parseInt(recipientIdString)
        const user = parseInt(localStorage.getItem("gg_user"))

        const sendtoAPI = {
            recipientId: recipientId,
            userId: user,
            text: text,
            read: false
        }

        setDisplayMessageForm(false)
        sendMessage(sendtoAPI)
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__cancel") {
        setDisplayMessageForm(false)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__close") {
        setDisplayMessageForm(false)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})
