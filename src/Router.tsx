import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FullName from "./pages/FullName";
import Age from "./pages/Age";
import Review from "./pages/Review";
import { useUserInfo } from "./hooks/use-user-metadata";

function Router() {
  const userInfo = useUserInfo();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route
          path="/full-name"
          element={
            <FullName
              firstName={userInfo.firstName}
              lastName={userInfo.lastName}
              setFirstName={userInfo.setFirstName}
              setLastName={userInfo.setLastName}
            />
          }
        />
        <Route
          path="/age"
          element={<Age age={userInfo.age} setAge={userInfo.setAge} />}
        />
        <Route
          path="/review"
          element={
            <Review
              firstName={userInfo.firstName}
              lastNmae={userInfo.lastName}
              age={userInfo.age}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
