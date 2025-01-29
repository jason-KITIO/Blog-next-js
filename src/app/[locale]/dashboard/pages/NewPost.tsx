import React, { useState } from 'react';
import Image from 'next/image';
import Markdown from '../../_components/markdown';

const NewPost = () => {

    const [titre, setTitre] = useState<string>('');
    const [categorie, setCategorie] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>('');
    const [isDragOver, setIsDragOver] = useState<boolean>(false);


    const handleDescription = (context: string) => {
        setDescription(context);
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragOver(false);
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const selectedFile = files[0];
            if (selectedFile.type.startsWith('image/')) {
                setFile(selectedFile);
                setError('');
            } else {
                setError('Veuillez sélectionner une image valide.');
            }
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleClick = () => {
        document.getElementById('image')?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
            setError('');
        } else {
            setError('Veuillez sélectionner une image valide.');
        }
    };

    return (
        <div className="flex flex-col gap-3 pt-2 h-full bg-bgMenu border-gris6b border-l border-t border-solid rounded-l-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px]">
            <div className='flex flex-row items-center justify-between w-full pb-2 px-3 border-b border-gris6b'>
                <div className='flex flex-row items-center gap-2 '>
                    <Image src="/images/home 04.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
                    <Image src="/images/arrow-right-01.svg" alt="logo" width={10} height={10} />
                    <p className='text-gridad text-lg'>Posts</p>
                    <Image src="/images/arrow-right-01.svg" alt="logo" width={10} height={10} />
                    <p className='text-gridad text-lg'>Add Posts</p>
                </div>
                <Image src="/images/settings-01.svg" alt="logo" width={10} height={10} className='cursor-pointer' />
            </div>
            <div className='flex flex-row justify-between px-3 items-center'>
                <h2 className='text-xl font-bold pl-3'>Add Posts</h2>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row items-center p-2 border border-violet rounded-lg w-fit h-fit text-center font-archivo text-violet font-semibold cursor-pointer'>
                        <Image src="/images/tick-01.svg" alt="logo" width={15} height={15} />
                        Publish
                    </div>
                    <div className='flex flex-row items-center p-2  bg-violet rounded-lg w-fit h-fit text-center font-archivo text-foreground font-semibold cursor-pointer'>
                        Save
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-3 px-3 pb-3 justify-between'>
                <div className='flex flex-col gap-4 w-6/12'>
                    <div>
                        <label htmlFor="Titre" className='text-lg text-grisad'>Titre du posts</label>
                        <input
                            type="text"
                            name="Titre"
                            id="Titre"
                            value={titre}
                            placeholder='Entrer le titre du post'
                            onChange={(e) => setTitre(e.target.value)}
                            className="bg-bgLogin outline-none text-lg w-full p-4 px-5 border border-gris6b rounded-lg placeholder-red-500" />
                    </div>
                    <div>
                        <label htmlFor="categorie" className='text-lg text-grisad'>Cagetorie du posts</label>
                        <select
                            name="categorie"
                            id="categorie"
                            value={categorie}
                            onChange={(e) => setCategorie(e.target.value)}
                            className="bg-bgLogin outline-none text-lg w-full p-4 px-5 border border-gris6b rounded-lg" >
                            <option value="" disabled>
                                Sélectionnez une catégorie
                            </option>
                            <option value="React">React</option>
                            <option value="Next">Next</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col w-6/12'>
                    <label htmlFor="image" className='text-lg text-grisad'>Image du posts</label>
                    <div className="relative mb-4">
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleChange}
                            accept="image/*"
                        />
                        <div
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onClick={handleClick}
                            className={`w-[500px] h-[145px] border-dashed border border-[rgba(255,255,255,0.15)] rounded-[12px] flex items-center justify-center cursor-pointer ${isDragOver ? 'bg-red-500' : 'bg-[rgba(0,0,0,0.3)]'}`}
                        >
                            {file ? (
                                <Image src={URL.createObjectURL(file)} alt="Aperçu" className="w-full h-full object-contain rounded-[12px]" width={500} height={145} />
                            ) : (
                                <span className="text-white">Glissez-déposez une image ou cliquez pour sélectionner</span>
                            )}
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row gap-3'>
                            <p className='font-bold'>Format supportes :</p> <span className='font-Archivo'>jpg, jpeg, png</span>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <p className='font-bold'>Taille maximum :</p> <span className='font-Archivo'>25Mo</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-3 gap-4">
                <label htmlFor="content" className='text-lg text-grisad'>Descriptions du posts</label>
                <Markdown description={description} onChange={handleDescription} />
            </div>
            {/* <div className='flex justify-end w-full px-3 pb-3'>
                <Button className='bg-violet text-foreground font-archivo font-semibold'>
                    ADD POST
                </Button>
            </div> */}
        </div>
    );
};

export default NewPost;
