"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { Suspense, useEffect } from "react";

const layout = ({ children }) => {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (path == "/auth") router.push("/auth/login");
  }, [path, router]);

  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <div className="w-full h-screen flex items-center justify-center">
          <div className="w-[350px] flex flex-col gap-4 shadow p-4 py-8 items-center justify-center bg-white dark:bg-zinc-950/20 border dark:border-white/10 rounded-2xl">
            {children}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default layout;
