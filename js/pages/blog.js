import { snackbar } from "../widgets/snackbar.mjs";
import { blogFormController } from "../modules/blogFormController.mjs";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#sendmsg").addEventListener("click", (event) => {
    event.preventDefault();

    const userDataEmail = {
      email: document.querySelector("#email").value,
    };
    blogFormController(userDataEmail).then((result) => {
      snackbar(document.querySelector("#body"), "icons/info.svg", result, 3000);
    });
  });
});
