import { snackbar } from "../widgets/snackbar.mjs";
import { livreBlancFormController } from "../modules/livreBlancFormController.mjs";

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#sbmtButtonContact")
    .addEventListener("click", (event) => {
      event.preventDefault();

      const userDataLivreBlanc = {
        firstNameAndLastName: document.querySelector("#firstNameAndLastName")
          .value,
        phoneNumber: document.querySelector("#phoneNumber").value,
        adresseEmail: document.querySelector("#adresseEmail").value,
      };
      livreBlancFormController(userDataLivreBlanc).then((result) => {
        snackbar(
          document.querySelector("#body"),
          "icons/info.svg",
          result,
          3000
        );
      });
    });
});
