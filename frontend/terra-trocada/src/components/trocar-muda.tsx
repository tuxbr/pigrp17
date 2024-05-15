import { useState } from 'react';
import { Muda } from '@/types/mudas';

interface Props {
  minhasMudas: Muda[];
  mudasCatalogo: Muda[];
}

const TrocarMuda: React.FC<Props> = ({ minhasMudas, mudasCatalogo }) => {
  const [mudaSelecionada, setMudaSelecionada] = useState<Muda | null>(null);
  const [mudaCatalogoSelecionada, setMudaCatalogoSelecionada] = useState<Muda | null>(null);

  const handleTrocarMuda = () => {
    if (mudaSelecionada && mudaCatalogoSelecionada) {
      console.log(`Trocar ${mudaSelecionada.nomePlanta} por ${mudaCatalogoSelecionada.nomePlanta}`);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <p>Selecione uma muda do catálogo e uma muda sua para efetuar a troca. Caso ainda não tenha uma muda cadastrada, você poderá cadastrar abaixo.</p>
        <div className='p-3 mb-4'>
          <span className='m-2'>Mudas do catálogo: </span>
          <select className='m-2' onChange={(e) => setMudaCatalogoSelecionada(mudasCatalogo.find(muda => muda.mudaId?.toString() === e.target.value) || null)}>
            <option value="">Selecione uma muda do catálogo</option>
            {mudasCatalogo.map(muda => (
              <option key={muda.mudaId} value={muda.mudaId?.toString()}>{muda.nomePlanta}</option>
            ))}
          </select>

          <span className='m-2'>Suas mudas: 1</span>
          <select className='m-2' onChange={(e) => setMudaSelecionada(minhasMudas.find(muda => muda.mudaId?.toString() === e.target.value) || null)}>
            <option value="">Selecione uma muda</option>
            {minhasMudas?.map(muda => (
              <option key={muda.mudaId} value={muda.mudaId?.toString()}>{muda.nomePlanta}</option>
            ))}
          </select>

          <button onClick={handleTrocarMuda} className="btn btn-primary mx-2 mb-2 btn-sm text-white">Trocar Mudas</button>

        </div>
      
      </div>
    </div>
  );
}

export default TrocarMuda;