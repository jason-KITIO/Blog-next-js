import { useState, useEffect } from "react";
import { IPOST } from "../interface/interface";
import apiUrl from "../../../../config";

const UseGetPost = () => {

    const [posts, setPosts] = useState<IPOST[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/post.json`);
                if (!response.ok) throw new Error('Erreur lors de la récupération des données');
                const data = await response.json();
                setPosts(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Une erreur inconnue s'est produite.");
                }
            }

        };

        fetchData();
    }, []);

    return { posts, error };
}

export default UseGetPost;

// import type { GetStaticProps } from 'next'
// import { TPOST } from '../interface/type'
// import { useState } from 'react';

// const [posts, setPosts] = useState<TPOST[]>([]);

// export const UseGetPost = (async () => {
//     const res = await fetch('http://localhost:3000/data/post.json')
//     const data = await res.json();
//     setPosts(data);
//     return { props: { posts } }
// })
