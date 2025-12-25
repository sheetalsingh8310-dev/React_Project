const InputFeild = ({ name, email, text, setName, setEmail, setText, onSubmit }) => {
  return (
    <>
      <div className="EmailCSS">
        <h1>Via Email Form</h1>
      </div>

      <form onSubmit={onSubmit} className="InputCSS">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //e.target.means input box me jo likha hua hai
          //onchange menas change karna jab (e)-[event object ] means jo action hua hai

        />
        <br/>

        <textarea
          placeholder="Type your message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />

        <button type="submit">Submit Button</button>
      </form>

      <img src="./image.png" alt="contact" />
    </>
  );
};

export default InputFeild;
