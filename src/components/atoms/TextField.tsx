import React, { memo, forwardRef } from "react";

type Props = JSX.IntrinsicElements["input"];

const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default memo(TextField);
