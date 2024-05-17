import { useState, useEffect } from 'react';
import { Muda, MudaCatalogo } from '@/types/mudas';
import router from 'next/router';

interface Props {
  minhasMudas: Muda[];
}

const TrocarMuda: React.FC<Props> = ({ minhasMudas }) => {
  const [minhasMudasSelect, setMinhasMudas] = useState<Muda[]>([]);
  const [catalogoSelect, setCatalogoSelect] = useState<MudaCatalogo[]>([]);
  const [mudaCadastradaSelecionada, setMinhaMudaSelecionada] = useState<Muda | null>(null);
  const [mudaCatalogoSelecionada, setMudaCatalogoSelecionada] = useState<MudaCatalogo | null>(null);
  const [trocaDireita, setTrocaDireita] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleTrocaLado = () => {
    setTrocaDireita(!trocaDireita);
  };

  //Pega as mudas cadastradas do BackEnd
  useEffect(() => {
    const fetchMudas = async () => {
      try {
        const response = await fetch('/api/mudas');
        if (!response.ok) {
          throw new Error('Erro.');
        }
        const data = await response.json();
        setMinhasMudas(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchMudas();
  }, []);

  useEffect(() => {
    const fetchMudasCatalogo = async () => {
      try {
        const response = await fetch('/api/mudas/catalogo');
        if (!response.ok) {
          throw new Error('Erro.');
        }
        const data = await response.json();
        setCatalogoSelect(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchMudasCatalogo();
  }, []);

  const handleTrocarMuda = async () => {
    if (mudaCatalogoSelecionada && mudaCadastradaSelecionada) {
      console.log(`Trocar ${mudaCatalogoSelecionada.nome} por ${mudaCadastradaSelecionada.nomePlanta}`);
      
      //URL do POST
      const url = `/api/trocas/trocar-mudas?userId=1&mudaId=${mudaCadastradaSelecionada.mudaId}&catalogoMudaId=${mudaCatalogoSelecionada.id}`;
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      };

      try {
        const response = await fetch(url, requestOptions)
        if (response.ok) {
          setShowSuccessMessage(true);
          setTimeout(() => {
            router.push('/minhas-mudas');
          }, 3000); // Redireciona depois de 3 segundos
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    };
  };

  const handleSelectMudaCatalogo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMudaId = parseInt(event.target.value);
    const selectedMuda = catalogoSelect.find(muda => muda.id === selectedMudaId) || null;
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
                <option key={muda.id} value={muda.id?.toString()}>{muda.nome}</option>
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
                  <img src={mudaCatalogoSelecionada?.imagem} className="card-img-top" alt={mudaCatalogoSelecionada?.nome} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{mudaCatalogoSelecionada?.nome}</h5>
                  <p className="card-text">Categoria: {mudaCatalogoSelecionada?.categoria}</p>
                  <p className="card-text">Descrição: {mudaCatalogoSelecionada?.descricao}</p>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>

      {/* Pop-up de sucesso */}
      {showSuccessMessage && (
        <div className="success-message">
          <p>Troca efetuada com sucesso!</p>
        </div>
      )}

      <style jsx>{`
        .success-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}

export default TrocarMuda;
