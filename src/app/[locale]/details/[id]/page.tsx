'use client';

import { useState, useEffect } from "react";
import { useParams, useRouter } from 'next/navigation'
import { IPOST } from "../../interface/interface";
import NavBar from "../../components/navbar";
import Image from "next/image";
import Bash from "../../components/bash";
import Link from "next/link";
import Footer from "../../components/footer";
import ReadingTime from '../../components/ReadingTime';
import ViewCounter from "../../components/ViewCounter";
import UseGetCategory from "../../utils/useGetCategory";
import Category from "../../components/category";

interface Post {
    id: number;
    DateCreation: string;
    Titre: string;
    description: string;
    image: string;
    tempsLecture: number;
}

const PostDetails = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params; // Récupérer l'ID de l'URL
    const [post, setPost] = useState<IPOST | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { categorys, error_Category } = UseGetCategory();

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/data/post.json`);
                    if (!response.ok) throw new Error('Erreur lors de la récupération des données');
                    const data: IPOST[] = await response.json();
                    const foundPost = data.find(item => item.id === Number(id));
                    if (!foundPost) throw new Error('Post non trouvé');
                    setPost(foundPost);
                } catch (error: any) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchPost();
        }
    }, [id]);

    const handleGoBack = () => {
        router.push(`/`); // Naviguer vers la page précédente
    };
    if (error) return (
        <div className="flex justify-center items-center content-center h-[100vh]">
            <p>{error}</p>
        </div>);

    if (!post) {
        return (
            <div className="flex justify-center items-center content-center h-[100vh]">
                {/* <p>Post non trouvé.</p> */}
            </div>
        );
    }

    return (
        <div className="bg-violetHover">
            <main className="px-20 py-10 pb-16 flex flex-col items-center bg-background rounded-footer">
                <NavBar />
                <button className="flex flex-row items-center gap-5 w-10/12 pt-1 cursor-pointer" onClick={() => handleGoBack()}>
                    <div className="rounded-3xl bg-violet p-3">
                        <Image
                            src="/images/fleche.svg"
                            alt="fleche back"
                            width={25}
                            height={25}
                            priority
                        />
                    </div>
                    <p className="text-gris6b">Retour aux articles</p>
                </button>
                <div className="flex flex-row gap-x-8 justify-center w-full pt-10">
                    <div className="w-7/12 flex flex-col gap-y-4">
                        <p className="font-bold text-4xl font-alexandria ">{post.Titre}</p>
                        <div className="flex flex-row justify-between  items-center ">
                            <div className="flex flex-row gap-x-2 items-center ">
                                <div>
                                    <Category
                                        key={2}
                                        id={2}
                                        nom={"React Js"}
                                        image={"/images/react js.png"}
                                    />
                                </div>
                                <span className="text-foreground text-4xl pb-5">.</span>
                                <p className="text-gris6b">20 Nov 2024</p>
                                <span className="text-foreground  text-4xl pb-5">.</span>
                                {/* <p className="text-gris6b">08 min de lecture</p> */}
                                <ReadingTime content={post.content} />

                            </div>
                            <div className="flex flex-row gap-x-2 items-center ">
                                {/* <Image
                                    src="/images/view.svg"
                                    alt="eye"
                                    width={25}
                                    height={25}
                                    priority
                                />
                                <p>30  Vues</p> */}

                                <ViewCounter postId={post.id} />

                            </div>
                        </div>
                        <Image
                            src="/images/download 1.png"
                            alt="image"
                            width={700}
                            height={100}
                            priority
                        />
                        <div className="pt-10 flex flex-col gap-8">
                            <div className="flex flex-col gap-4" id="1">
                                <p className="text-2xl">1. Introduction à React</p>
                                <p className="text-gridad text-lg">React est une bibliothèque JavaScript développée par Facebook, utilisée pour créer des interfaces utilisateur dynamiques et performantes. Son concept de composants te permet de réutiliser du code facilement.</p>
                            </div>
                            <div className="flex flex-col gap-4" id="2">
                                <p className="text-2xl">2. Installer et configurer un projet React</p>
                                <p className="text-gridad text-lg">Avant de commencer, assure-toi d’avoir Node.js installé sur ton ordinateur. Suis ces étapes :<br />
                                    1. Ouvre ton terminal et exécute la commande suivante pour créer un nouveau projet :</p>
                                <Bash langage='bash' code={`npx create-react-app mon-premier-projet`} theme="laserwave" />
                                <p className="text-gridad text-lg">2. Une fois l’installation terminée, entre dans le répertoire du projet :</p>
                                <Bash langage='shell' code={`cd mon-premier-projet`} theme="laserwave" />
                                <p className="text-gridad text-lg">3. Lance le serveur de développement :</p>
                                <Bash langage='shell' code={`npm start`} theme="laserwave" />
                                <p className="text-gridad text-lg">Ton application React est maintenant prête à être modifiée !</p>
                            </div>
                            <div className="flex flex-col gap-4" id="3">
                                <p className="text-2xl">3. Créer un composant de base</p>
                                <p className="text-gridad text-lg">Un composant React est une fonction ou une classe qui retourne du code JSX. Voici un exemple simple :</p>
                                <Bash langage='jsx' code={`// Composant HelloWorld.jsx

