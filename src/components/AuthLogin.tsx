import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import * as yup from 'yup'
import { authActions } from '../Redux-Toolkit/store';


interface AuthLoginValues {
    email: string;
    password: string;
}

const AuthLogin: React.FC = () => {
    const dispatch = useDispatch();
    const initialValues: AuthLoginValues = {
        email: '',
        password: '',
    };
    const validationSchema = yup.object({
        email: yup.string().required('Required').email('Invalid email address'),
        password: yup.string().required('Required'),

    });
    const onSubmit = () => {
        dispatch(authActions.login());
        console.log('submitted..');
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {
                    formik => {
                        return <Form>
                            <h2>Login Form</h2>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <Field type="email" id="email" name="email" />
                                <ErrorMessage name="email" component="div" className='error' />
                            </div>
                            <div>
                                <label htmlFor="pass">Password:</label>
                                <Field type="password" id="pass" name="password" />
                                <ErrorMessage name="password" component="div" className='error' />
                            </div>
                            <button type='submit' >Submit</button>
                        </Form>
                    }
                }
            </Formik>
        </>
    );
}

export default AuthLogin;
