import React from "react";

function LoginForm() {
  return (
    <div className="p-28 mt-28">
      <h1 className="font-black text-3xl">
        Bienvenue chez ODC
        <br />
        Events
      </h1>
      <h3 className="font-bold mt-[80px]">Se connecter</h3>
      <form action="" className="flex flex-col mt-[32px]">
        <label className="mb-1 font-bold" htmlFor="email">
          Tapez votre adresse E-mail <span className="text-orange-600">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="border-2 p-1"
          placeholder="Adresse Email"
        />
        <label className="mb-1 font-bold mt-[24px]" htmlFor="email">
          Tapez votre adresse Mot de passe{" "}
          <span className="text-orange-600">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="border-2 p-1"
          placeholder="Adresse Email"
        />
      </form>
      <div className="text-right mt-3 ">
        <a
          href="/forgot-password"
          className="text-sm text-gray-400 hover:text-orange-2 transition-colors"
        >
          Mot de passe oublié ?
        </a>
      </div>{" "}
      <button className="bg-[#ff7900] p-4 w-full mt-[8px] font-bold">
        Connecter
      </button>
    </div>
  );
}

export default LoginForm;
