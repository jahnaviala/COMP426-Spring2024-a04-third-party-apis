# Word Explorer
"Word Explorer" is a web application that is designed to provide definitions and translations for words inputted by the user in one place. It offers a way for people to access more information about a word quickly. Given a word, users can get its definition, phonetics, and example usage in a sentence. Moreover, it allows users to translate a word or phrase into various languages (English, German, French, etc) from a dropdown menu. 

## index.html
### Dictionary
In this div, users can enter a word to gain information about the word's definition, pronunciation, and an example sentence. The text box labeled "Enter a word" allows the user to input the word that they would like to define. After they enter a word, they can hit the button titled "Get Definition", which triggers the function that communicates with the Definition API. The results that were retrieved from the Definition API are displayed below the "Get Definition" button. 

### Translator
In this div, users can enter a word or phrase in English and then choose what language they would like to translate the word or phrase to. The text box labeled "Enter a word" allows the user to input the word that they would like to translate. A dropdown menu to the right of the text box allows the user to choose from languages like Arabic, Chinese, French, German, Spanish, etc. After they have chosen a language, the user can click the "Translate" button, which triggers the function that communicates with Lecto AI (the translation API). The translated word is then displayed in the space below the "Translate" button. 

## style.css
The CSS file for this web application defines the visual appearance of the application from the layout to the colors and the font. The application uses the "Poppins" font imported from Google Fonts and follows a pink color scheme. The main content boxes (holding the Dictionary and Translator) are set side by side, and the containers, buttons, and input fields within the content boxes all have rounded borders. The stylesheet for "Word Explorer" aims to make the interface as user-friendly as possible to aid in the user's goal of understanding words a little better. 

## script.js
"Word Explorer" makes use of two APIs (Dictionary API and Lecto AI) to provide the dictionary definitions and the language translations for the words that the user inputs into the application. These APIs are used to fetch real-time data and present it to the user quickly and accurately. 

### Dictionary API
The Dictionary API fetches the phonetics, audio, origin, part of speech, and definitions for a given input in order to give a user a comprehensive view of a word. To make use of the API, we use this GET endpoint: https://api.dictionaryapi.dev/api/v2/entries/en/{word} where the {word} is inputted by the user. The getDefinition() function is triggered from the user, when they click the button, and then replaces {word} with the correct input. The phonetic pronunciation, definition, and an example is then displayed on the interface. The fetch function also makes use of error handling to let the user know if their word is unable to be defined. 

### Lecto AI
Lecto AI provides API endpoints for translation between 90+ source and target language pairs. In "Word Explorer", we make use of the API to provide translations for text from English to a selection of 18 languages. It aims to help users learn and communicate in different languages. To make use of Lecto AI, we use the following endpoint: POST https://api.lecto.ai/v1/translate/text. This endpoint allows us to translate a text from english to a chosen language. Lecto AI uses an API key (never shown to the user), which is included in the request headers, to promote security and prevent misuse of the server. The translateWord() function takes the inputted text and selected target language and send them to Lecto AI. On success of the POST method, the API returns the translated text. Again, if the fetch operation fails, error handling is used to let the user know if the word is unable to be translated. 

