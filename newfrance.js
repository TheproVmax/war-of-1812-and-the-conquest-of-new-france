function startNewFrance() {
  document.getElementById("game-area").innerHTML = `
    <h2>Conquest of New France (1759–1760)</h2>

    <p><strong>Setting:</strong> The Province of Québec, New France</p>

    <p>You are a British military leader during the Seven Years’ War.
    France and Britain are competing for control of North America.</p>

    <p><strong>Decision 1:</strong> How should the British attack Québec?</p>

    <button onclick="newFranceChoice('river')">Attack by the St. Lawrence River</button>
    <button onclick="newFranceChoice('land')">March troops over land</button>
  `;
}

function newFranceChoice(choice) {
  let result = "";

  if (choice === "river") {
    result = `
      <p>You sail up the St. Lawrence River, surprising French forces.</p>
      <p>The Battle of the Plains of Abraham follows.</p>
      <p><strong>Result:</strong> British victory leads to the fall of Québec.</p>
    `;
  } else {
    result = `
      <p>Your troops struggle through rough terrain.</p>
      <p>Supplies are low and progress is slow.</p>
      <p><strong>Result:</strong> The campaign fails, delaying British control.</p>
    `;
  }

  document.getElementById("game-area").innerHTML += `
    <hr>
    ${result}
    <p><strong>Why it matters:</strong> The British takeover changed laws,
    language, and government in what later became Ontario and Canada.</p>
  `;
}
