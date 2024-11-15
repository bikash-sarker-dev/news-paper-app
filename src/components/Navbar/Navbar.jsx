import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center my-5">
      <div>{user && user.name}</div>
      <div className="space-x-5 text-gray-500">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Career</Link>
      </div>
      <div className="flex space-x-3 items-center">
        {user && user?.email ? (
          <>
            <div className=" text-center">
              <img
                className="w-12 h-12 mx-auto rounded-full border object-cover"
                src={user.photoURL}
                alt=""
              />
              <p className="text-sm">{user.displayName}</p>
            </div>
            <button onClick={logOut} className="btn btn-neutral rounded-none">
              LogOut
            </button>
          </>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
