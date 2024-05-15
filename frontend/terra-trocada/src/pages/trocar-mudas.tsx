import NavbarLinks from '@/components/navbar';
import TrocaDeMudas from '../components/troca-de-mudas';
import Rodape from '@/components/footer';
import MinhasMudasTrocadas from '@/components/mudas-trocadas';
import { Muda } from '@/types/mudas';

export default function TrocarMudasPage() {

  const mudasTrocadas: Muda[] = [ 
    {
      mudaId: 1,
      nomePlanta: "MINHA MUDA ESTÁTICA",
      descricao: "MINHA",
      categoria: "Brasil",
      imagem: "https://www.sitiodamata.com.br/media/catalog/product/cache/80281f1a4d89199560fc0837e49d13da/l/i/lirio-amarelo-hemerocalys-flava_3nd.jpg",
      proprietarioId: 1
    },
    {
      mudaId: 2,
      nomePlanta: "MINHA MUDA 2",
      descricao: "MINHA 2",
      categoria: "Brasil 2",
      imagem: "https://meulugar.quintoandar.com.br/wp-content/uploads/2023/06/violeta-plantada-no-jardim-scaled-aspect-ratio-1500-1300-scaled.jpeg",
      proprietarioId: 1
    }
  ]

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
        <TrocaDeMudas minhasMudas={[]} />
      </div>
      {/* <div className="container mt-4">
        <MinhasMudasTrocadas mudasTrocadas={mudasTrocadas} />
      </div> */}
      <Rodape />
    </div>
);
}