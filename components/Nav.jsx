"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = false;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="PromptHead Logo"
          width={40}
          height={40}
        />
        <p className="logo_text">PromptHead</p>
      </Link>
      {/* Mobile Navigation */}
      <div className="sm: flex hidden">
        {isUserLoggedIn ? <div></div> : <></>}
      </div>
    </nav>
  );
};

export default Nav;
