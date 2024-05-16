import { Muda } from '@/types/mudas';

interface Props {
  mudasCatalogo: Muda[];
}

const CatalogoMudas: React.FC<Props> = ({ mudasCatalogo }) => {
  return (
    <div>
      <h1 className="mb-4 text-primary text-center">Catálogo de Mudas</h1>
      <p className='text-center'>Abaixo estão todas as mudas disponíveis para troca, você poderá trocá-las pelas suas mudas cadastradas na tela "Trocar Mudas".</p>
      <div className="row">
        {mudasCatalogo.map(muda => (
          <div key={muda.mudaId} className="col-md-4 mb-4">
            <div className="card">
              <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
                <img src={muda.imagem} className="card-img-top" alt={muda.nomePlanta} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{muda.nomePlanta}</h5>
                <p className="card-text">Categoria: {muda.categoria}</p>
                <p className="card-text">Descrição: {muda.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoMudas;