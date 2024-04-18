import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage.tsx";
import Blog from "./pages/blog.tsx";
import ContactPage from "./pages/contactPage.tsx";
import Navigation from "./components/Navigation.tsx";
import BlogEntry from "./pages/blogEntry.tsx";


function App() {
  return (
      <>

        <Navigation />
      <Routes>
         <Route path={"/"} element={<MainPage />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/blog/:blogPostID"} element={<BlogEntry />} />
          <Route path={"/contact"} element={<ContactPage />} />
      </Routes>
          </>
  )
}

export default App
