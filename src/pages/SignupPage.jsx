import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom";
import { post } from "../services/authService";
import { AuthContext } from "../context/auth.context";

const SignupPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [occupation, setOccupation] = useState("")

    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState(undefined);

    // const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleName = (e) => setName(e.target.value)
    const handleOccupation = (e) => setOccupation(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = { name, occupation, email, password }

        post('/auth/signup', body)
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
                <span>Let's get you signed up</span>

                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="full name"
                            required
                            name="name"
                            value={name}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <select
                            name='occupation'
                            value={occupation}
                            required
                            onChange={handleOccupation}
                        >
                            <option hidden default value="" disabled="disabled">Select an occupation</option>
                            <option value={""}></option>
                            <option value={""}></option>
                            <option value={""}></option>
                            <option value={""}></option>
                            <option value={""}></option>
                            <option value={""}></option>
                            <option value={""}></option>
                        </select>
                    </div>
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

                    <div className="">
                        <span>Already have account?
                            <Link to="/login"> <span className="">Login</span></Link>
                        </span>
                    </div>

                    {errorMessage && <p className="mb-2">{errorMessage}</p>}

                </form>
            </div>
        </div>
    )
}

export default SignupPage