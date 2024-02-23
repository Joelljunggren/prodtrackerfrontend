'use client'
import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import EntryItem from "../components/entryItem";
import { LoadEntries } from "../components/services/entryServices";
import { Entry } from '../components/Entry';

const Page: React.FC = () => {

    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await LoadEntries();
                setEntries(data);
            } catch (error) {
                console.error("Error loading entries:", error);
            }
        }
        fetchData();
    }, []);

    return (
    <>
    <Navbar/>
    <section className='entrySection'>
        <h1>Tidigare inlägg</h1>
    <ul className='entryList'>
        {entries.map(entry => (
            <EntryItem key={entry.id} {...entry} />
        ))}
    </ul>
    </section>
    </>
    );
}

export default Page;
