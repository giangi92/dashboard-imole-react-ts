import React, { useEffect, useState } from 'react';
import Content from '../components/content';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Axios from 'axios';

const Users = (props) => {

  const [users, setUsers] = useState([])

  const updateValue = (params) => {
    const userData = params.data;
    console.log(userData);
    Axios.put(`http://localhost:3001/user/update/${userData.id}`, userData).then(res => {
        console.log(res);
    }).catch((e)=>{
        console.log(e);
    });
  }

  useEffect( () => {
    Axios.get(`http://localhost:3001/user/withoptions/option`)
      .then(res => {
        console.log(res.data);
        const persons = res.data;
        persons ? setUsers(persons) : setUsers([]);
    })
  })

  return (
    <Content {...props}>
      <h1>Mostra tutti gli utenti</h1>
      <div className="ag-theme-alpine" style={ { height: 400 } }>
          <AgGridReact
              rowData={users}>
              <AgGridColumn sortable={true} filter={true} field="id"></AgGridColumn>
              <AgGridColumn editable onCellValueChanged={(e)=>{updateValue(e)}} sortable={true} filter={true} field="email"></AgGridColumn>
              <AgGridColumn editable onCellValueChanged={(e)=>{updateValue(e)}} sortable={true} filter={true} field="firstName"></AgGridColumn>
              <AgGridColumn editable onCellValueChanged={(e)=>{updateValue(e)}} sortable={true} filter={true} field="lastName"></AgGridColumn>
              <AgGridColumn sortable={true} filter={true} field="type"></AgGridColumn>
              <AgGridColumn editable onCellValueChanged={(e)=>{updateValue(e)}} sortable={true} filter={true} field="address"></AgGridColumn>
          </AgGridReact>
      </div>
    </Content>
  )
}

export default Users;