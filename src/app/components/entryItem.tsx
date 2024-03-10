// 'use client'

import React, { useState, useEffect } from 'react';
import { LoadEntries, DeleteEntry } from './services/entryServices';
import { EntryProps } from './services/entryItemProps';

const EntryTimeComponent: React.FC<EntryProps> = ({entry}) => {
  let formatTime = entry.timeOfEntry.toString();

  const fixedTime = formatTime.slice(0, -13)

  return (
    <p>Inlägg skapat: {fixedTime}</p>
  )
}


const EntryItem: React.FC = () => {


  const [entries, setEntries] = useState<EntryProps['entry'][]>([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await LoadEntries();
            console.log(data)
            setEntries(data);
        } catch (error) {
            console.error("Error loading entries:", error);
        }
    }
    fetchData();
}, []);


const entryDeleter = async (entryId: number) => {
  try {
    console.log('Entry ID:', entryId)
    await DeleteEntry(entryId);
    const updateData = await LoadEntries();
    setEntries(updateData);
  } catch (error) {
    console.error("Error deleting entry", error);
  }
};

  return (
    <>
      {entries.map((entry, index) => (
        <li key={index} className='entryListItem'>
          <div className='entryContainer'>
            <div className='stresslevel'>Stressnivå: {entry.stressLevel}</div>
            <div className='productivityLevel'>Produktivitet: {entry.productivityLevel}</div>
            <p className='message'>{entry.message}</p>
            <div className='entryDate'>
              <EntryTimeComponent entry={entry}/>
            </div>
            <div className='removeEntryDiv'>
              <button onClick={() => entryDeleter(entry.entryId)}>Remove entry</button>
            </div>
            {/* <div className='entryDate'>{entry.entryDate.toDateString()}</div> */}
          </div>
        </li>
      ))}
    </>
  );
}

export default EntryItem;

  

