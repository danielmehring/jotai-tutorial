import { useSetAtom } from "jotai";
import React from "react";
import { textAtom } from "../jotai/atoms";

const TextFieldComponent = () => {
  const setText = useSetAtom(textAtom);

  return (
    <div>
      <form>
        <input onChange={(e) => setText(e.target.value)}></input>
      </form>
    </div>
  );
};

export default TextFieldComponent;
