"use client";
import React from "react";
import Link from "next/link";
import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "./ui/form";
import { Button } from "./ui/button";
import z from "zod";
import { PassThrough } from "stream";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastT } from "sonner";
import { Input } from "./ui/input";

const AuthForm = ({ type }: { type: "sign-up" | "sign-in" }) => {
  const formSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: "Username must be min of 2 Characters",
      })
      .max(50, {
        message: "username must be max of 50 Characters",
      }),
    email: z.string(),
    password: z.string().min(3, {
      message: "Password should contain min 3 characters",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="p-20 flex flex-col items-center mt-30">
      {type == "sign-in" ? "Sign-in" : "Sign-up"}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 flex-col flex w-[400px]"
        >
          {type == "sign-up" && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Eamil</FormLabel>
                <FormControl>
                  <Input placeholder="Eamil" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-[200px] self-center">
            {type == "sign-in" ? "Sign-in" : "Sign-up"}
          </Button>
        </form>
      </Form>

      <div className="mt-5 flex">
        <h1 className="text-sm">
          {type == "sign-in"
            ? "Create new Account! "
            : "Already have an Accout? "}
        </h1>
        <Link href={type == "sign-in" ? "./sign-up" : "./sign-in"}>
          <p className="text-blue-400 text-sm">
            {type == "sign-in" ? "_sign-up" : "_sign-in"}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
