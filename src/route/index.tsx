import { Routes, Route } from "react-router-dom";

import CustomDougnutChart from "../components/chart/bar";
import CustomBarChart from "../components/chart/bar";
import CustomLineChart from "../components/chart/line";
import Tree from "../components/tree";
import InfinityScrolling from "../components/infinityScrolling";
import DataTablePage from "../pages/datatable";

export default function RouterComponents() {
  return (
    <Routes>
      <Route path="/chart/doughnut" element={<CustomDougnutChart />} />
      <Route path="/chart/bar" element={<CustomBarChart />} />
      <Route path="/chart/line" element={<CustomLineChart />} />
      <Route path="/tree" element={<Tree />} />
      <Route path="/infinityScroll" element={<InfinityScrolling />} />
      <Route path="/dataTable" element={<DataTablePage />} />
    </Routes>
  );
}
