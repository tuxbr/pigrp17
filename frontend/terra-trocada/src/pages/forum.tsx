import NavbarLinks from '@/components/navbar';

import Rodape from '@/components/footer';
import ForumMudas from '@/components/forum-mudas';

export default function ForumPage() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLinks />
      <div className="container mt-4">
        <ForumMudas />
      </div>
      <Rodape />
    </div>
  )

}