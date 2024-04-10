'use client'
import Header from "../components/navbar";
import Footer from "../components/footer";
import React from "react";


const Page: React.FC = () => {

    return (
    <>
    <Header/>
    <div className="monthlyDiv">
    <h1>Månadsöversikt</h1>
        <div className="monthlyAverages">
        </div>
    </div>
    <Footer/>
    </>
    )
}

export default Page;