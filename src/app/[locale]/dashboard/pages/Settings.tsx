import Image from 'next/image';

const Settings = () => {
    return (
        <div className="flex flex-col gap-3 pt-2 h-full bg-bgMenu border-gris6b border-l border-t border-solid rounded-l-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px]">
            <div className='flex flex-row items-center justify-between w-full pb-2 px-3 border-b border-gris6b'>
                <div className='flex flex-row items-center gap-2 '>
                    <Image src="/images/home 04.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
                    <Image src="/images/arrow-right-01.svg" alt="logo" width={10} height={10} />
                    <p className='text-gridad text-lg'>Newsletter</p>
                </div>
                <Image src="/images/settings-01.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
            </div>
            <h2 className='text-xl font-bold pl-3'>Settings</h2>
            <p className=' pl-3'>List of devices you have logged in to</p>

            <div className='flex flex-col gap-3 overflow-y-auto h-[76vh] custom-scroll'>
                <div className='flex flex-row justify-between bg-black bg-opacity-30 border border-[#ffffff15] rounded-xl mx-3 py-6 px-5'>
                    <Image src="/images/Devices-pana 1.svg" alt='Destop' width={300} height={200} />
                    <div className='flex flex-col w-7/12 h-full'>
                        <div className='flex flex-row justify-between items-end border-b border-[#ffffff15] py-5'>
                            <div className=''>
                                <h2 className='text-lg font-bold'>Windows</h2>
                                <p>Cameroun</p>
                                <p>Microsoft Edge</p>
                                <p>Adresse ip : 192.168.0.1</p>
                                <div className='flex flex-row gap-3'>
                                    <Image src="/images/checkmark-circle-04.svg" alt="statut" width={24} height={24} />
                                    <p>Votre session actuelle</p>
                                </div>
                            </div>

                            <button
                                className="flex flex-row gap-3 items-center p-2 border border-[#C16666] rounded-lg w-fit h-fit text-center font-archivo text-[#C16666] font-semibold cursor-pointer px-4 py-2 "
                            >
                                <Image src="/images/security-block.svg" alt="statut" width={24} height={24} />
                                Logout
                            </button>
                        </div>
                        <div className='flex flex-row justify-between items-end py-5'>
                            <div className=''>
                                <h2 className='text-lg font-bold'>Windows</h2>
                                <p>Cameroun</p>
                                <p>Microsoft Edge</p>
                                <p>Adresse ip : 192.168.0.1</p>
                                <div className='flex flex-row gap-3'>
                                    <Image src="/images/checkmark-circle-05.svg" alt="statut" width={24} height={24} />
                                    <p>Inactif depuis 166 jours</p>
                                </div>
                            </div>

                            <button
                                className="flex flex-row gap-3 items-center p-2 border border-[#C16666] rounded-lg w-fit h-fit text-center font-archivo text-[#C16666] font-semibold cursor-pointer px-4 py-2 "
                            >
                                <Image src="/images/security-block.svg" alt="statut" width={24} height={24} />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between bg-black bg-opacity-30 border border-[#ffffff15] rounded-xl mx-3 py-6 px-5 mb-5'>
                    <Image src="/images/App installation-cuate 1.svg" alt='phone' width={300} height={200} />
                    <div className='flex flex-col w-7/12 h-full'>
                        <div className='flex flex-row justify-between items-end py-5'>
                            <div className=''>
                                <h2 className='text-lg font-bold'>Redmi 13c</h2>
                                <p>Cameroun</p>
                                <p>Microsoft Edge</p>
                                <p>Adresse ip : 192.168.0.1</p>
                                <div className='flex flex-row gap-3'>
                                    <Image src="/images/checkmark-circle-06.svg" alt="statut" width={24} height={24} />
                                    <p>Déconnecté</p>
                                </div>
                            </div>

                            <button
                                className="flex flex-row gap-3 items-center p-2 border border-[#C16666] rounded-lg w-fit h-fit text-center font-archivo text-[#C16666] font-semibold cursor-pointer px-4 py-2 "
                            >
                                <Image src="/images/security-block.svg" alt="statut" width={24} height={24} />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Settings;
