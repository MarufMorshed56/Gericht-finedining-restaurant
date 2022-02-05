import React,{useEffect} from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import { useInView} from 'react-intersection-observer'

const AboutUs = ({setUrl}) => {

const {ref,inView} = useInView({
    threshold:0.5
  }) 

 useEffect(()=>{
      if(inView){
        setUrl('about')}
  },[inView])

  return (<div ref={ref} className='about_div' id="about">
    <div className="about_div-wrapper"><div className="about_left"><h1 className='about_header'>About Us</h1><img src={images.spoon} alt="about_spoon" className="spoon__img spoon__img-left" />
    <p className="about_left-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. </p>
      <button type="button" className="custom__button">Know More</button></div>
    <div className="about_middle"><img className='about_middle-img' src={images.knife} alt="" /></div>
    <div className="about_right"><h1 className='about_header'>Our History</h1><img src={images.spoon} alt="about_spoon" className=" spoon__img spoon__img-right" /><p className="about_right-p">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet. </p>
      <button type="button" className="custom__button">Know More</button></div></div>
    
  </div>)
};

export default AboutUs;
