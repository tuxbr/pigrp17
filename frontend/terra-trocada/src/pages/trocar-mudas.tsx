import NavbarLinks from '@/components/navbar';
import TrocaDeMudas from '../components/troca-de-mudas';
import Rodape from '@/components/footer';
import MinhasMudasTrocadas from '@/components/mudas-trocadas';
import { Muda } from '@/types/mudas';

export default function TrocarMudasPage() {

  const mudasTrocadas: Muda[] = [ 
    {
      id: 1,
      nome: "MINHA MUDA ESTÁTICA",
      especie: "MINHA",
      origem: "Brasil",
      imagem: "MINHA.jpg"
    },
    {
      id: 2,
      nome: "MINHA MUDA 2",
      especie: "MINHA 2",
      origem: "Brasil 2",
      imagem: "MINHA.jpg"
    }
  ]


  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
        <TrocaDeMudas />
      </div>
      <div className="container mt-4">
        <MinhasMudasTrocadas mudasTrocadas={mudasTrocadas} />
      </div>
      <Rodape />
    </div>
);
}