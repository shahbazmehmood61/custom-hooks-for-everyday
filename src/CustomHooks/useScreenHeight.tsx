import React, { useMemo } from "react";

function useScreenHeight() {
  const body = document.body;
  const html = document.documentElement;

  const height = useMemo(
    () =>
      Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      ),
    [body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight]
  );

  return height;
}

export default useScreenHeight;
