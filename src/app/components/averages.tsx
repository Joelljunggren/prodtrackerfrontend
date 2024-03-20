import { CalculateAverageProductivity, CalculateAverageStress, LoadEntries } from "./services/entryServices";
import React, { useState, useEffect } from 'react';
import { EntryProps } from "./services/entryItemProps";

const Averages: React.FC = () => {

    const [averageProductivity, setaverageProductivity] = useState<number | null>(null);
    const [averageStress, setAverageStress] = useState<number | null>(null);
    const [entries, setEntries] = useState<EntryProps['entry'][]>([]);

  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await LoadEntries();
                console.log(data)
                setEntries(data);
    
                const productivity = await CalculateAverageProductivity();
                console.log(productivity)
                setaverageProductivity(productivity);
    
                const stress = await CalculateAverageStress();
                console.log(stress)
                setAverageStress(stress);
            } catch (error) {
                console.error("Error loading entries:", error);
            }
        }
        fetchData();
    }, []);    

    return (
        <>
        <h2>Current averages</h2>
        <div className="averages">
            <div className="stressandproductivity">
                {averageProductivity !== null && (
                    <p>Average Productivity: {averageProductivity}</p>
                )}
            </div>
            <div className="stressandproductivity">
                {averageStress !== null && (
                    <p>Average Stress: {averageStress}</p>
                )}
            </div>
        </div>
        </>
    )
}

export default Averages;