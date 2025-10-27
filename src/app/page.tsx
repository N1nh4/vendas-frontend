import ConteudoPage from "@/components/ConteudoPage";
import TituloPage from "@/components/TituloPage"

export default function Home() {
  return (
    <div className="flex h-screen flex-col w-full">
      <TituloPage titulo="Home"/>
      <main className="flex justify-center">
        <ConteudoPage> 
          <form action="" className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl">Cadastro de Produto</h1>
            </div>
      
            <div className="flex flex-row gap-1 w-full">
              <div className="flex flex-col flex-1 gap-4">
                <label htmlFor="inputSKU">SKU: *</label>
                <input
                  id="inputSKU"
                  type="text"
                  placeholder="Digite o SKU do produto"
                  className="p-2 border-gray-300 border text-gray-400 rounded-sm"
                
                />
              </div>
              <div className="flex flex-col flex-1 gap-4">
                <label htmlFor="inputSKU">Preço: *</label>
                <input
                  id="inputSKU"
                  type="number"
                  placeholder="Digite o SKU do produto"
                  className="p-2 border-gray-300 border text-gray-400 rounded-sm"
                
                />
              </div>
            </div>

            <label htmlFor="inputSKU">Nome: *</label>
            <input 
              id="inputSKU" 
              type="text" 
              placeholder="Digite o SKU do produto"
              className="p-2 border-gray-300 border text-gray-400 rounded-sm"
            
            />

            <label htmlFor="inputSKU">Descrição: *</label>
            <textarea
              id="inputSKU" 
              placeholder="Digite o SKU do produto"
              className="p-2 border-gray-300 border text-gray-400 rounded-sm"
            
            />

            <button className="bg-blue-500 rounded-sm text-white p-2 ">
              Salvar
            </button>

          </form>
        </ConteudoPage>
      </main>
    </div>
  );
}
