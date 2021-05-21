import { NavBar } from "./nav/NavBar.js";
import { PostList } from "./feed/PostList.js";
import { MessageForm } from "./message/MessageForm.js"
import { PostEntry } from "./feed/PostEntry.js";

export const GiffyGram = () => {

    // Show main main UI
    return `
    ${NavBar()}
    ${PostList()}
    ${PostEntry()}
    `
}
