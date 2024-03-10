import Rodape from "@/components/footer";
import NavbarLinks from "@/components/navbar";

export default function QuemSomos() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <h1 className="mb-4 text-primary">Quem Somos</h1>

            <p className="text-justify">
              Bem-vindo(a) ao <span className="text-secondary fw-bold">TERRA</span> <span className="text-primary fw-bold">TROCADA</span>! Uma comunidade apaixonada por agricultura, sustentabilidade e conexões locais. Somos um grupo de entusiastas da agricultura caseira que acredita que o poder da colaboração e da partilha pode transformar a maneira como vemos a produção de alimentos.
            </p>

            <p className="text-justify">
              Nossa jornada começou com a ideia de criar uma plataforma onde micro produtores caseiros pudessem se unir, trocar experiências e, é claro, compartilhar suas colheitas. Acreditamos que cada jardim, quintal ou horta tem o potencial de criar uma abundância de frutas e legumes saudáveis, e queremos tornar mais fácil para todos desfrutarem dessas delícias frescas e locais.
            </p>

            <p className="text-justify">
              <span className="text-secondary fw-bold">TERRA</span> <span className="text-primary fw-bold">TROCADA</span> é mais do que apenas uma plataforma online, é uma comunidade que valoriza a conexão humana, o respeito à terra e a promoção da agricultura sustentável.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="/img/imagem-quem-somos.jpg"
              alt="Imagem de pessoas platando."
              className="img-fluid float-end"
            />
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}