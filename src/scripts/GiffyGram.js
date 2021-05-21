import { NavBar } from "./nav/NavBar.js";
import { PostList } from "./feed/PostList.js";

export const GiffyGram = () => {

    // Show main main UI
    return `
    ${NavBar()}
    ${PostList()}
    `
}
