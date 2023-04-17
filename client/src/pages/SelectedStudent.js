import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useQuery } from "@apollo/client";
import { QUERY_USER } from '../utils/queries';
import { useParams } from 'react-router-dom';

function SelectedStudent() {

    //TODO: Need to query the DB for the selected student and bring their data to the page.

    const { id: userParam } = useParams();

    const { data } = useQuery(QUERY_USER, { variables: { id: userParam } });

    const userProfile = data?.user || {};

    console.log('userProfile: ', userProfile)

    const handleStudentConnect = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        //TODO: Need to actually send the student a message.
        alert(`You are now connected to this student!`);      

    };    

    return (
        <div id="student" style={{ display: "flex", justifyContent: "space-between" }}>
            <div id="selectedStudent">
                <FormControl
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{ height: "100vh", position: "relative" }}
                >
                    {/* Name */}
                    <TextField
                        disabled
                        id="outlined-basic"
                        label="Name"
                        variant="filled"
                        name="studentName"
                        value={(userProfile.firstName && userProfile.lastName) ? (userProfile.firstName + ' ' + userProfile.lastName) : ""}
                    />

                    {/* Age */}
                    <TextField
                        disabled
                        id="outlined-basic"
                        label="Age"
                        variant="filled"
                        name="studentName"
                        value={userProfile.age ?? ""}
                    />

                    {/* Hometown */}
                    <TextField
                        disabled
                        id="outlined-basic"
                        label="Hometown"
                        variant="filled"
                        name="studentHometown"
                        value={userProfile.hometown ?? ""}
                    />

                    {/* Hobbies */}
                    <TextField
                        disabled
                        id="filled-multiline-static"
                        label="Hobbies"
                        multiline
                        rows={4}
                        variant="filled"
                        value={userProfile.hobbies ?? ""}
                    />

                    {/* Gender */}
                    <TextField
                        disabled
                        id="outlined-basic"
                        label="Gender"
                        variant="filled"
                        name="studentGender"
                        value={userProfile.gender ?? ""}
                    />                    

                    {/* Smoke? */}
                    <TextField
                        disabled
                        id="outlined-basic"
                        label="Smoke?"
                        variant="filled"
                        name="studentSmoke"
                    />                            

                    {/* Drink? */}
                    <TextField
                        disabled
                        id="outlined-basic"
                        label="Drink?"
                        variant="filled"
                        name="studentDrink"
                    />                            

                    {/* Connect button */}
                    <Button variant="contained" onClick={handleStudentConnect}>Connect!</Button>

                </FormControl>

            </div>

            <div id="profilePicture">
                <img
                    src={userProfile.photo ?? ""}
                    alt="Student Pic"
                    style={{ height: "500px", border: "2px solid black", borderRadius: "5px", padding: "10px" }}
                />
            </div>
        </div>

    );
};

export default SelectedStudent;
