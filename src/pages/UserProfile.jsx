import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../context/auth.context"

const UserProfile = () => {

    const { user, logOut } = useContext(AuthContext)

    

  return (
    <div>
        {
            user &&
            <div>
                <span>Profile</span>
            </div>
        }
    </div>
  )
}

export default UserProfile