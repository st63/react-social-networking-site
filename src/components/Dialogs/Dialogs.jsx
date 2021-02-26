import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../../components/Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(50);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"message"}
          placeholder={"Введите текст"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Отправить сообщение</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  form: "message",
})(MessageForm);

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem ava={d.ava} key={d.id} id={d.id} name={d.name} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ));

  const onSubmit = (value) => {
    props.addMessage(value.message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>{dialogsElements}</div>
      </div>
      <div>
        <MessageReduxForm onSubmit={onSubmit} />
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
