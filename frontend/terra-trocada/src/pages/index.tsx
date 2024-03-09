import Navbar from "@/components/navbar";

export default function Index() {
  return (
    //Essa tag vazia é chamada de fragmento. Os fragmentos permitem agrupar coisas sem deixar rastros na árvore HTML do navegador. https://react.dev/learn/writing-markup-with-jsx
    <>
      <Navbar />
      <h1>Terra Trocada (index)</h1>
    </>
  );
}