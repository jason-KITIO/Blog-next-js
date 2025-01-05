// components/LogoutPopup.tsx

import React from 'react';
import Image from 'next/image';

interface LogoutPopupProps {
    onClose: () => void;
    onConfirm: () => void;
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({ onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#060416] bg-opacity-70">
            <div className="bg-[#060416] rounded-lg p-6 shadow-lg border border-[#FFFFFF15] flex flex-col gap-3 p-10">
                <div className='flex flex-row justify-between mb-4'>
                    <h2 className="text-lg font-bold font-archivoBlack">Logout</h2>
                    <Image src="/Images/cancel-circle-half-dot.svg" alt='close' width={20} height={20} onClick={onClose} className='cursor-pointer'/>
                </div>
                <p>Do you really want to log out?</p>
                <div className="mt-4 flex justify-between">
                    <button
                        onClick={onClose}
                        className="items-center p-2  bg-violet rounded-lg w-fit h-fit text-center font-archivo text-foreground font-semibold cursor-pointer px-4 py-2 "
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex flex-row items-center p-2 border border-violet rounded-lg w-fit h-fit text-center font-archivo text-violet font-semibold cursor-pointer px-4 py-2 "
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutPopup;
