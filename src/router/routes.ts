import { Home, NewsFeed, ParkDetails } from "pages";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/park/:parkCode",
    component: ParkDetails,
  },
  {
    path: "/news",
    component: NewsFeed,
  },
];
