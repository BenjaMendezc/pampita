import React, { ReactElement } from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Title.scss";

interface TitleProps extends ReactElementBaseProps {}

function Title({ copy, className, style }: TitleProps): ReactElement {
  return (
    <div className={className} style={style}>
      <h1 className="Title__text">{copy}</h1>
    </div>
  );
}

export default Title;
