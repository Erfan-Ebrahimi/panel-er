import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('این فیلد را تکمیل کنید.'),
  lastName: yup
    .string()
    .required('این فیلد را تکمیل کنید.'),
  email: yup
    .string()
    .email('یک ایمیل معتبر وارد کنید')
    .required('این فیلد را تکمیل کنید.'),
  username: yup
    .string()
    .min(5, "نام کاربری شما باید بیشتر از 5 حرف باشد")
    .required('این فیلد را تکمیل کنید.'),
  phone: yup
    .number()
    .min(11, "شماره تلفن شما باید 12 رقم باشد")
    .required('این فیلد را تکمیل کنید.'),
  age: yup
    .number()
    .min(1, "سن شما باید 2 رقمی باشد")
    .required('این فیلد را تکمیل کنید.'),
  image: yup
    .string()
    .required('این فیلد را تکمیل کنید.'),
  job: yup
    .string()
    .required('این فیلد را تکمیل کنید.'),
});




