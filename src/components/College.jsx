import React, { useState } from "react";
import List from './StudentList';

const College = () => {
    const [students, setStudents] = useState([
        // two starting people
        { "id": 21, "name": "John Doe", "age": 20, "course": "Computer Science" },
        { "id": 22, "name": "Jane Smith", "age": 22, "course": "Mathematics" },
    ]);

    const [newStudent, setNewStudent] = useState({
        name: "",
        age: "",
        course: "",
    });

    const addStudent = () => {
        // makes sure that each student has a name age and course
        if (newStudent.name && newStudent.age && newStudent.course) {
            setStudents((prevStudents) => [
                ...prevStudents,
                {
                    id: prevStudents.length + 1,
                    ...newStudent,
                },
            ]);

            // resets the form
            setNewStudent({
                name: "",
                age: "",
                course: "",
            });
        }
    };

    // sets specifc information whenver information is put into the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const removePerson = (id) => {
        setStudents((prevStudents) => {
            return prevStudents.filter((student) => student.id !== id);
        });
    };

    return (
        <section className='studentSection'>
            <h1 className='pageTitle'>Students</h1>

            <form className="adder">
                <label>Name: </label>
                <input type="text" name="name" value={newStudent.name} onChange={handleChange} /><br></br>
                <label>Age: </label>
                <input type="number" name="age" value={newStudent.age} onChange={handleChange} /><br></br>
                <label>Course: </label>
                <input type="text" name="course" value={newStudent.course} onChange={handleChange} /><br></br>
                <button className='addBTN' type="button" onClick={addStudent}>Add Student</button>
            </form>

            {/* Makes The Student List */}
            <List student={students} removePerson={removePerson} className="studentHolder" />
        </section>
    );
};

export default College;