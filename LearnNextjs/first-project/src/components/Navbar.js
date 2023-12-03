"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import useCounter from "@/customeHooks/useCounter";

const Navbar = () => {
  const router = useRouter();
  const changePath = () => {
    router.push("/about-us/about-us2");
  };
  // cont counter=useSelector
  // const { counter } = useCounter();
  // console.log("value of use counter",counter)
  const counter = useSelector((state) => state.counterSlice.counter);
  // console.log("value of counter", counter);
  // useEffect(() => {
  //   console.log("vlue is working");
  // }, [counter]);
  return (
    <div>
      <h1 className="bg-blue-800 text-3xl">hello this navbar</h1>
      <h1 className="bg-blue-800 text-3xl">{counter}</h1>
      <Button title="go to nested about us page" onClick={changePath} />
    </div>
  );
};

export default Navbar;
