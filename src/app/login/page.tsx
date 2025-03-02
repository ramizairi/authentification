import React from "react";
import LoginForm from "@/components/LoginForm";
import SideImage from "@/components/SideImage";
function LoginPage() {
  return (
    <div className="flex">
      <LoginForm />
      <SideImage />
    </div>
  );
}

export default LoginPage;
