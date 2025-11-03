interface InputProps {
  htmlFor: string;
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
}

export default function InputFormulario(props: InputProps) {
  return (
    <div className="flex flex-col flex-1 gap-4 ">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="p-2 border-gray-300 border text-black placeholder-gray-400 rounded-sm"
        onChange={(e) => props.onChange(e.target.value)} // ver como que fica o set
        value={props.value}
      />
    </div>
  );
}
