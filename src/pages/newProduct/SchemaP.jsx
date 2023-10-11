import * as yup from 'yup';

export const basicSchemaP = yup.object().shape({
  title: yup
    .string()
    .required('این فیلد را تکمیل کنید.'),
  price: yup
    .number()
    .min(0, "بین 10 تا 2000000")
    .max(2000000, "بین 10 تا 2000000")
    .required('این فیلد را تکمیل کنید.'),
  description: yup
    .string()
    .required('این فیلد را تکمیل کنید.'),
  category: yup
    .string()
    .required('این فیلد را تکمیل کنید.'),
  cover: yup
    .string()
    .required('این فیلد را تکمیل کنید.'),
  rate: yup
    .number()
    .min(0, "بین 0 تا 5")
    .max(5, "بین 0 تا 5")
    .required('این فیلد را تکمیل کنید.'),
  count: yup
    .number()
    .min(0, "بین 0 تا 500")
    .max(500, "بین 0 تا 500")
    .required('این فیلد را تکمیل کنید.'),
});




