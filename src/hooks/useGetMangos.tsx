import { useEffect, useState } from "react";

export interface Manga {
  chapterName: string;
  pages: { img: string; order: number }[];
  order: number;
}

export const useGetMangos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [mangas, setMangas] = useState<Manga[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          "https://raw.githubusercontent.com/MaximoXv/pinosaurus-api/refs/heads/master/api.json",
        );
        const parsedData: Manga[] = await data.json();
        setMangas(parsedData);
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
    mangas,
  };
};
