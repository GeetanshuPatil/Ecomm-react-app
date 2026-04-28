import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../authSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSignup = async (data) => {
  const res = await dispatch(signupUser(data));

  if (res.meta.requestStatus === "fulfilled") {
    toast.success("Account created 🎉");
     navigate(location.state?.from || "/");
  } else {
    toast.error("Signup failed ❌");
  }
};

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
  
  <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
    
    <h1 className="text-xl font-semibold text-gray-900 text-center mb-5">
      Create Account
    </h1>

    {/* 🔴 Error */}
    {error && (
      <p className="text-sm text-red-500 text-center mb-4">
        {error}
      </p>
    )}

    {/* 🧩 Form */}
    <AuthForm
      onSubmit={handleSignup}
      loading={loading}
      type="signup"
    />

    {/* 🔗 Redirect */}
    <p className="mt-5 text-sm text-center text-gray-600">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-black font-medium hover:underline"
      >
        Login
      </Link>
    </p>

  </div>
</div>
  );
};

export default Signup;