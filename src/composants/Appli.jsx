import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import BtnAjoutRessource from './BtnAjoutRessource';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers />
          <BtnAjoutRessource type="ajout-dossier" />
        </section>
        <Fab className="fabAjout" color="disabled" aria-label="add">
          <AddIcon />
        </Fab>
    </div>
  );
}
