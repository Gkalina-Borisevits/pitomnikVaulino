import logo from "./logo.svg"
import "./App.css"
import Products from "./features/products/Products"
import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Error from "./components/error/Error"
import ProductItem from "./features/productItem/ProductItem"
import MyComponent from "./components/componentMy/MyComponent"
import YoutubeExample from "./components/youtubeExample/YoutubeExample"
import DetailItem from "./features/detailItem/DetailItem"
// import Images from "./features/imageGallery/Images"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />

          <Route path="/:id" element={<ProductItem />} />
          <Route path="/:id/:detailId" element={<DetailItem />} />
          <Route path="componentMy" element={<MyComponent />} />
          {/* <Route path="imageGallery" element={<Images />} /> */}
          <Route path="youtubeExample" element={<YoutubeExample />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
