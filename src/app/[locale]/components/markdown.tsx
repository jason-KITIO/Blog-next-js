'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react';
import Toolbar from './Toolbar';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';

interface IMarkdownProps {
    description: string;
    onChange: (richText: string) => void;
}

const Markdown = ({ description, onChange }: IMarkdownProps) => {

    const editor = useEditor({
        extensions: [
            StarterKit.configure({}),
            Heading.configure({
                HTMLAttributes: {
                    class: "text-xl font-bold",
                    levels: [2],
                },
            }),
            Link.configure({
                openOnClick: false, // Si vous souhaitez que les liens s'ouvrent au clic
                HTMLAttributes: {
                    rel: 'noopener noreferrer', // Ajoutez des attributs HTML personnalisés si nécessaire
                },
            }),
        ],
        content: description,
        editorProps: {
            attributes: {
                class: "rounded-md border min-h-[150px] border-input bg-back"
            }
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
            console.log(editor.getHTML())
        },
        immediatelyRender: false
    })

    return (
        <div className="flex flex-col justify-stretch bg-bgLogin text-lg w-full pb-4 pt-1 border border-gris6b rounded-lg">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} className='border-t-2 border-gris6b outline-none tiptap p-2 overflow-y-auto h-[200px] custom-scroll' />
        </div>
    );
};

export default Markdown;