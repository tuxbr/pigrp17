import React, { useState } from 'react';
import { Muda } from '@/types/mudas';

interface Props {
  mudasTrocadas: Muda[];
}

const MinhasMudasTrocadas: React.FC<Props> = ({ mudasTrocadas }) => {
  const [ratings, setRatings] = useState<{ [id: string]: number }>({});
  const [comments, setComments] = useState<{ [id: string]: { name: string; comment: string } }>({});

  const handleRatingChange = (id: string, rating: number) => {
    setRatings({ ...ratings, [id]: rating });
  };

  const handleCommentChange = (id: string, comment: string) => {
    setComments({ ...comments, [id]: { ...comments[id], comment } });
  };

  const handleNameChange = (id: string, name: string) => {
    setComments({ ...comments, [id]: { name, comment: comments[id]?.comment || '' } });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>, id: string) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newComment = event.currentTarget.value;
      setComments({ ...comments, [id]: { ...comments[id], comment: newComment } });
      event.currentTarget.value = '';
    }
  };

  const renderStars = (id: string) => {
    const rating = ratings[id] || 0;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={`${id}-${i}`}
          className={i <= rating ? "text-warning fas fa-star" : "text-warning far fa-star"}
          style={{ cursor: "pointer" }}
          onMouseEnter={() => handleRatingChange(id, i)}
          onMouseLeave={() => handleRatingChange(id, rating)}
          onClick={() => handleRatingChange(id, i)}
        ></span>
      );
    }

    return stars;
  };

  return (
    <div>
      <h3 className="mb-4 text-center">Mudas Trocadas</h3>
      <p className='text-center'>Abaixo estão as trocas já efetuadas (é possível avaliar suas trocas):</p>
      <div className="row">
        {mudasTrocadas.map((muda, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
                <img src={muda.imagem} className="card-img-top" alt={muda.nome} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{muda.nome}</h5>
                <p className="card-text">Espécie: {muda.especie}</p>
                <p className="card-text">Origem: {muda.origem}</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <label className="mr-2">Avaliação: </label>
                  {renderStars(`muda-${index}`)}
                  {ratings[`muda-${index}`] > 0 && <span style={{ marginLeft: '10px' }}>Valor: {ratings[`muda-${index}`]}</span>}
                </div>
                {comments[`muda-${index}`] && (
                  <div className="mt-2">
                    <strong>Comentário{comments[`muda-${index}`].name ? ` de ${comments[`muda-${index}`].name}` : ' anônimo'}:</strong>
                    <p>{comments[`muda-${index}`].comment}</p>
                  </div>
                )}
                <div className="mt-2">
                  <label>Nome:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome (opcional)"
                    onChange={(e) => handleNameChange(`muda-${index}`, e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <label>Comentário:</label>
                  <textarea
                    className="form-control"
                    placeholder='Digite seu comentário e aperte o "Enter"'
                    onKeyDown={e => handleKeyPress(e, `muda-${index}`)}
                  ></textarea>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MinhasMudasTrocadas;
