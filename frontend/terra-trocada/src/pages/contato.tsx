import NavbarLinks from "@/components/navbar";
import Rodape from "@/components/footer";

export default function Contato() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
        <h1 className="mb-4 text-primary">Contato</h1>
        <p>
        Entre em contato conosco! Preencha o formulário abaixo e responderemos à sua mensagem assim que possível. 
        <br />
        Se preferir, consulte os nossos outros meios de contato no rodapé desta página.
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="nome" name="nome" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="telefone" className="form-label">Telefone</label>
            <input type="tel" className="form-control" id="telefone" name="telefone" />
          </div>

          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">Mensagem</label>
            <textarea className="form-control" id="mensagem" name="mensagem" required></textarea>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary text-white">Enviar Mensagem</button>
          </div>
        </form>
      </div>
      <Rodape />
    </div>
  );
}