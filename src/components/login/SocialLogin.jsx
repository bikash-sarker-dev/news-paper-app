import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold">Login with</h3>
      <div className="space-y-2 mt-5">
        <button className="btn btn-block btn-sm btn-outline">
          {" "}
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-block  btn-sm btn-outline">
          {" "}
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
