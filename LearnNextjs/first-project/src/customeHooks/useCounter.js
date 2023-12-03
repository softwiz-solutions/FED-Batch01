import { login } from "@/store/features/authSlice";
import { decrement, increment } from "@/store/features/counterSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCounter = () => {
  const counterValue = useSelector((state) => state.counterSlice.counter);
  const userLogined = useSelector((state) => state.authSlice.userLogined);
  console.log("value os userLogined", userLogined);
  console.log("counter value", counterValue);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  //   console.log("images", IMAGES);
  const [show, setShow] = useState(false);
  const showAlert = () => {
    alert("hello");
  };

  const doIncrement = () => {
    // counter++
    // setCounter(counter + 1)
    dispatch(increment(10));
    setCounter(counterValue);
    const action = dispatch(login());
    console.log("action", action);
    setIsLogin(userLogined);
    // console.log("user logined", userLogined);
  };
  const doDecrement = () => {
    // setCounter(counter - 1)
    dispatch(decrement(10));
    setCounter(counterValue);
  };
  return {
    doIncrement,
    doDecrement,
    counter,
    show,
    setShow,
    showAlert,
    counter,
    isLogin,
  };
};

export default useCounter;
