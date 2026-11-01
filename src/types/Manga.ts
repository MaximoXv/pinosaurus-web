export interface Manga {
  imgPortrait: string;
  mangaName: string;
  id: number;
  order: number;
  slug: string;
}

export interface MangaChapter {
  id: number;
  chapterName: string;
  order: number;
}

export interface Chapter {
  img: string;
  order: number;
}
