import { Link } from "react-router-dom";
import { BlogPosts } from "../App";

function PostLists() {
    return (
    <ul>
    {Object.entries(BlogPosts).map(([slug, { title }]) => (
    <li key={slug}>
    <Link to={`/posts/${slug}`}> <h3>{title}</h3> </Link>
    </li>
    ))}
    </ul>
    );}
export default PostLists