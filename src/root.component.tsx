import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "./hooks/ThemeContext";
import DataCard from "./views/DataCard";

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
