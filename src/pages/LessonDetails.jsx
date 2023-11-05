import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { get } from "../services/authService"
import { useParams } from "react-router-dom"

const LessonDetails = () => {

    const [lesson, setLesson] = useState(null)

    const { lessonId } = useParams()

    const navigate = useNavigate()

    const getLesson = (id) => {
        get(`/lessons/${id}`)
        .then((response) => {
            setLesson(response.data)
        })
        .catch((err) => {
            console.log(err)
          })
    }


  useEffect(() => {

    getLesson(lessonId)

  }, [])
 
  return (
    <div>
        {
            lesson ?
            <div className="flex flex-col">
                <div>
                    <h1>Lesson details</h1>
                </div>

            </div>
            :
            <div>

            </div>
        }
    </div>
  )
}

export default LessonDetails