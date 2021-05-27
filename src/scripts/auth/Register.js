import { sendFollow, sendUser } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener(
    "click",
    event => {
        if (event.target.id === "submitButton") {
            const userName = document.querySelector("input[name='name']").value
            const userEmail = document.querySelector("input[name='email']").value
            const userPassword = document.querySelector("input[name='password']").value

            const newUserObject = {
                name: userName,
                email: userEmail,
                password: userPassword
            }

            if (userName === "" || userEmail === "" || userPassword === "") {
                alert("Please enter all fields")
            } else {
                sendUser(newUserObject)
            }
        }
    }
)


    

export const Register = () => {

    return `
    <div class="registerForm">
            <form>
                <h1>Please register for Giffygram</h1>
                <fieldset>
                    <label for="name">Name:</label>
                    <input value type="text" name="name" autofocus placeholder="Name" />
                </fieldset>
                <fieldset>
                    <label for="email">Email:</label>
                    <input value type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input value type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="submitButton">Submit</button>
            or
            <a href="/" id="returnToLogin">Return to Login</a>
        </div>
    `
}