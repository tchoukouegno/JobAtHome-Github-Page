/**
 * Fonction qui verifie l'envoi de l'email sur la newletter
 * @param {object} userData
 * @return {Promise}
 */
export function blogFormController(userData) {
  return new Promise((resolve) => {
    const { email } = userData;
    const emailData = [email].includes("");
    const rejectEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verifieEmail = rejectEmail.test(email) === false;
    if (emailData) {
      return resolve("Veuillez remplir l'email");
    }
    if (verifieEmail) {
      return resolve(
        "veuillez entrer une email valide contenant un @gmail.com ou @yahoo.fr"
      );
    }
    if (!verifieEmail) {
      return resolve("inscription réussie");
    } else {
    }
  });
}
