import React from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {Input} from '../../../../components/FormControls/FormControls';
import { required } from '../../../../utils/validators';
import s from '../../GlobalForm.module.scss';

const PostJobPositionsForm = ({ handleSubmit, onClose, onSubmit }) => {
    
    return (   
            <Form onSubmit={ handleSubmit } className={s.forms}>
                <Modal.Body>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Наименование должности </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  validate={required} className='form-control' type="text" placeholder="Наименование должности" name='Name' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Комментарий </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" className='form-control' placeholder="Комментарий" name='Comment' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>  
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Сотрудник добавивщий запись </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" className='form-control' placeholder="Сотрудник добавивший запись" name='EmployeeFioAdd' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>  
                    <Button type='button' variant="secondary" onClick={onClose}>Отмена</Button>
                    <Button type='submit' variant="primary" onClick={onSubmit}>Добавить</Button>
                </Modal.Footer> 
            </Form>   
    )
}


export default reduxForm({form: 'postJobPositions'}) (PostJobPositionsForm); 
