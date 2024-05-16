import NavbarLinks from '@/components/navbar';
import Rodape from '@/components/footer';
import MinhasMudas from '@/components/minhas-mudas';

export default function TrocarMudasPage() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
        <MinhasMudas />
      </div>
      <Rodape />
    </div>
  )

}