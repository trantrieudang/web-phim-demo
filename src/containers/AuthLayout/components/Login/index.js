import { unwrapResult } from '@reduxjs/toolkit';
import { login } from '../../userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { useHistory } from 'react-router-dom';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      if(unwrapResult(resultAction).maLoaiNguoiDung === 'QuanTri'){
        localStorage.setItem("UserAdmin", JSON.stringify(unwrapResult(resultAction)));
        history.push('/dashboard');
      }else{
        history.push('/');
      }
      
      // close dialog
      // const { closeDialog } = props;
      // if (closeDialog) {
      //   closeDialog();
      // }
    } catch (error) {
      console.log('Failed to login:', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;