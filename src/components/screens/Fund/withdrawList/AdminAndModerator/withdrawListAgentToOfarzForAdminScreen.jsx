import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Card, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { listPaymentsAppSharer } from '../../../../../actions/Fund/paymentActions';
import { listWithdrawAgentToOfarz } from '../../../../../actions/Fund/withdrawActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const WithdrawListAgentToOfarzForAdminScreen = (props) => {

    const [agentPhnNumber, setAgentPhnNumber] = useState('');

    const withdrawListAgentToOfarz = useSelector((state) => state.withdrawListAgentToOfarz)
    const { withdraws } = withdrawListAgentToOfarz;

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //
        };
    }, []);


    const submitHandler = () => {

        dispatch(listWithdrawAgentToOfarz(agentPhnNumber))
    }

    const columns = [
        {
            dataField: "userName",
            text: "Payer Name",
            sort: true,
        },
        {
            dataField: "userPhoneNumber",
            text: "Payer Phone Number",
            sort: true,
        },
        {
            dataField: "ofarzPhoneNumber",
            text: "Ofarz Phone Number",
            sort: true,
        },
        {
            dataField: "amount",
            text: "Amount",
            sort: true,
        }
    ];


    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8">
                    <Card style={{ width: "876px", height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", borderColor: "#5cb85c", background: "#000" }}>
                        Agent To Ofarz Cash Out List
                    </Card>
                    <Card style={{ width: "876px", padding: "20px", borderColor: "#000" }}>
                        <Container>
                            {withdraws ? (
                                <ToolkitProvider
                                    bootstrap4
                                    keyField="id"
                                    data={withdraws}
                                    columns={columns}
                                    defaultSorted={defaultSorted}
                                    search
                                >
                                    {(props) => (
                                        <div>
                                            <Row>
                                                <Col>
                                                    <Form onSubmit={submitHandler}>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <FormGroup>
                                                                    <Input
                                                                        type="text"
                                                                        name="countInStock"
                                                                        id="countInStock"
                                                                        placeholder="Enter Agent Phone Number"
                                                                        size="lg"
                                                                        value={agentPhnNumber}
                                                                        onChange={(e) => setAgentPhnNumber(e.target.value)}
                                                                    />
                                                                </FormGroup>
                                                            </div>
                                                            <div className="col-6">
                                                                <Button style={{
                                                                    color: "#000"
                                                                }} outline color="dark" size="lg" block type="submit">
                                                                    Search
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </Col>
                                            </Row>
                                            <BootstrapTable
                                                {...props.baseProps}
                                                pagination={paginationFactory()}
                                            />
                                        </div>
                                    )}
                                </ToolkitProvider>
                            ) : (
                                    <div className="text-center">
                                        {props.errorCategoriesList ? (
                                            <h4>{props.errorCategoriesList}</h4>
                                        ) : (
                                                <Spinner color="dark" />
                                            )}
                                    </div>
                                )}
                        </Container>
                    </Card>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>

    );
};

export default WithdrawListAgentToOfarzForAdminScreen;
