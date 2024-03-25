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
        <div className="averages">
        <h2>Genomsnitt av tidigare entries</h2>
            <div className="stressandproductivity">
                {averageProductivity !== null && (
                    <p>Produktivitet: {averageProductivity}</p>
                )}
            </div>
            <div className="stressandproductivity">
                {averageStress !== null && (
                    <p>Stress: {averageStress}</p>
                )}
            </div>
        </div>
        </>
    )
}

export default Averages;