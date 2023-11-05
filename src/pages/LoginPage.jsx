import { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { post } from "../services/authService"
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined);

    // const { storeToken, authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value)

    const handlePassword = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const body = { email, password }

        post('/auth/login', body)
            .then((response) => {
                // storeToken(response.data.authToken)
                // authenticateUser()
                navigate('/');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }
    return (
        <div>
            <div>
                <span>Let's get you logged in</span>

                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="email"
                            name="email"
                            required
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="password***"
                            name="password"
                            required
                            value={password}
                            onChange={handlePassword}
                        />
                    </div>
                    <div>
                        <button type='submit'>Login</button>
                    </div>

                    <div>
                        <span>Don't have an account yet?
                            <Link to='/signup'>
                            <span>Sign up</span>
                            </Link>
                        </span>
                    </div>

                    {errorMessage && <p className="mb-2">{errorMessage}</p>}

                </form>
            </div>
        </div>
    )
}

export default LoginPage