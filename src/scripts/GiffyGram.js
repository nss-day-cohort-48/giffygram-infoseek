import { NavBar } from "./nav/NavBar.js";
import { PostList } from "./feed/PostList.js";
import { Footer } from "./nav/Footer.js";

export const GiffyGram = () => {

    // Show main main UI
    return `
    ${NavBar()}
    <div class="giffygram__feed">
        <div class="miniMode" id="miniMode" >Have a gif to post?</div>
        ${PostList()}
    </div>
    ${Footer()}
    `
}
