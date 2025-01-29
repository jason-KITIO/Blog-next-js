import React from 'react';
import Image from 'next/image';
import Chart from '../_components/Chart';

const Home = () => {
    return (
        <div id="home" className="flex flex-col gap-3 pt-2 h-full bg-bgMenu border-gris6b border-l border-t border-solid rounded-l-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px]">
            <div className='flex flex-row items-center justify-between w-full pb-2 px-3 border-b border-gris6b'>
                <div className='flex flex-row items-center gap-2 '>
                    <Image src="/images/home 04.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
                    <Image src="/images/arrow-right-01.svg" alt="logo" width={10} height={10} />
                    <p className='text-gridad text-lg'>Home</p>
                </div>
                <Image src="/images/settings-01.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
            </div>
            <div>
                <h2 className='text-xl font-bold pl-3'>Good morning, melria !</h2>
                <div className='flex flex-row justify-between p-3'>
                    <div className='flex flex-row justify-between p-4 border border-gris6b rounded-xl w-[300px] bg-Intersect bg-contain bg-center bg-no-repeat'>
                        <div className='flex flex-col gap-2'>
                            <div className='p-2 border border-violet rounded-lg w-fit'>
                                <Image src="/images/rocket-01.svg" alt="logo" width={10} height={10} />
                            </div>
                            <h2 className='font-archivoBlack text-xl'>42</h2>
                            <p className='font-archivo text-sm'>Total Visitors</p>
                        </div>
                        <a className='p-2 border border-violet rounded-lg w-fit h-fit text-center font-archivo text-violet font-semibold cursor-pointer'>
                            View details
                        </a>
                    </div>
                    <div className='flex flex-row justify-between p-4 border border-gris6b rounded-xl w-[300px] bg-Intersect bg-contain bg-center bg-no-repeat'>
                        <div className='flex flex-col gap-2'>
                            <div className='p-2 border border-violet rounded-lg w-fit'>
                                <Image src="/images/rocket-01.svg" alt="logo" width={10} height={10} />
                            </div>
                            <h2 className='font-archivoBlack text-xl'>21</h2>
                            <p className='font-archivo text-sm'>Number of posts</p>
                        </div>
                        <a className='p-2 border border-violet rounded-lg w-fit h-fit text-center font-archivo text-violet font-semibold cursor-pointer'>
                            View details
                        </a>
                    </div>
                    <div className='flex flex-row justify-between p-4 border border-gris6b rounded-xl w-[300px] bg-Intersect bg-contain bg-center bg-no-repeat'>
                        <div className='flex flex-col gap-2'>
                            <div className='p-2 border border-violet rounded-lg w-fit'>
                                <Image src="/images/rocket-01.svg" alt="logo" width={10} height={10} />
                            </div>
                            <h2 className='font-archivoBlack text-xl'>68</h2>
                            <p className='font-archivo text-sm'>number of newsletters</p>
                        </div>
                        <a className='p-2 border border-violet rounded-lg w-fit h-fit text-center font-archivo text-violet font-semibold cursor-pointer'>
                            View details
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-xl font-bold pl-3'>Recent posts</h2>
                <div className='flex flex-row w-full h-[350px] justify-between px-3 my-3'>
                    <div className='w-7/12  border border-gris6b rounded-xl'>
                        <div className='flex flex-row justify-between items-center py-2 px-3 border-b border-gris6b'>
                            <div className='flex flex-row items-center gap-2'>
                                <div className='p-2 border border-gris6b rounded-lg w-fit'>
                                    <Image src="/images/analysis-text-link.svg" alt="logo" width={15} height={15} />
                                </div>
                                <p className='font-archivo text-xl text-gridad'>Graph of different posts</p>
                            </div>
                        </div>
                        <div className='overflow-y-auto h-72 custom-scroll'>
                            <Chart />
                        </div>
                    </div>
                    <div className='w-[38%] border border-gris6b rounded-xl '>
                        <div className='flex flex-row justify-between items-center py-2 px-3 border-b border-gris6b'>
                            <div className='flex flex-row items-center gap-2'>
                                <div className='p-2 border border-gris6b rounded-lg w-fit'>
                                    <Image src="/images/analysis-text-link.svg" alt="logo" width={15} height={15} />
                                </div>
                                <p className='font-archivo text-xl text-gridad'>Recent activity</p>
                            </div>
                            <div className='flex flex-row items-center p-2 border border-gris6b rounded-lg w-fit h-fit text-center font-archivo text-gris6b font-semibold cursor-pointer'>
                                <Image src="/images/add-circle.svg" alt="logo" width={15} height={15} />
                                View details
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-3 overflow-y-auto h-72 custom-scroll'>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3 border-b border-gris6b'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3 border-b border-gris6b'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3 border-b border-gris6b'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3 border-b border-gris6b'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3 border-b border-gris6b'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3 border-b border-gris6b'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3 border-b border-gris6b'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3 border-b border-gris6b'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3 border-b border-gris6b'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-1 justify-between items-center py-4 px-3'>
                                <p>Front-end vs Back-end : Quelle voie choisir pour ta carrière ?</p>
                                <div className='p-2 border border-gris6b rounded-lg w-fit cursor-pointer'>
                                    <Image src="/images/arrow-up-right-01.svg" alt="logo" width={15} height={15} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;