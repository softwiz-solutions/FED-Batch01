"use client";
import React, { useState } from "react";
import Button from "./Button";
import { IMAGES } from "@/assets/images";
import Image from "next/image";
import useCounter from "@/customeHooks/useCounter";

const Counter = () => {
  const {
    doIncrement,
    doDecrement,
    counter,
    show,
    setShow,
    showAlert,
    isLogin,
  } = useCounter();
  return (
    <div className="flex gap-3 items-center">
      <Image
        src={IMAGES.firstImage}
        alt="img"
        width={120}
        height={120}
        onLoad={(e) => console.log("hello ", e.target.alt)}
      />
      <Button title="-" onClick={doDecrement} />
      <h1>{counter}</h1>
      <Button title="+" onClick={doIncrement} />
      <Button
        title="toogle Paragraph"
        onClick={() => {
          setShow(!show);
        }}
      />
      {isLogin && <h1>user is logined</h1>}
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          accusantium fugit saepe inventore. Ab voluptatibus, ducimus illum
          laborum itaque debitis non, eos, reiciendis id nobis commodi labore
          consectetur eum ipsam?
        </p>
      )}
    </div>
  );
};

export default Counter;
