import Navbar from "@/components/navbar";

export default function Contato() {
  return (
    //Essa tag vazia é chamada de fragmento. Os fragmentos permitem agrupar coisas sem deixar rastros na árvore HTML do navegador. https://react.dev/learn/writing-markup-with-jsx
    <>
      <Navbar />
      <h1>Contato</h1>
    </>
  );
}