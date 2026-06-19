function start1812() {
  document.getElementById("game-area").innerHTML = `
    <h2>War of 1812 (Upper Canada)</h2>

    <p><strong>Setting:</strong> Upper Canada (modern-day Ontario)</p>

    <p>The United States has declared war.
    Your goal is to defend Upper Canada from invasion.</p>

    <p><strong>Decision 1:</strong> How do you defend the colony?</p>

    <button onclick="war1812Choice('fort')">Defend Fort York</button>
    <button onclick="war1812Choice('allies')">Work with Indigenous allies</button>
  `;
}

function war1812Choice(choice) {
  let result = "";

  if (choice === "fort") {
    result = `
      <p>You strengthen Fort York.</p>
      <p>American forces attack but are pushed back.</p>
      <p><strong>Result:</strong> Upper Canada remains secure.</p>
    `;
  } else {
    result = `
      <p>You coordinate with Indigenous leaders.</p>
      <p>Knowledge of the land helps defeat invading forces.</p>
      <p><strong>Result:</strong> Strong alliances protect the colony.</p>
    `;
  }

  document.getElementById("game-area").innerHTML += `
    <hr>
    ${result}
    <p><strong>Why it matters:</strong> The war helped ensure
    Canada remained separate from the United States.</p>
  `;
}
