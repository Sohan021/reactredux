import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { ofarzRegister } from '../../../../actions/Auth/ofarzActions';


function OfarzRegistrationScreen(props) {

    const [name, setName] = useState('');

    const [mobilenumber, setMobilenumber] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Register = useSelector(state => state.ofarzAdd);
    const { userinfo } = Register;


    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (userinfo) {
            props.history.push(redirect);
        }

        return () => {
            //
        };
    }, [userinfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(ofarzRegister(
            name,
            mobilenumber,
            email,
            password,
            confirmPassword
        ));
    }
   
    return (
        <div className="container" style={{
            backgroundColor: 'black',

        }}>
            {1 && (
                <div className="container">
                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="firstname"
                                        style={{ color: 'white' }}>Name</Label>
                                    <Input type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter firstname"
                                        size="lg"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock" style={{ color: 'white' }}>Phone Number</Label>
                                    <Input
                                        type="text"
                                        name="countInStock"
                                        id="countInStock"
                                        placeholder="Enter Count in Stock"
                                        size="lg"
                                        value={mobilenumber}
                                        onChange={(e) => setMobilenumber(e.target.value)}
                                    />
                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="email" style={{ color: 'white' }}>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email"
                                        size="lg"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="firstname" style={{ color: 'white' }}>Password</Label>
                                    <Input type="password"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter firstname"
                                        size="lg"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="lastname" style={{ color: 'white' }}>Confirm Password</Label>
                                    <Input type="password"
                                        name="price"
                                        id="price"
                                        placeholder="Enter Product Price"
                                        size="lg"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                       </Button>
                    </Form>
                </div>
            )
            }
        </div >
    );
}
export default OfarzRegistrationScreen;



