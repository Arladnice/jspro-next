import { UserButton } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default Layout;
