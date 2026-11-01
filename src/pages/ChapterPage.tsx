import { useParams } from "react-router-dom";
import { useGetChapter } from "../hooks/useGetChapter";
import { LoadingPage } from "./LoadingPage";

export const ChapterPage = () => {
  const { mangaSlug, chapterId } = useParams<{
    mangaSlug: string | undefined;
    chapterId: string | undefined;
  }>();

  const { loading, chapterPages } = useGetChapter({
    mangaSlug: mangaSlug as string,
    chapterId: Number(chapterId),
  });

  if (loading) return <LoadingPage />;

  chapterPages.sort((m, b) => m.order - b.order);
  return (
    <div className="bg-neutral-900 w-full flex flex-col items-center gap-2">
      {chapterPages.map((page, index) => (
        <img key={index} className="w-1/2" src={page.img} alt="" />
      ))}
    </div>
  );
};
