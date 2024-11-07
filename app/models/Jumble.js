//Jumble.js

export function generateId() {
  let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => (
    Math.random() * 16 | 0).toString(16)).toLowerCase();
}


export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get ListTemplate() { // a basic list template to get drawing
    return `
    <div class="p-2">
          <button class="btn btn-small btn-primary" onclick="app.JumbleController.selectActiveJumble('${this.id}')">Start</button>
          <span>${this.name}</span>
        </div>`
  }

  get ActiveTemplate() {
    return ` <div class="row border border-dark shadow rounded p-3">
            <h2>${this.name}</h2>
            <p>${this.body}</p>
          </div>
          <div class="row my-5">
          <form onsubmit="app.JumbleController.saveActiveJumble()">
              <label for="start-typing">Start Typing!!!!</label>
              <textarea required id="start-typing" name="typingChallenge" class="form-control my-3" rows="10"></textarea>
              <button>Submit</button>
            </form>
            </div>`
  }



}