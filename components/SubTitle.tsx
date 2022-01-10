import React from 'react';

function SubTitle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 50"
      width="400px"
      height="50px"
    >
      <path id="path0">
        <animate
          id="d0"
          attributeName="d"
          begin="0s;d4.end"
          dur="5s"
          values="m0,25 h0 ; m0,25 h400 ; m0,25 h0"
          keyTimes="0;0.8;1"
        />
      </path>
      <text
        fontFamily='"monospace", monospace'
        fill="#718096"
        fontSize="22"
        dominantBaseline="middle"
        x="50%"
        textAnchor="middle"
      >
        <textPath xlinkHref="#path0">Fullstack Engineer</textPath>
      </text>

      <path id="path1">
        <animate
          id="d1"
          attributeName="d"
          begin="d0.end"
          dur="5s"
          values="m0,25 h0 ; m0,25 h400 ; m0,25 h0"
          keyTimes="0;0.8;1"
        />
      </path>
      <text
        fontFamily='"monospace", monospace'
        fill="#718096"
        fontSize="22"
        dominantBaseline="middle"
        x="50%"
        textAnchor="middle"
      >
        <textPath xlinkHref="#path1">React / React Native</textPath>
      </text>
      <path id="path2">
        <animate
          id="d2"
          attributeName="d"
          begin="d1.end"
          dur="5s"
          values="m0,25 h0 ; m0,25 h400 ; m0,25 h0"
          keyTimes="0;0.8;1"
        />
      </path>
      <text
        fontFamily='"monospace", monospace'
        fill="#718096"
        fontSize="22"
        dominantBaseline="middle"
        x="50%"
        textAnchor="middle"
      >
        <textPath xlinkHref="#path2">NestJS / NextJS / GraphQL</textPath>
      </text>

      <path id="path3">
        <animate
          id="d3"
          attributeName="d"
          begin="d2.end"
          dur="5s"
          values="m0,25 h0 ; m0,25 h400 ; m0,25 h0"
          keyTimes="0;0.8;1"
        />
      </path>
      <text
        fontFamily='"monospace", monospace'
        fill="#718096"
        fontSize="22"
        dominantBaseline="middle"
        x="50%"
        textAnchor="middle"
      >
        <textPath xlinkHref="#path3">PostgreSQL / MariaDB</textPath>
      </text>

      <path id="path4">
        <animate
          id="d4"
          attributeName="d"
          begin="d3.end"
          dur="5s"
          values="m0,25 h0 ; m0,25 h400 ; m0,25 h0"
          keyTimes="0;0.8;1"
        />
      </path>
      <text
        fontFamily='"monospace", monospace'
        fill="#718096"
        fontSize="22"
        dominantBaseline="middle"
        x="50%"
        textAnchor="middle"
      >
        <textPath xlinkHref="#path4">Docker / CI-CD</textPath>
      </text>
    </svg>
  );
}

export default SubTitle;
