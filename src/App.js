import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const SearchArea = lazy(() => import("./components/main/SearchArea"));
const WatchList = lazy(() => import("./components/main/WatchList"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SearchArea />} exact />
        <Route path="/watch-list" element={<WatchList />} exact />
      </Routes>
      {/* <Routes>
        <Route path="/home/watch-list" element={<WatchList />} exact />
      </Routes> */}
    </Suspense>
  );
}

export default App;
