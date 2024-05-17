import React, { useState, useEffect } from 'react';
import { Comment, CommentResponse } from '@/types/comment';

const ForumMudas: React.FC = () => {
  const [forumData, setForumData] = useState<Comment[]>([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [avaliacao, setAvaliacao] = useState<number | undefined>();
  const [respostaNomes, setRespostaNomes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('api/comentarios/forum');
        if (!response.ok) {
          throw new Error('Erro.');
        }
        const data = await response.json();
        setForumData(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };
    fetchComments();
  }, []);

  const addComment = async (event: React.FormEvent) => {
    event.preventDefault();
    const newComment: Omit<Comment, 'id'> = {
      autor: novoNome || 'Anônimo',
      avaliacao: avaliacao || 0,
      comentario: novoComentario,
      data: new Date().toISOString(),
      respostas: [],
      podeResponder: true
    };

    try {
      const response = await fetch('/api/comentarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
      if (!response.ok) {
        throw new Error('Erro ao adicionar comentário');
      }
      const data = await response.json();
      setForumData((prevData) => [...prevData, data]);
      setNovoComentario('');
      setNovoNome('');
      setAvaliacao(undefined);
    } catch (error) {
      console.error('Erro ao adicionar comentário:', error);
    }
  };

  const addReply = async (commentId: string, reply: Omit<CommentResponse, 'id'>) => {
    try {
      const response = await fetch(`/api/respostas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...reply,
          comentarioPai: {
            id: commentId
          }
        }),
      });
      if (!response.ok) {
        throw new Error('Erro ao adicionar resposta');
      }
      const data = await response.json();
      const updatedForumData = forumData.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            respostas: [...comment.respostas, data]
          };
        }
        return comment;
      });
      setForumData(updatedForumData);
      setRespostaNomes({ ...respostaNomes, [commentId]: '' });
    } catch (error) {
      console.error('Erro ao adicionar resposta:', error);
    }
  };

  const renderStarRating = (avaliacao: number | undefined) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => setAvaliacao(i)}
          className={i <= (avaliacao || 0) ? "text-warning fas fa-star" : "text-warning far fa-star"}
          style={{ cursor: "pointer" }}
        >
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <h1 className="mb-4 text-primary text-center">Fórum de Avaliações e Comentários</h1>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          {forumData.map(comment => (
            <div key={comment.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{comment.autor || 'Anônimo'}</h5>
                <h5 className="card-title">{comment.autor || 'Anônimo'}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{new Date(comment.data).toLocaleString()}</h6>
                <div>
                  {/* Estrelas */}
                  {renderStarRating(comment.avaliacao)}
                </div>
                <p className="card-text">{comment.comentario}</p>
                {comment.podeResponder && (
                  <div className="mb-3">
                    {/* Formulário para responder ao comentário */}
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Nome (opcional)"
                        className="form-control"
                        value={respostaNomes[comment.id] || ''}
                        onChange={e => setRespostaNomes({ ...respostaNomes, [comment.id]: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Digite sua resposta e aperte o Enter..."
                        className="form-control"
                        onKeyDown={async e => {
                          if (e.key === 'Enter') {
                            const reply: Omit<CommentResponse, 'id'> = {
                              autor: respostaNomes[comment.id] || 'Anônimo',
                              comentario: e.currentTarget.value,
                              data: new Date().toISOString(),
                              comentarioPai: {
                                id: comment.id
                              }
                            };
                            await addReply(comment.id, reply);
                            if (e.currentTarget) {
                              e.currentTarget.value = '';
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                )}
                {/* Respostas */}
                {comment.respostas.map(reply => (
                  <div key={reply.id} className="card mb-2 bg-light">
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted">{reply.autor || 'Anônimo'}</h6>
                      <p className="card-text">{reply.comentario}</p>
                      <p className="card-text text-muted">{new Date(reply.data).toLocaleString()}</p> {/* Exibe a data e hora da resposta */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-1"></div>
        {/* Formulário para adicionar comentários */}
        <div className="col-md-10">
          <form onSubmit={addComment}>
            <div className="form-group">
              <label htmlFor="novoNome">Nome (opcional):</label>
              <input
                type="text"
                className="form-control"
                id="novoNome"
                value={novoNome}
                onChange={e => setNovoNome(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Avaliação:</label>
              {/* Estrelas no novo comentário */}
              {avaliacao !== undefined ? renderStarRating(avaliacao) : renderStarRating(0)}
            </div>
            <div className="form-group">
              <label htmlFor="novoComentario">Novo Comentário:</label>
              <textarea
                className="form-control"
                id="novoComentario"
                rows={3}
                value={novoComentario}
                onChange={e => setNovoComentario(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Adicionar Comentário</button>
          </form>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default ForumMudas;
