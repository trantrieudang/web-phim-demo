import HomePage from "../containers/GuestLayout/HomePage";
import MovieBookingDetail from "../containers/GuestLayout/HomePage/pages/MovieBookingDetail";



const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/movie/:id",
    component: MovieBookingDetail,
  },
 
];

const routesAdmin = [
//   {
//     exact: false,
//     path: "/dashboard",
//     component: DashboardPage,
//   },
];

export { routesHome, routesAdmin };
