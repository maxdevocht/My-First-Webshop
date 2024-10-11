import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <Input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border rounded-xl border-gray-800"
          required
        />
      )}
      <Input
        type="email"
        placeholder="Email address"
        className="w-full px-3 py-2 border rounded-xl border-gray-800"
        required
      />
      <Input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border rounded-xl border-gray-800"
        required
      />
      <div className="w-full flex justify-between text-sm  mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer underline"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer underline"
          >
            Login here
          </p>
        )}
      </div>

      <Button className="font-light px-8 py-2 mt-4 rounded-xl">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </Button>
    </form>
  );
};

export default LoginPage;
