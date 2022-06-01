import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParallaxPage from "./pages/Parallax";
import ScrollSnap from "./pages/ScrollSnap";
import VideoSection from "./pages/VideoSection";

export default function routed() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ParallaxPage />} />
          <Route path="fullpage" element={<ScrollSnap />} />
          <Route path="video" element={<VideoSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
