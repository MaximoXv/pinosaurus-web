import portraitImg from "../assets/PORTADA1.png";

export const ChapterPage = () => {
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
    <div className="bg-neutral-900 w-full flex flex-col items-center gap-2">
      {mangos.map((mango) => (
        <img src={mango.img} alt="" />
      ))}
    </div>
  );
};
