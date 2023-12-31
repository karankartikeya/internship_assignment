"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

type Props = {
  menu: Boolean;
  session: Boolean;
};

export default function Menu({ menu, session }: Props) {

  const menus = [
    {
      title: "products",
      link: "/",
    },
    {
      title: "dao",
      link: "/",
    },
    {
      title: "build",
      link: "/",
    },
    {
      title: "docs",
      link: "/",
    },
  ];

  const router = useRouter();
  const supabase = useSupabaseClient();
  const signout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      console.log("Logout Successful");
    }
    location.reload();
  }
  return (
    <AnimatePresence>
      {menu && (
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="sticky top-full mt-8 w-full shadow lg:hidden bg-green-300 z-30"
        >
          <ul className="flex flex-col divide-y divide-gray-100 text-center ">
            {menus &&
              menus.map((item, i) => (
                <li
                  className={` text-black font-semibold py-4 transition hover:text-blue-500 `}
                  key={i}
                  onClick={() => router.push(item?.link as string)}
                >
                  {item?.title}
                </li>
              ))}
            {session ? (
              <>
                <li
                  className="active:text-blue-600 font-semibold text-lg text-gray-600 font-bold py-4 transition hover:text-blue-500 "
                  onClick={() => { router.push('/movies') }}
                >
                  Movies
                </li>
                <li
                  className="active:text-blue-600 font-semibold text-lg text-gray-600 font-bold py-4 transition hover:text-blue-500 "
                  onClick={signout}
                >
                  SignOut
                </li>

              </>
            ) : (
              <>
                <li
                  className="active:text-blue-600 font-extrabold text-gray-600 font-bold py-4 transition hover:text-blue-500 "
                  onClick={() => router.push("/login")}
                >
                  Login
                </li>
                <li
                  className="active:text-blue-600 font-extrabold text-gray-600 font-bold py-4 transition hover:text-blue-500 "
                  onClick={() => router.push("/register")}
                >
                  SignUp
                </li>
              </>
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
