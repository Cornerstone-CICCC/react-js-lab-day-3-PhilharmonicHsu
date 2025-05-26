import { Link } from "react-router-dom";

export default function NotFound() {
    return <>
        Page Not Found
        <button>
            <Link to="/">Back To Home</Link>
        </button>
    </>
}