import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Button, TextField } from "@material-ui/core";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem ava={d.ava} key={d.id} id={d.id} name={d.name} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ));

	let addMessage = () => {
    props.addMessage();
  };

  let onChangeMessage = (e) => {
    let messageValue = e.target.value;
    props.onChangeMessage(messageValue);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>{dialogsElements}</div>
      </div>
      <div>
        <div>
          <TextField
            label="Введите текст"
            id="mui-theme-provider-standard-input"
            variant="outlined"
            onChange={onChangeMessage}
            value={props.messageChange.messageValue}
          />
        </div>
        <div>
          <Button variant="contained" color="secondary" onClick={addMessage}>
            Отправить сообщение
          </Button>
        </div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
