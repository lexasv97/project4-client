import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../services/API_URL";
import { ReviewCard } from "../components/ReviewCard";

const LessonDetails = () => {

  const [lesson, setLesson] = useState(null)

  const { lessonId } = useParams()

  const navigate = useNavigate()

  const getLesson = (id) => {
    axios.get(API_URL + `/lessons/${id}`)
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
            <ReviewCard />

          </div>
          :
          <div>
            Loading...
          </div>

      }
    </div>
  )
}

export default LessonDetails