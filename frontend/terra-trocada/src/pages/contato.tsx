import NavbarLinks from "@/components/navbar";
import { Container, Form, Button } from 'react-bootstrap';
import Rodape from '@/components/footer';

export default function Contato() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <h1>Contato</h1>
      <Rodape />
    </div>
  );
}