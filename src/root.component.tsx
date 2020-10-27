import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "./hooks/ThemeContext";
import DataCard from "./views/DataCard";
import { state } from "@ktaboada/api";

export default function Root(props) {
  const { eventBus, globalCSS, theme } = props;

  return (
    <>
      <Global
        styles={css`
          ${globalCSS}
        `}
      />
      <ThemeProvider theme={theme}>
        <DataCard eventBus={eventBus} />
      </ThemeProvider>
    </>
  );
}
