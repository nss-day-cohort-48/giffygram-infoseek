import { getUsers } from "../data/provider.js";



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