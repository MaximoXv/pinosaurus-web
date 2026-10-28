import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MangaPage } from "../pages/MangaPage";
import { ChapterPage } from "../pages/ChapterPage";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/manga", element: <MangaPage /> },
  { path: "/chapter", element: <ChapterPage /> },
]);
