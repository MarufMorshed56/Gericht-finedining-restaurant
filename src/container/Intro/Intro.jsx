import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';
import { useInView} from 'react-intersection-observer'

const Intro = ({setUrl}) => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const {ref,inView} = useInView({
    threshold:0.5
  }) 

 React.useEffect(()=>{
      if(inView){
        setUrl('menu')}
  },[inView])

  return (
    <div ref={ref} className="app__video">
      <video className='vid'
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className={!playVideo ? "app__video-overlay_circle flex__center" : "display_none"}
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill  fontSize={150}  className="pause-btn" />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={100} style={{marginLeft:"10px"}} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
