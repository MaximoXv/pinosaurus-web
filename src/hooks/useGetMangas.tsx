import { useEffect, useState } from "react";
import type { Manga } from "../types/Manga";

export const useGetMangas = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [mangas, setMangas] = useState<Manga[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          "https://raw.githubusercontent.com/MaximoXv/pinosaurus-api/refs/heads/master/api/api.json",
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
