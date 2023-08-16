import React, {  useRef } from "react";
import Button from "./Button";
import letScrollIcon from "../assets/left-scroll.svg";
import rightScrollIcon from "../assets/right-scroll.svg";
// import { CATEGORIES_API } from "../utils/constants";

const btnList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "News",
  "Bollywood",
  "Computer",
  "Scene",
  "Mixes",
  "History",
  "programming",
  "Hollywood",
];

const ButtonList = () => {
  // const [btnList, setbtnList] = useState([]);

  // const getList = async () => {
  //   await fetch("https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4")
  //     .then((data) => data.json())
  //     .then((response) => {
  //       console.log(response);
  //       setbtnList(response?.items);
  //     });
  // };

  // useEffect(() => {
  //   getList();
  // }, []);

  const scrollRef = useRef(null);

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[0]).width
      );
      scrollRef.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[0]).width
      );
      scrollRef.current.scrollLeft = scrollLeft + itemWidth * 3;
    });
  };

  return (
    <div className="flex  ml-[300px] z-40 bg-white pb-2">
      <button
        onClick={prev}
        className="hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100 fixed z-50"
      >
        <img alt="leftScrollBtn" className="inline-block" src={letScrollIcon} />
      </button>
      <div ref={scrollRef} className="max-w-[86%] overflow-x-hidden flex mx-12">
        {btnList?.map((btnName, index) => {
          return <Button key={index} name={btnName} />;
        })}
      </div>
      <button
        onClick={next}
        className="hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100 fixed z-50"
      >
        <img
          alt="rightScrollBtn"
          className="inline-block"
          src={rightScrollIcon}
        />
      </button>
    </div>
  );
};

export default ButtonList;
