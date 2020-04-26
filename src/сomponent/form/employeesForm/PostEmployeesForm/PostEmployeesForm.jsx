import React from 'react'; 
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux'; 

import FormFileUpload from '../../../../components/FormFileUpload';
import { Input, PhoneInput, InputDatePicker, IsStructuralSubdivision, FormSelect, SnilsInput, InnInput } from '../../../../components/FormControls/FormControls';
import { required } from '../../../../utils/validators';
import s from '../../GlobalForm.module.scss';

let PostEmployeesForm = ({ handleSubmit, onClose, officesData, jobPositionsdata }) => {

    let massOffices = officesData ? officesData.map( (item)=>( { 'value': item.id, 'text': item.name} ) ) : [{'value':null, 'text': 'Филиалы не найдены'}];
    let massJobPosition = jobPositionsdata ? jobPositionsdata.map( (item)=>( { 'value': item.id, 'text': item.name} ) ) : [{'value':null, 'text': 'Должности не найдены'}];

    return (   
            <Form onSubmit={ handleSubmit } className={s.forms}>
                <Modal.Body>
                    <h5  className='normalText'>Данные о сотруднике</h5>
                    <hr /> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Фотография </Form.Label>
                            </Col>
                            <Col sm="6">
                                <FormFileUpload />  
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Фамилия </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  validate={required} type="text" placeholder="Фамилия" name='Fio.LastName' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Имя </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" placeholder="Имя" name='Fio.Name' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>  
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Отчество </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Отчество" name='Fio.MiddleName' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата рождения </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field className='form-control' placeholder="Дата рождения" name='Passport.BirthDate' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Место рождения </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Место рождения" name='Passport.BirthPlace' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <h5  className='normalText'>Контактная информация сотрудника</h5>
                    <hr /> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Номер телефона </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" className='form-control' placeholder="Номер телефона" name='PhoneNumber' component={PhoneInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Адрес электронной почты </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Адрес электронной почты" name='Email' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <h5  className='normalText'>Пастортные данные сотрудника</h5>
                    <hr /> 
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Серия </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Серия" name='Passport.Serial' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Номер </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Номер" name='Passport.Number' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата выдачи </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field className='form-control' placeholder="Дата выдачи" name='Passport.Number' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Место выдачи паспорта </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Место выдачи паспорта" name='Passport.IssuePlace' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Код документа </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Код документа" name='Passport.Code' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <h5  className='normalText'>Дополнительные документы сотрудника</h5>
                    <hr /> 
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> СНИЛС </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" className='form-control' placeholder="СНИЛС" name='Snils' component={SnilsInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> ИНН </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" className='form-control' placeholder="ИНН" name='Inn' component={InnInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <h5  className='normalText'>Данные доступа сотрудника к работе</h5>
                    <hr /> 
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Логин для в входа в АИС </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" placeholder="Логин для в входа в АИС" name='Login' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Пароль для в входа в АИС </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" placeholder="Пароль для в входа в АИС" name='Password' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Подсказка к паролю </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Подсказка к паролю" name='PasswordHelp' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Табельный номер </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Табельный номер" name='PersonalNumber' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Серийный номер ЭЦП сертификата </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Серийный номер ЭЦП сертификата" name='CertificateNumber' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Идентификатор офиса </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} className='form-control' type="text" placeholder="Идентификатор офиса" name='OfficeId' component={FormSelect(massOffices)}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата начала действия УЗ </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} className='form-control' placeholder="Дата начала действия УЗ" name='DateStart' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата окончания действия УЗ </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field className='form-control' placeholder="Дата начала действия УЗ" name='DateStop' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Идентификатор дожности </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} className='form-control' type="text" placeholder="Идентификатор дожности" name='JobPositionId' component={FormSelect(massJobPosition)}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Идентификатор статуса </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" placeholder="Идентификатор статуса" name='StatusId' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата начала действия статуса </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} className='form-control' placeholder="Дата начала действия статуса" name='StatusDateStart' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата окончания действия статуса </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field className='form-control' placeholder="Дата окончания действия статуса" name='StatusDateStop' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Статус активности УЗ </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} className='form-control' type="text" placeholder="Статус активности УЗ" name='IsActive' component={IsStructuralSubdivision}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата начала активности аккаунта </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} className='form-control' placeholder="Дата начала активности аккаунта" name='IsActiveDateStart ' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата окончания активности аккаунта </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} className='form-control' placeholder="Дата окончания активности аккаунта" name='IsActiveDateStop ' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Интенсивность </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="number" placeholder="Интенсивность" name='Intensity' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Ставка </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="number" placeholder="Ставка" name='Rate' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> ФИО сотудника добавивший записть </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" placeholder="ФИО сотудника добавивший запистьвка" name='EmployeeFioAdd' component={Input}/> 
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


PostEmployeesForm = reduxForm({ 
    form: 'postEmployees'
}) (PostEmployeesForm)

PostEmployeesForm = connect(
    state => ({
        initialValues:  {'Foto': state.fotoFile.file}
    }),               
)(PostEmployeesForm)

export default PostEmployeesForm; 
