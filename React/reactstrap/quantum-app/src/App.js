import React, { useState, useEffect } from 'react';
import Student from './components/Student';
import './App.css';
import {
  ButtonGroup, Button, Table, Modal,
  ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';

function App() {

  const [modal, setModal] = useState(false);
  const [data, setData] = useState({ classes: [], students: [] });

  const [selectedClass, setSelectedClass] = useState({ id: 0, name: '' });
  const [id, setId] = useState(0);
  const [classname, setClassname] = useState('');
  const [location, setLocation] = useState('');
  const [teacher, setTeacher] = useState('');

  useEffect(() => {
    fetch('https://quantumit.azurewebsites.net/Class')
      .then(res => res.json())
      .then(
        result => {
          setData({ classes: result, students: [] });
        }
      );
  }, []);

  const toggle = () => {
    setModal(!modal);
  }

  const handleAdd = () => {
    setId(0);
    setClassname('');
    setLocation('');
    setTeacher('');
    setModal(true);
  }

  const handleEdit = (item) => {
    setId(item.id);
    setClassname(item.className);
    setLocation(item.location);
    setTeacher(item.teacher);
    setModal(true);
  }

  function handleDelete(id) {
    console.log('The delete was clicked.' + id);
    fetch('https://quantumit.azurewebsites.net/Class/' + id, {
      method: 'DELETE'
    })
      .then(res => res.text())
      .then(result => {
        console.log('Deleted');
        let newClasses = data.classes.filter(t => t.id !== id);
        setData({ classes: newClasses, students: [] })
      });

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id + ' ' + classname + ' ' + location + ' ' + teacher);

    if (id == 0)
      addClass({ className: classname, location: location, teacher: teacher });
    else
      editClass({ id: id, className: classname, location: location, teacher: teacher });

    setModal(false);
  }

  const editClass = (opts) => {
    console.log('Edit the Class');

    fetch('https://quantumit.azurewebsites.net/Class', {
      method: 'PUT',
      body: JSON.stringify(opts),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        result => {
          let returnClasses = [...data.classes];
          returnClasses[data.classes.findIndex(x => x.id == opts.id)] = opts;
          setData({ classes: returnClasses, students: [] });
        }
      );
  }

  const addClass = (opts) => {

    fetch('https://quantumit.azurewebsites.net/Class', {
      method: 'POST',
      body: JSON.stringify(opts),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        result => {
          setData({ classes: [...data.classes, result], students: [] })
        }
      );
  }

  const RenderStudent = () => {
    if (selectedClass.id != 0) {
      return <div>
        <h2>{selectedClass.name} Students</h2>
        <Student classId={selectedClass.id} />
      </div>
    } else {
      return <div>No class selected</div>
    }
  }

  return (
    <div className="container">
      <h2>Class <Button color="outline-primary" className="btn-sm" onClick={handleAdd}>Add</Button></h2>

      <Table>
        <thead>
          <tr>
            <th>Class name</th>
            <th>Location</th>
            <th>Teacher Name</th>
            <th>Op</th>
          </tr>
        </thead>
        <tbody>
          {data.classes.map(item => (
            <tr key={item.id}>
              <th scope="row" onClick={() => setSelectedClass({ id: item.id, name: item.className })}>{item.className}</th>
              <td>{item.location}</td>
              <td>{item.teacher}</td>
              <td><ButtonGroup>
                <Button color="outline-info" className="btn-sm" onClick={() => handleEdit(item)}>Edit</Button>
                {/* <Button color="danger" onClick={(e) => { e.preventDefault(); handleDelete(item.id) }}>Delete</Button> */}
                <Button color="outline-danger" className="btn-sm" onClick={() => handleDelete(item.id)}>Delete</Button>
                {/* <Button color="danger" onClick={handleDelete}>Delete</Button> */}
              </ButtonGroup></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <RenderStudent />

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Class</ModalHeader>
        <ModalBody>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Class name</Label>
              <Input type="text" name="className"
                value={classname}
                onChange={(e) => { setClassname(e.target.value) }} />
            </FormGroup>
            <FormGroup>
              <Label>Location</Label>
              <Input type="text" name="location"
                value={location}
                onChange={(e) => { setLocation(e.target.value) }} />
            </FormGroup>
            <FormGroup>
              <Label>Teacher</Label>
              <Input type="text" name="teacher"
                value={teacher}
                onChange={(e) => { setTeacher(e.target.value) }} />
            </FormGroup>

            <Button color="outline-success" className="btn-sm">Submit</Button>{''}
          </Form>

        </ModalBody>

      </Modal>
    </div>
  );
}

export default App;
