import { Box, Button, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signinAction } from "../../Redux/Auth/Action";


const validationSchema=  Yup.object().shape({
  email: Yup.string().email("Invalid email adress").required("Required"),
  password: Yup.string().min(8,"Password must be atleast 8 characters").required("Required"),
});

const Signin = () => {

    const initialValues={ email:"",password:""};
    const navigate=useNavigate();
    const dispatch = useDispatch();
  //const {user}=useSelector(store=>store);

    const handleSubmit=(values,actions)=>{
      dispatch(signinAction(values))
      actions.setSubmitting(false);
    };

    const handleNavigate=()=>navigate("/signup");
  return (
    <div>
      <div className="border">

        <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <img className="mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaJr0B21N0SLLrMF7rpIEc51oXfIxOTe4ZQ&usqp=CAU" alt="" />
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}

   >
    {(formikProps)=>  ( <Form  className="space-y-8">
            <Field name="email">
             {({Field,form})  => ( 
             <FormControl  
             isInvalid={form.errors.email && form.touched.email}>

              <Input className="w-full" {...Field} id='email' placeholder='Mobile Number or Email'>
              </Input>
              <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              
              </FormControl> 
              )}
            </Field>
      

            <Field name="password">
             {({Field,form})  => ( 
             <FormControl  
             isInvalid={form.errors.password && form.touched.password}>

              <Input className="w-full" {...Field} id="password" placeholder="Password"></Input>
              <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              
              </FormControl> 
              )}
            </Field>
<p className="text-center text-sm">People who use our service may have uploaded your contact information to Instagram. Learn More</p>
<p className="text-center text-sm"> By Signing up, you agree to our terms,privacy policy and cookies policy.</p>

<Button className="w-full" mt={8} colorScheme="blue" type="submit"  isLoading={formikProps.isSubmitting} > Sign In</Button>
        </Form> 
    )}
     
  
       </Formik>

        </Box>
      </div>
      <div className="border w-full ">
        <p className="text-center py-2">if You Don't Have Account <span onClick={handleNavigate} className="ml-2 text-blue-600 cursor-pointer">Sign up</span></p>
      </div>
    </div>
  )
};

export default Signin;
