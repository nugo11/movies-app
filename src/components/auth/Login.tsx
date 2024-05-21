import { useState } from "react";
import MinePage from "../minepage";

export default function Lpage() {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  const [cEmail, setcEmail] = useState(false);
  const [cPass, setcPass] = useState(false);

  const Submit = () => {
    if (Email.includes("@") && Email === localStorage.getItem("Email")) {
      setcEmail(false);
    } else {
      setcEmail(true);
    }

    if (Pass === "" || Pass !== localStorage.getItem("pass")) {
      setcPass(true);
    } else {
      setcPass(false);
    }

    if (
      Email === localStorage.getItem("Email") &&
      Pass === localStorage.getItem("pass")
    ) {
      localStorage.setItem("islogged", "yes");
      localStorage.setItem('book', 'no');
      location.reload();
    }
  };

  return (
    <>
      {localStorage.getItem("islogged") === "yes" ? (
        <>
          <MinePage />
        </>
      ) : (
        <>
          <div className="login_page">
            <div className="logcentr">
              <div className="logo"></div>
              <div className="login_box">
                <h1>Login</h1>
                <input
                  type="text"
                  placeholder="Email..."
                  className={cEmail ? "invalid" : "valid"}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password..."
                  className={cPass ? "invalid" : "valid"}
                  onChange={(e) => setPass(e.target.value)}
                />
                <button onClick={Submit}>Login to your account</button>
                <span>
                  Don’t have an account? <a href="#">Sign Up</a>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
