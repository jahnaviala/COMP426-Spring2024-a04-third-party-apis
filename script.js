function getDefinition() {
  let word = document.getElementById("wordInput").value;

  if (word === "") {
    alert("Please enter a word.");
    return;
  }

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let firstDefinition = data[0];

      document.getElementById("word").textContent = firstDefinition.word;
      document.getElementById(
        "phonetics"
      ).textContent = `Phonetics: ${firstDefinition.phonetics[0].text}`;
      document.getElementById(
        "definition"
      ).textContent = `Definition: ${firstDefinition.meanings[0].definitions[0].definition}`;
      document.getElementById("example").textContent = `Example: ${
        firstDefinition.meanings[0].definitions[0].example ||
        "No example available"
      }`;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      alert("Failed to fetch definition. Please try another word.");
    });
}

function translateWord() {
  let textToTranslate = document.getElementById("translateInput").value;
  let targetLanguage = document.getElementById("languageSelect").value;

  if (textToTranslate === "") {
    alert("Please enter a word or sentence to translate.");
    return;
  }

  const apiUrl = "https://api.lecto.ai/v1/translate/text";
  const apiKey = "5CDBHYX-G384N6V-KQ18MBH-GGZVVGQ";
  const params = {
    texts: [textToTranslate],
    to: [targetLanguage],
    from: "en",
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      console.log("Received response:", response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.translations && data.translations.length > 0) {
        let translatedText = data.translations[0].translated;
        if (translatedText && translatedText.length > 0) {
          console.log("Translated text:", translatedText[0]);

          document.getElementById("translatedText").textContent =
            translatedText[0];
        } else {
          document.getElementById("translatedText").textContent =
            "No translation available";
        }
      } else {
        console.log("No translations found in the response");
        document.getElementById("translatedText").textContent =
          "Translation not found";
      }
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      alert("Failed to translate text. Please try again.");
    });
}
