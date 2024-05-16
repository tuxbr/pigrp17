import NavbarLinks from '@/components/navbar';
import TrocaDeMudas from '../components/troca-de-mudas';
import Rodape from '@/components/footer';

export default function TrocarMudasPage() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
        <TrocaDeMudas minhasMudas={[]} />
      </div>
      <Rodape />
    </div>
);
}