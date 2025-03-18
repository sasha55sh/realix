"use client";

import React, { useState, useEffect } from "react";
import { hasLength, isEmail, useForm } from "@mantine/form";
import Input from "@/components/InputComponent";
import Button from "@/components/ButtonComponent";

const FormSection = () => {
  const [message, setMessage] = useState<string>("");

  const validOperators = [
    "067",
    "068",
    "096",
    "097",
    "098",
    "099",
    "063",
    "073",
    "093",
    "050",
    "066",
    "095",
    "091",
    "092",
    "094",
    "089",
    "093",
  ];

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      textArea: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      firstName: hasLength({ min: 2 }, "Invalid name"),
      lastName: hasLength({ min: 2 }, "Invalid surname"),
      phone: (value) => {
        const operatorCode = form.values.phone.slice(3, 6);
        if (
          !/^\+38\d{10}$/.test(value) ||
          !validOperators.includes(operatorCode)
        ) {
          return "Invalid phone";
        }
        return null;
      },
    },
  });

  useEffect(() => {
    if (form.values.phone && !form.values.phone.startsWith("+38")) {
      form.setFieldValue("phone", `+38${form.values.phone}`);
    }

    if (form.values.phone.length === 2) {
      form.setFieldValue("phone", "");
    }
  }, [form.values.phone]);

  const handleSubmit = () => {
    const error = form.validate();
    if (!error.hasErrors) {
      setMessage("Congratulations!");
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      form.reset();
      return () => clearTimeout(timer);
    } else {
      setMessage("");
    }
  };

  return (
    <section id="join" className="container bg-formGradient text-pearlBlue flex flex-col items-center rounded-3xl py-[40px]">
      <h1 className="capitalize text-[36px] cursor-default">
       <span className="font-bold">join</span> realix
      </h1>
      <hr className="w-[200px] bg-violetGradient h-[1px] my-[10px]" />
      <p className="text-[28px] capitalize hidden mini:block">
        let's build your VR experience
      </p>
      <form className="grid w-full gap-[20px] mt-[30px] grid-cols-1 mini:px-[30px] sm:grid-cols-2">
        <Input
          inputType="input"
          placeholder="First Name"
          type="text"
          required={true}
          {...form.getInputProps("firstName")}
          fullWidth
        />
        <Input
          inputType="input"
          placeholder="Last Name"
          type="text"
          required={true}
          {...form.getInputProps("lastName")}
          fullWidth
        />
        <Input
          inputType="input"
          placeholder="Email"
          type="email"
          required={true}
          {...form.getInputProps("email")}
          fullWidth
        />
        <Input
          inputType="input"
          placeholder="Phone Number"
          type="text"
          required={true}
          {...form.getInputProps("phone")}
          fullWidth
        />
        <Input
          inputType="textarea"
          placeholder="Tell Us Something..."
          type="text"
          required={false}
          {...form.getInputProps("textArea")}
          fullWidth
          className="col-span-1 sm:col-span-2"
        />
        {message && (
          <p className="col-span-1 sm:col-span-2 text-pearlBlue text-center">
            {message}
          </p>
        )}
        <Button
          text="Send to Realix"
          onClick={handleSubmit}
          className="col-span-1 justify-self-center pearlBluespace-nowrap mini:w-[40%] sm:col-span-2 lg:w-[20%]"
        />
      </form>
    </section>
  );
};

export default FormSection;
