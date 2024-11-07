import { AppState } from "../AppState.js";
import { jumbleService } from "../services/JumbleService.js";

export class JumbleController {
  constructor() {
    console.log('hooked up');
    this.drawJumbleList()
  }


  drawJumbleList() {
    console.log('🖊️');
    const jumbleListElm = document.getElementById('jumble-list')
    jumbleListElm.innerHTML = ''
    AppState.jumbles.forEach(jumble => jumbleListElm.innerHTML += jumble.ListTemplate)



  }


  drawActiveJumble() {
    const activeJumbleElm = document.getElementById('active-jumble')
    activeJumbleElm.innerHTML = AppState.activeJumble.ActiveTemplate
  }



  selectActiveJumble(jumbleId) {
    jumbleService.selectActiveJumble(jumbleId)
    this.drawActiveJumble()
  }


}