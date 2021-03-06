import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Card, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { listFundsAppSharer } from '../../../../../actions/Fund/fundActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const FundListAppSharerForAdminScreen = (props) => {

    const fundListAppSharer = useSelector((state) => state.fundListAppSharer)
    const { funds } = fundListAppSharer;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(listFundsAppSharer());
        return () => {
            //
        };
    }, []);


    const columns = [
        {
            dataField: "sharerName",
            text: "SharerName",
            sort: true,
        },
        {
            dataField: "sharerPhoneNumber",
            text: "Phone Number",
            sort: true,
        },
        {
            dataField: "mainAccount",
            text: "MainAccount",
            sort: true,
        },
        {
            dataField: "backShoppingAccount",
            text: "BackShoppingAccount",
            sort: true,
        },
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
                        All App Sharer Fund List
                    </Card>
                    <Card style={{ width: "876px", padding: "20px", borderColor: "#000" }}>
                        <Container>
                            {funds ? (
                                <ToolkitProvider
                                    bootstrap4
                                    keyField="id"
                                    data={funds}
                                    columns={columns}
                                    defaultSorted={defaultSorted}
                                    search
                                >
                                    {(props) => (
                                        <div>
                                            <Row>
                                                <Col>
                                                    <div className="float-right">
                                                        <SearchBar {...props.searchProps} placeholder="Search .." />
                                                    </div>
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
        </div >
    );
};

export default FundListAppSharerForAdminScreen;
