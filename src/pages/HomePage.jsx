import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
                <span>Welcome!</span>
                <span>Please choose user's type</span>
            </div>
            <div className="flex flex-row">
                <div>
                    <Link to='/users/profile'>User profile</Link>
                </div>
                <div>
                    <Link>Creator profile</Link>
                </div>

            </div>
            <div className="flex flex-col items-center">
                <div>
                    <span>Search for lessons:</span>
                </div>
                <div>
                    <Link>Find lesson</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage