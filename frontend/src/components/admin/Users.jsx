import React, { useState, useEffect } from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Container from '@material-ui/core/Container';

function Users() {
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const [datas, SetDatas] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/admin/getUsers").then(async (res) => {
      await SetDatas(res.data)
      console.log('====....', datas);
    })
  }, [])
  const handleButtonClick=(id)=>{
    console.log('button clicked',id);
  }
  const columns = [
    {
      name: 'Id',
      selector: row => row._id,
    },
    {
      name: 'e-mail',
      selector: row => row.email,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
    },
    {
      name: 'createdAt',
      selector: row => row.createdAt,
    },
    {
      name:'block',
      cell: (row) => <button onClick={handleButtonClick(row._id)}>Action</button>,
      
      button: true,
    },

  ];

  const data = datas.map((item, index) => {
    
    return {
      id: 1,
      _id: item._id,
      email: item.email,
      phone: item.phone,
      createdAt: item.createdAt,

    }
  })
  return (
    <Container maxWidth="xl">
      <DataTable
        title="Car Companies"
        columns={columns}
        data={data}
        selectableRows
        expandableRowsComponent={ExpandedComponent}
        pagination
      /></Container>
  );
}


export default Users;
