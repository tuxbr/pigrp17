export interface Comment {
    id: string;
    autor: string;
    avaliacao: number;
    comentario: string;
    data: string;
    respostas: CommentResponse[];
    podeResponder: boolean;
}

export interface CommentResponse {
    id: string;
    autor?: string;
    comentario: string;
    data: string;
}