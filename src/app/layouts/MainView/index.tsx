import React, { memo, useEffect } from 'react';
import { ContainerWrap } from '../components/ContainerWrap/ContainerWrap';
// import { Topbar } from '../components/Topbar';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const MainView = memo((props: Props) => {
  // Scroll to the top
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <div>
      <div className="layout">
        {/* <Topbar /> */}
      </div>
      <ContainerWrap className="container_wrap">{props.children}</ContainerWrap>
    </div>
  );
});
