import { MutableRefObject, ReactNode } from "react";
import { SelectDefault } from "./SelectDefault";

const selectComponents = new Map();
selectComponents.set("default", SelectDefault);

export type SelectProps = {
  title?: string;
  valueDefault?: string;
  className?: string;
  //   options?: TOption[];
  //   children: (props: DropdownProps) => ReactNode;
  container?: MutableRefObject<HTMLDivElement | null>;
};
const Select = ({
  variant,
  ...restProps
}: { variant: string } & SelectProps) => {
  const ReqiredVariant = selectComponents.get(variant);
  return <ReqiredVariant {...restProps} />;
};

export default Select;
