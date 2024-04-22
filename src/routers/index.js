import React from "react"
import { Navigate } from "react-router-dom"

import IndicatorDemo from "@/components/demo/indicator-demo"
const Home = React.lazy(() => import("../views/home"))
const Detail = React.lazy(() => import("../views/detail"))
const Entire = React.lazy(() => import("../views/entire"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element:<Home/>
  },
  {
    path: "/detail",
    element: <Detail/>
  },
  {
    path: "/entire",
    element: <Entire/>
  },
  {
    path: "/indicator",
    element: <IndicatorDemo/>
  }
]

export default routes