import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listPaymentTypes } from '../../../../../actions/Fund/paymentTypeActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function PaymentPromotionalProduct(props) {


    const paymentTypeList = useSelector((state) => state.paymentTypeList);
    const { paymentTypes, loading, error } = paymentTypeList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPaymentTypes());
        return () => {
            //
        };
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (


                        <div className="container">
                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="row">
                                <div className="col-2">

                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-4">
                                            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c" }} >
                                                <Card.Body>
                                                    <Link to={'/submitpaymenttablecashpromotional'} style={{
                                                        textAlign: 'center', justifyContent: "center",
                                                    }}>
                                                        <Card style={{ height: "60px", backgroundColor: "#5cb85c", justifyContent: "center", color: "#fff" }}>Table Cash (Promotional)</Card>
                                                    </Link>

                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-4">
                                            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c" }} >
                                                <Card.Body>


                                                    <Link to={'/submitpaymentmainaccountpromotional'} style={{
                                                        textAlign: 'center', justifyContent: "center",
                                                    }}>
                                                        <Card style={{ height: "60px", backgroundColor: "#5cb85c", justifyContent: "center", color: "#fff" }}>Main Account (Promotional)</Card>
                                                    </Link>

                                                </Card.Body>
                                            </Card>
                                        </div>

                                        <div className="col-4">
                                            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#5cb85c" }} >
                                                <Card.Body>
                                                    <Link to={'/submitpaymentbackshoppingpromotional'} style={{
                                                        textAlign: 'center', justifyContent: "center",
                                                    }}>
                                                        <Card style={{ height: "60px", backgroundColor: "#5cb85c", justifyContent: "center", color: "#fff" }}>Back Shoping (Promotional)</Card>
                                                    </Link>

                                                </Card.Body>
                                            </Card>
                                        </div>



                                    </div>

                                </div>
                                <div className="col-2">

                                </div>

                            </div>
                        </div>
                    )
            }
        </>
    );
}
export default PaymentPromotionalProduct;
