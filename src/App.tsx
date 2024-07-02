import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtFair1Page from "./pages/ArtFair1Page";
import ArtFair2Page from "./pages/ArtFair2Page";
import ArtFairListPage from "./pages/ArtFairListPage";
import ContactUsPage from "./pages/ContactUsPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/diaf1" element={<ArtFair1Page />} />
        <Route path="/diaf2" element={<ArtFair2Page />} />
        <Route path="/diaflist" element={<ArtFairListPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
