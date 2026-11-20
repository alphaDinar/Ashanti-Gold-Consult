"use client";
import { createPayLink } from "@/src/firebase/payments";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Testing = () => {
  const router = useRouter();

  const [amount, setAmount] = useState(1715);
  const [formLoading, setFormLoading] = useState(false);

  const runPayTest = async () => {
    setFormLoading(true);

    const totalCost = amount * 100; // Example cost in dollars
    const host = window.location.origin; // Get the current host

    const payObj = await createPayLink(totalCost, "", "yotabyt100@gmail.com", host, `${host}/testing/verify`, host);
    window.open(payObj.link);
  }

  return (
    <section>


      <input type="text" className="border bg-red-300 flex w-full " />
      <legend onClick={runPayTest} className="cursor-pointer bg-blue-500 text-white p-2">Pay Test</legend>
    </section>
  );
}

export default Testing;