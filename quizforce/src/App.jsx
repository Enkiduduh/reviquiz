import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizChoix from "./pages/quizChoix/QuizChoix";
import QuizGame from "./pages/quizGame/QuizGame";
import QuizMain from "./pages/quizMain/QuizMain";
import QuizLogin from "./pages/quizLogin/QuizLogin";
import QuizDashboard from "./pages/quizDashboard/QuizDashboard";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<QuizMain/>} />
          <Route path="/login" element={<QuizLogin/>} />
           <Route path="/dashboard" element={<QuizDashboard />} />
          <Route path="/quiz" element={<QuizGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
