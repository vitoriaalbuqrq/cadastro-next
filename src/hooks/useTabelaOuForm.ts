import { useState } from "react";

export default function useTabelaOuForm() {
    //Dois possiveis estados: tabela e formulario. Inicializar com tabela por padrao
    const [visivel, setVisivel] = useState<'tabela'| 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        //exportar funções
        exibirTabela,
        exibirFormulario,
    }
}