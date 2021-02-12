import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem ava={d.ava} id={d.id} name={d.name} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message id={m.id} message={m.message} />
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
          <textarea
            onChange={onChangeMessage}
            value={props.messageChange.messageValue}
          />
        </div>
        <div>
          <button onClick={addMessage}>Отправить сообщение</button>
        </div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
