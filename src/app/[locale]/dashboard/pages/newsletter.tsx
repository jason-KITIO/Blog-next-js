import React, { useState } from 'react';
import Image from 'next/image';

const Newsletter = () => {

    const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(3).fill(false));

    const data: string[][] = [
        ['Sélectionner', 'Email', 'Date'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
        ['melria@gmail.com', 'Jeu. 11 juillet 2024, 21:28'],
    ];

    // Fonction pour gérer le changement de l'état des cases à cocher
    const handleCheckboxChange = (index: number) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    return (
        <div className="flex flex-col gap-3 pt-2 h-full bg-bgMenu border-gris6b border-l border-t border-solid rounded-l-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px]">
            <div className='flex flex-row items-center justify-between w-full pb-2 px-3 border-b border-gris6b'>
                <div className='flex flex-row items-center gap-2 '>
                    <Image src="/Images/home 04.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
                    <Image src="/Images/arrow-right-01.svg" alt="logo" width={10} height={10} />
                    <p className='text-gridad text-lg'>Newsletter</p>
                </div>
                <Image src="/Images/settings-01.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
            </div>
            <h2 className='text-xl font-bold pl-3'>Newsletter</h2>
            <div className='flex flex-col items-end w-full px-3 overflow-y-auto h-[82vh] custom-scroll'>
                <div className="flex flex-row items-center gap-2 rounded-t-lg p-2 bg-[#7066C120] w-4/12">
                    <Image src="/Images/search-visual.svg" alt="logo" width={40} height={40} />
                    <input type="search" name="search" id="search" placeholder="search" className="bg-transparent outline-none text-lg w-full" />
                </div>
                <table className="min-w-full border-collapse border border-[#7066C130] ">
                    <thead>
                        <tr>
                            <th className="border-r border-[#7066C112] p-2 bg-[#7066C118] w-[20px]">Sélectionner</th>
                            {data[0].slice(1).map((header, index) => (
                                <th key={index} className="border-r border-[#7066C112] p-2 bg-[#7066C118]">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex} className={`${checkedItems[rowIndex] ? 'bg-[#060416]' : 'border-[#7066C130]'} py-2`}>
                                <td className="border border-[#7066C130] pl-10">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        id="checkbox"
                                        checked={checkedItems[rowIndex]}
                                        onChange={() => handleCheckboxChange(rowIndex)}
                                    />
                                </td>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border border-[#7066C130] p-2">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='flex items-start justify-center w-full h-[9vh] font-Archivo'>
                    <div className='flex flex-row items-center gap-2 bg-[#7066C120] px-3 py-2 rounded-b-[16px] cursor-pointer'>
                        <div className='flex items-center justify-center w-10 h-10 bg-[#ffffff12] rounded-3xl'>
                            <Image src="/Images/arrow-left.svg" alt="logo" width={15} height={15} />
                        </div>
                        <p className='text-[#ffffff64]'>1</p>
                        <p className='text-[#ffffff64]'>2</p>
                        <p className='text-[#ffffff64]'>3</p>
                        <p className='text-[#ffffff64]'>4</p>
                        <p className='text-blanc font-semibold'>Page 5</p>
                        <p className='text-[#ffffff64]'>6</p>
                        <p className='text-[#ffffff64]'>7</p>
                        <p className='text-[#ffffff64]'>8</p>
                        <p className='text-[#ffffff64]'>9</p>
                        <p className='text-[#ffffff64]'>...</p>
                        <div className='flex items-center justify-center w-10 h-10 bg-[#ffffff12] rounded-3xl'>
                            <Image src="/Images/arrow-right.svg" alt="logo" width={10} height={10} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;