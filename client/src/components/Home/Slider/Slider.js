import { StoriesContext } from "../../../contexts/StoriesContext";
import { useContext, useState } from "react";
export const Slider = () => {
  const { stories } = useContext(StoriesContext)
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = stories.map(x => x.img)

  const prevSlide = () => {
    const index = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const index = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(index);
  };

  return (
    <div id="slider">

<button onClick={prevSlide}>Преди</button>
<div>
        <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
    </div>
          <button onClick={nextSlide}>След</button>
    </div>



  )
}