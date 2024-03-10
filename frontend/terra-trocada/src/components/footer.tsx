import { Container, Row, Col } from 'react-bootstrap';

const Rodape = () => {
  return (
    <footer className="mt-auto">
        <div className="mt-4 bg-light">
            <Container className="footer-container py-5">
            <Row>
                <Col xs={12} md={5} className="mb-4">
                <div>
                    <strong>Razão Social:</strong> Terra Trocada SA.
                </div>
                <div>
                    <strong>CNPJ:</strong> 01.001.001/0001-01
                </div>
                <div>
                    <strong>Endereço:</strong> Alameda das Flores, 01 - São Paulo - SP
                </div>
                </Col>
                <Col xs={12} md={5} className="mb-4">
                <div>
                    <strong>E-mail:</strong> contatoterratrocada@terratrocada.com.br
                </div>
                <div>
                    <strong>Telefone/Whatsapp:</strong> +55 11 3000-3000
                </div>
                </Col>
                <Col xs={12} md={2} className="mb-4">
                <img
                    src="/img/logotipo.png"
                    alt="Terra Trocada"
                    width="150"
                />
                </Col>
            </Row>
            </Container>
        </div>
    </footer>
  );
};

export default Rodape;