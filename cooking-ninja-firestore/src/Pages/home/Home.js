import './Home.css'

import { projectFirestore } from '../../firebase/config'
import { useState,useEffect } from 'react'

import RecipeList from '../../components/RecipeList'

export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect (() => {
        setIsPending(true)
//  onSnapshot sends the snapshot of the data everytime there is a change in the data of a real database.Its a real time listener
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if(snapshot.empty){
                setError('No recipes to load')
                setIsPending(false)
            }else{
                let results = []
                snapshot.docs.forEach(doc => {
                    console.log(doc)
                    results.push({ id: doc.id, ...doc.data()})
                })

                setData(results)
                setIsPending(false)
            }    
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })
// if the snapshot was coming and the user goes to another page then this cleanup func will run and will unsubscribe from this page
        return () => unsub()
    },[])

    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>} 
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
