'use client';

import Image from "next/image";
import NavBar from './components/navbar'
import Post from "./components/post";
import React from "react";
import Category from "./components/category";
import UseGetPost from "./utils/useGetPosts";
import UseGetCategory from "./utils/useGetCategory";

import { useTranslations } from 'next-intl';
import Footer from "./components/footer";
// import { useI18n } from './utils/useTranslations';

const Home: React.FC = () => {

  const t = useTranslations('HomePage');

  // const [open, setOpen] = useState<boolean>(false)
  const { posts, error } = UseGetPost();
  const { categorys } = UseGetCategory();

  if (error) return (
    <div className="flex justify-center items-center content-center h-[100vh]">
      <p>{error}</p>
    </div>);

  return (
    <div className="bg-violetHover">
      <main className="px-20 py-10 pb-16 flex flex-col items-center bg-background rounded-footer">
        <div className="absolute w-[192px] h-[1129.52px] left-[0px] top-[-500.08px] bg-gradient-to-b from-[#E3FAFF] to-transparent opacity-30 blur-[40px] rotate-[-54.38deg]">
        </div>
        <NavBar />
        <div className="bg-Intersect bg-contain bg-center bg-no-repeat h-screen flex justify-center items-center flex-col">
          <p className="w-8/12 text-center font-alexandria font-bold text-4xl leading-relaxed">
            {t('title1')}
            <span className="p-2 bg-blancD9 rounded-lg border border-solid border-white">{t('title2')}</span>
            {t('title3')}
            <span className="p-2 bg-blancD9 rounded-lg">{t('title4')}</span>
            {t('title5')}
          </p>
          <p className="w-9/12 text-center font-alexandria font-light text-base leading-relaxed">
            {t('sousTitre')}
          </p>
        </div>
        <div className="relative top-[-100px] flex flex-row gap-x-8 justify-center">
          <div className="w-7/12">
            <p className="text-2xl font-bold">Derniers posts</p>
            <div className="flex flex-row flex-wrap gap-y-10 pt-5">
              {posts.map(post => (
                <Post
                  id={post.id}
                  key={post.id}
                  DateCreation={post.DateCreation}
                  Titre={post.Titre}
                  SousTitre={post.SousTitre}
                  image={post.image}
                  tempsLecture={post.tempsLecture}
                  content=""
                />
              ))}
              <p className="text-2xl font-bold">Posts populaires</p>
              <Post
                id={1}
                DateCreation={"Nov 2024"}
                Titre="Front-end vs Back-end : Quelle voie choisir pour ta carrière ?"
                SousTitre="Plonge dans les différences entre le développement Front-end et Back-end pour mieux comprendre leur rôle et choisir celui qui correspond à ton profil."
                image="/images/direction-right.svg"
                tempsLecture={8}
                content=""
              />
              <Post
                id={1}
                DateCreation={"Nov 2024"}
                Titre="Front-end vs Back-end : Quelle voie choisir pour ta carrière ?"
                SousTitre="Plonge dans les différences entre le développement Front-end et Back-end pour mieux comprendre leur rôle et choisir celui qui correspond à ton profil."
                image="/images/direction-right.svg"
                tempsLecture={8}
                content=""
              />
            </div>
          </div>
          <div className="w-3/12">
            <p className="text-2xl font-bold">Category</p>

            <ul
              className="flex flex-row flex-wrap gap-[10px] pt-5">
              {/* <ModalBox
                title="Test"
                description="Description"
                open={open}
                onClose={handleClose}
                image="/images/copy.svg"
                type="melria"
              />
              <Toast
              title={'qwertty'}
              description={"asdfgg"}
              position={"bottomLeft"}
              onClose={handleClose}
              close={open}
              type={"danger"}
              /> */}
              {
                categorys.map(category => (
                  <Category
                    key={category.id}
                    id={category.id}
                    nom={category.nom}
                    image={category.image}
                  />
                ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row p-8 border border-gridad bg-bgNewsLetter rounded-3xl w-10/12 justify-between">
          <div className="w-4/12 flex flex-col gap-y-2">
            <div className="flex flex-row gap-2">
              <Image
                src="/images/gmail.svg"
                alt="direction right icon"
                width={25}
                height={25}
                priority
              />
              <p>S’inscrire  a  Melria Newsletter</p>
            </div>
            <p>{"👉 Inscris-toi maintenant et prends une longueur d'avance dans l'univers du web !"}</p>
          </div>
          <div className="w-6/12">
            <div className="border border-gridad flex flex-row p-2 rounded-xl">
              <input type="text" placeholder="Entrez votre  email" className="border-none bg-transparent outline-none rounded-xl w-full" />
              <input type="button" className="bg-transparent rounded-xl p-2 border border-gridad cursor-pointer" value={"S'inscrire"} />
            </div>
            <p className="text-xs font-light">Unsubscribe at any time. Read our <span className="text-violet">privacy policy.</span></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;