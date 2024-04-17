'use client'
import Header from "../components/navbar";
import Footer from "../components/footer";
import React from "react";


const Page: React.FC = () => {

    return (
    <>
    <Header/>
    <div className="monthlyDiv">
        <div className="monthlyAverages">
            <div className="month">Januari
            </div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">Februari</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">Mars</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">April</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">Maj</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">Juni</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">Juli</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">Augusti</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">September</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">Oktober</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">November</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
        <div className="monthlyAverages">
            <div className="month">December</div>
            <div className="monthlyStressAndProductivity">Stress: 5</div>
            <div className="monthlyStressAndProductivity">Produktivitet: 5</div>
            <div className="monthlyEntries">12 inlägg</div>
        </div>
    </div>
    <Footer/>
    </>
    )
}

export default Page;