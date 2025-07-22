import React from "react";
import AuthForm from "@/components/AuthForm";
const Signup = () => {
  return (
      <div className="head-class w-2/3">
        <AuthForm type={"sign-up"}/>
        <h1 className="text-green font-poppins font-bold">hey i am green</h1> 
      </div>
  );
};

export default Signup;
