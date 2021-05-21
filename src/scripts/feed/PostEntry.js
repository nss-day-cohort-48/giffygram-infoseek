import { getCurrentUser, sendPost } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram")

export const PostEntry = () => {
    return `
    <div class="newPost">
        <div>
            <input value name="postTitle" class="newPost__input" type="text" placeholder="Title" />
        </div>
        <div>
            <input value name="postURL" class="newPost__input" type="text" placeholder="URL of gif" />
        </div>
        <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..." ></textarea>
        <button id="newPost__submit" >Submit</button>
        <button id="newPost__cancel" >Cancel</button>
    </div>
    `
}


applicationElement.addEventListener(
    "click",
    event => {
        if (event.target.id === "newPost__cancel" ) {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        } 
    }
)
    
applicationElement.addEventListener(
        "click",
        event => {
            if (event.target.id === "newPost__submit" ) {
            const postTitle = document.querySelector("input[name='postTitle']").value
            const postURL = document.querySelector("input[name='postURL']").value
            const postDescription = document.querySelector("textarea[name='postDescription']").value
            const postTimestamp = Date.now()
            const currentUser = getCurrentUser()

            const postObject = {
                userId: currentUser,
                title: postTitle,
                gifURL: postURL,
                description: postDescription,
                timestamp: postTimestamp
            }

            sendPost(postObject)
        } 
    }
)