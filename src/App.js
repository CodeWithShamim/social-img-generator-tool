//
import { useState } from "react";
import "./App.css";
import SubmitForm from "./Components/FormSubmit/SubmitForm";
import Card from "./Components/Card/Card";

function App() {
  const [usersInput, setUsersInput] = useState([]);

  const fromSubmitHandler = (userValues) => {
    const userInput = {
      ...userValues,
      id: usersInput.length,
    };
    setUsersInput([...usersInput, userInput]);
    console.log(usersInput);
  };

  console.log({ usersInput });

  const handleDelete = (item) => {
    const newUsersInput = usersInput?.filter((ui) => ui?.id !== item.id);
    setUsersInput(newUsersInput);
  };

  return (
    <div>
      <SubmitForm userInput={fromSubmitHandler} />

      <div className="userInputContainer">
        {usersInput?.map((item) => (
          <Card item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
