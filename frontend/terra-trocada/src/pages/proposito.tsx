import Rodape from "@/components/footer";
import NavbarLinks from "@/components/navbar";

export default function Proposito() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
        <h1 className="mb-4 text-primary text-center">Nosso Propósito</h1>
        <div className="row">
          <div className="col-md-3 mt-4">
            <img
              src="/img/imagem-proposito.jpg"
              alt="Ilustração de um pequeno produtor."
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <p className="text-justify">
              Nosso propósito é cultivar uma mudança positiva na maneira como as pessoas se relacionam com a comida e com a comunidade.
              Acreditamos que a agricultura caseira é mais do que apenas uma atividade; é uma filosofia de vida que nos conecta com a natureza, com nossos vizinhos e conosco mesmos.
            </p>

            <p className="text-justify">
              Bem como, criar uma plataforma onde cada micro produtor caseiro possa se sentir valorizado e apoiado.
              Queremos empoderar indivíduos a colherem o potencial de seus jardins, quintais e hortas, compartilhando o excesso com outros membros da comunidade.
              Através dessa partilha, queremos promover a sustentabilidade, reduzir o desperdício de alimentos e fortalecer laços locais.
            </p>

            <p className="text-justify">
              Aqui, buscamos inspirar e ser inspirados. Queremos que cada membro da nossa comunidade se sinta parte de algo maior, contribuindo para um movimento que valoriza a autossuficiência, a educação agrícola e a conexão com a terra.
              Nosso propósito é criar um mundo onde as recompensas da agricultura caseira sejam desfrutadas por todos, onde a diversidade de cultivos seja celebrada e onde a partilha de conhecimento e colheitas seja uma segunda natureza.
            </p>

            <p className="text-justify">
              No <span className="text-secondary fw-bold">TERRA</span> <span className="text-primary fw-bold">TROCADA</span>, nosso propósito é plantar as sementes de uma mudança positiva que se espalha por nossas comunidades, promovendo um estilo de vida saudável, sustentável e cheio de sabor.
              Junte-se a nós nesta jornada e faça parte desse movimento que cultiva não apenas alimentos, mas também um futuro mais brilhante e mais conectado para todos.
            </p>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}