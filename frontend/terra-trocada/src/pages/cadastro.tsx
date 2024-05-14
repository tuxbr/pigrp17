import { useState } from 'react';
import Rodape from "@/components/footer";
import NavbarLinks from "@/components/navbar";
import { useRouter } from 'next/router';

export default function Cadastro() {
  // Estado inicial do objeto do cadastro
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    localizacao: '',
    logradouro: '',
    bairro: '',
    numero: '',
    cep: '',
    complemento: '',
    cidade: '',
    celular: '',
    uf: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const router = useRouter();

  // Atualiza o estado do formulário
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // POST para o backend
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      console.log("body: ", JSON.stringify(formData))
      const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          router.push('/minhas-mudas');
        }, 6000); // Redireciona depois de 3 segundos
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      
      <div className="container mt-5">
        <h1 className="mb-4 text-primary text-center">Cadastro de Produtor</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="nome" name="nome" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">CPF</label>
            <input type="text" className="form-control" id="cpf" name="cpf" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input type="password" className="form-control" id="senha" name="senha" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="localizacao" className="form-label">Localização</label>
            <input type="text" className="form-control" id="localizacao" name="localizacao" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="logradouro" className="form-label">Logradouro</label>
            <input type="text" className="form-control" id="logradouro" name="logradouro" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="bairro" className="form-label">Bairro</label>
            <input type="text" className="form-control" id="bairro" name="bairro" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="numero" className="form-label">Número</label>
            <input type="text" className="form-control" id="numero" name="numero" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="cep" className="form-label">CEP</label>
            <input type="text" className="form-control" id="cep" name="cep" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="complemento" className="form-label">Complemento</label>
            <input type="text" className="form-control" id="complemento" name="complemento" onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input type="text" className="form-control" id="cidade" name="cidade" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="celular" className="form-label">Celular</label>
            <input type="tel" className="form-control" id="celular" name="celular" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="uf" className="form-label">Estado</label>
            <select className="form-select" id="uf" name="uf" onChange={handleChange} required>
              <option value="">Selecione um estado</option>
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

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary text-white">Cadastrar</button>
          </div>
        </form>
      </div>

      <Rodape />

      {/* Pop-up de sucesso */}
      {showSuccessMessage && (
        <div className="success-message">
          <p>Cadastro realizado com sucesso!</p>
        </div>
      )}

      <style jsx>{`
        .success-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>

    </div>
  );
}
