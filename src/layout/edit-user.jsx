import React, { useState } from 'react'
import Content from '../components/content';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

const EditUser = (props) => {  
  console.log(props);
  const userToEdit = props.location.state.user;
  const { push } = useHistory();
  const [cancel, setCancel] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const updateValue = (params) => {
    const userData = params;
    console.log(userData);
    Axios.put(`http://localhost:3001/user/update/${userData.id}`, userData).then(res => {
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

  const deleteUser = (userId) => {
    Axios.delete(`http://localhost:3001/user/${userId}`).then(res => {
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

  console.log(userToEdit);
  return (
    <Content {...props}>
      <h2>Modifica utente </h2>
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
                )
              }}
              >
                Torna indietro
              </button>
            </div>
          </div>
        </Popup>
      }
      {
        showDeletePopup && 
        <Popup open={showDeletePopup} position="right center">
          <div className="modal">
            <a href className="close" onClick={()=>{setShowDeletePopup(false)}}>
              &times;
            </a>
            Sicuro di voler eliminare questo utente?
            <div className="popup-buttons">
              <button onClick = {()=>{setShowDeletePopup(false);}}>No, ho cambiato idea</button>
              <button onClick = {()=>{
                //elimina utente e torna alla lista
                deleteUser(userToEdit.id);
              }}
              >
                Elimina
              </button>
            </div>
          </div>
        </Popup>
      }
      <Formik
        initialValues={
          { id: userToEdit.id, 
            email: userToEdit.email,
            firstName: userToEdit.firstName,
            lastName: userToEdit.lastName,
            type: userToEdit.type,
            address: userToEdit.address,
          }
        }

        validate={values => {
          const errors = {};
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
          // else if(!isNaN(values.firstName) || !isNaN(values.lastName) || !isNaN(values.address) || !isNaN(values.type)){
          //   errors.string = 'Invalid input';
          // }
          return errors;
        }}
      
        onSubmit={(values, { setSubmitting }) => {
          if(cancel){
            setSubmitting(false);
            console.log(JSON.stringify(values));
            console.log(JSON.stringify(userToEdit));
            console.log(JSON.stringify(values) !== JSON.stringify(userToEdit));
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
           <Field type="type" name="type" component="select">
            <option value="CONSUMER">CONSUMER</option>
            <option value="VENDOR">VENDOR</option>
           </Field>
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
           <button type="button"
            onClick = {()=>{
              setShowDeletePopup(true);
            }}
           >
            Elimina
           </button>
         </Form>
       )}
      </Formik>
    </Content>
  )
}

export default EditUser;