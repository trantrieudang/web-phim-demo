import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '../../userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { useHistory } from 'react-router-dom';
Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      
      

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log(user);
      

      enqueueSnackbar('Register successfully!!! 🎉', { variant: 'success' });
      history.push('/');
    } catch (error) {
      if(error.message === 'Request failed with status code 500'){
        enqueueSnackbar('Tên tài khoản hoặc email đã tồn tại!!!', { variant: 'error' });
      } else{
        enqueueSnackbar(error.message, { variant: 'error' });
      }
      console.log('Failed to register:', error);
      
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
