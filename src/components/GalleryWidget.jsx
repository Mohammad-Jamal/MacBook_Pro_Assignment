import { data } from "autoprefixer";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useRef, useState } from "react";
import Separator from "./Separater";

const GalleryWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [image, setImage] = useState([]);
  const inputRef = useRef(null);

  const items = [
    { src: "/image.png" },
    { src: "/image.png" },
    { src: "/image.png" },
    { src: "/image.png" },
    { src: "/image.png" },
  ];

  if (image) {
    image.map((data) => items.unshift({ src: URL.createObjectURL(data) }));
  }

  const itemsToShow = 3; // Number of items to show at once

  const styles = {
    transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
  };
  // Function to handle moving the carousel to the right
  const handleMoveRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  // Function to handle moving the carousel to the left
  const handleMoveLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleAddedImage = (e) => {
    setImage((prev) => [...prev, e.target.files[0]]);
  };

  return (
    <div className="w-full md:w-[750px] h-[316px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] relative px-0 sm:px-[2rem] md:px-[3.6rem] py-3 z-1 ">
      {/* side-icons-div */}
      <div className="flex absolute top-5 sm:top-6 left-2 sm:left-1 gap-20 flex-col items-center w-5 sm:w-10 justify-center">
        <img src="./info.png" alt="" width={24} />
        <img src="./boxes.png" alt="" width={24} className="ml-1" />
      </div>

      {/* header */}
      <div className="font-poppins mt-0 sm:mt-2 px-3 sm:px-5 md:px-0 flex justify-between items-center">
        <Button
          className="bg-[#171717] ml-7 sm:ml-0 tracking-wide text-xs px-4 py-0 sm:text-lg sm:p-7 sm:px-9 h-10 sm:h-0 rounded-2xl sm:rounded-3xl"
          size="lg"
        >
          Gallery
        </Button>
        <div className="flex relative">
          {/* Add Images Button */}
          <button
            className="absolute whitespace-nowrap text-white text-[10px] sm:text-sm font-plus font-semibold flex items-center justify-between text-center tracking-wide px-3 sm:px-6 py-1 sm:py-1 rounded-full
             bg-[rgba(255,255,255,0.03)] 
             shadow-[0_-0.5px_6.9px_rgba(255,255,255,0.25),9px_10px_7.1px_rgba(0,0,0,0.4),inset_0px_0px_48.9064px_rgba(255,255,255,0.05),inset_0px_3.26043px_3.26043px_rgba(255,255,255,0.15)] 
             backdrop-blur-[52.28px]
             -top-0.5 sm:top-0 right-[5.3rem] sm:right-40 "
            onClick={handleImageClick}
          >
            <span className=" pb-1 sm:pb-2 font-plus text-[15px] sm:text-2xl font-light mr-1 sm:mr-2">+</span>
            ADD IMAGE
            <input
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={handleAddedImage}
            />
          </button>
          <div className="flex gap-3 sm:gap-5">
            {/* arrowLeft button */}
            <Button
              className="p-4 px-[10px] sm:p-4 rounded-full shadow-[#67989792] shadow-[0px_0px_12px_0.01px] active:shadow-none bg-gradient-to-tr from-[#303439] to-[#161718] hover:bg-gradient-to-tr transition-all duration-700 hover:from-black hover:to-black hover:opacity-50 z-10 relative active:bg-gradient-to-br active:from-[#00ddffa4] active:to-[#282828d7]  sm:h-[3.09rem] h-8 "
              onClick={handleMoveLeft}
            >
              <img src="/arrow_left.png" alt="arrow_left" width={18} className="w-3 sm:w-5" />
              <span className="absolute rounded-full p-4 sm:p-[1.6rem] sm:-top-[1px] left-0 shadow-black shadow-[0px_0px_30px_8px] z-0 opacity-30 "></span>
            </Button>
            {/* arrowRight button */}

            <Button
              className="p-4 px-[10px] sm:p-4 rounded-full shadow-[#67989792] shadow-[0px_0px_12px_0.01px] active:shadow-none bg-gradient-to-tr from-[#303439] to-[#161718] transition duration-700
              hover:bg-gradient-to-tr relative z-10 hover:from-black hover:to-black hover:opacity-50 active:bg-gradient-to-br active:from-[#00ddffa4] active:to-[#282828d7] sm:h-[3.09rem] h-8
              "
              onClick={handleMoveRight}
            >
              <img src="/arrow_right.png" alt="arrow_right" width={18} className="w-3 sm:w-5"  />
              <span className="absolute rounded-full p-4 sm:p-[1.6rem] sm:-top-[1px] -left-1ft-0 shadow-black shadow-[0px_0px_30px_8px] z-0 opacity-30 "></span>
            </Button>
          </div>
        </div>
      </div>

      <Carousel className="flex ml-1 md:-ml-4 md:-mr-4">
        <CarouselContent
          className="flex  justify-start transition-transform duration-500  sm:pl-4 sm:pr-2 md:pl-4 md:-pr-10  ease-in-out overflow-visible "
          style={styles}
        >
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/3 lg:basis-1/3 rounded-md pl-3 md:pl-4 md:pr-2  transition-all pt-12 sm:pt-10 ease-in-out relative delay-150 duration-200 pb-10 sm:pb-6"
            >
              <img
                src={item.src}
                alt={`image ${index}`}
                className="mx-auto transition-all saturate-0 hover:saturate-100 duration-300 ease-in-out transform delay-150 hover:scale-110 hover:drop-shadow-[9px_19px_20px_black]   hover:-translate-y-3 rounded-3xl hover:-rotate-3 w-48 h-44  object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className=" px-8 sm:p-0 mt-3 sm:mt-2">
      <Separator/>
      </div>

    </div>
  );
};

export default GalleryWidget;
