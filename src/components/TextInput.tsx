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
      className="border p-2 shadow-sm rounded-lg flex-grow bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-900"
      type="text"
      onChange={handleChange}
      {...p}
    />
  );
};
