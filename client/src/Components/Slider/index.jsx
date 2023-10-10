import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import "./index.scss"
import { useState } from 'react';


const Slider = () => {
  const data = [
    "https://images.unsplash.com/photo-1544957992-20514f595d6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60"
  ];

  const [currentSlide, setCurrentSlide] = useState(0)
  
  const prevSlide = () => {
    setCurrentSlide (currentSlide=== 0 ? 2 : (prev) => prev-1);
    };
  const nextSlide = () => {
    setCurrentSlide (currentSlide === 2 ? 0 : (prev) => prev + 1)};

  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <KeyboardDoubleArrowLeftOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <KeyboardDoubleArrowRightOutlinedIcon/>
        </div>
      </div>
    </div>
  );
}

export default Slider;
