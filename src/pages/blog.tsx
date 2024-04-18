import {Link} from "react-router-dom";

const blogEntries = [{id: 1, blogheadline: "hello world"}, {id: 2, blogheadline: "hello class"}, {id: 3, blogheadline: "hello class"}]

export default function Blog() {
    return <>
        <h1>This is a blog</h1>
        {blogEntries.map(blogEntry => <Link key={blogEntry.id} to={"/blog/" + blogEntry.id}>Blog Entry {blogEntry.id}</Link>)}


        </>
}