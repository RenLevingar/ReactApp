import {useState} from 'react';
import { data } from '../../data'
// start with use component, must be uppercase 
// invoke inside function/component body
// Don't call hooks conditionally

export const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
      let newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople);
    };
  return (
    <>
      {people.map((person) => {
        const { id, first_name } = person;
        return ( 
          <div key={id} className='item'>
            <h4>{first_name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray;
