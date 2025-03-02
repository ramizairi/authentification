"use client";

import React from "react";
import SideImage from "@/components/SideImage";
import { UnauthorizedIcon } from "@/components/Constant/icons";

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Form Section - Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-16">
        <div className="w-full max-w-md space-y-6">
          <UnauthorizedIcon
            size={200}
            className="text-[#ff7900] hover:text-orange-1 transition-colors"
          />
          <h1 className="text-4xl font-black text-black">Accès bloqué</h1>
          <p className="text-black">
            Malheureusement,Vous avez dépasser le nombre maximale des tentatives
            de connexion <br />
            Nous sommes désolé de vous informer que votre accès à la la
            plateforme est{" "}
            <span className="text-orange-1">temporairement bloqué</span> <br />
            Veuillez demande a votre responsable de résoudre le problème
          </p>
        </div>
      </div>
      <SideImage />
    </div>
  );
}

export default LoginPage;
