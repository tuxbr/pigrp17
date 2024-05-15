import { useState, useEffect } from 'react';
import { Muda } from '@/types/mudas';

interface Props {
  minhasMudas: Muda[];
}

const TrocarMuda: React.FC<Props> = ({ minhasMudas }) => {
  const [minhasMudasSelect, setMinhasMudas] = useState<Muda[]>([]);
  const [mudaCadastradaSelecionada, setMinhaMudaSelecionada] = useState<Muda | null>(null);
  const [mudaCatalogoSelecionada, setMudaCatalogoSelecionada] = useState<Muda | null>(null);
  const [trocaDireita, setTrocaDireita] = useState<boolean>(false);

  const catalogoSelect = [
    {
      mudaId: 3,
      nomePlanta: "Lírio Amarelo",
      categoria: "Lírio",
      descricao: "Descrição da Planta Lírio",
      imagem: "https://www.sitiodamata.com.br/media/catalog/product/cache/80281f1a4d89199560fc0837e49d13da/l/i/lirio-amarelo-hemerocalys-flava_3nd.jpg",
      proprietarioId: 0
    },
    {
      mudaId: 4,
      nomePlanta: "Violeta Roxa",
      categoria: "Violeta",
      descricao: "Descrição da Planta Violeta",
      imagem: "https://meulugar.quintoandar.com.br/wp-content/uploads/2023/06/violeta-plantada-no-jardim-scaled-aspect-ratio-1500-1300-scaled.jpeg",
      proprietarioId: 0
    },
    {
      mudaId: 5,
      nomePlanta: "Rosa Vermelha",
      categoria: "Rosa",
      descricao: "Descrição da Planta Rosa",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMcqxGOFUo45C-tdKXvVhTxmoml4n7PIywjggU5UyTQ&s",
      proprietarioId: 0
    },
    {
      mudaId: 6,
      nomePlanta: "Girassol",
      categoria: "Helianthus annuus",
      descricao: "Descrição da Planta Girassol",
      imagem: "https://imagens-revista.vivadecora.com.br/uploads/2018/09/Girassol-em-jardins.jpg",
      proprietarioId: 0
    },
    {
      mudaId: 7,
      nomePlanta: "Orquídea Branca",
      categoria: "Orquídea",
      descricao: "Descrição da Planta Orquídea",
      imagem: "https://portalvidalivre.com/uploads/article/image/42/Design_sem_nome__21_.jpg",
      proprietarioId: 0
    },
    {
      mudaId: 8,
      nomePlanta: "Tulipa Vermelha",
      categoria: "Tulipa",
      descricao: "Descrição da Planta Tulipa",
      imagem: "https://blog.giulianaflores.com.br/wp-content/uploads/2013/06/tulipas-vermelhas.jpg",
      proprietarioId: 0
    }
    
  ];

  const handleTrocaLado = () => {
    setTrocaDireita(!trocaDireita);
  };

  //Pega as mudas cadastradas do BackEnd
  useEffect(() => {
    const fetchMudas = async () => {
      try {
        const response = await fetch('/api/mudas');
        if (!response.ok) {
          throw new Error('Erro ao obter as mudas do catálogo');
        }
        const data = await response.json();
        setMinhasMudas(data);
      } catch (error) {
        console.error('Erro ao obter as mudas do catálogo:', error);
      }
    };

    fetchMudas();
  }, []);

  const handleTrocarMuda = () => {
    console.log('mudaCatalogoSelecionada: ', mudaCatalogoSelecionada);
    console.log('mudaCadastradaSelecionada: ', mudaCadastradaSelecionada);
    if (mudaCatalogoSelecionada && mudaCadastradaSelecionada) {
      console.log(`Trocar ${mudaCatalogoSelecionada.nomePlanta} por ${mudaCadastradaSelecionada.nomePlanta}`);
      setTrocaDireita(!trocaDireita);
    }
  };

  const handleSelectMudaCatalogo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMudaId = parseInt(event.target.value);
    const selectedMuda = catalogoSelect.find(muda => muda.mudaId === selectedMudaId) || null;
    setMudaCatalogoSelecionada(selectedMuda);
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <p>Selecione uma muda do catálogo e uma muda sua para efetuar a troca. Caso ainda não tenha uma muda cadastrada, você poderá cadastrar em "Minhas Mudas".</p>
        <div className='p-3 mb-4'>
          <span className='m-2'>Suas Mudas: </span>
          <select className='m-2' onChange={(e) => setMinhaMudaSelecionada(minhasMudasSelect.find(muda => muda.mudaId?.toString() === e.target.value) || null)}>
            <option value="">Selecione uma muda cadastrada</option>
            {minhasMudasSelect.map(muda => (
              <option key={muda.mudaId} value={muda.mudaId?.toString()}>{muda.nomePlanta}</option>
            ))}
          </select>

          <span className='m-2'>Mudas Disponíveis no Catálogo: </span>
          <select className='m-2' onChange={handleSelectMudaCatalogo}>
            <option value="">Selecione uma muda</option>
            {catalogoSelect.map(muda => (
              <option key={muda.mudaId} value={muda.mudaId?.toString()}>{muda.nomePlanta}</option>
            ))}
          </select>

          <button onClick={handleTrocarMuda} className="btn btn-primary mx-2 mb-2 btn-sm text-white">Trocar Mudas</button>

          <div className="row mt-5">
            {mudaCadastradaSelecionada && (
              <div className={`col-md-5 ${trocaDireita ? 'order-2' : ''}`}>
              <div className="card">
                <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
                  <img src={mudaCadastradaSelecionada?.imagem} className="card-img-top" alt={mudaCadastradaSelecionada?.nomePlanta} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{mudaCadastradaSelecionada?.nomePlanta}</h5>
                  <p className="card-text">Espécie: {mudaCadastradaSelecionada?.descricao}</p>
                  <p className="card-text">Origem: {mudaCadastradaSelecionada?.categoria}</p>
                </div>
              </div>
            </div>
            )}
            {(mudaCatalogoSelecionada || mudaCadastradaSelecionada) && (
            <div className={`col-md-2 d-flex justify-content-center align-items-center order-1`}>
              <span className="text-warning fas fa-exchange fa-5x"></span>
            </div>
            )}
            {mudaCatalogoSelecionada && (
            <div className={`col-md-5 ${trocaDireita ? '' : 'order-2'}`}>
              <div className="card">
                <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
                  <img src={mudaCatalogoSelecionada?.imagem} className="card-img-top" alt={mudaCatalogoSelecionada?.nomePlanta} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{mudaCatalogoSelecionada?.nomePlanta}</h5>
                  <p className="card-text">Espécie: {mudaCatalogoSelecionada?.descricao}</p>
                  <p className="card-text">Origem: {mudaCatalogoSelecionada?.categoria}</p>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrocarMuda;
