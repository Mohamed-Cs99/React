import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { UserContext } from '../../Context/UserContext';


export default function Register() {

  let { userLogin, setuserLogin } = useContext(UserContext);
  // Navigator Hook --> useNavigate ** Note: Should be at the top of the component . 
  const navigate = useNavigate();

  // Storing Api response error message . 
  const [apiError, setapiError] = useState("");

  // Loading Spinner While data is coming 
  const [IsLoading, setIsLoading] = useState(false);

  // Creation Message
  const [newAccount, setNewAccount] = useState("");

  //Api--> Sending data To Db . 
  function handleRegistration(formData) {
    setIsLoading(true);
    // Call Api . 
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formData)
      .then((res) => {
        setIsLoading(false);
        if (res.data.message == "success") {
          // setapiError("");
          // setNewAccount("Account Created Successfully.");
          localStorage.setItem("userToken", res.data.token);
          setuserLogin(res.data.token);
          navigate("/"); // go to home page. 
        }

      }
      ) // Working if Request succeded  . 
      .catch((res) => { setIsLoading(false); setapiError(res.response.data.message) }) // Catching Api error message . 
  }


  // Validation Using "yup" library .

  let schema = Yup.object().shape({
    name: Yup.string().matches(/^[A-Za-z]{3,20}$/ ,"Chars must be from 3 to 20 chars").required("Name Is Required"),
    email: Yup.string().email("Invalid Email ").required("Email Is Required "),
    phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Phone Is Invalid ").required("Phone Is Required"),
    password: Yup.string().matches(/^[A-Za-z0-9]{6,10}$/, "Password Should Be From 6-10 Chars").required("Password Is Required"),
    rePassword: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match ").required("Confirmation Password Is Required")
  })


  // Custom Validation 
  /*
  function validateForm(regData) {
  
      let errors = {};
      if (regData.name == "") {
        errors.name = "Name Is Required ";
      }
      else if (!/^[A-Z][a-z]{3,8}$/.test(regData.name)) {
        errors.name = "Name Not Valid ";
      }
  
      if (regData.email == "") {
        errors.email = "Email Is Required ";
      }
      else if (!/^[A-Za-z]{5,15}[0-9]{3,9}@gmail\.com$/.test(regData.email)) {
        errors.email = "Email Not Valid ";
      }
  
      if (regData.phone == "") {
        errors.phone = "Phone Is Required ";
      }
      else if (!/^01[0125][0-9]{8}$/.test(regData.phone)) {
        errors.phone = "Phone Number Not Valid ";
      }
  
  
      return errors
  
    }
  */


  // formik Library  step 1 
  let formik = useFormik({

    initialValues:
    {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: ""
    },
    // B3d m3ml el validation function bzwd el attribute dh . 
    validationSchema: schema
    ,
    onSubmit: handleRegistration // Method Call Api . 
  })



  return (
    <>
      <section className=' py-5'>

        <div className="regForm w-25 m-auto  border rounded p-4">

          <h1 className=' text-center'>Register now!</h1>

          {/* Link formik with the form step2 */}
          <form className='border rounded p-2' onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              {/* for using formik input add 4 attributes name  , value  ,onChange , onBlur */}
              <input name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control" id="name" />
            </div>

            {/* real time error Message Shown if input is inValid and touched  */}
            {
              formik.errors.name && formik.touched.name ? <div className="alert alert-danger py-0" role="alert">
                {formik.errors.name}
              </div> : null
            }

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
              <label htmlFor="phone">Phone</label>
              <input name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" className="form-control" id="phone" />
            </div>
            {/* real time error Message Shown if input is inValid and touched  */}
            {
              formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger py-0" role="alert">
                {formik.errors.phone}
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
            <div className="form-group">
              <label htmlFor="rePassword">Confirm Password</label>
              <input name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" id="rePassword" />
            </div>
            {/* real time error Message Shown if input is inValid and touched  */}
            {
              formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger py-0" role="alert">
                {formik.errors.rePassword}
              </div> : null
            }

            {/* Loading ......... */}
            <button type="submit" className="btn btn-info">{IsLoading ? <i className=' fas fa-spinner fa-spin'></i> : "Sign Up"}</button>

            <Link to="/login" className=' text-decoration-none'><div className='text-center'>Already Have An Account ? Login </div></Link>

            {/* Error Message Shown if there is api response error or success */}
            {apiError ? <div className="alert alert-danger py-2 mt-1" role="alert">
              {apiError}
            </div> : newAccount ? <div className="alert alert-success py-2 mt-1" role="alert">
              {newAccount}
            </div> : null}

          </form>

        </div>

      </section>
    </>
  )
}
