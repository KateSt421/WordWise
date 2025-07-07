import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WordForm from "./components/wordForm/WordForm";
import WordList from "./components/wordList/WordList";
import WordsSlider from "./components/wordsSlider/WordsSlider";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WordProvider } from "./context/WordContext";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import ErrorNotification from "./components/errorNotification/ErrorNotification";

const App = () => {
  return (
    <WordProvider>
      <Router>
        <div>
          <Header />
          <ErrorNotification />
          <Routes>
            <Route
              path="/"
              element={
                <div className="container">
                  <h1>Список английских слов</h1>
                  <LoadingSpinner />
                  <WordList />
                  <WordForm />
                </div>
              }
            />
            <Route
              path="/game"
              element={
                <div className="container">
                  <WordsSlider />
                </div>
              }
            />
            <Route
              path="*"
              element={
                <div className="container">
                  <ErrorPage />
                </div>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WordProvider>
  );
};

export default App;
