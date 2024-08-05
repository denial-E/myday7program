import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const FormikEdit = ({id}) => {
    const navigate=useNavigate()
    const[Data, setEditData]=useState({
        Title:'',
        Author:'',
        ISBN_number:'',
        Publication_date:'',
        Author_name:'',
        book:'',
        birth_day:'',
        short_bio:'',

    })
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        await axios.get(`https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products/${id}`)
        .then(res=>setEditData(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        formik.setValues(Data)
    },[Data])

    const validationschema=Yup.object().shape({
        Title:Yup.string().required('Title is required'),
        Author:Yup.string().required('Author is required'),
        ISBN_number:Yup.string().required('ISBN_number is required'),
        Publication_date:Yup.string().required('Publication_date is required'),
        Author_name:Yup.string().required(' Author_name is required'),
        book:Yup.string().required('book is required'),
        birth_day:Yup.string().required('birth_day is required'),
        short_bio:Yup.string().required('short_bio is required'),

    })
    const formik=useFormik({
        initialValues:{ 
            Title:'',
            Author:'',
            ISBN_number:'',
            Publication_date:'',
            Author_name:'',
            book:'',
            birth_day:'',
            short_bio:'',
       },
        validationschema,
        onSubmit:async(values)=>{
            await axios.put(`https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products/${id}`,values)
                .then(res=>console.log(res.data))
                .catch((err)=>console.log(err))
            navigate('/product')
            alert('sussesfully edit')
        }
    })



    // const handleChange=(e)=>{
    //     const{name, value}= e.target
    //     setEditData((preData)=>({
    //         ...preData,[name]:value
    //     }))

    // }
    // const handleFormSubmit=async(e)=>{
    //     e.preventDefault()
    //     await axios.put(`https://66a7e08a53c13f22a3d1569d.mockapi.io/api/products/${id}`,editData)
    //     .then(res=>console.log(res.data))
    //     .catch((err)=>console.log(err))
    //     navigate('/products')
    //     alert('sussesfully edit')

    // }
    return (
        <div>
             <form  style={{width:'400px',margin:'50px 50px 50px 50px',backgroundColor:'whitesmoke',borderRadius:'5px',justifyContent:'center',padding:'30px',marginLeft:'40%'}}   onSubmit={formik.handleSubmit}>
                <h1 style={{textAlign:'center',color:'green'}}>Book Record</h1>
                <label>Title:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='Title' value={formik.values.Title} onChange={formik.handleChange}/></label><br/>
                <div className='text-danger'>{formik.errors.Title}</div>
                <label>Author:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='Author' value={formik.values.Author} onChange={formik.handleChange}/></label><br/>
                <div className='text-danger'>{formik.errors.Author}</div>
                <label>ISBN_number:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='ISBN_number' value={formik.values.ISBN_number} onChange={formik.handleChange}/></label><br/>
                <div className='text-danger'>{formik.errors.ISBN_number}</div>
                <label>Publication_date:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='Publication_date' value={formik.values.Publication_date} onChange={formik.handleChange}/></label><br/>
                <div className='text-danger'>{formik.errors.Publication_date}</div>
                <button style={{marginLeft:'40%',marginTop:'5%',width:'100px'}} type='submit'>Update</button>
            </form>
            <div>
            <form  style={{width:'400px',margin:'50px 50px 50px 50px',backgroundColor:'whitesmoke',borderRadius:'5px',justifyContent:'center',padding:'30px',marginLeft:'40%'}}   onSubmit={formik.handleSubmit}>
                <h1 style={{textAlign:'center',color:'green'}}>Author Detail</h1>
                <label>Author_name<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='Author_name' value={formik.values.Author_name} onChange={formik.handleChange}/></label><br/>
                <div className='text-danger'>{formik.errors.Author_name}</div>
                <label> book:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name=' book' value={formik.values. book} onChange={formik.handleChange}/></label><br/>
                <div className='text-danger'>{formik.errors. book}</div>
                <label>birth_day:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='birth_day' value={formik.values.birth_day} onChange={formik.handleChange}/></label><br/>
                <div className='text-danger'>{formik.errors.birth_day}</div>
                <label>short_bio:<input style={{display:'flex',flexDirection:'column',marginBottom:'15px',width:'180%'}} type='text' name='short_bio' value={formik.values.short_bio} onChange={formik.handleChange}/></label><br/>
                <div className='text-danger'>{formik.errors.short_bio}</div>
                <button style={{marginLeft:'40%',marginTop:'5%',width:'100px'}} type='submit'>Update</button>
            </form>
            </div>
        </div>
        
    );
};

export default FormikEdit;