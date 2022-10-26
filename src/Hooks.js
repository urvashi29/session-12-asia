import React, { useState } from "react";
import HOC from "./HOC";

const Hooks = () => {
    // state variable, method to update it
    const [firstName, setFirstName] = useState('alina');
    const [age, setAge] = useState(20);
    const [isValid, setIsValid] = useState(false);

    const [person, setPerson] = useState({
        name: 'alex',
        age: 25
    });


    const [arr, setArr] = useState([90, 89, 100]);

    const [employeeData, setEmployeeData] = useState([{
        name: 'alina', id: 1, designation: 'developer'
    }, {
        name: 'harry', id: 2, designation: 'developer'
    }]);

    // const [errors, setErrors] = useState({nameError: '', ageError: ''})

    const handleUpdate = () => {
        setFirstName('harry');
        setAge(30);
        setPerson({ ...person, age: 40 });
        setArr([...arr, 29]);

        // particular array element
        const updateArray = [...employeeData, { id: 4, name: 'alex', designation: 'analyst' }];
        updateArray[0].designation = 'Analyst';
        setEmployeeData(updateArray);

    }

    const employeeList = employeeData.map(info => info.designation)

    return (
        <>
            <p>{firstName}</p>
            <p>{age}</p>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>
                {arr.map(e => e)}
            </p>
            <p>{employeeList}</p>

            <button onClick={() => setFirstName('harry')}>Update String</button>
            <button onClick={() => setAge(30)}>Update Number</button>
            <button onClick={() => setPerson({ ...person, age: 40 })}>Update Object</button>
            <button onClick={() => setArr([...arr, 29])}>Update Array</button>
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default HOC(Hooks);


