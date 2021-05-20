import { getMessages, getUsers } from "../data/provider.js";

const users = getUsers()

export const messageForm = () => {
    return `
        <div class="messageForm">
            <form>
                <fieldset>
                    <lable></lable>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <lable for="message">Message:</lable>
                    <input type="text" name="text" autofocus placeholder="Enter message here" />
                </fieldset>
            </form>
        </div>
    `
}