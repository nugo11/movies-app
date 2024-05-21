import { useState } from "react";

export default function Rpage() {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [Pass2, setPass2] = useState("");

  const [cEmail, setcEmail] = useState(false);
  const [cPass, setcPass] = useState(false);
  const [cPass2, setcPass2] = useState(false);

  const [succsefull, setSuccsefull] = useState(false);

  const Submit = () => {
    if (Email.includes("@")) {
      setcEmail(false);
    } else {
      setcEmail(true);
    }

    if (Pass !== Pass2 || Pass === "") {
      setcPass(true);
    } else {
      setcPass(false);
    }

    if (Pass2 === "" || Pass !== Pass2) {
      setcPass2(true);
    } else {
      setcPass2(false);
    }

    if (
      Email.includes("@") &&
      Pass2 !== "" &&
      Pass === Pass2
    ) {
      localStorage.setItem("Email", Email);
      localStorage.setItem("pass", Pass2);
      setSuccsefull(true);
      location.reload()
    }
  };

  return (
    <>
      <div className="login_page">
        <div className="logcentr">
          <div className="logo"></div>
          <div className="login_box">
            <h1>Sign Up</h1>
            {succsefull ? (
              <>
                <span>
                  Registration completed successfully <a href="#">Login</a>
                </span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Email address"
                  className={cEmail ? "invalid" : "valid"}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className={cPass ? "invalid" : "valid"}
                  onChange={(e) => setPass(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Repeat password"
                  className={cPass2 ? "invalid" : "valid"}
                  onChange={(e) => setPass2(e.target.value)}
                />
                <button onClick={Submit}>Create an account</button>
                <span>
                  Already have an account? <a href="#">Login</a>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
