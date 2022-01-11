import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import Container from "components/layouts/Container";
import React, { FC } from "react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: theme.fonts.mono,
  },
  shadows: {
    outline: "none",
  },
});

const Main: FC = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Container>{children}</Container>
    </ChakraProvider>
  );
};

export default Main;
