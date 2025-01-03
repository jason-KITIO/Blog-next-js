// components/MarkdownEditor.tsx
import React, { useState, useRef } from "react";
import { marked } from "marked";

const MarkdownEditor: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>("**Texte en gras**\n\n``````");
    const editorRef = useRef<HTMLDivElement>(null);

    // Fonction pour synchroniser le contenu édité avec l'état
    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        const content = e.currentTarget.innerText; // Récupère le texte brut (sans HTML)
        setMarkdown(content);
        restoreCursor();
    };

    // Convertir Markdown en HTML pour le rendu
    const renderMarkdown = (markdown: string) => {
        return marked(markdown, { gfm: false, breaks: false });
    };

    // Fonction pour restaurer la position du curseur
    const restoreCursor = () => {
        if (editorRef.current) {
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(editorRef.current);
            range.collapse(false); // Place le curseur à la fin
            selection?.removeAllRanges();
            selection?.addRange(range);
        }
    };

    return (
        <div className="flex flex-col gap-4 p-4">
            <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                className="bg-bgLogin outline-none text-lg w-full p-4 px-5 border border-gris6b rounded-lg prose max-w-none overflow-auto"
                onInput={handleInput}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
            >
            </div>
        </div>
    );
};

export default MarkdownEditor;
