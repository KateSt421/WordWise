import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import error from "./error.jpeg";
import "./errorPage.css";

function ErrorPage() {
  return (
    <main>
      <h1>Страница не найдена</h1>
      <img className="error" src={error} alt="404" />
      <h2>Вернуться на главную?</h2>
      <Link to="/">
        <Button nameButton={"Home"} typeButton={"home"} />
      </Link>
    </main>
  );
}

export default ErrorPage;
