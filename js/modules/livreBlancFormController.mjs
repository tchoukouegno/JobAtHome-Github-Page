/**
 * Fonction qui verifie l'inscription pour le télechargement gratuit d'un livre blanc
 * @param {object} userData
 * @return {Promise}
 */

export function livreBlancFormController(userData) {
  return new Promise((resolve) => {
    const { firstNameAndLastName, phoneNumber, adresseEmail } = userData;
    const verifieNameEmailPhoneNumber = [
      firstNameAndLastName,
      phoneNumber,
      adresseEmail,
    ].includes("");
    const rejectEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const verifieEmail = rejectEmail.test(adresseEmail) === false;
    let regexPhoneNumber =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const verifiePhoneNumber = regexPhoneNumber.test(phoneNumber) === true;

    // phoneNumber.match(regexPhoneNumber);
    ///^\d+$/;
    if (verifieNameEmailPhoneNumber) {
      return resolve("Veuillez remplir tous les champs");
    }
    if (!verifiePhoneNumber) {
      return resolve("veuillez entrer les numeros francais");
    }
    if (verifieEmail) {
      return resolve(
        "veuillez entrer une email valide contenant un @gmail.com ou @yahoo.fr"
      );
    }
    if (!verifieNameEmailPhoneNumber && !verifieEmail && verifiePhoneNumber) {
      return resolve(
        "message envoyé,vous pouvez telecharger gratuitement un livre blanc"
      );
    } else {
    }
  });
}
