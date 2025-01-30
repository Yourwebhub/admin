'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { Eye, EyeOff } from 'lucide-react';
import { DashboardSquare03Icon } from 'hugeicons-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simple authentication check (replace with real backend validation)
      if (
        username === process.env.NEXT_PUBLIC_USER_NA &&
        password === process.env.NEXT_PUBLIC_PASS_NA
      ) {
        // Set the authentication cookie
        Cookies.set("authToken", "true", { path: "/", expires: 1 }); // 1-day expiration

        // Redirect to the protected route
        router.push("/web-hub");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false); // Ensure loading state is reset
    }
  };

  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <Toaster />
    <div className="min-h-screen w-full  relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-4 left-4 w-24 h-24 grid grid-cols-6 gap-1 animate-pulse">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-bllue/70" />
        ))}
      </div>
      <div className="absolute bottom-4 right-4 w-24 h-24 grid grid-cols-6 gap-1 animate-pulse">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-bllue/70" />
        ))}
      </div>

      <div className="container mx-auto min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Illustration */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full ">
              <img
                src="/login.png"
                alt="Login illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="w-full max-w-md mx-auto">
            <div className=" bg-white dark:bg-[#27272a] rounded-lg shadow-xl p-8">
              <div className="flex flex-col items-center mb-6">
                <div className="w-12 h-12 bg-bllue rounded mb-4 flex items-center justify-center">
                 <DashboardSquare03Icon className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-2xl text-dark dark:text-light  font-bold text-center">Sign in  to Dashboard</h1>
                <p className="text-dark dark:text-light  mt-1">Welcome to your web hub Dashboard</p>
              </div>

              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <input
                    type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                    placeholder="Username"
                    className="w-full px-4 py-2 rounded-lg border border-dark  focus:outline-none focus:ring-2 focus:ring-bllue focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-dark focus:outline-none focus:ring-2 focus:ring-bllue focus:border-transparent pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <div className="text-right">
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200"
                  disabled={isLoading}
                >
                 {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}