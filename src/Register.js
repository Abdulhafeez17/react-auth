import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Register() {
    // State declarations
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);


    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        // alert("Submited");
        
        // set config
        const configuration = {
            method: 'post',
            url: 'https://nodejs-mongo-auth.onrender.com/register',
            url:'http://localhost:3000/register',
            data: {
                email,
                password
            },
            headers :{}
        }
        // debugger
        // make the api call
        axios(configuration)
            .then(result => {
                // debugger
                console.log(result)
                setRegister(true);
            })
            .catch(error => {
                // debugger
                console.log(error)
            })
    }

    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>

                {/* email */}
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label> Email </Form.Label>
                    <Form.Control 
                        type='email' 
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                    /> 
                </Form.Group>

                {/* password */}
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label> Password </Form.Label>
                    <Form.Control 
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    /> 
                </Form.Group>

                {/*submit button */}
                <Button 
                    variant='primary' 
                    type='submit'
                    onClick={(e) => handleSubmit(e)}
                >
                    Register
                </Button>

                {/* display success message */}
                {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )}

            </Form>
        </>
    )
}

