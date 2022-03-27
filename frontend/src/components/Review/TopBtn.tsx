import { useEffect, useRef } from 'react';
import { TopButton } from './Review.style';
import { throttle } from 'lodash';

export const TopBtn=()=>{
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const TOP_POSITION_SHOW_BUTTON = 500;
    refDiv.current.style.display = window.pageYOffset > TOP_POSITION_SHOW_BUTTON ? 'block' : 'none';

    window.onscroll = throttle(() => {
      refDiv.current.style.display = window.pageYOffset > TOP_POSITION_SHOW_BUTTON ? 'block' : 'none';
    }, 300);

    refDiv.current.onclick = () => window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [window]);

  return(
    <TopButton ref={refDiv}>TOP</TopButton>
  )
}