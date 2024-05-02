import LoginForm from "../components/LoginForm";
import loginpage from "../assets/loginPage.jpg";
const LoginPage = () => {
  return (
    <div className="h-screen w-screen bg-purple-100 p-5 flex items-center justify-center">
      <div className="w-5/6 h-[95%] lg:w-8/12 lg:h-3/4 bg-white flex rounded-lg flex-col-reverse md:flex-row overflow-auto shadow-lg shadow-purple-500">
        <div className="w-full h-full lg:w-1/2 bg-white px-5  md:px-16 flex items-center ">
          <LoginForm />
        </div>
        <div className="w-full h-full lg:w-1/2  bg-purple-400 py-3 flex items-center justify-center">
          <img
            src={loginpage}
            alt="loginpage-svg"
            className=" w-11/12 h-full  shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
