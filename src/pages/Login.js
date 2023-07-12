import { Formik, Form } from "formik";

// to gather login data
import { useState } from "react";
// useState is like a variable in react (as string,int in java) in react framework, useState is a function that initialize necessary variables for us(it can be int,string,json object etc.)

// import the all the objects of Yup
import * as Yup from "yup";

// import navigate hook
import { useNavigate } from "react-router-dom";

import StandardLayout from "../components/Layout/StandardLayout";
import Input from "../components/forms/Input";
import PasswordInput from "../components/forms/PasswordInput";
import FormLink from "../components/forms/FormLink";

// defalut login data
const LOGIN_DATA = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState(LOGIN_DATA);
  // loginForm -> variable; setLoginForm -> handler function

  const { email, password } = loginForm;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginForm({ ...loginForm, [name]: value }); //...loginForm-> previous login form details // then new value
  };

  const loginSubmit = () => {
    // TODO: Necessary backend calling for the aunthentication

    // if Passed the authentication
    navigate("/")
  }

  // Yup validation schema
  const loginValidation = Yup.object({
    //json object
    email: Yup.string()
      .required("Email address is required")
      .email("Email must be a valid one"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <StandardLayout>
      <div className="h-screen px-[200px]">
        <div className="flex items-center justify-center pt-3">
          <div className="w-[400px]">
            <p className="font-bold text-4xl pb-2">Sign In</p>
            <p className="pb-3">Please enter your credentials</p>
            <Formik
              enableReinitialize
              initialValues={{ email, password }}
              validationSchema={loginValidation}
              // TODO: Define onSubmit handler. to pass data to backend
              onSubmit={() => loginSubmit()}
            >
              {/* so, we can do modifications */}

              {(formik) => (
                <Form className="flex flex-col gap-2">
                  <Input
                    key="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                  />
                  <PasswordInput
                    key="password"
                    // type="password"
                    name="password"
                    placeholder="Enter your password"
                  />

                  <button type="submit" className="bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all ease-in-out">Login</button>
                </Form>
              )}
            </Formik>
            <div className="flex flex-col gap-2 text-center my-6">
              <FormLink name= "Forgot password?" path="/" />
              <p className="text-sm">Don't have an account? <FormLink name="Create account" path="/" /></p>
            </div>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}

export default Login;

//when we use an arrow function, we should define a key. react automatically generate this components such as arrow functions.
//any automatically generated component must have a key, otherwise react doesn't know how to distinguish between seperate objects.

// for front-end form validation. install packages `formik` and `yup`
// npm i formik yup

// yup :- gather necessary data from the formik component
