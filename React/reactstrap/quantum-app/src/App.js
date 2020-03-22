import React, { useState, useEffect } from 'react';
import './App.css';
import { ButtonGroup, Button, Table } from 'reactstrap';

function App() {

  const [data, setData] = useState({ classes: [], students: [] });

  useEffect(() => {
    fetch('https://quantumit.azurewebsites.net/class')
      .then(res => res.json())
      .then(
        result => {
          setData({ classes: result, students: [] });
        }
      );
  }, []);



  const handleEdit = (e) => {
    e.preventDefault();
    console.log('The edit was clicked.');
  }

  function handleDelete(id) {
    console.log('The delete was clicked.' + id);
  }

  // const handleDelete = (id) => {
  //   console.log('The delete was clicked.' + id);
  // }


  return (
    <div className="container">
      <h2>Class</h2>
      <div>
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
                <th scope="row">{item.className}</th>
                <td>{item.location}</td>
                <td>{item.teacher}</td>
                <td><ButtonGroup>
                  <Button color="info" onClick={handleEdit}>Edit</Button>
                  {/* <Button color="danger" onClick={(e) => { e.preventDefault(); handleDelete(item.id) }}>Delete</Button> */}
                  <Button color="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                  {/* <Button color="danger" onClick={handleDelete}>Delete</Button> */}

                </ButtonGroup></td>
              </tr>
            ))}


          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
