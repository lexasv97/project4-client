import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <div className="h-1/6 flex justify-between px-10 py-2">
                <div>
                    <Link to="/">
                        <span className="text-2xl font-bold">LOGO</span>
                    </Link>
                </div>
                <div>
                    <Link to='all-lessons'>
                        <span className="hover:text-white transition cursor-pointer">All lessons</span>
                    </Link>
                </div>
                <div>
                    <Link to='/login'>
                        <span className="hover:text-white transition cursor-pointer">Login</span>
                    </Link>
                    <Link to='signup'>
                        <span className="hover:text-white transition cursor-pointer">Signup</span>
                    </Link>
                    <Link to='profile'>
                        <span className="hover:text-white transition cursor-pointer">Profile</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar