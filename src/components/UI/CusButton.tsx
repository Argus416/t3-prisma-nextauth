import type { SignOutParams } from "next-auth/react";
import { FunctionComponent, useEffect, useState } from "react";
import { ButtonMode } from "~/models/UI";

interface CurrentProps {
  name: string;
  mode?: ButtonMode;
  action?: FunctionConstructor | SignOutParams | undefined;
}

const CusButton: FunctionComponent<CurrentProps> = (props) => {
  const [currentMode, setCurrentMode] = useState("");
  const { mode, action, name } = props;

  useEffect(() => {
    switch (mode) {
      case ButtonMode.danger:
        setCurrentMode(
          "btn border-red-500 bg-red-500 text-white hover:border-red-600 hover:bg-red-600"
        );
        break;
    }
  }, [mode]);

  const clickHandler = () => {
    void action();
  };

  return (
    <button className={`${currentMode}`} onClick={clickHandler}>
      {name}
    </button>
  );
};

export default CusButton;
