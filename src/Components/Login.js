import { Formik } from "formik";
import {  useNavigate } from "react-router-dom";

const Login = () => {
   
  const navigate=useNavigate();
  const handleSubmit = (value) => {
     
    navigate("/");
  };
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold m-2">Login!</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="w-1/3 m-auto bg-cyan-200 rounded-2xl p-6 flex-col"
          >
            <div>
              <input
                className="w-full p-2 m-2 border-solid border-2 border-slate-600 rounded-lg bg-white"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div>
              <input
                className="w-full p-2 m-2 border-solid border-2 border-slate-600 rounded-lg bg-white"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </div>
            <button
              className="w-full p-2 m-2 border-solid border-2 border-slate-600 rounded-lg bg-slate-900 text-white text-2xl font-bold"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
