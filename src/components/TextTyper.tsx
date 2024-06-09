import { useEffect, useState } from "react";

interface TextTyperProps {
    prefix: string;
    words: string[];
}

const TextTyper = ({ prefix, words }: TextTyperProps) => {
    const [text, setText] = useState("");
    const [isHidden, setIsHidden] = useState(false);

    function getMaxWordLength() {
        return Math.max(...words.map((word) => word.length));
    }

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function typeText() {
        while (true) {
            for (let word of words) {
                for (let i = 0; i < word.length; i++) {
                    setText(word.substring(0, i + 1));
                    await new Promise((resolve) => setTimeout(resolve, Math.random() * 100 + 50));
                }
                await sleep(1500);
                for (let i = word.length; i > 0; i--) {
                    setText(word.substring(0, i - 1));
                    await sleep(30);
                }
                await sleep(1500);
            }
        }
    }

    async function blinkCursor() {
        while (true) {
            setIsHidden(true);
            await sleep(600);
            setIsHidden(false);
            await sleep(600);
        }
    }

    useEffect(() => {
        typeText();
        blinkCursor();
    }
    , []);

    return (
        <div className={`flex self-center flex-col xl:flex-row gap-1 text-xl font-bold`}>
            <div className="flex self-center whitespace-nowrap">{prefix}</div>
            <div className={`flex items-center text-teal-400 whitespace-nowrap min-h-[1lh]`}>
                {text}
                <span className={`flex w-[1px] h-[1lh] ${isHidden ? "bg-white" : "bg-transparent"}`}></span>
            </div>
        </div>
    );
}
export default TextTyper;