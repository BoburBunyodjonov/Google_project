import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"


import Home from "./pages/Home"
import Layout from "./layout/Layout"
// import Result from "./pages/Result"

const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/result" element={<Result />} /> */}
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App