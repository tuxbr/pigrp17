import NavbarLinks from "@/components/navbar";

export default function Proposito() {
  return (
    //Essa tag vazia é chamada de fragmento. Os fragmentos permitem agrupar coisas sem deixar rastros na árvore HTML do navegador. https://react.dev/learn/writing-markup-with-jsx
    <>
      <NavbarLinks />
      <h1>Nosso Propósito</h1>
    </>
  );
}