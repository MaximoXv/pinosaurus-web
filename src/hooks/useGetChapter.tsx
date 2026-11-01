import { useEffect, useState } from "react";
import type { Chapter } from "../types/Manga";

export interface useGetChapterProps {
  mangaSlug: string;
  chapterId: number;
}

export const useGetChapter = ({ chapterId, mangaSlug }: useGetChapterProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [chapterPages, setchapterPages] = useState<Chapter[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const rawData = await fetch(
          `https://raw.githubusercontent.com/MaximoXv/pinosaurus-api/refs/heads/master/api/mangas/${mangaSlug}/${chapterId}.json`,
        );
        const parsedData: Chapter[] = await rawData.json();
        setchapterPages(parsedData);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return {
    loading,
    chapterPages,
  };
};
