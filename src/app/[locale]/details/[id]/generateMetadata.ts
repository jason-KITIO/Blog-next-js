// src/app/[locale]/details/[id]/generateMetadata.ts
import { Metadata } from 'next';
import { IPOST } from "../../interface/interface";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const res = await fetch('/data/post.json');
  const posts: IPOST[] = await res.json();

  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return {
      title: 'Post non trouvé',
    };
  }

  return {
    title: post.Titre,
    description: post.SousTitre,
  };
}