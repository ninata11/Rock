const ruleBtn = document.getElementById("rule-btn");
const modalPage = document.querySelector(".modal-page");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");
const computerChoose = document.querySelector(".computer-chose");
const playerChoose = document.querySelector(".player-chose");
const classNames = ["paper", "scissors", "rock"];
let score = 0;

ruleBtn.addEventListener("click", () => {
  modalPage.classList.remove("hidden");
  overlay.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modalPage.classList.add("hidden");
    overlay.style.display = "none";
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

classNames.forEach((item) => {
  const buttons = document.createElement("button");
  buttons.classList.add(`game-btn`);
  document.querySelector(".game-content").append(buttons);
  buttons.innerHTML = `
  <div class="${item}">
    <div class="white-bg">
      <img src="./images/icon-${item}.svg" alt="${item}" />
    </div>
  </div>
  `;

  buttons.addEventListener("click", () => {
    shuffleArray(classNames);
    console.log(`${item}`);
    document.querySelector(".game-content").classList.add("hidden");
    document.querySelector(".game-chosed").classList.remove("hidden");
    playerChoose.innerHTML = "";
    playerChoose.innerHTML = ` 
      <div class="${item} p-relative ">
        <div class="white-bg">
          <img src="./images/icon-${item}.svg" alt="${item}" />
        </div>
      </div>
    `;

    setTimeout(() => {
      computerChoose.innerHTML = `
      <div class="${classNames[0]} p-relative ">
      <div class="white-bg">
      <img src="./images/icon-${classNames[0]}.svg" alt="${classNames[0]}" />
      </div>
      </div>
      `;

      switch (classNames[0]) {
        case "rock":
          if (item == "paper") {
            document.querySelector(".succsess").classList.remove("hidden");
            score++;
            document.getElementById("score").textContent = score;
          } else if (item == "rock") {
            document.querySelector(".draw").classList.remove("hidden");
          } else {
            document.querySelector(".failure").classList.remove("hidden");
            score -= 1;
            document.getElementById("score").textContent = score;
            if (score < 0) {
              document.getElementById("score").textContent = 0;
              score = 0;
            }
          }

          break;
        case "paper":
          if (item == "paper") {
            document.querySelector(".draw").classList.remove("hidden");
          } else if (item == "rock") {
            document.querySelector(".failure").classList.remove("hidden");
            score -= 1;
            document.getElementById("score").textContent = score;
            if (score < 0) {
              document.getElementById("score").textContent = 0;
              score = 0;
            }
          } else {
            document.querySelector(".succsess").classList.remove("hidden");
            score++;
            document.getElementById("score").textContent = score;
          }
          break;
        case "scissors":
          if (item == "paper") {
            document.querySelector(".failure").classList.remove("hidden");
            score -= 1;
            document.getElementById("score").textContent = score;
            if (score < 0) {
              document.getElementById("score").textContent = 0;
              score = 0;
            }
          } else if (item == "rock") {
            document.querySelector(".succsess").classList.remove("hidden");
            score++;
            document.getElementById("score").textContent = score;
          } else {
            document.querySelector(".draw").classList.remove("hidden");
          }
          break;
        default:
          console.log("error");
          break;
      }
      window.addEventListener("resize", function () {
        const viewportWidth = window.innerWidth;
        const contentElement = document.querySelector(".text-pick-placement");
        if (viewportWidth <= 768) {
          contentElement.style.gap = "50px";
        } else if (viewportWidth >= 1180) {
          contentElement.style.gap = "250px";
        } else {
          contentElement.style.gap = "50px";
        }
      });
      window.dispatchEvent(new Event("resize"));
    }, 1000);
    document.querySelectorAll(".play-again").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".game-content").classList.remove("hidden");
        document.querySelector(".game-chosed").classList.add("hidden");
        document.querySelector(".failure").classList.add("hidden");
        document.querySelector(".succsess").classList.add("hidden");
        document.querySelector(".draw").classList.add("hidden");
        computerChoose.innerHTML = "";
      });
    });
  });
});


