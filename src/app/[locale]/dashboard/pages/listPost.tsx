import React, { useState } from 'react';
import Image from 'next/image';
import AddPost from '../_components/AddPost';
import NewPost from './NewPost';

const ListPost = () => {
    const [isAddingPost, setIsAddingPost] = useState(false);

    return (
        <>
            {isAddingPost ? ( // Afficher le formulaire d'ajout de post si isAddingPost est true
                <NewPost />
            ) : (
                <div className="flex flex-col pt-2 h-full bg-bgMenu border-gris6b border-l border-t border-solid rounded-l-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] ">
                    <div className='flex flex-row items-center justify-between w-full pb-2 px-3 border-b border-gris6b'>
                        <div className='flex flex-row items-center gap-2 '>
                            <Image src="/images/home 04.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
                            <Image src="/images/arrow-right-01.svg" alt="logo" width={10} height={10} />
                            <p className='text-gridad text-lg'>Posts</p>
                        </div>
                        <Image src="/images/settings-01.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
                    </div>
                    <div className='flex flex-col gap-3 pt-3 overflow-y-auto h-[82vh] custom-scroll'>
                        <h2 className='text-xl font-bold pl-3'>List of posts</h2>
                        <div className='flex flex-row justify-between px-3'>
                            <div className='flex flex-row gap-3'>
                                <div className='flex flex-row items-center p-2  bg-violet rounded-lg w-fit h-fit text-center font-archivo text-foreground font-semibold cursor-pointer'>
                                    ALL
                                </div>
                                <div className='flex flex-row items-center p-2 border border-violet rounded-lg w-fit h-fit text-center font-archivo text-violet font-semibold cursor-pointer'>
                                    Publish
                                </div>
                                <div className='flex flex-row items-center p-2 border border-violet rounded-lg w-fit h-fit text-center font-archivo text-violet font-semibold cursor-pointer'>
                                    Not Publish
                                </div>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <div className='flex flex-row items-center p-2 border border-violet rounded-lg w-fit h-fit text-center font-archivo text-violet font-semibold cursor-pointer'>
                                    <Image src="/images/filter-mail-circle.svg" alt="logo" width={15} height={15} />
                                    Filter
                                </div>
                                <div
                                    onClick={() => setIsAddingPost(true)}
                                    className='flex flex-row items-center p-2 border border-violet rounded-lg w-fit h-fit text-center font-archivo text-violet font-semibold cursor-pointer'
                                >
                                    <Image src="/images/add-circle1.svg" alt="logo" width={15} height={15} />
                                    Add posts
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 px-3 pb-3 flex-wrap'>
                            <AddPost
                                id={1}
                                DateCreation={"Nov 2024"}
                                Titre="Front-end vs Back-end : Quelle voie choisir pour ta carrière ?"
                                SousTitre="Plonge dans les différences entre le développement Front-end et Back-end pour mieux comprendre leur rôle et choisir celui qui correspond à ton profil."
                                image="/images/image_fx_ (6).jpg"
                                tempsLecture={8}
                                content=""
                                statut="Publish"
                            />
                            <AddPost
                                id={1}
                                DateCreation={"Nov 2024"}
                                Titre="Front-end vs Back-end : Quelle voie choisir pour ta carrière ?"
                                SousTitre="Plonge dans les différences entre le développement Front-end et Back-end pour mieux comprendre leur rôle et choisir celui qui correspond à ton profil."
                                image="/images/image_fx_ (6).jpg"
                                tempsLecture={8}
                                content=""
                                statut="Publish"
                            />
                            <AddPost
                                id={1}
                                DateCreation={"Nov 2024"}
                                Titre="Front-end vs Back-end : Quelle voie choisir pour ta carrière ?"
                                SousTitre="Plonge dans les différences entre le développement Front-end et Back-end pour mieux comprendre leur rôle et choisir celui qui correspond à ton profil."
                                image="/images/image_fx_ (6).jpg"
                                tempsLecture={8}
                                content=""
                                statut="Publish"
                            />
                            <AddPost
                                id={1}
                                DateCreation={"Nov 2024"}
                                Titre="Front-end vs Back-end : Quelle voie choisir pour ta carrière ?"
                                SousTitre="Plonge dans les différences entre le développement Front-end et Back-end pour mieux comprendre leur rôle et choisir celui qui correspond à ton profil."
                                image="/images/image_fx_ (6).jpg"
                                tempsLecture={8}
                                content=""
                                statut="Publish"
                            />
                            <AddPost
                                id={1}
                                DateCreation={"Nov 2024"}
                                Titre="Front-end vs Back-end : Quelle voie choisir pour ta carrière ?"
                                SousTitre="Plonge dans les différences entre le développement Front-end et Back-end pour mieux comprendre leur rôle et choisir celui qui correspond à ton profil."
                                image="/images/image_fx_ (6).jpg"
                                tempsLecture={8}
                                content=""
                                statut="Publish"
                            />
                            <AddPost
                                id={1}
                                DateCreation={"Nov 2024"}
                                Titre="Front-end vs Back-end : Quelle voie choisir pour ta carrière ?"
                                SousTitre="Plonge dans les différences entre le développement Front-end et Back-end pour mieux comprendre leur rôle et choisir celui qui correspond à ton profil."
                                image="/images/image_fx_ (6).jpg"
                                tempsLecture={8}
                                content=""
                                statut="Publish"
                            />
                        </div>
                    </div>
                    <div className='flex items-end justify-center w-full h-[9vh] font-Archivo'>
                        <div className='flex flex-row items-center gap-2 bg-[#7066C120] px-3 py-2 rounded-t-[16px] cursor-pointer'>
                            <div className='flex items-center justify-center w-10 h-10 bg-[#ffffff12] rounded-3xl'>
                                <Image src="/images/arrow-left.svg" alt="logo" width={15} height={15} />
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
                                <Image src="/images/arrow-right.svg" alt="logo" width={10} height={10} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ListPost;