import React from 'react';

function HelloWorld() { 

    return (
        <div>

            <h1>Bienvenue dans mon premier composant React !</h1> 

        </div>

    ); 
} 
 export default HelloWorld;`} />
                            </div>
                            <div className="flex flex-col gap-4" id="4">
                                <p className="text-2xl">4. Ajouter des propriétés (props)</p>
                                <p className="text-gridad text-lg">Les props (propriétés) permettent de passer des données d'un composant parent à un composant enfant. Cela rend les composants dynamiques et réutilisables.</p>
                                <Bash langage='bash' code={`function ShoppingList(props) {
    return (
        <div>
            <h1>Liste de courses pour {props.name}</h1>
            <ul>
                <li>Pommes</li>
                <li>Bananes</li>
            </ul>
        </div>
    );
}

// Utilisation : <ShoppingList name="Marc" />
`} theme="laserwave" />
                            </div>

                            <div className="flex flex-col gap-4" id="5">
                                <p className="text-2xl">5. Conclusion et ressources supplémentaires</p>
                                <div className="text-gridad text-lg">
                                    <p>React est un outil puissant pour développer des interfaces utilisateur modernes grâce à sa structure par composants et sa gestion efficace des états. Pour approfondir vos connaissances, voici quelques ressources recommandées :</p>
                                    <ul className="list-inside pl-4">
                                        <li className="list-disc"><a target="_blanck" href="https://fr.reactjs.org/" className="underline hover:underline-offset-4">Documentation officielle de React</a></li>
                                        <li className="list-disc"><a target="_blanck" href="https://openclassrooms.com/fr/courses/7008001-debutez-avec-react" className="underline hover:underline-offset-4">Cours en ligne sur OpenClassrooms pour construire des applications complètes avec React</a></li>
                                        <li className="list-disc"><a target="_blanck" href="https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started" className="underline hover:underline-offset-4">Tutoriels interactifs sur MDN pour apprendre les bases</a></li>
                                    </ul>
                                    Ces ressources vous aideront à explorer davantage les fonctionnalités avancées comme les hooks, le routage avec React Router, et la gestion des formulaires.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-[10px] p-6 border border-gris6b bgHoverCategorie rounded-lg right-10 w-3/12 h-fit">
                        <p className="text-2xl font-bold font-alexandria">Table des matieres</p>
                        <p className="text-gridad font-alexandria"><Link href="#1" className="hover:underline hover:underline-offset-4">1. Introduction à React</Link></p>
                        <p className="text-gridad font-alexandria"><Link href="#2" className="hover:underline hover:underline-offset-4">2. Installer et configurer un projet React</Link></p>
                        <p className="text-gridad font-alexandria"><Link href="#3" className="hover:underline hover:underline-offset-4">3. Créer un composant de base</Link></p>
                        <p className="text-gridad font-alexandria"><Link href="#4" className="hover:underline hover:underline-offset-4">4. Ajouter des propriétés (props)</Link></p>
                        <p className="text-gridad font-alexandria"><Link href="#5" className="hover:underline hover:underline-offset-4">5. Conclusion et ressources supplémentaires</Link></p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PostDetails;
