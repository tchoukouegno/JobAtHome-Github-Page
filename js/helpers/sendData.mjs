/**
 * Fonction qui envoie des donnees au serveur
 * @param {string} url
 * @param {formData} data
 * @return {Promise}
 */

export function sendData(url, data) {
  return new Promise((resolve) => {
    const dataToSend = {
      method: "POST",
      body: data,
    };

    fetch(url, dataToSend)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        resolve(error);
      });
  });
}
