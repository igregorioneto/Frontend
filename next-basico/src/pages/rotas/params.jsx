import Link from "next/link";
import { useRouter } from "next/router";

export default function params() {
    const router = useRouter();
    const id = router.query.id;
    const nome = router.query.nome;

    return (
        <div>
            <h1>Rotas Params: {id} e {nome}</h1>
            <Link href="/rotas" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}