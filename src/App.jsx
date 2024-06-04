import React from "react";
import Crop from "./Crop";
import Landing from "./Landing";
import Know from "./Know";
import Blog from "./Blog";
import Blog1 from "./Blog1";
import Blogs from "./Blogs";
import Blogs2 from "./Blogs2";
import Blogs3 from "./Blogs3";
import Blogs4 from "./Blogs4";
import Blogs5 from "./Blogs5";
import Blogs6 from "./Blogs6";
import Blogs7 from "./Blogs7";
import Blogs8 from "./Blogs8";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/know" element={<Know />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs2" element={<Blogs2 />} />
          <Route path="blogs3" element={<Blogs3 />} />
          <Route path="blogs4" element={<Blogs4 />} />
          <Route path="blogs5" element={<Blogs5 />} />
          <Route path="blogs6" element={<Blogs6 />} />
          <Route path="blogs7" element={<Blogs7 />} />
          <Route path="blogs8" element={<Blogs8 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
