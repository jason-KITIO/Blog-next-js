import React from 'react';
import Image from 'next/image';
import { IPOST } from '../../interface/interface';

const AddPost = ({DateCreation, Titre, SousTitre, image, statut }: IPOST) => {

    const truncateText = (text: string, wordLimit: number): string => {
        const words = text.split(' ');
        if (words.length <= wordLimit) {
            return text; // Retourne le texte complet si le nombre de mots est inférieur ou égal à la limite
        }
        return words.slice(0, wordLimit).join(' ') + '...'; // Tronque le texte et ajoute "..."
    };

    return (
        <div className='flex flex-col gap-2 p-3 border border-gris6b w-[320px] rounded-lg bg-[#8d848210]'>
            <Image src={image} alt={Titre} width={300} height={150} className=' rounded-lg' />
            <h2 className='text-xl font-bold'>{Titre}</h2>
            <p className='text-gridad'>{truncateText(SousTitre, 20)}</p>
            <div className='flex flex-row items-center justify-between w-full'>
                {DateCreation}
                <span className='text-violet font-semibold'>
                    {statut}
                </span>
            </div>
        </div>
    );
};

export default AddPost;