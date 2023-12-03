import Button from "@/components/Button";
import Card from "@/components/Card";
import Counter from "@/components/Counter";
import Todo from "@/components/Todo";
import WeatherApi from "@/components/WeatherApi";
import {
  faCross,
  faGear,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <h1>Weather API</h1> */}
      <Counter />
      {/* <FontAwesomeIcon icon={faGear} beat className='text-yellow-900 h-10 w-4' /> */}

      {/* <Link href='/about-us/about-us2'>go to about us page</Link>
      <Card title="card 1 " description="lorem fjsdkljfskldfjklsdjkljsdfkl" />
      <Card title="hello 2 " description="lorem fjsdkljfskldfjklsdjkljsdfkl" />
      <Card title="hello 3" description="lorem fjsdkljfskldfjklsdjkljsdfkl" />
      <Card /> */}
      {/* <Counter /> */}
      {/* <Todo /> */}
    </div>
  );
}
