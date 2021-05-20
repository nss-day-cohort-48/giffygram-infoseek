import { PostList } from "./feed/PostList.js"
import { MessageForm } from "./message/MessageForm.js"

export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
    ${MessageForm()}
    ${PostList()}
    `
}
