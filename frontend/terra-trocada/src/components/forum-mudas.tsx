import { Comment, CommentResponse } from '@/types/comment';
import React, { useState } from 'react';

const ForumMudas: React.FC = () => {
  // Dados do fórum (depois pegar esses aqui vindos do back)
  const [forumData, setForumData] = useState<Comment[]>([
    {
      id: "1",
      autor: 'Maria',
      avaliacao: 4,
      comentario: 'Ótima experiência de troca de mudas, recomendo!',
      data: '2024-04-27T08:30:00Z',
      respostas: [],
      podeResponder: true
    },
    {
      id: "2",
      autor: 'João',
      avaliacao: 5,
      comentario: 'Troca de mudas foi rápida e eficiente, adorei!',
      data: '2024-04-26T12:15:00Z',
      respostas: [
        {
          id: "1", // ID da resposta
          autor: 'Ana', // Autor da resposta
          comentario: 'Que bom que você teve uma boa experiência!', // Conteúdo da resposta
          data: '2024-04-27T09:00:00Z',
        }
      ],
      podeResponder: true
    },
  ]);

  const [novoComentario, setNovoComentario] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [avaliacao, setAvaliacao] = useState<number | undefined>();

  // Estado para o nome do novo comentário
  const [respostaNomes, setRespostaNomes] = useState<{ [key: string]: string }>({});

  // Adicionar um comentário
  const addComment = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment: Comment = {
      id: Math.random().toString(), // Substituir depois pelo ID vindo do back
      autor: novoNome || 'Anônimo',
      avaliacao: avaliacao || 0,
      comentario: novoComentario,
      data: new Date().toISOString(),
      respostas: [],
      podeResponder: true
    };
    setForumData((prevData) => [...prevData, newComment]);
    setNovoComentario('');
    setNovoNome('');
    setAvaliacao(undefined);
  };

  // Função para adicionar resposta a um comentário
  const addReply = (commentId: string, reply: CommentResponse) => {
    const updatedForumData = forumData.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          respostas: [...comment.respostas, reply]
        };
      }
      return comment;
    });
    setForumData(updatedForumData);
    // Limpa o nome da resposta depois de enviar
    setRespostaNomes({ ...respostaNomes, [commentId]: '' });
  };

  // Estrelas
  const renderStarRating = (avaliacao: number | undefined) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => setAvaliacao(i)}
          className={i <=  (avaliacao || 0) ? "text-warning fas fa-star" : "text-warning far fa-star"}
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
          {/* Map das avaliações e comentários */}
          {forumData.map(comment => (
            <div key={comment.id} className="card mb-3">
              <div className="card-body">
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
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            // Depois adicionar a lógica pra enviar pro back a resposta
                            const reply: CommentResponse = {
                              id: Math.random().toString(), // Substituir pelo ID vindo do backend
                              autor: respostaNomes[comment.id] || 'Anônimo',
                              comentario: e.currentTarget.value,
                              data: new Date().toISOString(),
                            };
                            addReply(comment.id, reply);
                            e.currentTarget.value = ''; // Limpa o campo de texto depois de enviar a resposta
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
