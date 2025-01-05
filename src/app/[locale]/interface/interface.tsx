export interface IPOST {
    id: number;
    DateCreation: string;
    Titre: string;
    SousTitre: string;
    image: string;
    tempsLecture: number;
    content: string;
    statut: 'Publish' | 'NotPublish';
}

export interface bash {
    valeur: string;
}

export interface ICategory {
    id: number;
    nom: string;
    image?: string;
}