interface Conteudo {
  children: React.ReactNode;
}

export default function ConteudoPage({ children }: Conteudo) {
  return (
    <div className="m-16 flex border flex-col w-1/2 p-6 rounded-md  shadow-md border-gray-300">
      {children}
    </div>
  );
}
