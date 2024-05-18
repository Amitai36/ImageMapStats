import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import ProviderTheme from "./styles/CreateTheme";
import PhotoStatistics from "./pages/statistics/photo";
import UserPhotos from "./pages/userPhoto";
const Home = lazy(() => import("./pages/home"));
const UserStatistics = lazy(() => import("./pages/statistics/user"));
const MapPage = lazy(() => import("./pages/map"));
const SearchRes = lazy(() => import("./pages/searchRes"));

function App() {
  return (
    <ProviderTheme>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchRes />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/userStatistics/:name" element={<UserStatistics />} />
          <Route
            path="/search/photoStatistics/:photoId"
            element={<PhotoStatistics />}
          />
          <Route path="/userPhotos/:name" element={<UserPhotos />} />
        </Route>
      </Routes>
    </ProviderTheme>
  );
}

export default App;
