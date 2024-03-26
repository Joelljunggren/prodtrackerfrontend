'use client'
import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import EntryItem from "../components/entryItem";
import { LoadEntries } from "../components/services/entryServices";
import { Entry } from '../components/Entry';
import Footer from '../components/footer';

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
    <div className='entrySection'>
    <ul className='entryList'>
        <EntryItem/>
    </ul>
    </div>
    <Footer/>
    </>
    );
}

export default Page;
