import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";

class JumbleService {
  selectActiveJumble(jumbleId) {
    const selectedJumble = AppState.jumbles.find(jumble => jumbleId == jumbles.id)
    console.log(selectedJumble);
    AppState.activeJumble = selectedJumble
  }

}




export const jumbleService = new JumbleService()