import { useLocation } from "react-router-dom";
import type { Manga } from "../hooks/useGetMangos";

interface LocationState {
  manga: Manga;
}

export const ChapterPage = () => {
  const location = useLocation();

  const state = location.state as LocationState | null;

  const manga = state?.manga ?? null;
  // const mangos = [
  //   {
  //     order: 5,
  //     img: "https://raw.githubusercontent.com/MaximoXv/pinosaurus-api/refs/heads/master/chapters/Episode%201%20-%20Pallet%20Town/1.png",
  //   },
  //   {
  //     order: 4,
  //     img: "https://raw.githubusercontent.com/MaximoXv/pinosaurus-api/refs/heads/master/chapters/Episode%201%20-%20Pallet%20Town/2.png",
  //   },
  //   {
  //     order: 3,
  //     img: "https://raw.githubusercontent.com/MaximoXv/pinosaurus-api/refs/heads/master/chapters/Episode%201%20-%20Pallet%20Town/3.png",
  //   },
  //   {
  //     order: 2,
  //     img: "https://raw.githubusercontent.com/MaximoXv/pinosaurus-api/refs/heads/master/chapters/Episode%201%20-%20Pallet%20Town/4.png",
  //   },
  //   {
  //     order: 1,
  //     img: "https://raw.githubusercontent.com/MaximoXv/pinosaurus-api/refs/heads/master/chapters/Episode%201%20-%20Pallet%20Town/5.png",
  //   },
  // ];
  if (!manga) return null;

  manga.pages.sort((m, b) => m.order - b.order);
  return (
    <div className="bg-neutral-900 w-full flex flex-col items-center gap-2">
      {manga?.pages.map((mango) => (
        <img className="w-1/2" src={mango.img} alt="" />
      ))}
    </div>
  );
};
