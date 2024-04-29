"use client";
import { useRouter } from "next/navigation";
import "../../components/Styles/signup.css";


const Signup = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/passcode");
  };

  return (
    <div className="container4">
      <div className="header2">
        <div className="logo1">
          <img src="/Logo.svg" alt="" />
        </div>
        <div>
          <button className="btn">X</button>
        </div>
      </div>
      <div className="body2">
        <div className="name"> Enter your full name</div>
        <form onSubmit={handleSubmit}>
          <div className="pass2">
            <div className="name2">First name</div>
            <input type="text" placeholder="First name " className="password" />
            <div className="name2">Last name</div>
            <input type="text" placeholder="Last name " className="password" />
            <button type="submit" className="button2">
              continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
