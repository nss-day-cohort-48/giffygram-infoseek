import { NavBar } from "./nav/NavBar.js";
import { PostList } from "./feed/PostList.js";
import { Footer } from "./nav/Footer.js";
import { getFeed, setDisplayPostEntry } from "./data/provider.js";
import { MessageList } from "./message/MessageList.js";
import { MessageForm } from "./message/MessageForm.js";
import { PostEntry } from "./feed/PostEntry.js";

const applicationElement = document.querySelector(".giffygram")

export const GiffyGram = () => {

    // Show main main UI

    const feed = getFeed()
    const displayMessages = feed.displayMessages
    const displayMessageForm = feed.displayMessageForm
    const displayPostEntry = feed.displayPostEntry

    let giffyHTML
    
    if (displayMessageForm) {
        giffyHTML = `
        ${NavBar()}
        ${MessageForm()}
        `
    } else if (displayMessages) {
        giffyHTML = `
        ${NavBar()}
        ${MessageList()}
        `
    } else if (displayPostEntry) {
        giffyHTML = `
        ${NavBar()}
        <div class="giffygram__feed">
        ${PostEntry()}
        ${PostList()}
        </div>
        ${Footer()}
        `
    } else {
        giffyHTML = `
        ${NavBar()}
        <div class="giffygram__feed">
        <div class="miniMode" id="miniMode" >Have a gif to post?</div>
        ${PostList()}
        </div>
        ${Footer()}
        `
        }
    return giffyHTML
}

applicationElement.addEventListener(
    "click",
    event => {
        if (event.target.id === "miniMode") {
            setDisplayPostEntry(true)
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)