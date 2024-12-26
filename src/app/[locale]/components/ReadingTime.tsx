import React from 'react';
import readingDuration from 'reading-duration';

interface ReadingTimeProps {
    content: string; // Le contenu pour lequel on calcule le temps de lecture
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ content }) => {
    const readingTime = readingDuration(content, { wordsPerMinute: 200, emoji: false });
    return <span className='text-gris6b'>{readingTime} de lecture</span>;
};

export default ReadingTime;
