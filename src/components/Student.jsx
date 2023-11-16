import {useState} from 'react';
import {studentData} from '../studentData'
import List from './StudentList'
import College from './College';

const StudentInfo = () => {
    const [student, setStudent] = useState(studentData);
    const removePerson = (id) => {
        setStudent((student) => {
            return student.filter((person) => person.id !== id);
        });
    };
    return (
        <section className='studentSection'>
            <h1 className='pageTitle'>Students</h1>
            <College />
            <List student={student} removePerson={removePerson} className="studentHolder"/>
        </section>
    );
};

export default StudentInfo;