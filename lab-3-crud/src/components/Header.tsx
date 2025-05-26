import { Link } from "react-router-dom";
import {memo} from 'react'


type Prop = {
    firstname: string
}

const Header = memo(({firstname}: Prop) => {
    return <nav className="flex h-20 bg-gray-800 text-white items-center justify-between px-4">
        <div>{firstname}</div>
        <div className="flex gap-4">
            <Link to="/" >Home</Link> 
            <Link to="/blog">Blog</Link>
        </div>
    </nav>
})

export default Header