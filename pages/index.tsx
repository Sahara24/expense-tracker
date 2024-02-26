import Image from "next/image";
import loginImg from "@/public/personalFinance.svg";
import { Button, Text, TextField } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex w-full h-screen">
      <form action="./api/data" method="post">
        <label htmlFor="name">Enter Name </label>
        <input type="text" name="name" id="name" />

        <label htmlFor="age"> Enter Age </label>
        <input type="text" name="age" id="age" />

        <input type="submit" value="submit" />
      </form>
    </main>
  );
}
