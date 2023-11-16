import {useState} from 'react';
import {studentData} from '../studentData'

const List = ({ student, removePerson}) => {
    return (
        <>
            {student.map((person)=>{
                return (
                    <SinglePerson
                        key={person.id}
                        {...person}
                        removePerson={removePerson}
                    />
                );
            })}
        </>
    );
};

const SinglePerson = ({ id, name, age, course, removePerson}) => {
    return (
        <div className="item studentBox">
            <h3>{name}</h3>
            <h5>{age}</h5>
            <h5>{course}</h5>
            <button className="removeBTN" onClick={() => removePerson(id)}>remove</button>
        </div>
    )
}

export default List;