import React, { useState } from 'react';
import { Muda } from '@/types/mudas';

interface Props {
  minhasMudas: Muda[];
  adicionarMuda: (novaMuda: Muda) => void;
  removerMuda: (id: number) => void;
}

const MinhasMudas: React.FC<Props> = ({ minhasMudas, adicionarMuda, removerMuda }) => {
  const [novaMuda, setNovaMuda] = useState<Muda>({
    nome: '',
    especie: '',
    origem: '',
    imagem: ''
  });
  const [erro, setErro] = useState<string>('');

  const handleAdicionarMuda = () => {
    if (novaMuda.nome && novaMuda.especie && novaMuda.origem && novaMuda.imagem) {
      adicionarMuda(novaMuda);
      setNovaMuda({
        nome: '',
        especie: '',
        origem: '',
        imagem: ''
      });
      setErro('');
    } else {
      setErro('Por favor, preencha todos os campos antes de adicionar a muda.');
    }
  };

  return (
    <div>
      <h2 className='text-center'>Minhas Mudas Cadastradas</h2>
      <p className='text-center'>Cadastre abaixo (ou remova) suas mudas para efetuar suas trocas.</p>
      {erro && <p className="text-danger text-center">{erro}</p>}
      <div>
        <div className="row mb-6">
          <div className="col-md-6 mb-2 text-center">
            <input
              type="text"
              value={novaMuda.nome}
              onChange={(e) => setNovaMuda({...novaMuda, nome: e.target.value})}
              placeholder="Nome"
              required
            />
          </div>
          <div className="col-md-6 mb-2 text-center">
            <input
              type="text"
              value={novaMuda.especie}
              onChange={(e) => setNovaMuda({...novaMuda, especie: e.target.value})}
              placeholder="Espécie"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 mb-2 text-center">
            <input
              type="text"
              value={novaMuda.origem}
              onChange={(e) => setNovaMuda({...novaMuda, origem: e.target.value})}
              placeholder="Origem"
              required
            />
          </div>
          <div className="col-md-6 mb-2 text-center">
            <input
              type="text"
              value={novaMuda.imagem}
              onChange={(e) => setNovaMuda({...novaMuda, imagem: e.target.value})}
              placeholder="Imagem"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-end btn-sm pr-4">
            <button onClick={handleAdicionarMuda} className="btn btn-primary text-white">Adicionar Muda</button>
        </div>
      </div>

      <div>
        {minhasMudas.map(muda => (
          <div key={muda.id} className="col-md-4 mb-4">
            <div className="card">
              <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
                <img src={muda.imagem} className="card-img-top" alt={muda.nome} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{muda.nome}</h5>
                <p className="card-text">Espécie: {muda.especie}</p>
                <p className="card-text">Origem: {muda.origem}</p>
                <button onClick={() => muda.id !== undefined && removerMuda(muda.id)} className="btn btn-danger">Remover Muda</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MinhasMudas;
