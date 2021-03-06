import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { FormGroup, Col, Label, Input, Row, Button } from 'reactstrap';

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
}) => (
        <Row>
            <Col md='12'>
                <Label htmlFor="{input}" className="col-form-label">
                    {label}
                </Label>
            </Col>
            <Col md='12'>
                <Input
                    {...input}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                >
                </Input>
                {touched &&
                    ((error && <p style={{ color: "red" }}>{error}</p>) || (warning && <p style={{ color: "brown" }}>{warning}</p>))}
            </Col>
        </Row>
    );

const mapStateToProps = (state) => {

    return {
        initialValues: {
            name: state.countryDetails.country.name,
            countryCode: state.countryDetails.country.countryCode
        }
    };
};

class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="name"
                                label="Name"
                                component={renderField}
                            />
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="countryCode"
                                label="CountryCode"
                                component={renderField}
                            />
                        </FormGroup>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col md="12">
                        <FormGroup>
                            <Button
                                color="dark"
                                type="submit"
                                disabled={this.props.submitting}
                            >
                                Submit
                             </Button>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </form>
        )
    }
}

FormComponent = reduxForm({
    form: "fromCreateCategory",
    enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);