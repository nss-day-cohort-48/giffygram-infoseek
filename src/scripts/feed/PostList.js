import { getPosts } from "../data/provider.js";
import { Post } from "./Post.js";


export const PostList = () => {
    const posts = getPosts()

    return `
    ${posts.map(Post).join("")}
    `

}