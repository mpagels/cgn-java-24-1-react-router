import {useNavigate} from "react-router-dom";

export default function ContactPage() {

    const navigate = useNavigate()

    function myLogic() {
        setTimeout(() => {navigate("/")}, 5000)
    }

    return <>
        <h1>Contact Me</h1>
    <button onClick={myLogic}>LOGIC!!</button>
    </>
}