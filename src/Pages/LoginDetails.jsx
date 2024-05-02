import { useSelector } from "react-redux";

const LoginDetails = () => {
  const userDetails = useSelector((state) => state.userData.userDetails);
  console.log(userDetails);
  return <div>LoginDetails</div>;
};

export default LoginDetails;
