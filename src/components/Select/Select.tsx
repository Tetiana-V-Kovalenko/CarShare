import { MutableRefObject, ReactNode } from "react";
import { SelectDefault } from "./SelectDefault";

export type TOption = { title: string; value: string };

export type SelectProps = {
  title?: string;
  valueDefault?: string;
  className?: string;
  options?: TOption[];
  container?: MutableRefObject<HTMLDivElement | null>;
};

const selectComponents = new Map();
selectComponents.set("default", SelectDefault);

const Select = ({
  variant = "default",
  ...restProps
}: { variant: string } & SelectProps) => {
  const ReqiredVariant = selectComponents.get(variant);
  return <ReqiredVariant {...restProps} />;
};

export default Select;
