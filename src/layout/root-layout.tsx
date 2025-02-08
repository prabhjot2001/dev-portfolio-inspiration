import Navbar from "@/components/navbar";
import React from "react";
import Footer from "@/components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`max-w-4xl mx-auto`}>
      <Navbar />
      <div className={`px-4 sm:px-0`}>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
