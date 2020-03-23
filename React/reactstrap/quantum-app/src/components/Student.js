import React, { useState, useEffect } from 'react';
import {
    ButtonGroup, Button, Table, Modal,
    ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input
} from 'reactstrap';

const Student = ({ classId }) => {
    const [students, setStudents] = useState([]);

    const handleEdit = (item) => {
        console.log('edit ' + item.id);
    }

    const handleDelete = (id) => {
        console.log('The delete was clicked.' + id);
    }

    useEffect(() => {
        fetch('https://quantumit.azurewebsites.net/Student/class/' + classId)
            .then(res => res.json())
            .then(
                result => {
                    setStudents(result);
                }
            );
    }, []);

    return (<div>

        {students.length > 0 ?
            <Table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Age</th>
                        <th>GPA</th>
                        <th>Op</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(item => (
                            <tr key={item.id}>
                                <td>{item.fName} {item.lname}</td>
                                <td>{item.age}</td>
                                <td>{item.gpa}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button color="outline-info" className="btn-sm" onClick={() => handleEdit(item)}>Edit</Button>
                                        <Button color="outline-danger" className="btn-sm" onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            : <div>No student registered.</div>}

    </div>)
}

export default Student;