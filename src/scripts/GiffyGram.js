import { NavBar } from "./nav/NavBar.js";
import { PostList } from "./feed/PostList.js";
import { MessageForm } from "./message/MessageForm.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
    ${NavBar()}
    ${PostList()}
    `
}
