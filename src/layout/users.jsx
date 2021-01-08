import React, { useEffect, useState } from 'react';
import Content from '../components/content';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Axios from 'axios';
import { Link, useHistory } from "react-router-dom";

const Users = (props) => {

  console.log(props);
  const [users, setUsers] = useState([])
  const history = useHistory();
  const shrinkPage = props.shrinkPage;
  const handleToggleSidebar = props.handleToggleSidebar;

  // const updateValue = (params) => {
  //   const userData = params.data;
  //   console.log(userData);
  //   Axios.put(`http://localhost:3001/user/update/${userData.id}`, userData).then(res => {
  //       console.log(res);
  //   }).catch((e)=>{
  //       console.log(e);
  //   });
  // }

  useEffect( () => {
    Axios.get(`http://localhost:3001/user/withoptions/option`)
      .then(res => {
        console.log(res.data);
        const persons = res.data;
        persons ? setUsers(persons) : setUsers([]);
    })
  }, [])

  return (
    <Content {...props}>
      <div style={{marginBottom:'45px'}}>
        <h1>Mostra tutti gli utenti</h1>
        <Link to="/add-user"><button className="add-button">Aggiungi Nuovo</button></Link>
      </div>
      <div className="ag-theme-alpine" style={ { height: 400 } }>
        <h3>Doppio click per modificare l'utente</h3>
          <AgGridReact
              rowData={users} 
              onRowDoubleClicked=
              { 
                (user) => {
                  const userData = user.data;
                  // console.log(userData);
                  history.replace(
                    {
                      pathname:'/edit-user',
                      state: { user: userData },
                    }
                  )
                }
              }
          >
              <AgGridColumn resizable sortable={true} filter={true} field="id" ></AgGridColumn>
              <AgGridColumn resizable editable sortable={true} filter={true} field="email"></AgGridColumn>
              <AgGridColumn resizable editable sortable={true} filter={true} field="firstName"></AgGridColumn>
              <AgGridColumn resizable editable sortable={true} filter={true} field="lastName"></AgGridColumn>
              <AgGridColumn resizable sortable={true} filter={true} field="type"></AgGridColumn>
              <AgGridColumn resizable editable sortable={true} filter={true} field="address"></AgGridColumn>
          </AgGridReact>
      </div>
    </Content>
  )
}

export default Users;