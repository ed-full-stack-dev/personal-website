import React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react';
import { navigate } from 'gatsby';
import { encode } from '../utils/form-methods';

interface FormState {
  subject: string;
  name: string;
  email: string;
  message: string;
}

interface StatusState {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

const useForm = (initialState: FormState) => {
  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<StatusState>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' },
  });
  const disabled = state.subject === '' || state.name === '' || state.email === '' || state.message === '';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then(() => {
        setState(initialState);
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message Sent! Checkout the blog section (ツ)' },
        });
        setTimeout(() => {
          navigate('/blog');
        }, 3000);
      })
      .catch((error) => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: 'Something Went Wrong! ¯\\_(ツ)_/¯ ' },
        });
      });
  };

  return { state, status, handleChange, handleSubmit, disabled };
};

export default useForm;