const translations = {
    en: {
        name: "Samila Iradukunda",
        headerDescription: "Computer Science Student | Germany",
    },
    de: {
        name: "Samila Iradukunda ",
        headerDescription: "InformatikStudent | DeutschFach",
    },
};

let currentLanguage = "en";

function changeLanguage(language) {
    if (currentLanguage === language) return;
    currentLanguage = language;
    updateContent(language);
}

function updateContent(language) {
    document.getElementById("name").innerText = translations[language].name;
    document.getElementById("header-description").innerText =
        translations[language].headerDescription;
}