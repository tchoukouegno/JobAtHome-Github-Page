import { joinCommunityFormController } from "../modules/joinCommunityFormController.mjs";
import { clickEyesPassword } from "../widgets/ClickEyesPassword.mjs";

import { snackbar } from "../widgets/snackbar.mjs";

document.addEventListener("DOMContentLoaded", () => {
  clickEyesPassword();

  document.querySelector("#submit-form").addEventListener("click", (event) => {
    event.preventDefault();

    const userDataCandidat = {
      firstName: document.querySelector("#first-name").value,

      lastName: document.querySelector("#last-name").value,

      email: document.querySelector("#email").value,

      password: document.querySelector("#passwordd").value,

      category: document.querySelector("#category").value,
    };

    joinCommunityFormController(userDataCandidat).then((result) => {
      snackbar(document.querySelector("#body"), "icons/info.svg", result, 3000);
    });
  });
});
