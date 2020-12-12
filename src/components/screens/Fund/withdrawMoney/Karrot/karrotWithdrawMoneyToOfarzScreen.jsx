import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'reactstrap';
import { fundKarrot } from '../../../../../actions/Fund/fundActions';
import { withdrawKarrotToOfarz } from '../../../../../actions/Fund/withdrawActions';
import { Card } from 'react-bootstrap'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function WithdrawMoneyKarrotToOfarz(props) {

    const [amount, setAmount] = useState('');
    const [ofarzPhnNumber, setOfarzPhnNumber] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;


    const fundsKarrot = useSelector((state) => state.fundKarrot)
    const { fund } = fundsKarrot;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundKarrot(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const karrotId = userInfo.item1.id;

        dispatch(withdrawKarrotToOfarz(amount, ofarzPhnNumber, karrotId));

    }
    return (
        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <Card style={{ padding: "10px", borderColor: "#5cb85c" }}>
                            <div className="row">
                                <div className="col-2">

                                </div>
                                <div className="col-8">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                        Cash Out To Ofarz
                                    </Card>
                                    <br />
                                    <br />
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                        Main Account Balance: {fund.mainAccount}
                                    </Card>
                                    <br />
                                    <br />
                                    <Form
                                        onSubmit={submitHandler}
                                    >
                                        <div
                                            style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
                                        >
                                            <FormGroup >
                                                <Label
                                                    for="name"
                                                    style={{ color: "#5cb85c" }}
                                                >
                                                    Amount
                                                </Label>
                                                <Input
                                                    style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                    type="text"
                                                    name="name"
                                                    color="06E2FF"
                                                    placeholder="Enter Amount"
                                                    size="lg"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup >
                                                <Label
                                                    for="password"
                                                    style={{ color: "#5cb85c" }}
                                                >
                                                    Ofarz PhoneNumber
                                                </Label>
                                                <Input
                                                    style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                    type="text"
                                                    name="name"
                                                    color="06E2FF"
                                                    placeholder="Enter Ofarz Phone Number"
                                                    size="lg"
                                                    value={ofarzPhnNumber}
                                                    onChange={(e) => setOfarzPhnNumber(e.target.value)}
                                                />
                                            </FormGroup>
                                        </div>
                                        {fund.mainAccount >= amount ? (
                                            <Button
                                                style={{
                                                    color: "#06E2FF",
                                                }}
                                                outline color="success" size="lg" block type="submit">
                                                Cash Out
                                            </Button>
                                        ) : (
                                                <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#d9534f" }}>
                                                    You Do Not Have Enough Money
                                                </Card>
                                            )}

                                    </Form>
                                </div>
                                <div className="col-2">

                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>
    )
}
export default WithdrawMoneyKarrotToOfarz;