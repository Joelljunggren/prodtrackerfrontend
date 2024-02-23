import React from "react";
import Header from "../components/navbar";
import Registerform from "../components/registerform";

export default function Page() {
  return <>
      {/* Måste göra om det här till komponenter */}
      <Header/>
      <Registerform/>
  </>
}