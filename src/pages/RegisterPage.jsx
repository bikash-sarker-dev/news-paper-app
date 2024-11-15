import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const RegisterPage = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const handelRegisterSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const userName = form.get("username");
    const photoUrl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // console.log({ userName, photoUrl, email, password });
    let profile = {
      displayName: userName,
      photoURL: photoUrl,
    };
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile(profile)
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl pt-10">
        <h2 className="text-3xl text-center font-semibold">
          Register your account
        </h2>
        <div className="divider px-10"></div>
        <form onSubmit={handelRegisterSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer justify-start">
              <input type="checkbox" className="checkbox" />
              <span className="label-text ml-3 font-medium">
                Accept Term & Conditions
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
          <p className="font-medium text-gray-500 text-center mt-3">
            Already Have An Account ?{" "}
            <Link className="text-red-600" to="/auth/login">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
