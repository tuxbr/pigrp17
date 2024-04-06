import { useState } from 'react';
import MinhasMudas from './minhas-mudas';
import CatalogoMudas from './catalogo-mudas';
import TrocarMuda from './trocar-muda';
import { Muda } from '@/types/mudas';

const TrocaDeMudas: React.FC = () => {

  const [minhasMudas, setMinhasMudas] = useState<Muda[]>([]);
  // const [minhasMudas, setMinhasMudas] = useState<Muda[]>([
  //   {
  //     id: 1,
  //     nome: "MINHA MUDA ESTÁTICA",
  //     especie: "MINHA",
  //     origem: "Brasil",
  //     imagem: "MINHA.jpg",
  //   }
  // ]);

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

  const adicionarMuda = (novaMuda: Muda) => {
    const novaMudaComId = {
      ...novaMuda,
      id: minhasMudas.length + 1
    };

    setMinhasMudas([...minhasMudas, novaMudaComId]);
  };

  const removerMuda = (id: number) => {
    const novasMudas = minhasMudas.filter(muda => muda.id !== id);
    setMinhasMudas(novasMudas);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-primary text-center">Trocar Mudas</h1>

      <div className="row">
        <div className="col-md-12">
          <TrocarMuda minhasMudas={minhasMudas} mudasCatalogo={mudasCatalogo} />
        </div>
        <div className="col-md-5">
          <CatalogoMudas mudasCatalogo={mudasCatalogo} />
        </div>
        <div className='col-md-1'></div>
        <div className="col-md-6">
          <MinhasMudas minhasMudas={minhasMudas} adicionarMuda={adicionarMuda} removerMuda={removerMuda} />
        </div>
      </div>
    </div>
  );
}

export default TrocaDeMudas;
