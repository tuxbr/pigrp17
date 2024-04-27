import NavbarLinks from '@/components/navbar';

import Rodape from '@/components/footer';
import MinhasMudas from '@/components/minhas-mudas';
import { useState } from 'react';
import { Muda } from '@/types/mudas';


export default function TrocarMudasPage() {

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
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
        <MinhasMudas minhasMudas={minhasMudas} adicionarMuda={adicionarMuda} removerMuda={removerMuda} />
      </div>
      <Rodape />
    </div>
  )

}