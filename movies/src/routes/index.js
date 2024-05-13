import Home from "../components/Home";
import SliderPage from "../components/SliderPage";
import AddPage from "../components/AddPage";
import DetailPage from "../components/DetailPage"
export const ROUTES = [

  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sliders",
        element: <SliderPage />,
      },
      {
        path: "add-page",
        element: <AddPage />,
      },
      {
        path: "sliders/:id",
        element: <DetailPage />,
      },
    ],
  },
  {
    path:"*",
  }
];