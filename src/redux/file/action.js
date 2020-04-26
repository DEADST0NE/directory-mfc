import {
    FILE_FORM_UPLOADED,
    FILE_FORM_CLEAR
} from '../constActions';

export const fileFormUploaded = (file) => ({
    type: FILE_FORM_UPLOADED,
    payload: file
});

export const fileFormClear = () => ({
    type: FILE_FORM_CLEAR
});