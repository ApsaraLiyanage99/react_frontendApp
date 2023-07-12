import { useField, ErrorMessage } from "formik";
//useField is a react hook defined inside this `formik` library
//ErrorMessage is a react component, also defined within this `formik` library

//props can be different. using `...props`, it will populate all the necessary properties inside this `useField`
//without defining seperate properties for input fields one by one, use `...props` -> spread operator

function Input({ placeholder, ...props }) {
  //initialize react hook (useField)  ; comes under formik library
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600 text-sm font-semibold">{field.name}</label>
      <input
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}    //also onChange is automatically populate here
        className={`border-2 ${meta.touched && meta.error && "border-red-600"} border-gray-300 p-2 rounded-md`}
      />
      <p className="text-red-500 text-xs font-bold">
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </p>
    </div>
  );
}

export default Input;

// for front-end form validation. install packages `formik` and `yup`
// npm i formik yup

// yup :- gather necessary data from the formik component ; frontend authentication
