interface TituloProps {
    titulo: string;
}

export default function TituloPage({titulo}: TituloProps) {
    return (
        <div className="flex bg-red-200 h-14 p-2 w-full ">
            <h1>{titulo}</h1>
        </div>
    )
}