import { PersistStorageUtility } from './services/PersistInStorage';


export class BaseComponent {
    constructor(protected authPsedu: PersistStorageUtility ) {

   }

    CheckUserLoggedIn(): Boolean {
      return this.authPsedu.IsUserLoggedIn();
      }
}