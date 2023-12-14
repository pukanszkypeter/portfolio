import { FC } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import logo from "./assets/logo.png";

const App: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <img src={logo} alt="logo" width="75px" height="75px" />
      <h1 className="text-3xl font-bold underline underline-offset-8 mb-4">
        Hello world!
      </h1>
      <ThemeSwitcher />
    </div>
  );
};

export default App;
