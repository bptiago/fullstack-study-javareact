import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {

    const paperStyle = {
        padding: "50px 20px",
        width: 500,
        margin: "20px auto"
    }

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);

    function handleClick(e) {
        e.preventDefault();
        const student = {name, address};
        console.log(student);

        //This will make a call to our API Route and send a JSON Object (student) to the route
        //The backend will process the request (on StudentController.java) and save the JSON in our database
        fetch(
            "http://localhost:8080/student/add",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(student)
            }
        ).then(
            () => console.log("New student added")
        );
    }

    //If you dont put HTTP in the URL it wont work
    useEffect(
        () => {
            fetch("http://localhost:8080/student/getAll")
            .then(response => response.json())
            .then(result => setStudents(result))
        }, []
    )

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1><u style={{textDecoration: "underline"}}>Add Student</u></h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)} // The value that is being typed os being saved in name state
            />
            <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
            <Button variant="outlined" onClick={handleClick}>Submit</Button>
            </Box>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
            <h1>Students</h1>

            {
                students.map(student => (
                    <Paper elevation={6} style={{margin: "10px", padding: "15px", textAlign: "left"}} key={student.id}>
                        Id: {student.id}<br/>
                        Name: {student.name}<br/>
                        Address: {student.address}<br/>
                    </Paper>
                )
                )
            }
        </Paper>
    </Container>
  );
}
