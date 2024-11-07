import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";

class JumbleService {
  selectActiveJumble(jumbleId) {
    const selectedJumble = AppState.jumbles.find(jumble => jumbleId == jumble.id)
    console.log(selectedJumble);
    AppState.activeJumble = selectedJumble
  }


  createJumble(formData) {
    AppState.jumbles.push(new Jumble(formData))
  }




}




export const jumbleService = new JumbleService()