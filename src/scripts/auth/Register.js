
const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener(
    "click",
    event => {
        if (event.target.id === "submitButton") {
            
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
                    <input type="text" name="name" autofocus placeholder="Name" />
                </fieldset>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="submitButton">Submit</button>
            or
            <button id="return">Return to Login</button>
        </div>
    `
}