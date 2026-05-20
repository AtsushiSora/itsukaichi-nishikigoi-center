import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { AftercarePage } from "./pages/AftercarePage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { KoiDetailPage } from "./pages/KoiDetailPage";
import { KoiListPage } from "./pages/KoiListPage";
import { MaintenancePage } from "./pages/MaintenancePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { CommercePage } from "./pages/CommercePage";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/koi" element={<KoiListPage />} />
          <Route path="/koi/:id" element={<KoiDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/aftercare" element={<AftercarePage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/commerce" element={<CommercePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
