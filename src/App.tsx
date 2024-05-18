import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import ProviderTheme from "./styles/CreateTheme";
import NavBar from "./components/layout/NavBar";

const PhotoStatistics = lazy(() => import("./pages/statistics/photo"));
const UserStatistics = lazy(() => import("./pages/statistics/user"));
const UserPhotos = lazy(() => import("./pages/userPhoto"));
const SearchRes = lazy(() => import("./pages/searchRes"));
const MapPage = lazy(() => import("./pages/map"));
const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <ProviderTheme>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/userStatistics/:name" element={<UserStatistics />} />
          <Route path="/userPhotos/:name" element={<UserPhotos />} />
          <Route path="/search" element={<SearchRes />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/search/photoStatistics/:photoId"
            element={<PhotoStatistics />}
          />
        </Route>
      </Routes>
    </ProviderTheme>
  );
}

export default App;
