import Rodape from "@/components/footer";
import NavbarLinks from "@/components/navbar";

export default function Cadastro() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      
      <div className="container mt-5">
        <h1 className="mb-4 text-primary text-center">Cadastro de Produtor</h1>
        
        <form>
          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
              <input type="text" className="form-control" id="nomeCompleto" name="nomeCompleto" required />
            </div>

            <div className="col-md-6">
              <label htmlFor="cpf" className="form-label">CPF</label>
              <input type="text" className="form-control" id="cpf" name="cpf" required />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="logradouro" className="form-label">Logradouro</label>
            <input type="text" className="form-control" id="logradouro" name="logradouro" required />
          </div>

          <div className="mb-3 row">
            <div className="col-md-4">
              <label htmlFor="bairro" className="form-label">Bairro</label>
              <input type="text" className="form-control" id="bairro" name="bairro" required />
            </div>

            <div className="col-md-2">
              <label htmlFor="numero" className="form-label">Número</label>
              <input type="text" className="form-control" id="numero" name="numero" required />
            </div>

            <div className="col-md-3">
              <label htmlFor="cep" className="form-label">CEP</label>
              <input type="text" className="form-control" id="cep" name="cep" required />
            </div>

            <div className="col-md-3">
              <label htmlFor="complemento" className="form-label">Complemento</label>
              <input type="text" className="form-control" id="complemento" name="complemento" />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="cidade" className="form-label">Cidade</label>
              <input type="text" className="form-control" id="cidade" name="cidade" required />
            </div>

            <div className="col-md-6">
              <label htmlFor="estado" className="form-label">Estado</label>
              <select className="form-select" id="estado" name="estado" required>
                <option value="">Selecione um estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="celular" className="form-label">Celular</label>
              <input type="tel" className="form-control" id="celular" name="celular" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="celular" className="form-label">Outro Telefone de Contato</label>
              <input type="tel" className="form-control" id="celular" name="celular" required />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-md-12">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" name="email" required />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="senha" className="form-label">Senha</label>
              <input type="password" className="form-control" id="senha" name="senha" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="senhaRepetida" className="form-label">Repita a senha</label>
              <input type="password" className="form-control" id="senhaRepetida" name="senha" required />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary text-white">Cadastrar</button>
          </div>
        </form>
      </div>

      <Rodape />
    </div>
  );
}
