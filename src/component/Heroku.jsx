import React from "react";
import { useState } from "react";

const Heroku = () => {
  const imageSlider = [
    {
      url: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/12/15/93809859-0e35-4b5a-9025-f8eca83207f4.jpg.webp",
      sliderContent: "/marketplace",
    },
    {
      url: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/12/23/dae6807f-f858-43af-90a2-17968e16c1d3.jpg.webp",
      sliderContent: "/articles",
    },
    {
      url: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/12/15/eb7fd3a1-e4e1-4fb4-ac27-34c74a1a3211.jpg.webp",
      sliderContent: "/about-us",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlides = () => {
    const firstSlide = currentIndex === 0;
    const newSlide = firstSlide ? imageSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
    console.log(newSlide);
  };

  const nextSlides = () => {
    const LastSlides = currentIndex === imageSlider.length - 1;
    const newSlide = LastSlides ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
    console.log(newSlide);
  };

  return (
    <div>
      <div className="pb-3">
        <div className="w-full">
          <div className="h-60 rounded-xl items-center pb-24 justify-between">
            <a href={`${imageSlider[currentIndex].sliderContent}`}>
              <img
                src={`${imageSlider[currentIndex].url}`}
                alt=""
                srcset=""
                className="rounded-xl"
              />
            </a>
          </div>
          <button onClick={prevSlides}>prev slides</button>
          <button onClick={nextSlides}>next slides</button>
        </div>
      </div>
    </div>
  );
};

export default Heroku;
