import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ViewCounterProps {
    postId: number; // L'ID du post pour lequel on compte les vues
}

const ViewCounter: React.FC<ViewCounterProps> = ({ postId }) => {
    const [views, setViews] = useState<number>(0);

    useEffect(() => {
        // Fonction pour simuler la récupération du nombre de vues depuis une API ou une base de données
        const fetchViews = async () => {
            try {
                const response = await fetch(`http://localhost:3000/data/post.json`); // Remplacez par votre API
                if (!response.ok) throw new Error('Erreur lors de la récupération des vues');
            } catch (error) {
                console.error(error);
            }
        };

        fetchViews();

        // Incrémenter le nombre de vues (vous pouvez également appeler une API pour enregistrer cette vue)
        setViews(prevViews => prevViews + 1);
    }, [postId]);

    return (
        <div className="flex flex-row gap-x-2 items-center">
            <Image src="/images/view.svg" alt="eye" width={25} height={25} />
            <p>{views} Vues</p>
        </div>
    );
};

export default ViewCounter;
