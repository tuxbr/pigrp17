import { useEffect, useState } from 'react';
import { Muda, MudaCatalogo } from '@/types/mudas';
import CatalogoMudas from '@/components/catalogo-mudas';
import NavbarLinks from '@/components/navbar';
import Rodape from '@/components/footer';

const TrocaDeMudas: React.FC = () => {

  const [mudasCatalogo, setMudasCatalogo] = useState<MudaCatalogo[]>([]);

  useEffect(() => {
    const fetchMudasCatalogo = async () => {
      try {
        const response = await fetch('/api/mudas/catalogo');
        if (!response.ok) {
          throw new Error('Erro.');
        }
        const data = await response.json();
        setMudasCatalogo(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchMudasCatalogo();
  }, []);

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
