import ProfilePhoto from './component/profil/ProfilePhoto.js';
import FullName from './component/profil/FullName.js';
import Address from './component/profil/Adress.js';
function App () {
  return (
    <div className="container">
    <ProfilePhoto />
    <FullName />
    <Address />
    </div>
    );
}

export default App;