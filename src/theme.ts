import { Container, createTheme } from "@mantine/core";
import classes from "./styles/App.module.css";
import cx from "clsx";

export const theme = createTheme({
  
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === "responsive" }),
      }),
    }),
  },
});
