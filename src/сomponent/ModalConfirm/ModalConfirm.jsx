import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';    

import s from './ModalConfirm.module.scss';
const ModalConfirm = ({ show, onClose, onSubmit}) => { 
    return( 
        <Modal show={show} onHide={onClose}>  
                <Modal.Header closeButton>
                    <Modal.Title>Подтвердите удаление</Modal.Title>
                </Modal.Header>

                <Modal.Body className={s.modalConfirmBody}>
                    <Button variant="secondary" onClick={ onClose }>Отмена</Button>
                    <Button type='submit' variant="primary" onSubmit={ onSubmit }>Удалить</Button>
                </Modal.Body> 
        </Modal>
    )
}

export default ModalConfirm;