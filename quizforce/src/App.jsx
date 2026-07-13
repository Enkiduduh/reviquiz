import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizChoix from "./pages/quizChoix/QuizChoix";
import QuizGame from "./pages/quizGame/QuizGame";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<QuizChoix />} />
          <Route path="/quiz" element={<QuizGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
