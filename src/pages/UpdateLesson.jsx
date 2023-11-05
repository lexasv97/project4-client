import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const UpdateLesson = () => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState(0)
    const [format, setFormat] = useState("")

    const navigate = useNavigate()

    const { lessonId } = useParams()

    useEffect(() => {
        get(`lessons/${lessonId}`)
            .then((response) => {
                const thisLesson = response.data
                setName(thisLesson.name)
                setDescription(thisLesson.description)
                setImage(thisLesson.image)
                setType(thisLesson.type)
                setPrice(thisLesson.price)
                setFormat(thisLesson.format)
            })
            .catch((error) => console.log(error));
    }, [lessonId])

    const handleSubmit = (e) => {
        e.preventDefault()

        const body = { image, name, type, format, price, description }

        put(`/lessons${lessonId}`)
            .then((response) => {

                setImage("")
                setName("")
                setType("")
                setFormat("")
                setPrice(0)
                setDescription("")
                navigate(-1)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='image'
                        placeholder="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name='name'
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <select
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value={"Crossfit"}>Crossfit</option>
                        <option value={"Personal"}>Personal</option>
                        <option value={"Yoga"}>Yoga</option>
                        <option value={"Zumba"}>Zumba</option>
                        <option value={"Pilates"}>Pilates</option>
                        <option value={"Cycling"}>Cycling</option>
                    </select>
                    <select
                        name="format"
                        value={format}
                        placeholder="format"
                        onChange={(e) => setFormat(e.target.value)}
                        required
                    >
                        <option value={"Online"}>Online</option>
                        <option value={"In-person"}>In person</option>
                    </select>
                    <input
                        type="text"
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name='description'
                        placeholder="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <button type="submit">Update lesson</button>

                </form>
            </div>
        </div>
    )
}

export default UpdateLesson