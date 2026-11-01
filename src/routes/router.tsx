import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MangaPage } from "../pages/MangaPage";
import { ChapterPage } from "../pages/ChapterPage";

export const router = createBrowserRouter([
  { path: "/pinosaurus-web", element: <App /> },
  { path: "/pinosaurus-web/:mangaSlug", element: <MangaPage /> },
  { path: "/pinosaurus-web/:mangaSlug/:chapterId", element: <ChapterPage /> },
]);
