import React from "react";
import Footer from "../components/layout/footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
