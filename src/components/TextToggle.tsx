import type { Dispatch, SetStateAction } from "react";
import type { MouseEventHandler } from "react";

interface TextToggleProps {
    text1: string;
    text2: string;
    state: boolean;
    onClick: MouseEventHandler<HTMLDivElement>
}

const TextToggle = ({ text1, text2, state, onClick }: TextToggleProps) => {

  const max_text_length = Math.max(text1.length, text2.length);

  return (
    <div onClick={onClick} className="relative grid auto-cols-fr flex-wrap w-fit grid-cols-2 self-center gap-2 h-fit rounded-full bg-transparent cursor-pointer border-[2px] border-teal-400">
      <div className={`flex absolute bg-teal-400 bg-opacity-40 rounded-full w-[50%] h-full ${state?"translate-x-full":"translate-x-0"} duration-300 ease-in-out`}></div>
      <div className="flex p-[8px] place-content-center basis-1/2 self-center whitespace-nowrap z-50 select-none">{text1}</div>
      <div className="flex p-[8px] place-content-center basis-1/2 self-center whitespace-nowrap z-50 select-none">{text2}</div>
    </div>
  );
}
export default TextToggle;