import Titulo from "@/components/Titulo";

export default function usandoTitulo() {
    return (
        <>
            <Titulo 
                primeiro="Página de Cadastro"
                segundo="Incluir, alterar e deletar"
            />
            <Titulo 
                primeiro="Página de Login"
                segundo="Informe seu e-mail e senha"
                pequeno
            />
            <Titulo 
                primeiro="Página de Login"
                segundo="Informe seu e-mail e senha"
                pequeno={true}
            />
        </>
    )
}