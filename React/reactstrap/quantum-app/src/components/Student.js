import React, { useState, useEffect } from 'react';
import {
    ButtonGroup, Button, Table, Modal,
    ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input
} from 'reactstrap';

const Student = ({ classId }) => {
    const [modal, setModal] = useState(false);
    const [students, setStudents] = useState([]);

    const [id, setId] = useState(0);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState(0);
    const [gpa, setGpa] = useState(0);

    const toggle = () => {
        setModal(!modal);
    }

    const handleAdd = () => {
        setId(0);
        setFname('');
        setLname('');
        setAge(0);
        setGpa(0);
        setModal(true);
    }

    const handleEdit = (item) => {
        console.log('edit ' + item.id);
        setId(item.id);
        setFname(item.fName);
        setLname(item.lName);
        setAge(item.age);
        setGpa(item.gpa);
        setModal(true);
    }

    const handleDelete = (id) => {
        console.log('The delete was clicked.' + id);
        fetch('https://quantumit.azurewebsites.net/Student/' + id, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(result => {
                console.log('Deleted');
                let newStudents = students.filter(t => t.id !== id);
                setStudents(newStudents);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(id + ' ' + fname + ' ' + lname + ' ' + age + ' ' + gpa);
        let data = { id: id, fName: fname, lName: lname, age: age, gpa: gpa, classId: classId };

        if (id == 0) {
            addStudent(data);
        } else {
            editStudent(data);
        }

        setModal(false);
    }

    const editStudent = (opts) => {
        fetch('https://quantumit.azurewebsites.net/Student', {
            method: 'PUT',
            body: JSON.stringify(opts),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(
                result => {
                    let returnStudents = [...students];
                    returnStudents[students.findIndex(x => x.id == opts.id)] = opts;
                    setStudents(returnStudents);
                }
            );

    }

    const addStudent = (opts) => {
        fetch('https://quantumit.azurewebsites.net/Student', {
            method: 'POST',
            body: JSON.stringify(opts),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(
                result => {
                    setStudents([...students, result]);
                }
            );
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
                                <td>{item.fName} {item.lName}</td>
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
        <Button color="outline-primary" className="btn-sm" onClick={handleAdd}>Add</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Class</ModalHeader>
            <ModalBody>
                <h2>Form</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input type="text" name="fName"
                            value={fname} onChange={(e) => { setFname(e.target.value) }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <Input type="text" name="lName"
                            value={lname} onChange={(e) => { setLname(e.target.value) }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Age</Label>
                        <Input type="text" name="age"
                            value={age} onChange={(e) => { setAge(e.target.value) }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>GPA</Label>
                        <Input type="text" name="gpa"
                            value={gpa} onChange={(e) => { setGpa(e.target.value) }} />
                    </FormGroup>
                    <Button color="outline-success" className="btn-sm">Submit</Button>{''}
                </Form>
            </ModalBody>
        </Modal>
    </div>)
}

export default Student;