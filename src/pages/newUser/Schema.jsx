import * as yup from 'yup';  

const pass = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const basicSchema = yup.object().shape({  
  username: yup  
    .string()  
    .min(5, 'Minimum 5 characters required')  
    .required('Username is required.'),  
  fullName: yup
    .string()
    .required('Full name is required'),  
  email: yup  
    .string()  
    .email('Enter valid email id')
    .required('Email ID is required'),  
  password: yup
    .string()
    .min(8,"Must be more than 5 characters")
    .matches(pass ,{message :"Password must contain at least 8 characters, one uppercase, one number and one special case character"}) 
    .required('Password is required'),  
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password") , null] , "Password must be match")
    .required('Confirm your password'),  
  phone: yup
    .number()
    .positive()
    .integer()  
    .required('Phone is required'),  
  address: yup
    .string()
    .required('Address is required'),    
});




