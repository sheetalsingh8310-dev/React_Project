import './App.css';
import Header from './Component/Header';
import Button from './Component/Button';
import InputFeild from './Component/InputFeild';
import { useState } from 'react';

function App() {
  // State for form values
  const [name, setName] = useState("Sheetal");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  // Submit Handler (called from InputField)
  const onSubmit = (event) => {
    event.preventDefault();

    console.log({
      name,
      email,
      text,
    });

    alert("Form Submitted Successfully!");
  };

  return (
    <>
      <Header />
      <Button />

      {/* Pass state + setter + onSubmit to InputField */}
      <InputFeild
        name={name}
        email={email}
        text={text}
        setName={setName}
        setEmail={setEmail}
        setText={setText}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default App;
