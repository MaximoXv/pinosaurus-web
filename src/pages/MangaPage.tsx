import { useNavigate } from "react-router-dom";
import portraitImg from "../assets/PORTADA1.png";

export const MangaPage = () => {
  const navigate = useNavigate();
  const mangos = [
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
    { name: "Chapter 1 - Pallet Town", img: portraitImg },
  ];

  return (
    <div className="flex flex-col w-full text-white items-center bg-neutral-900">
      <header className="relative flex w-full h-80 items-center justify-center bg-[url(./assets/PORTADA.png)] bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 backdrop-blur-xs">
          <div className="w-full p-0  md:pl-24 xl:max-w-5xl xl:p-0">
            <div className="flex flex-col items-center md:items-start gap-2">
              <img
                className="h-52 rounded-lg w-40"
                src={portraitImg}
                alt="profile"
              />
              <h1 className="text-2xl font-bold">POKÉMON RED & LEAF</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-6 bg-neutral-900 p-6 max-w-7xl w-full">
        <p className="text-xl font-bold w-full">Chapters</p>
        <div className="w-full flex flex-col gap-4 justify-center">
          {mangos.map((mango, index) => (
            <div
              className="hover:scale-105 cursor-pointer transition-all duration-300 flex items-center gap-2 bg-neutral-700 p-2 rounded-lg w-full"
              key={index}
              onClick={() => {
                navigate("/chapter");
              }}
            >
              <img
                className="block w-12 h-12 object-cover rounded-xl"
                src={mango.img}
                alt="portrait"
              />
              <p className="text-lg font-bold">{mango.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
