/* eslint-disable no-unused-vars */
// import React from 'react'
import React, { useRef, useState } from "react";
import "./SubmitFrom.css";
import ReactAction from "../UI/ReactAction";
import TextInput from "../TextInput";
import Button from "../Button/Button";
import ReactEffect from "../ReactEffect/ReactEffect";

const SubmitForm = (props) => {
  const [file, setFile] = useState();
  // const [modalState, setModalState] = useState(false);
  const [reacts, setReacts] = useState({});

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [likeCounter, setLikeCounter] = useState("");
  // const [daysAgo, setDaysAgo] = useState("");

  const fileRef = useRef();

  function handleChange(event) {
    if (event.target?.files[0]) {
      setFile(URL?.createObjectURL(event.target.files[0]));
    }
  }

  // const ModalHandler = () => {
  //   setModalState((prevState) => !prevState);
  // };

  // const onClickDone = (react) => {
  //   setModalState((prevState) => !prevState);
  //   setReacts({ ...react });
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!file || !name || !comment) {
      alert("please complete all required fill!");
      return;
    }

    const input = {
      img: file,
      name,
      comment,
      daysAgo: new Date(),
      likeCounter,
      ...reacts,
    };
    props.userInput(input);
    fileRef.current.value = null;
    setFile("");
    setName("");
    setComment("");
    setLikeCounter("");
    // setDaysAgo("");
  };

  return (
    <div className="card">
      {/* {modalState && (
        <ReactAction onClick={ModalHandler} reactData={onClickDone} />
      )} */}
      <form onSubmit={onSubmitHandler}>
        <div className="">
          <div className="imageWrap">
            <img className="boxShadow" src={file} alt=""></img>
          </div>

          <div className="inputContainer">
            <button
              className="btn"
              type="button"
              onClick={() => fileRef?.current?.click()}
            >
              Choose File
            </button>
            <input
              type="file"
              id="fileInput"
              class="file-input"
              ref={fileRef}
              onChange={handleChange}
              accept="image/*"
            />

            <TextInput
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="title"
            />

            <TextInput
              onChange={(e) => setLikeCounter(e.target.value)}
              value={likeCounter}
              placeholder="likes"
            />

            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="comments"
            />

            {/* <TextInput
              onChange={(e) => setDaysAgo(e.target.value)}
              value={daysAgo}
              placeholder="time"
            /> */}
          </div>

          <div className="btnContainer">
            {/* <Button text="Add React" onClick={ModalHandler} color="#EA250B" /> */}
            <ReactEffect>
              <Button text="Add React" color="#EA250B" />
            </ReactEffect>
            <Button text="Submit" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
