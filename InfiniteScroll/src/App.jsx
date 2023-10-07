import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchImages from "./api/FetchImages";
import arrow from "./image/arrow-up.png";

function App() {
  const [page, setpage] = useState(1);
  const [Data, setData] = useState([]);
  const Images = useQuery({
    queryKey: ["images", page],
    queryFn: () => FetchImages(page),
    onSuccess: (newData) => {
      setData((prevData) => [...prevData, ...newData.hits]);
    },
  });
  console.log("images" + Images);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  function handleScrollTop() {
    window.scrollTo(0, 0);
  }
  function handleScroll() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    if (windowHeight + scrollTop >= documentHeight - 100) {
      setpage(page + 1);
    }
  }
  if (Images.isError) {
    throw new Error("There is error getting images");
  }
  console.log(Data);
  return (
    <div className="bg-gradient-to-br from-pink-300 to-yellow-300">
      <h1 className="text-5xl font-playfair text-center ">ImageFlow</h1>
      <div className="grid grid-cols-4 mt-8 sm:grid-cols-2 md:grid-cols-2 mr-4 ml-4 sm:mr-2 sm:ml-2 gap-4">
        {Data.map((obj) => (
          <div
            key={obj.id}
            className="relative overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <Link to={obj.pageURL}>
              <img
                src={obj.webformatURL}
                data-src={obj.largeImageURL}
                alt={obj.tags}
                className="object-cover object-center w-full h-full transition-transform duration-300 transform scale-200 hover:scale-105"
              />
            </Link>
          </div>
        ))}
      </div>
      <button
        className="w-12 h-12 border-none rounded-full bg-black fixed bottom-8 right-12  sm:right-4 "
        onClick={handleScrollTop}
      >
        <img src={arrow} alt="go to top" className="w-12 h-8" />
      </button>
    </div>
  );
}

export default App;
