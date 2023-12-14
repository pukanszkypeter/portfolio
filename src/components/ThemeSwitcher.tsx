import { FC } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p className="mb-4">
        {theme &&
          `The current theme is: ${theme
            .charAt(0)
            .toLocaleUpperCase()
            .concat(theme.slice(1))}`}
      </p>
      <Button
        color="primary"
        variant="shadow"
        className="mr-2"
        onClick={() => {
          setTheme("light");
        }}
      >
        Light Mode
      </Button>
      <Button
        color="primary"
        variant="shadow"
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark Mode
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
