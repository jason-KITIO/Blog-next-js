import { useState, useEffect } from "react";
import { ICategory } from "../interface/interface";

const UseGetCategory = () => {

    const [categorys, setCategorys] = useState<ICategory[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    const [error_Category, setError_Category] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/category.json`);
                if (!response.ok) throw new Error('Erreur lors de la récupération des données');
                const data = await response.json();
                setCategorys(data);
            } catch (error_Category: unknown) {
                if (error_Category instanceof Error) {
                    setError_Category(error_Category.message);
                } else {
                    setError_Category("Une erreur inconnue s'est produite.");
                }
            }

        };

        fetchData();
    }, []);

    return { categorys, error_Category };
}

export default UseGetCategory;

// import type { GetStaticProps } from 'next'
// import { TPOST } from '../interface/type'
// import { useState } from 'react';

// const [categorys, setCategorys] = useState<TPOST[]>([]);

// export const UseGetCategory = (async () => {
//     const res = await fetch('http://localhost:3000/data/category.json')
//     const data = await res.json();
//     setCategorys(data);
//     return { props: { categorys } }
// })
