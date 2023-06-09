import { ReactNode } from 'react';

interface Props {
  children: string;
  icon: ReactNode;
  inputName: string;
  minValue: number;
  onValueChange: (value: string) => void;
  value: string;
  wrapperName: string;
}

function NumberInput({
  icon,
  inputName,
  minValue,
  onValueChange,
  children,
  value,
  wrapperName,
}: Props) {
  return (
    <div className={wrapperName}>
      {icon}
      <input
        type="number"
        name={inputName}
        min={minValue}
        className={inputName}
        onChange={(e) => onValueChange(e.target.value)}
        value={value}
      />
      <span className={inputName}>{children}</span>
    </div>
  );
}

export default NumberInput;
