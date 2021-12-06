import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [isCancelled, setisCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async() => {
        setError(null)
        setIsPending(true)

        try{
            await projectAuth.signOut()

            // dispatch logout action
            dispatch({ type:'LOGOUT'})

            // if the user makes a different request while the async signup/signout process is running then it shows error as after it gets completed it comesback to change the states underneath which wont be availabele that time as user is no longer making this req
            // update state
            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
            
        }catch(err){
            if(!isCancelled)
           { console.log(err.message)
            setError(err.message)
            setIsPending(false)}
        }
    }

    useEffect(() => {   
        return () => {
            setisCancelled(true)
        }
    }, [])

    return { logout, error, isPending }
}