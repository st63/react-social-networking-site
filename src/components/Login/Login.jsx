import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../../components/Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name={"login"}
          placeholder={"Login"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"password"}
          placeholder={"Password"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
        Remember me
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
