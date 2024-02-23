// 'use client'

import React, { useState, useEffect } from 'react';
import { Entry } from "./Entry";
import { LoadEntries } from './services/entryServices';
import { EntryProps } from './services/entryItemProps';


const EntryItem: React.FC<Entry> = () => {


  const [entries, setEntries] = useState<EntryProps['entry'][]>([]);

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
      {entries.map((entry, id) => (
        <li key={id} className='entryListItem'>
          <div className='entryContainer'>
            <div className='stresslevel'>Stressnivå: {entry.stressLevel}</div>
            <div className='productivityLevel'>Produktivitet: {entry.productivityLevel}</div>
            <p className='message'>{entry.message}</p>
            <div className='entryDate'>Här ska det stå datum</div>
            <div className='removeEntryDiv'>
              <button>Remove entry</button>
            </div>
            {/* <div className='entryDate'>{entry.entryDate.toDateString()}</div> */}
          </div>
        </li>
      ))}
    </>
  );
}

export default EntryItem;

  

