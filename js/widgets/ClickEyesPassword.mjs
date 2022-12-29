/***
 * cette fonction permet de gerer l ouverture et la fermeture de loeil du mot de passe
 */

export function clickEyesPassword() {
  let clicked = true;

  document.querySelector("#Eye").addEventListener("click", function () {
    if (clicked) {
      document.querySelector("#passwordd").setAttribute("type", "text");
      document.querySelector("#Eye").src = "./images/eyesOpen.svg";
      clicked = false;
    } else {
      document.querySelector("#passwordd").setAttribute("type", "password");
      document.querySelector("#Eye").src = "./images/eyesClose.svg";
      clicked = true;
    }
  });
}
