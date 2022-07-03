import React, { memo, Fragment } from "react";

interface Props {
  children: React.ReactNode;
}

export const MainWrapper = memo((props: Props) => {
  return (
    <Fragment>
        <div className="wrapper top-navigation">{props.children}</div>
    </Fragment>
  );
});
