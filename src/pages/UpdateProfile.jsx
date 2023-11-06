import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { put } from "../services/authService"

const UpdateProfile = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [occupation, setOccupation] = useState("")
    const [isBusiness, setIsBusiness] = useState(false)

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState(undefined);

    const { user } = useContext(AuthContext)

    const handleName = (e) => setName(e.target.value)
    const handleOccupation = (e) => setOccupation(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    useEffect(() => {
        if (user) {
            setName(user.name)
            setOccupation(user.occupation)
            setEmail(user.email)
        }
    }, [user])
877
    const handleSubmit = (e) => {
        e.preventDefault();

        const body = { name, occupation, email, password, isBusiness }

        put(`/users/update-profile`, body)
            .then((response) => {
                setName("")
                setEmail("")
                setOccupation("")
                setPassword("")
                navigate('/');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })

    }

    return (

        user &&
        <div>
            <div>
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

                    {errorMessage && <p className="mb-2">{errorMessage}</p>}
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile