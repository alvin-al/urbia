import React from "react";
import Header from "@/components/header";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";

const Login = () => {
  return (
    <div className="h-[92vh]">
      <Header title='Login' />
      <div className='w-full h-full flex items-center justify-center'>
        <ButtonWithIcon className=''/>
      </div>
    </div>
  );
};

export default Login;
