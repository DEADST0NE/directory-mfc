import React from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';
import { Field, reduxForm} from 'redux-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import { connect } from 'react-redux'; 

import {Input, PhoneInput, SnilsInput, InnInput, KppInput, Textaria, OgrnInput, OkatoInput, OktmoInput, IsStructuralSubdivision} from '../../../components/FormControls/FormControls';
import { email, required } from '../../../utils/validators';
import s from '../GlobalForm.module.scss';

let OfficesForm = ({ handleSubmit, onClose }) => { 
    return (   
            <Form onSubmit={ handleSubmit } className={s.forms}>
                <Modal.Body> 
                    <h5  className='normalText'>Основные данные</h5>
                    <hr /> 
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Мнемоника </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" placeholder="Мнемоника" name='mnemo' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Наименование МФЦ </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" placeholder="Наименование МФЦ"  name='name' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>  
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Краткое наименование </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" placeholder="Краткое наименование" name='smallName' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Адрес </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Адрес" name='Нужно Узнать' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Количество населния </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="number" placeholder="Количество населния в Н/П на МФЦ" name='countPopulation' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Телефон </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Телефон" className='form-control'  name='phoneNumber' component={PhoneInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Сайт </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Сайт" name='website' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 
                    <h5  className='normalText'>Почта</h5>
                    <hr /> 
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Email </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field placeholder="Офицальный адрес почта" validate={email} name='email' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Логин </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Логин от почты для рассылок" name='emailLogin' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Пароль </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Пароль от почты для рассылок" name='emailPassword' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Сервер </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Сервер почты для рассылок" name='emailServer' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Порт </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Порт почты для рассылок" name='emailPort' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>  
                    <h5  className='normalText'>Дополнительно</h5>
                    <hr />  
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > ИНН </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="ИНН" className='form-control'  name='inn' component={InnInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > КПП </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="КПП" className='form-control'  name='kpp' component={KppInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > ОГРН </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="ОГРН" className='form-control'  name='ogrn' component={OgrnInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > ОКТМО </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="ОКТМО" className='form-control'  name='oktmo' component={OktmoInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > ОКАТО </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="ОКАМО" className='form-control'  name='okato' component={OkatoInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > СНИЛС директора </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="СНИЛС директора" className='form-control'  name='esiaOperatorSnils' component={SnilsInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > ИАС МКГУ </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="ИАС МКГУ" name='Нужно уточнить' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > ЕСИА центр </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="ЕСИА центр" name='Нужно уточнить' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Сервер Call-центра </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Сервер Call-центра" name='callCenterServer' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Количество окон </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Количество окон" name='quantityWindows' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Структурное подразделение </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Структурное подразделение" className='form-control'  name='isStructuralSubdivision' component={IsStructuralSubdivision}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Индефикатор МФЦ в системе МДМ </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Индефикатор МФЦ в системе МДМ" name='mdmUid' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Индефикатор МФЦ на ЕПГУ </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Индефикатор МФЦ на ЕПГУ" name='Нужно уточнить' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Широта, долгота </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Широта, долгота" name='geographicCoordination' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Скайп </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Скайп" name='skype' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > График работы </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="График работы" name='schedule' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Перечень ТОСПов </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Перечень ТОСПов" name='tosp' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Удобства в  МФЦ </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Удобства в  МФЦ" name='convenience' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label > Коментарий </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Коментарий" className='form-control'  name='Нужно уточнить' component={Textaria}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>  
                    <Button type='button' variant="secondary" onClick={onClose}>Отмена</Button>
                    <Button type='submit' variant="primary">Добавить</Button>
                </Modal.Footer> 
            </Form>   
    )
}

OfficesForm = reduxForm({ 
    form: 'offices'
}) (OfficesForm)

OfficesForm = connect(
    state => ({
        initialValues: state.offices.modificationData
    }),               
)(OfficesForm)

export default OfficesForm;
