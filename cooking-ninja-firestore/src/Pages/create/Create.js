import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { projectFirestore } from '../../firebase/config';

// styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  // useRef points to a html tag
  const ingredientInput = useRef(null);
  const history = useHistory()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const doc = {title, ingredients, method, cookingTime: cookingTime + 'minutes'}

    try{
      // await is written to go to the next line only after the doc is added
      await projectFirestore.collection('recipes').add(doc)
      history.push('/')
    }catch(err){
      console.log(err)
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    //includes to check dupliacte value
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus(); 
  };

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              // here ingredientInput is pointing input tag
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className='btn'>
              Add
            </button>
          </div>
        </label>
        <p>
          Current ingredredients :{' '}
          {ingredients.map((i) => (
            <em key={i}> {i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>submit</button>
      </form>
    </div>
  );
}
