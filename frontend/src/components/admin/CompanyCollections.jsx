import React,{useState,useEffect} from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';

import Container from '@material-ui/core/Container';
// import ass from  '/images/company/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg'


function CompanyCollections() {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const [datas,SetDatas]=useState([])
  useEffect(()=>{
         axios.get("http://localhost:5000/admin/getCompanies").then(async(res)=>{
              await SetDatas(res.data)
             console.log('====....',datas);
        })
    },[])
const columns = [
    {
        name: 'Title',
        selector: row => row.title,
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
        id: 1,
        title: item.name,
        
        image:t
    }
}) 
  


  

  return (
    <Container maxWidth="md">
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

export default CompanyCollections;
