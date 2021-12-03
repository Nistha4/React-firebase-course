import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

export default function Article() {
    // usePArams will evaluate the url and return the object of key/value pair of the parameter.
    const { id } = useParams();
    const url = 'http://localhost:3000/articles/' + id             //how this url fetches the data of that id only??
    const { data:article, isPending, error} = useFetch(url)
    // useHistory is used to navigate.(like redirect in the node)
    const history = useHistory()

    //This useEffect is to navigate the page to homepage if the data is fetched for id that doesnt exist.History is put as a dependency coz if we use any outside value in the useEffect we need to declare it in the dependency.
    useEffect(() => {
        if(error){
            setTimeout(() => {
                history.push('/')
            },2000)
        }
    }, [error, history])
    
    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && <div>
                <h2>{article.title}</h2>
                <p>By {article.author}</p>
                <p>{article.body}</p>    
            </div>}
        </div>
    )
}
