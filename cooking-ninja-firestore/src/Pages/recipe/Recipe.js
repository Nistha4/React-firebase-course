import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';
import edit from '../../assets/edit.svg'
// styles
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true)
    
    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
        if(doc.exists){
          setIsPending(false)
          setRecipe(doc.data())
        }else{
          setIsPending(false)
          setError('Could not find the recipe')
        }
        console.log(doc.data())
    })

    return () => unsub()
    
  }, [id])

  const handleClick = () =>{
    projectFirestore.collection('recipes').doc(id).update({
      title:'Something diffrent'
    })
  }

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>ing</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
          <img 
          src={edit}
          onClick={handleClick}
          />
        </>
      )}
    </div>
  );
}
