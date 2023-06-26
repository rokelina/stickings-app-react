interface RowInputProps {
  inputType: string;
  labelFor: string;
}

function RowInput({ inputType, labelFor }: RowInputProps) {
  return (
    <label className="row-input" htmlFor={labelFor}>
      <input type={inputType} id={labelFor} name="rows" />
    </label>
  );
}
export default RowInput;
