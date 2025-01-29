// src/app/[locale]/details/[id]/generateStaticParams.ts
import { IPOST } from "../../interface/interface";

export async function generateStaticParams() {
  const res = await fetch('/data/post.json'); // Ajustez le chemin selon votre structure
  const posts: IPOST[] = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(), // Assurez-vous que l'ID est une chaîne de caractères
  }));
}

