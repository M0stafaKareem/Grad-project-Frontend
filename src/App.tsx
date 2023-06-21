import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import StudentPage1 from "./pages/StudentPage1";
import AdvisorsPage from "./pages/AdvisorsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/studentsPage" element={<StudentPage1 />} />
      <Route path="/advisorsPage" element={<AdvisorsPage />} />
    </Routes>
  );
}
export default App;
