import React from "react"
import { whoami } from "../services/requests"

export const CurrentUserContext = React.createContext()

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null)

    const fetchCurrentUser = () => {
        whoami().
            then(res => {
                if (res.error == null) {
                    setCurrentUser(res.user)
                }
            })
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => React.useContext(CurrentUserContext)