interface TituloProps {
  titulo: string;
}

export default function TituloPage({ titulo }: TituloProps) {
  return (
    <div className="flex bg-gray-100 items-center shadow-md h-14 p-2 w-full ">
      <h1>{titulo}</h1>
    </div>
  );
}
