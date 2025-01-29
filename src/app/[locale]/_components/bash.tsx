import React, { useEffect, useState } from "react";
import { codeToHtml } from 'shiki'
import CopieString from "./copy";

interface BashRendererProps {
    code: string;
    langage: string;
    theme?: string;
}

const BashRenderer: React.FC<BashRendererProps> = ({ code, langage, theme }) => {
    const [highlightedCode, setHighlightedCode] = useState<string>("");
    const altTheme = theme ?? 'tokyo-night'

    useEffect(() => {
        const highlightCode = async () => {
            const highlighted = await codeToHtml(code, {
                lang: langage,
                theme: altTheme
            });
            setHighlightedCode(highlighted);
        };

        highlightCode();
    }, [code]);

    return (
        <div className="rounded-lg bg-bgBash">
            <div className="flex flex-row justify-between bg-bgTopBash rounded-t-lg px-5 py-2">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-x-2">
                        <div className="rounded-full w-4 h-4 bg-btnRed"></div>
                        <div className="rounded-full w-4 h-4 bg-btnYellow"></div>
                        <div className="rounded-full w-4 h-4 bg-btnGreen"></div>
                    </div>
                    <p>{langage}</p>
                </div>
                <CopieString valeur={code} />
            </div>
            <div
                className="px-5 py-5 w-[7/12]">
                <div
                    style={{ overflowX: 'auto' }}
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
            </div>
        </div>
    );
}

export default BashRenderer;
