
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully logged in");
      navigate("/projects");
    }, 1500);
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully");
      navigate("/projects");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-figma-gray-50 p-6">
      <div className="w-full max-w-md">
        <Link 
          to="/" 
          className="flex items-center justify-center space-x-2 text-figma-black font-medium text-xl mb-8"
        >
          <div className="flex space-x-1">
            <span className="h-5 w-5 rounded-tl-lg bg-figma-red"></span>
            <span className="h-5 w-5 rounded-tr-lg bg-figma-purple"></span>
          </div>
          <div className="flex space-x-1">
            <span className="h-5 w-5 rounded-bl-lg bg-figma-blue"></span>
            <span className="h-5 w-5 rounded-br-lg bg-figma-green"></span>
          </div>
          <span className="ml-2">Figma Clone</span>
        </Link>
        
        <div className="bg-white rounded-xl shadow-lg border border-figma-gray-200 overflow-hidden animate-scale">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 w-full rounded-none bg-figma-gray-50 p-0 h-auto">
              <TabsTrigger 
                value="login" 
                className="py-4 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                Log in
              </TabsTrigger>
              <TabsTrigger 
                value="signup" 
                className="py-4 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                Sign up
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="p-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/" className="text-xs text-figma-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full bg-figma-blue hover:bg-figma-blue/90" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Log in"}
                </Button>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-figma-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-figma-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" type="button" className="bg-white" disabled={isLoading}>
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                      <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="bg-white" disabled={isLoading}>
                    <svg className="w-5 h-5 mr-2 text-[#24292F]" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    GitHub
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="signup" className="p-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">First name</Label>
                    <Input id="firstname" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Last name</Label>
                    <Input id="lastname" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="johndoe@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm password</Label>
                  <Input id="confirm" type="password" placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full bg-figma-blue hover:bg-figma-blue/90" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Sign up"}
                </Button>
                
                <div className="text-center text-sm text-figma-gray-500">
                  By signing up, you agree to our{" "}
                  <Link to="/" className="text-figma-blue hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/" className="text-figma-blue hover:underline">Privacy Policy</Link>.
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
