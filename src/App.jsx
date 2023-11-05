import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CreatorPage from './pages/CreatorPage'
import UserProfile from './pages/UserProfile'
import AllLessons from './pages/AllLessons'
import AddLesson from './pages/AddLesson'
import LessonDetails from './pages/LessonDetails'
import UpdateProfile from './pages/UpdateProfile'
import UpdateLesson from './pages/UpdateLesson'

function App() {
 

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        <Route path='logout' />

        <Route path='/creator-profile' element={<CreatorPage />} />
        <Route path='user-profile' element={<UserProfile />} />
        <Route path='update-profile' element={<UpdateProfile />} />
        <Route path='all-lessons' element={<AllLessons />} />
        <Route path='add-lesson' element={<AddLesson />} />
        <Route path='/lessons/details/:lessonId' element={<LessonDetails />} />
        <Route path='lessons/update/lessonId' element={<UpdateLesson />} />


      </Routes>

    </div>
  )
}

export default App
