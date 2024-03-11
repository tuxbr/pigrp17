import Rodape from "@/components/footer";
import NavbarLinks from "@/components/navbar";
import Link from "next/link";

export default function Index() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      
      <div className="container my-5">
        <h1 className="mb-4 text-primary text-center">Semeie compartilhamento, colha conexões!</h1>
        <p className="text-justify mb-5">
          <span className="text-secondary fw-bold">TERRA</span> <span className="text-primary fw-bold">TROCADA</span> é uma comunidade apaixonada por agricultura, sustentabilidade e conexões locais.
          Saiba mais sobre quem somos, nosso propósito e como entrar em contato conosco ou como cadastrar-se como produtor, através dos links abaixo:
        </p>

        <div className="row my-5 justify-content-center">
          <div className="col-md-3">
            <img src="/img/quem-somos.png" alt="Imagem Quem Somos" className="img-fluid mb-3" style={{ width: '330px', height: '310px' }} />
            <h3 className="text-secondary text-center">Quem Somos</h3>
            <p className="text-justify">
              Descubra mais sobre a comunidade TERRA TROCADA, nossa missão e o que nos torna únicos.
            </p>
            <Link href="/quem-somos">
              <span className="btn btn-primary text-white">Saiba Mais</span>
            </Link>
          </div>

          <div className="col-md-3">
            <img src="/img/proposito.jpg" alt="Imagem Nosso Propósito" className="img-fluid mb-3" style={{ width: '330px', height: '310px' }} />
            <h3 className="text-secondary text-center">Nosso Propósito</h3>
            <p className="text-justify">
              Conheça nosso propósito de cultivar uma mudança positiva na relação das pessoas com a comida e a comunidade.
            </p>
            <Link href="/proposito">
              <span className="btn btn-primary text-white">Saiba Mais</span>
            </Link>
          </div>

          <div className="col-md-3">
            <img src="/img/contato.jpg" alt="Imagem de um celular." className="img-fluid mb-3" style={{ width: '330px', height: '310px' }} />
            <h3 className="text-secondary text-center">Contato</h3>
            <p className="text-justify">
              Entre em contato conosco! Preencha o formulário ou confira outras formas de nos contatar.
            </p>
            <Link href="/contato">
              <span className="btn btn-primary text-white">Entre em Contato</span>
            </Link>
          </div>

          <div className="col-md-3">
            <img src="/img/cadastro.png" alt="Imagem Cadastro" className="img-fluid mb-3" style={{ width: '330px', height: '310px' }} />
            <h3 className="text-secondary text-center">Cadastro</h3>
            <p className="text-justify">
              Torne-se um produtor na nossa comunidade. Clique abaixo e faça seu cadastro e faça parte dessa iniciativa.
            </p>
            <Link href="/cadastro">
              <span className="btn btn-primary text-white">Cadastre-se</span>
            </Link>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}