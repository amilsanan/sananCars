import React,{useState,useEffect} from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Container from '@material-ui/core/Container';

function Collections() {
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  const [datas,SetDatas]=useState([])
  useEffect(()=>{
         axios.get("http://localhost:5000/admin/getCars").then(async(res)=>{
              await SetDatas(res.data)
             console.log('====....',datas);
        })
    },[])
const columns = [
    {
        name: 'id',
        selector: row => row.id,
    },
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Brand',
        selector: row => row.brand,
    },
    {
        name: 'Price',
        selector: row => row.price,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
    {
        name: 'Kms',
        selector: row => row.kms,
    },
    {
        name: 'Fuel',
        selector: row => row.fuel,
    },
    {
        name: 'Registration Number',
        selector: row => row.regNo,
    },
    
    {
        name: 'image',
        selector: row =><img width={50} height={50} src={row.image}  alt="jk" />
    },
];

const data =datas.map((item,index)=>{
    console.log('kljhgd',item.imagename,);
    const t ='/images/company/'+item.imagename
  return  {
        id: item._id,
        name: item.name,
        brand: item.brand,
        price: item.price,
        year: item.year,
        kms: item.kms,
        fuel: item.fuel,
        regNo: item.regNo,               
        image:t
    }
}) 
  return (
    <Container maxWidth="xl">
    <DataTable
        title="Car Collections"
        columns={columns}
        data={data}
        selectableRows
        expandableRowsComponent={ExpandedComponent}
        pagination
    /></Container>
);
}

export default Collections;
