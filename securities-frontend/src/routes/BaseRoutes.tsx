import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/BaseOutlet";
import SecuritiesList from "../modules/SecuritiesList";
import SecurityDetails from "../modules/SecuritiesDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SecuritiesList />} />
          <Route path="/securities" element={<SecuritiesList />} />
          <Route path="/securities/:ticker" element={<SecurityDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
