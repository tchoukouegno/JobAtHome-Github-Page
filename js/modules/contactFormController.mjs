/**
 * Fonction qui verifie l'envoi des contacts de la communaute JobAtHome
 * @param {object} userData
 * @return {Promise}
 */
export function conctactFormController(userData) {
  return new Promise((resolve) => {
    const { firstNameAndLastName, AdresseEmail, subject, message } = userData;
    const verifieNameEmailSubjectMessageReject = [
      firstNameAndLastName,
      AdresseEmail,
      subject,
      message,
    ].includes("");

    let rejectEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verifieEmail = rejectEmail.test(AdresseEmail) === false;
    if (verifieNameEmailSubjectMessageReject) {
      return resolve("Veuillez remplir tous les champs");
    }
    if (verifieEmail) {
      return resolve(
        "veuillez entrer une email valide contenant un @gmail.com ou @yahoo.fr"
      );
    }
    if (!verifieNameEmailSubjectMessageReject && !verifieEmail) {
      return resolve("message envoyé,nous vous repondrons dans 48h");
    } else {
    }
  });
}
