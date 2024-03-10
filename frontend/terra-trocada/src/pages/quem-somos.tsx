import Rodape from "@/components/footer";
import NavbarLinks from "@/components/navbar";

export default function QuemSomos() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <h1>Quem Somos</h1>
      <Rodape />
    </div>
  );
}