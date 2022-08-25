// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain (emailAdres) {
    const at = emailAdres.indexOf("@");
    const domain = emailAdres.substring(at + 1);
    return domain;
}

const domainOne = getEmailDomain("n.eeken@novi-education.nl");
const domainTwo = getEmailDomain("t.mellink@novi.nl");
const domainThree = getEmailDomain("a.wiersma@outlook.com");

console.log(domainOne);
console.log(domainTwo);
console.log(domainThree);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail (email) {
    const userIndex = email.indexOf("@");
    const typeOfUser = email.substring(userIndex + 1);
    if (typeOfUser.includes("novi-education.nl")) {
        return "Student";
    } if (typeOfUser.includes("novi.nl")) {
        return "Medewerker";
    } else {
        return "Extern";
    }
}

const domainTypeOne = typeOfEmail("n.eeken@novi-education.nl");
const domainTypeTwo = typeOfEmail("t.mellink@novi.nl");
const domainTypeThree = typeOfEmail("novi.nlaapjesk@outlook.nl");

console.log(domainTypeOne);
console.log(domainTypeTwo);
console.log(domainTypeThree);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (emailadres) {
    if (emailadres.includes("@")) {
        if (((emailadres.lastIndexOf(".")) === emailadres.length - 1) || (emailadres.includes(","))){
            return false
        } return true
    } return false
}
console.log(checkEmailValidity("n.eeken@novi.nl"))
console.log(checkEmailValidity("tessmellink@novi.nl"))
console.log(checkEmailValidity("n.eekenanovi.nl"))
console.log(checkEmailValidity("n.eeken@novinl."))
console.log(checkEmailValidity("tessmellink@novi,nl"))