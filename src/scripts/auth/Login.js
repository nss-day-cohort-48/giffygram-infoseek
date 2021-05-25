import { getUsers, setRegisterUser } from "../data/provider.js"
import { renderApp } from "../main.js"
import { Register } from "./Register.js"

const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        const userState = getUsers()

        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        for (const user of userState) {
            if (user.email === email && user.password === password) {
                foundUser = user
            }
        }

        if (foundUser !== null) {
            localStorage.setItem("gg_user", foundUser.id)
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
})

applicationElement.addEventListener(
    "click",
    event => {
        if (event.target.id === "registerLink") {
            setRegisterUser()
        }
    }
)

export const LoginForm = () => {
    return `
        <div class="loginForm">
            <form>
                <h1>Please login to Giffygram</h1>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
            <section>
                <a href="#" id="registerLink">Not a member yet?</a>
            </section>
            </div>
            `
        }
        
        // or
        // <button id="registerButton">Register a new user</button>