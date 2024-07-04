import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange"
> & {
  onChange: (value: string) => void;
};

export const TextInput = (props: Props) => {
  const { onChange, ...p } = props;
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange(e.target.value);
  return (
    <input
      className="border-2 p-2 w-full shadow-sm border-gray-200 rounded-lg"
      type="text"
      onChange={handleChange}
      {...p}
    />
  );
};
