import Image from 'next/image';
import React, { useState } from 'react';
import { bash } from '../interface/interface';

const CopieString: React.FC<bash> = ({ valeur }) => {
    const [message, setMessage] = useState<string>('');
    const phrase = `${valeur}`;

    const handleCopy = () => {
        // Copier la phrase entière dans le presse-papiers
        navigator.clipboard.writeText(phrase)
            .then(() => {
                setMessage(`Copie effectuer`);

                // Effacer le message après 2 secondes
                setTimeout(() => {
                    setMessage('');
                }, 2000);
            })
            .catch((err) => {
                console.error('Erreur lors de la copie :', err);
                setMessage('Échec de la copie.');

                // Effacer le message d'erreur après 2 secondes
                setTimeout(() => {
                    setMessage('');
                }, 2000);
            });
    };

    return (
        // <button onClick={handleCopy}>Copier la phrase</button>
        <button onClick={handleCopy} className="flex flex-row gap-x-2 items-center">
            {
                message == '' ?
                    <>
                        <Image
                            src="/images/copy.svg"
                            alt="eye"
                            width={20}
                            height={20}
                            priority
                        />
                        <p className="text-gridad">Copier</p>
                    </>
                    :
                    <p className='text-vert'>{message}</p>
            }
            {/* {message && <p>{message}</p>} */}
        </button>
    );
};

export default CopieString;
