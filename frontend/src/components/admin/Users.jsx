import React, { useState, useEffect } from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Container from '@material-ui/core/Container';

function Users() {
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const [datas, SetDatas] = useState([])

    const getInformations=async ()=>{
      const  respo = await axios.get("http://localhost:5000/admin/getUsers")
      console.log('eeee',respo);
      SetDatas(respo.data)
    }
  useEffect(() => {
    getInformations()
     
  }, [])

  const handleButtonBlock = async (id)=>{
    console.log('button clicked',id);
    const  respo = await axios.post("http://localhost:5000/admin/block",{id:id})
      console.log('eeee',respo);
    
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
      cell: (row) => <button onClick={()=>handleButtonBlock(row._id)}>{row.isBlocked ? "UnBlock" : "Block"}</button>
      
    },

  ];

  // const data = datas.map((item, index) => {    
  //   return {      
  //     id: 1,
  //     // index:index+1,
  //     _id: item._id,
  //     email: item.email,
  //     phone: item.phone,
  //     createdAt: item.createdAt,

  //   }
  // })
  return (
    <Container maxWidth="xl">
      <DataTable
        title="Car Companies"
        columns={columns}
        data={datas}
        selectableRows
        
        // expandableRowsComponent={ExpandedComponent}
        pagination
      /></Container>
  );
}


export default Users;
