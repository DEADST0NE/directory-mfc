import React from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 

import {Input, InputDatePicker} from '../../../../components/FormControls/FormControls';
import { required } from '../../../../utils/validators';
import s from '../../GlobalForm.module.scss';

const PostJobSalariesForm = ({ handleSubmit, onClose }) => {
    
    return (   
            <Form onSubmit={ handleSubmit } className={s.forms}>
                <Modal.Body>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Идентификатор должности </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  validate={required}  type="text" placeholder="Идентификатор должности" name='JobPositionId' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Наименование должности </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text"  placeholder="Наименование должности" name='JobPositionName ' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>  
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Оклад </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="number"  placeholder="Оклад" name='Salary' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Стоимость минуты </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  type="number" placeholder="Стоимость минуты" name='CostMinute' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Коэффициент </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  type="number" placeholder="Коэффициент" name='Coefficient' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Норма стоимости </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  type="number" placeholder="Норма стоимости" name='CostNormal' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Коэффициент должности </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  type="text" placeholder="Коэффициент должности" name='CoefficientJobPosition' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата начала </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  validate={required} className='form-control'  name='DateStart' component={ InputDatePicker }/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата окончания </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field name='DateStop' className='form-control'  component={ InputDatePicker }/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Комментарий </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  type="text" placeholder="Комментарий" name='Comment' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Сотрудник добавивщий запись </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  validate={required}  type="text" placeholder="Сотрудник добавивщий запись" name='EmployeeFioAdd' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 
                </Modal.Body>

                <Modal.Footer>  
                    <Button type='button' variant="secondary" onClick={onClose}>Отмена</Button>
                    <Button type='submit' variant="primary" >Добавить</Button>
                </Modal.Footer> 
            </Form>   
    )
}


export default reduxForm({form: 'postJobSalaries'}) (PostJobSalariesForm); 
