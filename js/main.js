const translations = {
    en: {
        name: "Samila Iradukunda",
        headerDescription: "Computer Science Student | Germany",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        aboutTitle: "About Me",
        aboutDescription: " I am a computer science student currently studying in Germany. I was born in Rwanda and have a passion for technology, coding, and problem-solving. ",
    },
    de: {
        name: "Samila Iradukunda ",
        headerDescription: "InformatikStudent | DeutschFach",
        about: "Um",
        skills: "Fähigkeiten",
        projects: "Projekt",
        contact: "kontakt",
        aboutTitle: "Über mich",
        aboutDescription: "Ich bin Informatikstudentin, die derzeit in Deutschland studiert. Ich bin in Ruanda geboren und ich habe eine Leidenschaft für Technologie, Programmierung und Problemlösung.",
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
    document.getElementById("about-title").innerText =
        translations[language].aboutTitle;
    document.getElementById("about-description").innerText =
        translations[language].aboutDescription;
}