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
      mudaId: 1,
      nomePlanta: "Rosa",
      categoria: "Flores",
      descricao: "As rosas são flores populares conhecidas por sua beleza e fragrância. Elas vêm em uma variedade de cores, como vermelho, branco, rosa e amarelo.",
      imagem: "https://s2.glbimg.com/hhuZZao7ykonpE3HD0sMtflfk4M=/780x440/e.glbimg.com/og/ed/f/original/2015/08/28/img_0186.jpg",
      proprietarioId: 0
    },    
    {
      mudaId: 2,
      nomePlanta: "Manjericão",
      categoria: "Ervas",
      descricao: "O manjericão é uma erva aromática comumente usada na culinária mediterrânea. Suas folhas têm um aroma distinto e são usadas frescas ou secas em pratos como molhos, saladas e pesto.",
      imagem: "https://static.tuasaude.com/media/article/lk/sf/manjericao_3994_l.webp",
      proprietarioId: 0
    },
    {
      mudaId: 3,
      nomePlanta: "Suculentas",
      categoria: "Plantas de Interior",
      descricao: "As suculentas são plantas que armazenam água em suas folhas, caules e raízes, permitindo-lhes sobreviver em climas áridos. Elas vêm em uma variedade de formas e cores e são populares como plantas de interior de baixa manutenção.",
      imagem: "https://s2.glbimg.com/3wRS8I9amVOsJUpVnkB2wyiWA6k=/e.glbimg.com/og/ed/f/original/2022/01/04/suculentas-tudo-sobre-freepik-casaejardim.jpg",
      proprietarioId: 0
    },
    {
      mudaId: 4,
      nomePlanta: "Girassol",
      categoria: "Flores",
      descricao: "O girassol é uma flor que se destaca por sua grande cabeça amarela e pétalas brilhantes. Ele segue o movimento do sol durante o dia, daí seu nome. Os girassóis são cultivados por sua beleza ornamental e sementes comestíveis.",
      imagem: "https://www.centrodasracoes.com.br/wp-content/uploads/2021/01/1-girassol.jpg",
      proprietarioId: 0
    },
    {
      mudaId: 5,
      nomePlanta: "Samambaia",
      categoria: "Plantas de Interior",
      descricao: "As samambaias são plantas verdes e frondosas com folhas delicadas e elegantes. Elas são populares como plantas de interior devido à sua capacidade de purificar o ar e adicionar um toque de verde aos espaços internos.",
      imagem: "https://www.petz.com.br/blog/wp-content/uploads/2023/02/o-que-fazer-com-lagarta-na-samambaia-2.jpg",
      proprietarioId: 0
    },
    {
      mudaId: 6,
      nomePlanta: "Lavanda",
      categoria: "Arbustos",
      descricao: "A lavanda é um arbusto perfumado conhecido por suas flores roxas e aroma relaxante. Ela é frequentemente usada em sachês, óleos essenciais e produtos de cuidados pessoais devido às suas propriedades calmantes e aromáticas.",
      imagem: "https://imagens-revista.vivadecora.com.br/uploads/2022/11/Como-plantar-lavanda-no-jardim-Foto-iStock.jpg",
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
        <div className="row mt-5">
          <div className="col-md-5">
            <span className='m-2'>Suas Mudas: </span>
            <select className='m-2' onChange={(e) => setMinhaMudaSelecionada(minhasMudasSelect.find(muda => muda.mudaId?.toString() === e.target.value) || null)}>
              <option value="">Selecione uma muda cadastrada</option>
              {minhasMudasSelect.map(muda => (
                <option key={muda.mudaId} value={muda.mudaId?.toString()}>{muda.nomePlanta}</option>
              ))}
            </select>
          </div>
          <div className={`col-md-2 d-flex justify-content-center align-items-center order-1`}>
          </div>
          <div className="col-md-5">
            <span className='m-2'>Mudas Disponíveis no Catálogo: </span>
            <select className='m-2' onChange={handleSelectMudaCatalogo}>
              <option value="">Selecione uma muda</option>
              {catalogoSelect.map(muda => (
                <option key={muda.mudaId} value={muda.mudaId?.toString()}>{muda.nomePlanta}</option>
              ))}
            </select>
          </div>         
        </div>
        {/* <div className="col-md-2">
            <button onClick={handleTrocarMuda} className="btn btn-primary mx-2 mb-2 btn-sm text-white">Trocar Mudas</button>
          </div> */}
          <div className="row mt-5">
            {mudaCadastradaSelecionada && (
              <div className={`col-md-5 ${trocaDireita ? 'order-2' : ''}`}>
              <div className="card">
                <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
                  <img src={mudaCadastradaSelecionada?.imagem} className="card-img-top" alt={mudaCadastradaSelecionada?.nomePlanta} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{mudaCadastradaSelecionada?.nomePlanta}</h5>
                  <p className="card-text">Categoria: {mudaCadastradaSelecionada?.categoria}</p>
                  <p className="card-text">Descrição: {mudaCadastradaSelecionada?.descricao}</p>
                </div>
              </div>
            </div>
            )}
            {(mudaCatalogoSelecionada || mudaCadastradaSelecionada) && (
            <div className={`col-md-2 d-flex justify-content-center align-items-center order-1`}>
              <button onClick={handleTrocarMuda} className="btn"><span className="text-warning fas fa-exchange fa-5x"></span></button>
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
                  <p className="card-text">Categoria: {mudaCatalogoSelecionada?.categoria}</p>
                  <p className="card-text">Descrição: {mudaCatalogoSelecionada?.descricao}</p>
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
