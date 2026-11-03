import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// import { Mail, Lock, Eye, EyeOff } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";
// import logoImage from "../assets/logo.png";


function Login() {

  //Logic
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [ loading, setLoading ] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

    // const { loginUser, loading } = useAuth();
    // const [showPassword, setShowPassword] = useState(false);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");



const onSubmit = async (e) => {
  e.preventDefault();

  if (!form.email || !form.password) {
    return toast.error("please fill all fields");
  }

  setLoading(true);

  try {
    await loginUser(form);
    toast.success("login successful");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  } catch (error) {
    toast.error(
      error?.response?.data?.message || "please check your credentials"
    );
  } finally {
      setLoading(false);
  }
};



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   if (!email || !password) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }

  //   localStorage.removeItem("dashboard-token");

  //   const result = await loginUser(email, password);

  //   if (!result.success) {
  //     setError(result.message);
  //     return;
  //   }

  //   console.log("Login Success");

  //   navigate("/orders");
  // };

  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-[#0B1120] flex items-center justify-center px-4 py-5 transition-colors duration-300">
      <div className="w-full max-w-6xl bg-white dark:bg-[#141B2D] rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 transition-colors duration-300">


        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br rounded-l-3xl from-blue-600 to-cyan-400 px-12 py-10 text-white">          
          <div className="flex items-center gap-3 mb-8">
            <img
              src={logoImage}
              alt="NexCart Logo"
              className="w-10 h-10 object-contain brightness-0 invert"
            />
            <h2 className="text-2xl font-bold">NexCart</h2>
          </div>

          <h1 className="text-[52px] font-bold leading-tight">
            Manage Your Store Like a Pro
          </h1>

          <p className="mt-5 text-[18px] text-blue-100 leading-9">
            Manage your e-commerce business with ease. Track sales, organize
            inventory, and control your store from one powerful dashboard.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-white/15 rounded-xl py-4 px-5 backdrop-blur-sm">
              ✔ Smart Analytics
            </div>
            <div className="bg-white/15 rounded-xl py-4 px-5 backdrop-blur-sm">
              ✔ Inventory Management
            </div>
            <div className="bg-white/15 rounded-xl py-4 px-5 backdrop-blur-sm">
              ✔ Customer Insights
            </div>
            <div className="bg-white/15 rounded-xl py-4 px-5 backdrop-blur-sm">
              ✔ Secure Administration
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-12 py-10">
          <div className="w-full max-w-md">
            {/* Logo and Brand Name Side by Side */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src={logoImage}
                alt="NexCart Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-[#111827] dark:text-white">
                NexCart
              </span>
            </div>

            <h2 className="text-[#111827] dark:text-white text-4xl font-bold text-center transition-colors">
              Welcome Back!
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-7 text-center text-sm transition-colors">
              Sign in to continue to your NexCart dashboard.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-gray-700 dark:text-gray-300 text-sm transition-colors">
                  Email Address
                </label>

                <div className="mt-2 flex items-center bg-gray-100 dark:bg-[#1D2740] rounded-xl px-4 transition-colors">
                  <Mail
                    className="text-gray-500 dark:text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent py-4 px-3 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 dark:text-gray-300 text-sm transition-colors">
                    Password
                  </label>
                  <a
                    href="#forgot"
                    className="text-xs text-blue-500 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="mt-2 flex items-center bg-gray-100 dark:bg-[#1D2740] rounded-xl px-4 transition-colors">
                  <Lock
                    className="text-gray-500 dark:text-gray-400"
                    size={18}
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent py-4 px-3 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-gray-300"
                />
                <label htmlFor="remember">Remember me</label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? "Signing In..." : <>Sign In &rarr;</>}
              </button>
            </form>

            {error && (
              <p className="text-red-500 dark:text-red-400 mt-3 text-center text-sm font-medium">
                {error}
              </p>
            )}

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700 transition-colors"></div>
              <span className="px-4 text-gray-500 dark:text-gray-400 text-sm transition-colors">
                OR
              </span>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700 transition-colors"></div>
            </div>

            <button
              type="button"
              onClick={() => {
                window.location.href =
                  "https://e-commerce-api-3wara.vercel.app/auth/google";
              }}
              className="w-full py-4 rounded-xl bg-gray-100 dark:bg-[#1D2740] hover:bg-gray-200 dark:hover:bg-[#263352] transition flex items-center justify-center gap-3 text-gray-900 dark:text-white"
            >
              <FcGoogle size={24} />
              <span>Continue with Google</span>
            </button>

            <p className="text-center text-gray-500 dark:text-gray-400 text-xs mt-6 transition-colors">
              Secure Admin Access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
