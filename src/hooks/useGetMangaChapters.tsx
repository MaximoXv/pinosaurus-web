import { useEffect, useState } from "react";
import type { MangaChapter } from "../types/Manga";

export const useGetMangaChapters = (mangaSlug: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [chapters, setChapters] = useState<MangaChapter[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const rawData = await fetch(
          `https://raw.githubusercontent.com/MaximoXv/pinosaurus-api/refs/heads/master/api/mangas/${mangaSlug}/chapters.json`,
        );
        const parsedData: MangaChapter[] = await rawData.json();
        setChapters(parsedData);
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
    chapters,
  };
};
