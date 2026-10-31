import profileImg from "./assets/profile.png";
import portraitImg from "./assets/PORTADA1.png";
import { useNavigate } from "react-router-dom";
import { useGetMangos } from "./hooks/useGetMangos";
import { LoadingPage } from "./pages/LoadingPage";
// import backgroundImg from "./assets/background.png";

function App() {
  const { loading, mangas } = useGetMangos();
  const navigate = useNavigate();
  const mangos = [
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
    { name: "POKÉMON RED & LEAF", img: portraitImg },
  ];
  if (loading) return <LoadingPage />;
  return (
    <div className="flex flex-col w-full text-white items-center bg-neutral-900">
      <header className="relative flex w-full h-52 items-center justify-center bg-[url(./assets/background.png)] bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/70">
          <div className="flex flex-col items-center">
            <img className="h-24 rounded-lg" src={profileImg} alt="profile" />
            <h1 className="text-2xl">PINOSAURUS</h1>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-6 bg-neutral-900 p-6 max-w-7xl">
        <p className="text-xl font-bold">Stories</p>
        <div className="w-full flex flex-wrap gap-8 justify-center">
          {mangos.map((mango, index) => (
            <div
              className="cursor-pointer hover:scale-110 hover:brightness-100 transition-all duration-300 flex flex-col gap-2 h-56 md:h-full w-24 md:w-64 items-center md:aspect-3/4 overflow-hidden brightness-75"
              key={index}
              onClick={() => navigate("/manga", { state: { mangas: mangas } })}
            >
              <img
                className="block w-full h-full object-cover rounded-xl"
                src={mango.img}
                alt="portrait"
              />
              <p className="text-sm md:text-2xl text-center">{mango.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
