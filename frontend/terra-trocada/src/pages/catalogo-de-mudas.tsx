import { useState } from 'react';
import { Muda } from '@/types/mudas';
import CatalogoMudas from '@/components/catalogo-mudas';
import NavbarLinks from '@/components/navbar';
import Rodape from '@/components/footer';

const TrocaDeMudas: React.FC = () => {

  //TODO: Pegar esses dados abaixo da controller (migration) (Gui)
  const [mudasCatalogo, setMudasCatalogo] = useState<Muda[]>([
    {
      id: 3,
      nome: "Lírio Amarelo",
      especie: "Lírio",
      origem: "Holanda",
      imagem: "https://www.sitiodamata.com.br/media/catalog/product/cache/80281f1a4d89199560fc0837e49d13da/l/i/lirio-amarelo-hemerocalys-flava_3nd.jpg",
    },
    {
      id: 4,
      nome: "Violeta Roxa",
      especie: "Violeta",
      origem: "França",
      imagem: "https://meulugar.quintoandar.com.br/wp-content/uploads/2023/06/violeta-plantada-no-jardim-scaled-aspect-ratio-1500-1300-scaled.jpeg",
    },
    {
      id: 5,
      nome: "Rosa Vermelha",
      especie: "Rosa",
      origem: "China",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMcqxGOFUo45C-tdKXvVhTxmoml4n7PIywjggU5UyTQ&s"
    },
    {
      id: 6,
      nome: "Girassol",
      especie: "Helianthus annuus",
      origem: "América",
      imagem: "https://imagens-revista.vivadecora.com.br/uploads/2018/09/Girassol-em-jardins.jpg"
    },
    {
      id: 7,
      nome: "Orquídea Branca",
      especie: "Orquídea",
      origem: "Tropical",
      imagem: "https://portalvidalivre.com/uploads/article/image/42/Design_sem_nome__21_.jpg"
    },
    {
      id: 8,
      nome: "Tulipa Vermelha",
      especie: "Tulipa",
      origem: "Turquia",
      imagem: "https://blog.giulianaflores.com.br/wp-content/uploads/2013/06/tulipas-vermelhas.jpg"
    }
    
  ]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
       <CatalogoMudas mudasCatalogo={mudasCatalogo} />
      </div>
      <Rodape />
    </div>
  );
}

export default TrocaDeMudas;
