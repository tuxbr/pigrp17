-- Tabela de Usuários
CREATE TABLE Usuarios (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    cpf VARCHAR(11),
    email VARCHAR(255) UNIQUE,
    senha VARCHAR(255),
    localizacao VARCHAR(255),
    bairro VARCHAR(255),
    numero INTEGER,
    CEP VARCHAR(8),
    complemento VARCHAR(255),
    cidade VARCHAR(255),
    celular VARCHAR(11),
    uf VARCHAR(2)
    -- Outros campos de dados pessoais
);

-- Tabela de Mudas
CREATE TABLE Mudas (
    muda_id INT AUTO_INCREMENT PRIMARY KEY,
    nome_planta VARCHAR(255),
    descricao TEXT,
    categoria VARCHAR(50),
    imagem TEXT,
    proprietario_id INT,
    FOREIGN KEY (proprietario_id) REFERENCES Usuarios(user_id)
);

-- Tabela de Fórum
CREATE TABLE Forum (
    PostID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Conteudo TEXT,
    DataHora DATETIME,
    FOREIGN KEY (UserID) REFERENCES Usuarios(user_id)
);

-- Tabela de Avaliações
CREATE TABLE Avaliacoes (
    AvaliacaoID INT AUTO_INCREMENT PRIMARY KEY,
    AvaliadorID INT,
    AvaliadoID INT,
    Comentario TEXT,
    Classificacao INT,
    FOREIGN KEY (AvaliadorID) REFERENCES Usuarios(user_id),
    FOREIGN KEY (AvaliadoID) REFERENCES Usuarios(user_id)
);

-- Tabela de Catálogo de Mudas
CREATE TABLE Catalogo_Mudas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    descricao VARCHAR(255),
    categoria VARCHAR(50),
    imagem TEXT
);

-- Tabela de Trocas
CREATE TABLE Trocas (
    troca_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    muda_id INT,
    catalogo_muda_id INT,
    data_troca TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(user_id),
    FOREIGN KEY (muda_id) REFERENCES Mudas(muda_id) ON DELETE CASCADE,
    FOREIGN KEY (catalogo_muda_id) REFERENCES Catalogo_Mudas(id) ON DELETE CASCADE
);

INSERT INTO Catalogo_Mudas (nome, descricao, categoria, imagem) VALUES
('Rosa', 'As rosas são flores populares conhecidas por sua beleza e fragrância. Elas vêm em uma variedade de cores, como vermelho, branco, rosa e amarelo.', 'Flores', 'https://s2.glbimg.com/hhuZZao7ykonpE3HD0sMtflfk4M=/780x440/e.glbimg.com/og/ed/f/original/2015/08/28/img_0186.jpg'),
('Manjericão', 'O manjericão é uma erva aromática comumente usada na culinária mediterrânea. Suas folhas têm um aroma distinto e são usadas frescas ou secas em pratos como molhos, saladas e pesto.', 'Ervas', 'https://static.tuasaude.com/media/article/lk/sf/manjericao_3994_l.webp'),
('Suculentas', 'As suculentas são plantas que armazenam água em suas folhas, caules e raízes, permitindo-lhes sobreviver em climas áridos. Elas vêm em uma variedade de formas e cores e são populares como plantas de interior de baixa manutenção.', 'Plantas de Interior', 'https://s2.glbimg.com/3wRS8I9amVOsJUpVnkB2wyiWA6k=/e.glbimg.com/og/ed/f/original/2022/01/04/suculentas-tudo-sobre-freepik-casaejardim.jpg'),
('Girassol', 'O girassol é uma flor que se destaca por sua grande cabeça amarela e pétalas brilhantes. Ele segue o movimento do sol durante o dia, daí seu nome. Os girassóis são cultivados por sua beleza ornamental e sementes comestíveis.', 'Flores', 'https://www.centrodasracoes.com.br/wp-content/uploads/2021/01/1-girassol.jpg'),
('Samambaia', 'As samambaias são plantas verdes e frondosas com folhas delicadas e elegantes. Elas são populares como plantas de interior devido à sua capacidade de purificar o ar e adicionar um toque de verde aos espaços internos.', 'Plantas de Interior', 'https://www.petz.com.br/blog/wp-content/uploads/2023/02/o-que-fazer-com-lagarta-na-samambaia-2.jpg'),
('Lavanda', 'A lavanda é um arbusto perfumado conhecido por suas flores roxas e aroma relaxante. Ela é frequentemente usada em sachês, óleos essenciais e produtos de cuidados pessoais devido às suas propriedades calmantes e aromáticas.', 'Arbustos', 'https://imagens-revista.vivadecora.com.br/uploads/2022/11/Como-plantar-lavanda-no-jardim-Foto-iStock.jpg');
