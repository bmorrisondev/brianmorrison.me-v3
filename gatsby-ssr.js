import React from 'react'

const headComponents = [
  <link key="boxicons" href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
];

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};