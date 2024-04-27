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
      <h1 className="mb-4 text-primary text-center">Minhas Mudas</h1>
      <p className='text-center'>Cadastre abaixo (ou remova) suas mudas para efetuar suas trocas.</p>
      {erro && <p className="text-danger text-center">{erro}</p>}
      <div className='row justify-content-center'>
          <div className="col-12 text-center m-2">
            <input
              type="text"
              value={novaMuda.nome}
              onChange={(e) => setNovaMuda({...novaMuda, nome: e.target.value})}
              placeholder="Nome"
              required
            />
          </div >
          <div className="col-12 text-center m-2">
            <input
              type="text"
              value={novaMuda.especie}
              onChange={(e) => setNovaMuda({...novaMuda, especie: e.target.value})}
              placeholder="Espécie"
              required
            />
          </div>
          <div className="col-12 text-center m-2">
            <input
              type="text"
              value={novaMuda.origem}
              onChange={(e) => setNovaMuda({...novaMuda, origem: e.target.value})}
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
                // Verifica se o arquivo selecionado é uma imagem
                if (file.type.startsWith('image/')) {
                  // Se for uma imagem, salvar no servidor e pegar o link)
                  // Atualizar o estado com a URL da imagem
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const imageUrl = event.target?.result;
                    if (imageUrl && typeof imageUrl === 'string') {
                      setNovaMuda({ ...novaMuda, imagem: imageUrl });
                    }
                  };
                  reader.readAsDataURL(file);
                } else {
                  // Se não for uma imagem, mostra uma mensagem de erro pra pessoa
                  setErro('Por favor, selecione um arquivo de imagem.');
                }
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
