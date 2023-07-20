import { useAtomValue } from "jotai";
import React from "react";
import { textAtom } from "../jotai/atoms";

const HeadingComponent = () => {
  const text = useAtomValue(textAtom);

  return (
    <div>
      <h3>{text}</h3>
    </div>
  );
};

export default HeadingComponent;
