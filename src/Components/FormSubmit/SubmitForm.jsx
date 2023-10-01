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
  const [daysAgo, setDaysAgo] = useState("");

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
      daysAgo,
      likeCounter,
      ...reacts,
    };
    props.userInput(input);
    fileRef.current.value = null;
    setFile("");
    setName("");
    setComment("");
    setLikeCounter("");
    setDaysAgo("");
  };

  return (
    <div className="card">
      {/* {modalState && (
        <ReactAction onClick={ModalHandler} reactData={onClickDone} />
      )} */}
      <form onSubmit={onSubmitHandler}>
        <div className="formContainer">
          {/* left item  */}
          <div className="leftItem">
            <img
              onClick={() => fileRef?.current?.click()}
              className="boxShadow"
              src={file}
              alt=""
            ></img>
            <div className="btnDiv">
              <button
                className="btn"
                type="button"
                onClick={() => fileRef?.current?.click()}
              >
                Choose File
              </button>
            </div>

            <input
              type="file"
              id="fileInput"
              class="file-input"
              ref={fileRef}
              onChange={handleChange}
              accept="image/*"
            />
          </div>

          {/* right item  */}
          <div className="rightItem">
            <div className="inputContainer">
              <TextInput
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Profile name"
              />

              <TextInput
                onChange={(e) => setLikeCounter(e.target.value)}
                value={likeCounter}
                placeholder="Total likes"
              />

              <TextInput
                onChange={(e) => setDaysAgo(e.target.value)}
                value={daysAgo}
                type="date"
                placeholder="Days ago"
              />

              <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Write comments"
              />
            </div>

            <div className="btnContainer">
              {/* <Button text="Add React" onClick={ModalHandler} color="#EA250B" /> */}
              <ReactEffect>
                <Button text="Add React" color="#EA250B" />
              </ReactEffect>
              <Button text="Submit" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
