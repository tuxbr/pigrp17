import { useState } from 'react';
import { Muda } from '@/types/mudas';
import CatalogoMudas from '@/components/catalogo-mudas';
import NavbarLinks from '@/components/navbar';
import Rodape from '@/components/footer';

const TrocaDeMudas: React.FC = () => {

  const [mudasCatalogo, setMudasCatalogo] = useState<Muda[]>([
    {
      mudaId: 1,
      nomePlanta: "Rosa",
      categoria: "Flores",
      descricao: "As rosas são flores populares conhecidas por sua beleza e fragrância. Elas vêm em uma variedade de cores, como vermelho, branco, rosa e amarelo.",
      imagem: "https://s2.glbimg.com/hhuZZao7ykonpE3HD0sMtflfk4M=/780x440/e.glbimg.com/og/ed/f/original/2015/08/28/img_0186.jpg",
      proprietarioId: 0
    },    
    {
      mudaId: 2,
      nomePlanta: "Manjericão",
      categoria: "Ervas",
      descricao: "O manjericão é uma erva aromática comumente usada na culinária mediterrânea. Suas folhas têm um aroma distinto e são usadas frescas ou secas em pratos como molhos, saladas e pesto.",
      imagem: "https://static.tuasaude.com/media/article/lk/sf/manjericao_3994_l.webp",
      proprietarioId: 0
    },
    {
      mudaId: 3,
      nomePlanta: "Suculentas",
      categoria: "Plantas de Interior",
      descricao: "As suculentas são plantas que armazenam água em suas folhas, caules e raízes, permitindo-lhes sobreviver em climas áridos. Elas vêm em uma variedade de formas e cores e são populares como plantas de interior de baixa manutenção.",
      imagem: "https://s2.glbimg.com/3wRS8I9amVOsJUpVnkB2wyiWA6k=/e.glbimg.com/og/ed/f/original/2022/01/04/suculentas-tudo-sobre-freepik-casaejardim.jpg",
      proprietarioId: 0
    },
    {
      mudaId: 4,
      nomePlanta: "Girassol",
      categoria: "Flores",
      descricao: "O girassol é uma flor que se destaca por sua grande cabeça amarela e pétalas brilhantes. Ele segue o movimento do sol durante o dia, daí seu nome. Os girassóis são cultivados por sua beleza ornamental e sementes comestíveis.",
      imagem: "https://www.centrodasracoes.com.br/wp-content/uploads/2021/01/1-girassol.jpg",
      proprietarioId: 0
    },
    {
      mudaId: 5,
      nomePlanta: "Samambaia",
      categoria: "Plantas de Interior",
      descricao: "As samambaias são plantas verdes e frondosas com folhas delicadas e elegantes. Elas são populares como plantas de interior devido à sua capacidade de purificar o ar e adicionar um toque de verde aos espaços internos.",
      imagem: "https://www.petz.com.br/blog/wp-content/uploads/2023/02/o-que-fazer-com-lagarta-na-samambaia-2.jpg",
      proprietarioId: 0
    },
    {
      mudaId: 6,
      nomePlanta: "Lavanda",
      categoria: "Arbustos",
      descricao: "A lavanda é um arbusto perfumado conhecido por suas flores roxas e aroma relaxante. Ela é frequentemente usada em sachês, óleos essenciais e produtos de cuidados pessoais devido às suas propriedades calmantes e aromáticas.",
      imagem: "https://imagens-revista.vivadecora.com.br/uploads/2022/11/Como-plantar-lavanda-no-jardim-Foto-iStock.jpg",
      proprietarioId: 0
    }
    
  ]);

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
