import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes';
import postRoutes from './routes/postRoutes';
import commentRoutes from './routes/commentRoutes';


//configuration des variables d'environement
dotenv.config()
//initialisation de l'appliacation express
const app = express();
//configuration du port d'ecoute
const PORT = process.env.PORT || 5000 // accede au contenu de .env si le port dns le fichier .env n'est pas dispo on utlise le port 3000

//configuration des middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//configuration des routes
app.use('/api/category', categoryRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

//demarrage du serveur
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
});