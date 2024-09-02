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
                {averageProductivity !== null && averageStress !== null ? (
                <>
                        <div className="averagesHeader">
                    <h2>Registrerade medelvärden</h2>
                </div>
                    <div className="averageProductivity">
                        <p>Produktivitet: {averageProductivity}</p>
                    </div>
                    <div className="averageStress">
                        <p>Stress: {averageStress}</p>
                    </div>
                </>
            ) : (
                <div className="connectionError">
                    <p>Problem med att hämta data, se över om API'n är igång.</p>
                </div>
            )}
        </div>
        </>
    )
}

export default Averages;