import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const FormData = lazy(() => import("./pages/Home"));
const TicketPage = lazy(() => import("./pages/Ticket"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FormData />} />
      <Route path="ticket" element={<TicketPage />} />
    </Routes>
  );
};
