// src/components/IngredientList.jsx
const IngredientList = (props) => {
  const {ingredients} = props
  return (<ul>
    {ingredients.map(function(ingredient, index) {
      return (
      <li key={index} style={{backgroundColor: ingredient.color}}>
        {ingredient.name}
        <button onClick={() => props.addIngredient(ingredient)}>+</button>
      </li>
      )
    })}
  </ul>
  )
};

export default IngredientList;
