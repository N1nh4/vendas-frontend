import ConteudoPage from "@/components/ConteudoPage";
import TituloPage from "@/components/TituloPage";

export default function Cadastro() {
  return (
    <div className="flex w-full">
      <TituloPage titulo="Cadastro" />
      <ConteudoPage>
        <form action="">
          <label htmlFor="">SKU: *</label>
          <input type="text" />
        </form>
      </ConteudoPage>
    </div>
  );
}
