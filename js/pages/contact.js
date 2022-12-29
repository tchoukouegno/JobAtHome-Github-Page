import { conctactFormController } from "../modules/contactFormController.mjs";

import { snackbar } from "../widgets/snackbar.mjs";

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#sbmtButtonContact")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const userDataContact = {
        firstNameAndLastName: document.querySelector("#firstNameAndLastName")
          .value,
        AdresseEmail: document.querySelector("#AdresseEmail").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#msg").value,
      };
      conctactFormController(userDataContact).then((result) => {
        snackbar(
          document.querySelector("#body"),
          "icons/info.svg",
          result,
          3000
        );
      });
    });
});
