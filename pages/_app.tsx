import React, { FC, memo } from "react";
import Head from "next/head";
interface IProps {
  children?: React.ReactNode;
}

const Template: FC<IProps> = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

export default memo(Template);
