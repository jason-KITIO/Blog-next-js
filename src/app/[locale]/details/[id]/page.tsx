
'use client';

import { useState, useEffect } from "react";
import { useParams, useRouter } from 'next/navigation';
import { IPOST } from "../../interface/interface";
import NavBar from "../../_components/navbar";
import Image from "next/image";
import Bash from "../../_components/bash";
import Link from "next/link";
import Footer from "../../_components/footer";
import ReadingTime from '../../_components/ReadingTime';
import ViewCounter from "../../_components/ViewCounter";
import Category from "../../_components/category";
import Markdown from "../../_components/markdown";
import { Button } from "@/components/ui/button";
import Head from "next/head";

// import { generateStaticParams } from './generateStaticParams';
// import { generateMetadata } from './generateMetadata';
import React from "react";


const PostDetails = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState<IPOST | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [commentaires, setCommentaires] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');

  const handleDescription = (context: string) => {
    setDescription(context);
    setCommentaires('Commentaire en cours de rédaction...');
  };

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/data/post.json`);
          if (!response.ok) throw new Error('Erreur lors de la récupération des données');
          const data: IPOST[] = await response.json();
          const foundPost = data.find((item) => item.id === Number(id));
          if (!foundPost) throw new Error('Post non trouvé');
          setPost(foundPost);
        } catch (error: unknown) {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError("Une erreur inconnue s'est produite.");
          }
        }
      };

      fetchPost();
    }
  }, [id]);

  const handleGoBack = () => {
    router.push(`/`); // Naviguer vers la page précédente
  };

  if (error) {
    return (
      <div className="flex justify-center items-center content-center h-[100vh]">
        <p>{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center content-center h-[100vh]">
        {/* <p>Post non trouvé.</p> */}
      </div>
    );
  }

  return (
    <div className="bg-violetHover">
      <Head>
        <title>{post.Titre} - Mon Blog</title>
        <meta name="description" content={post.SousTitre} />
      </Head>
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
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-x-2 items-center">
                <div>
                  <Category
                    key={2}
                    id={2}
                    nom={"React Js"}
                    image={"/images/react js.png"}
                  />
                </div>
                <span className="text-foreground text-4xl pb-5">.</span>
                <p className="text-gris6b">{post.DateCreation}</p>
                <span className="text-foreground text-4xl pb-5">.</span>
                <ReadingTime content={post.content} />
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <ViewCounter postId={post.id} />
              </div>
            </div>
            <Image
              src={post.image}
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
                <p className="text-2xl">{"4. Ajouter des propriétés (props)"}</p>
                <p className="text-gridad text-lg">{"Les props (propriétés) permettent de passer des données d'un composant parent à un composant enfant. Cela rend les composants dynamiques et réutilisables."}</p>
                <Bash langage="bash" code={`function ShoppingList(props) {
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
                    <li className="list-disc"><Link target="_blank" href="https://fr.reactjs.org/" className="underline hover:underline-offset-4">Documentation officielle de React</Link></li>
                    <li className="list-disc"><Link target="_blank" href="https://openclassrooms.com/fr/courses/7008001-debutez-avec-react" className="underline hover:underline-offset-4">Cours en ligne sur OpenClassrooms pour construire des applications complètes avec React</Link></li>
                    <li className="list-disc"><Link target="_blank" href="https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started" className="underline hover:underline-offset-4">Tutoriels interactifs sur MDN pour apprendre les bases</Link></li>
                  </ul>
                  Ces ressources vous aideront à explorer davantage les fonctionnalités avancées comme les hooks, le routage avec React Router, et la gestion des formulaires.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-[10px] p-6 border border-gris6b bgHoverCategorie rounded-lg right-10 w-3/12 h-fit">
            <p className="text-2xl font-bold font-alexandria">Table des matières</p>
            <p className="text-gridad font-alexandria"><Link href="#1" className="hover:underline hover:underline-offset-4">1. Introduction à React</Link></p>
            <p className="text-gridad font-alexandria"><Link href="#2" className="hover:underline hover:underline-offset-4">2. Installer et configurer un projet React</Link></p>
            <p className="text-gridad font-alexandria"><Link href="#3" className="hover:underline hover:underline-offset-4">3. Créer un composant de base</Link></p>
            <p className="text-gridad font-alexandria"><Link href="#4" className="hover:underline hover:underline-offset-4">4. Ajouter des propriétés (props)</Link></p>
            <p className="text-gridad font-alexandria"><Link href="#5" className="hover:underline hover:underline-offset-4">5. Conclusion et ressources supplémentaires</Link></p>
            <p className="text-gridad font-alexandria text-xl"><Link href="#commentaires" className="hover:underline hover:underline-offset-4">Commentaires</Link></p>
          </div>
        </div>

        <div className="flex w-10/12" id="commentaires">
          <div className="flex flex-col gap-6 w-8/12 pt-10">
            <h2 className="text-2xl font-Archivo">Commentaires</h2>
            {commentaires ? <p>{commentaires}</p> : <p>Aucun commentaire pour le moment.</p>}
            <h2 className="text-2xl font-Archivo">Ajouter un commentaire</h2>
            <div className="flex flex-col gap-4">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Entrer votre nom" className="bg-bgLogin outline-none text-lg w-full p-4 px-5 border border-gris6b rounded-lg" />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="name">Name</label>
              <Markdown description={description} onChange={handleDescription} />
            </div>
            <div className='flex justify-end w-full px-3 pb-3'>
              <Button className='bg-violet text-foreground font-archivo font-semibold'>
                POST COMMENT
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(PostDetails);