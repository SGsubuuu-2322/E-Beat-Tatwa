import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUserDetailsAPI } from "@/Store/Actions/UserAction";
import Loader from "../components/Loader";
const LoginDetails = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const [isChecked, setisChecked] = useState(null);
  const [userData, setuserData] = useState(null);
  const [boxId, setboxId] = useState(null);

  const checkBoxHandler = (e) => {
    setisChecked(e.target.value);
    setuserData(userDetails[e.target.value]);
    setboxId(e.target.value);
  };

  const boxHandler = (id) => {
    setisChecked(id);
    setuserData(userDetails[id]);
    setboxId(id);
  };

  const { userDetails, token } = useSelector((state) => state.userData);

  const clickhandler = (data) => {
    // console.log(userDetails[id]);
    const userData = {
      data: {
        login_id: data.login_id,
        user_srno: data.user_srno,
        role_cd: data.role_cd,
        state_cd: data.state_cd,
        district_cd: data.district_cd,
        ps_cd: data.ps_cd,
      },

      token: token,
    };
    Dispatch(loginUserDetailsAPI(userData))
      .then((res) => {
        if (res.type == "loginuserdetails/fulfilled") {
          Navigate("/dashboard");
        } else {
          alert("You'hv selected the wrong officer. Try again...");
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        return;
      });
  };

  useEffect(() => {
    console.log(userDetails);
    if (userDetails.length == 0) {
      Navigate("/login");
    }
  }, [userDetails]);

  return userDetails.length > 0 ? (
    <>
      <div className="h-screen w-screen p-10 bg-secondarylite overflow-hidden flex flex-col gap-y-2 items-center justify-center">
        <div className="shadow-xl shadow-black overflow-hidden overflow-y-auto w-3/4 h-3/4 p-5 bg-white border-4 border-secondary rounded-2xl flex flex-col gap-y-2">
          {userDetails.map((ud, i) => (
            <div
              onClick={() => boxHandler(i)}
              key={i}
              className={`${
                boxId == i ? "bg-purple-200" : ""
              } hover:bg-purple-200 border-2 border-primary text-xl text-primary p-3 active:border-secondarylite active:text-secondarylite`}
            >
              <div>
                <h1 className="font-semibold ">
                  District :{" "}
                  <span className="font-normal text-secondary">
                    {ud.district}
                  </span>
                </h1>
                <h1 className="font-semibold ">
                  Office Name :{" "}
                  <span className="font-normal text-secondary">
                    {ud.office_name}
                  </span>
                </h1>
                <h1 className="font-semibold ">
                  Police Station :{" "}
                  <span className="font-normal text-secondary">{ud.ps}</span>
                </h1>
                <h1 className="font-semibold ">
                  Role :{" "}
                  <span className="font-normal text-secondary">{ud.role}</span>
                </h1>
              </div>
              <input
                type="checkbox"
                value={i}
                checked={isChecked == i}
                onChange={checkBoxHandler}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => clickhandler(userData)}
          className="hover:bg-secondary hover:text-white active:scale-105 rounded-xl px-3 py-2 text-2xl font-bold text-primary border-2 border-secondary bg-secondarylite"
        >
          Submit
        </button>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default LoginDetails;
