import Rodape from "@/components/footer";
import NavbarLinks from "@/components/navbar";

export default function Index() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <h1>Terra Trocada (index)</h1>
      <Rodape />
    </div>
  );
}