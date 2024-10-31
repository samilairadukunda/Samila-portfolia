const translations = {
    en: {
        name: "Samila Iradukunda",
        headerDescription: "Computer Science Student | Germany",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
    },
    de: {
        name: "Samila Iradukunda ",
        headerDescription: "InformatikStudent | DeutschFach",
        about: "Um",
        skills: "Fähigkeiten",
        projects: "Projekt",
        contact: "kontakt",
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
    document.getElementById("about").innerText = translations[language].about;
    document.getElementById("skills").innerText = translations[language].skills;
    document.getElementById("projects").innerText =
        translations[language].projects;
    document.getElementById("contact").innerText = translations[language].contact;
}