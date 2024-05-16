export interface Muda {
    mudaId?: number;
    nomePlanta: string;
    descricao: string;
    categoria: string;
    imagem: string;
    proprietarioId: number
}

export interface MudaCatalogo {
    id?: number,
    nome: string,
    descricao: string,
    categoria: string,
    imagem: string
}