import {Link} from "react-router-dom";

export default function Navigation() {
    return   <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contact"}>Contact</Link>
    </nav>
}