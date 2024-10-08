import React, { useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom'

import * as Yup from 'yup'

export default function Register() {


  // Navigator Hook --> useNavigate ** Note: Should be at the top of the component . 
  const navigate = useNavigate();

  // Storing Api response error message . 
  const [apiError, setapiError] = useState("");

  // Loading Spinner While data is coming 
  const [IsLoading, setIsLoading] = useState(false);

 

  //Api--> Sending data To Db . 
  function handleLogin(formData) {
    setIsLoading(true);
    // Call Api . 
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formData)
      .then((res) => {
        setIsLoading(false);
        if (res.data.message == "success") {
         
          localStorage.setItem("userToken", res.data.token);
          navigate("/");
        }

      }
      ) // Working if Request succeded  . 
      .catch((res) => { setIsLoading(false); setapiError(res.response.data.message) }) // Catching Api error message . 
  }


  // Validation Using "yup" library .

  let schema = Yup.object().shape({
    email: Yup.string().email("Invalid Email ").required("Email Is Required "),
    password: Yup.string().matches(/^[A-Za-z0-9]{6,10}$/, "Password Should Be From 6-10 Chars").required("Password Is Required"),
  })


  // formik Library  step 1 
  let formik = useFormik({

    initialValues:
    {
    
      email: "",    
      password: "",
    },
    // B3d m3ml el validation function bzod el attribute dh . 
    validationSchema: schema
    ,
    onSubmit: handleLogin // Method Call Api . 
  })



  return (
    <>
      <section className=' py-5'>

        <div className="regForm w-25 m-auto  border rounded p-4">

          <h1 className=' text-center'>Login now!</h1>

          {/* Link formik with the form step2 */}
          <form className='border rounded p-2' onSubmit={formik.handleSubmit}>
         
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" className="form-control" id="email" />
            </div>
            {/* real time error Message Shown if input is inValid and touched  */}
            {
              formik.errors.email && formik.touched.email ? <div className="alert alert-danger py-0" role="alert">
                {formik.errors.email}
              </div> : null
            }
           
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" id="password" />
            </div>
            {/* real time error Message Shown if input is inValid and touched  */}
            {
              formik.errors.password && formik.touched.password ? <div className="alert alert-danger py-0" role="alert">
                {formik.errors.password}
              </div> : null
            }
         

            <button type="submit" className="btn btn-primary">{IsLoading ? <i className=' fas fa-spinner fa-spin'></i> : "Submit"}</button>

            <Link to="/register" className=' text-decoration-none'><div className='text-center'>Don't have Account ? Register </div></Link>

            {/* Error Message Shown if there is api response error or success */}
            {apiError ? <div className="alert alert-danger py-2 mt-1" role="alert">
              {apiError}
            </div> : null}

          </form>

        </div>

      </section>
    </>
  )
}
