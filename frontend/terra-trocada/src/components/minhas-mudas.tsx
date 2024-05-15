import React, { useState } from 'react';
import { Muda } from '@/types/mudas';

interface Props {
  minhasMudas: Muda[];
  adicionarMuda: (novaMuda: Muda) => void;
  removerMuda: (id: number) => void;
}

const MinhasMudas: React.FC<Props> = ({ minhasMudas, adicionarMuda, removerMuda }) => {
  const [novaMuda, setNovaMuda] = useState<Muda>({
    nomePlanta: '',
    descricao: '',
    categoria: '',
    imagem: '',
    proprietarioId: 0
  });
  const [erro, setErro] = useState<string>('');

  const handleAdicionarMuda = async () => {
    try {
      const response = await fetch('/api/mudas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nomePlanta: novaMuda.nomePlanta,
          descricao: novaMuda.descricao,
          categoria: novaMuda.categoria,
          imagem: novaMuda.imagem, 
          proprietarioId: 1
        })
      });
  
      if (response.ok) {
        const mudaAdicionada = await response.json();
        adicionarMuda(mudaAdicionada);
        setNovaMuda({
          nomePlanta: '',
          descricao: '',
          categoria: '',
          imagem: '',
          proprietarioId: 0
        });
        setErro('');
      } else {
        setErro('Erro ao adicionar a muda.');
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      setErro('Erro ao adicionar a muda.');
    }
  };

  const handleRemoverMuda = async (id: number) => {
    try {
      const response = await fetch(`/api/mudas/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        removerMuda(id);
      } else {
        setErro('Erro ao remover a muda.');
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      setErro('Erro ao remover a muda.');
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-primary text-center">Minhas Mudas</h1>
      <p className='text-center'>Cadastre abaixo (ou remova) suas mudas para efetuar suas trocas.</p>
      {erro && <p className="text-danger text-center">{erro}</p>}
      <div className='row justify-content-center'>
      <div className="col-12 text-center m-2">
            <input
              type="text"
              value={novaMuda.nomePlanta}
              onChange={(e) => setNovaMuda({...novaMuda, nomePlanta: e.target.value})}
              placeholder="Nome"
              required
            />
          </div >
          <div className="col-12 text-center m-2">
            <input
              type="text"
              value={novaMuda.categoria}
              onChange={(e) => setNovaMuda({...novaMuda, categoria: e.target.value})}
              placeholder="Espécie"
              required
            />
          </div>
          <div className="col-12 text-center m-2">
            <input
              type="text"
              value={novaMuda.descricao}
              onChange={(e) => setNovaMuda({...novaMuda, descricao: e.target.value})}
              placeholder="Origem"
              required
            />
          </div>
          <div className="col-12 text-center m-2">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  const base64Image = event.target?.result;
                  if (base64Image && typeof base64Image === 'string') {
                    setNovaMuda({ ...novaMuda, imagem: base64Image });
                  }
                };
                reader.readAsDataURL(file);
              }
            }}
            accept="image/*"
            style={{ display: 'none' }}
            id="imagemInput"
          />
          <label htmlFor="imagemInput" className="btn btn-outline-primary btn-sm">
            Selecionar Imagem
          </label>
          </div>
        </div>

        <div className="d-flex justify-content-center btn-sm pr-4">
            <button onClick={handleAdicionarMuda} className="btn btn-primary text-white">Adicionar Muda</button>
      </div>

      <div>
        {minhasMudas?.map(muda => (
          <div key={muda.mudaId} className="col-md-4 mb-4">
            <div className="card">
              <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
                <img src={muda.imagem} className="card-img-top" alt={muda.nomePlanta} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{muda.nomePlanta}</h5>
                <p className="card-text">Espécie: {muda.descricao}</p>
                <p className="card-text">Origem: {muda.categoria}</p>
                <button onClick={() => muda.mudaId !== undefined && handleRemoverMuda(muda.mudaId)} className="btn btn-danger">Remover Muda</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MinhasMudas;
