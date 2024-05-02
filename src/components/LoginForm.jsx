// import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAPI } from "@/Store/Actions/UserAction";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const LoginForm = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  // const [formData, setformData] = useState({
  //     username: "",
  //     password: ""
  // });

  // const updateFormData = (e) => {
  //   setformData({...formData, [e.target.name] : e.target.value})
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formValue = {};
    new FormData(e.target).forEach((value, key) => {
      formValue[key] = value;
    });
    if (formValue.username.length === 0 || formValue.password.length === 0) {
      alert("Please fill all the fields...");
      return;
    }
    Dispatch(loginUserAPI(formValue))
      .then((res) => {
        if (res.type === "loginuser/rejected") {
          alert("Your username || password is incorrect. Try again...");
        }
        Navigate("/login/details");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className="bg-white w-full py-4">
      <h1 className="text-base sm:text-xl text-black font-bold">
        Welcome back
      </h1>
      <p className="text-sm sm:text-base text-zinc-400 font-medium mb-5">
        Welcome back! Please enter your details...
      </p>

      <div className="mb-4">
        <label className="text-sm text-black font-medium mb-3">Email</label>
        <Input
          name="username"
          type="text"
          placeholder="hi@example.com"
          required
        />
      </div>
      <div className="mb-4">
        <label className="text-sm text-black font-medium mb-3">Password</label>
        <Input
          name="password"
          type="password"
          placeholder="Enter password"
          required
        />
      </div>

      <h1 className="cursor-pointer mb-5 text-lg text-purple-500 text-center font-semibold hover:text-purple-300">
        Forgot Password?
      </h1>
      <Button variant="custom">Login</Button>
    </form>
  );
};

export default LoginForm;
