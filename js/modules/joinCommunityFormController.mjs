/**
 * Fonction qui verifie l'envoi du formulaire de la communaute JobAtHome
 * @param {object} userData
 * @return {Promise}
 */
import { sendData } from "../helpers/sendData.mjs";
export function joinCommunityFormController(userData) {
  return new Promise((resolve) => {
    const { firstName, lastName, email, password, category } = userData;
    const tcheckForm = document.querySelector("#formData");
    const formData = new FormData(tcheckForm);
    const data = new URLSearchParams(formData);
    console.log(data);

    const verifieNameSurnameEmailPassword =
      [firstName, lastName, email, password].includes("") === true ||
      category === "Choisir une catégorie";
    let rejectEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verifieEmail = rejectEmail.test(email) === false;
    let verifiePassword = password.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,36}$/
    );

    if (verifieNameSurnameEmailPassword) {
      return resolve("Veuillez remplir tous les champs");
    }
    if (verifieEmail) {
      return resolve(
        "veuillez entrer une email valide contenant un @gmail.com ou @yahoo.fr"
      );
    }
    if (!verifiePassword) {
      return resolve(
        "veuillez entrer 8 caracteres minimun, une majuscule,une minuscule,un caractere spécial"
      );
    }

    if (!verifieNameSurnameEmailPassword && !verifieEmail && verifiePassword) {
      return resolve("inscription réussie");
    } else {
    }
  });
}
