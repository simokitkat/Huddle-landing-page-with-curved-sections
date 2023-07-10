import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    let regEx = /^\w+@\w+\.\w+$/;

    if (!regEx.test(email)) {
      e.preventDefault();

      setIsError(true);
    } else {
      setIsError(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Subscribe</button>
      </form>
      <div className={!isError ? "error" : "error show"}>
        Check your email please
      </div>
    </>
  );
}
