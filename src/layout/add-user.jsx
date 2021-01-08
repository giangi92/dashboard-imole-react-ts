import React, { useState } from 'react'
import Content from '../components/content';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

const AddUser = (props) => {  
  let userToEdit = {
    id: "", 
    email: "",
    firstName: "",
    lastName: "",
    type: "",
    address: "",
  };
  const { push } = useHistory();
  const [cancel, setCancel] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const updateValue = (params) => {
    const userData = params;
    console.log(userData);
    Axios.post(`http://localhost:3001/user/add`, userData).then(res => {
        console.log(res);
        push(
          {
            pathname:'/users',
          }
        )
    }).catch((e)=>{
        console.log(e);
    });
  }

  return (
    <Content {...props}>
      <h2>Aggiungi utente </h2>
      {
        showPopup && 
        <Popup open={showPopup} position="right center">
          <div className="modal">
            <a href className="close" onClick={()=>{setShowPopup(false)}}>
              &times;
            </a>
            Hai delle modifiche non salvate, vuoi tornare indietro?
            <div className="popup-buttons">
              <button onClick = {()=>{setShowPopup(false); setCancel(false)}}>No, ho cambiato idea</button>
              <button onClick = {()=>{
                push(
                {
                  pathname:'/users',
                }
              )}}
              >Torna indietro</button>
            </div>
          </div>
        </Popup>
      }
      <Formik
        initialValues={
          { id: "", 
            email: "",
            firstName: "",
            lastName: "",
            type: "",
            address: "",
          }
        }

        validate={values => {
          const errors = {};
          if(!cancel){
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
  
            if(!values.firstName){
              errors.firstName = 'Required'
            }
        
            return errors;
          }
          
        }}
      
        onSubmit={(values, { setSubmitting }) => {
          if(cancel){
            setSubmitting(false);
            console.log(JSON.stringify(values));
            console.log(JSON.stringify(values) !== undefined);
            if(JSON.stringify(values) !== JSON.stringify(userToEdit)){
              setShowPopup(true);
            }else{
              push(
                {
                  pathname:'/users',
                }
              )
            }
          }else{
            updateValue(values);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
         <Form className="input-form">
           <label htmlFor="id">Id</label>
           <Field type="id" name="id" disabled />
           <br />
           <label htmlFor="email">email</label>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <br />
           <label htmlFor="firstName">First Name</label>
           <Field type="firstName" name="firstName" />
           <ErrorMessage name="firstName" component="div" />
           <br />
           <label htmlFor="lastName">Last Name</label>
           <Field type="lastName" name="lastName" />
           <ErrorMessage name="string" component="div" />
           <br />
           <label htmlFor="type">type</label>
           <Field type="type" name="type" />
           <ErrorMessage name="string" component="div" />
           <br />
           <label htmlFor="address">Address</label>
           <Field type="address" name="address" />
           <ErrorMessage name="string" component="div" />
           <br />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           <button type="submit" onClick={()=>{
             setCancel(true);
            }}
           >
             Annulla
           </button>
         </Form>
       )}
      </Formik>
    </Content>
  )
}

export default AddUser;