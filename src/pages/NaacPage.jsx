import React, { useState } from "react";
import Naac from "../components/NAAC/Naac";
// import NaacSection from '../components/NAAC/NaacSection';
import NaacHead from "../components/NAAC/NaacHead";

function NaccPage() {
  const [isVerified, setIsVerified] = useState(false);

  const checkPw = () => {
    const answer = document.getElementById("password").value;

    if (answer === "yourSecretPassword") {
      setIsVerified(true);
    } else {
      alert("Sorry, that's not it");
    }
  };
  return (
    <>
      {isVerified ? (
        <>
          {" "}
          <Naac />
          <NaacHead />
        </>
      ) : (
        <form onSubmit={checkPw}>
        <div className="relative LockSection" data-te-input-wrapper-init>
          <h1 className="mb-4 text-lg">Enter Password</h1>
          <input
            type="text"
            className="peer block min-h-[auto] w-3/6 rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <input className="submitbtn" name="submit" type="submit" />
          </div>
        </form>
      )}
    </>
  );
}

export default NaccPage;
