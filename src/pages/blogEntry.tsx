import {useParams} from "react-router-dom";

export default function BlogEntry() {

    const params = useParams()

    console.log(params)


    return <>
        <h1>My Blog Entry</h1>
        <p>The Blog entry ID is: {params.blogPostID}</p>

        </>
}