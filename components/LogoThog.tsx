import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

function LogoThog(props: IconProps) {
  return (
    <Icon fill="#24C6DC" minW={16} minH={16} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
        <g id="mainLayer" data-name="Layer Principal">
          <rect width="600" height="150" rx="75" y="75" />
          <rect width="150" height="150" rx="75" x="225" y="450" />
        </g>
      </svg>
    </Icon>
  );
}

export default LogoThog;
