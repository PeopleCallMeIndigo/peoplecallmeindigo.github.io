//Navbar Interaction
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", e => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 1) {
    navbar.classList.add('fade');
  } 
  else {
    navbar.classList.remove('fade');
  } 
});




//Language options
let langs = document.querySelector(".languages"),
link = document.querySelectorAll("a"),

/* Navbar */
abt = document.querySelector(".abt"),
prv = document.querySelector(".prv"),
con = document.querySelector(".con");

/* Hero */
title = document.querySelector(".title"),
descr = document.querySelector(".text"),
btn = document.querySelector(".btn");

/* About */
sec = document.querySelector(".sec"),
title_a = document.querySelector(".title_a"),
text_a = document.querySelector(".text_a");
text_b = document.querySelector(".text_b");
btn_a = document.querySelector(".btn_a");

/* Preview */
sec_p = document.querySelector(".sec_p");
title_p = document.querySelector(".title_p");
text_p_a = document.querySelector(".text_p_a");
text_p_b = document.querySelector(".text_p_b");
text_p_c = document.querySelector(".text_p_c");
text_p_d = document.querySelector(".text_p_d");

/* Video */
youtube = document.querySelector(".youtube");

/* Form */
title_form = document.querySelector(".title_form");
names = document.querySelector(".names");
lastname = document.querySelector(".lastname");
email = document.querySelector(".email");
country = document.querySelector(".country");
phone = document.querySelector(".phone");
idiom = document.querySelector(".idiom");
gender = document.querySelector(".gender");
share = document.querySelector(".share");
format = document.querySelector(".format");
size = document.querySelector(".size");
dob = document.querySelector(".dob");
loc = document.querySelector(".loc");
contac = document.querySelector(".contac");
info = document.querySelector(".info");
pais = document.querySelector(".pais");
city = document.querySelector(".city");
adress = document.querySelector(".adress");
state = document.querySelector(".state");
notify = document.querySelector(".notify");

link.forEach(el=>{
  el.addEventListener("click",()=> {
    langs.querySelector(".active").classList.remove("active")
    el.classList.add("active");

    let attr = el.getAttribute("language")

    /* Hero */
    title.textContent = data[attr].title
    descr.textContent = data[attr].text
    btn.textContent = data[attr].btn

    /* Navbar */
    abt.textContent = data[attr].abt
    prv.textContent = data[attr].prv
    con.textContent = data[attr].con

    /* About */
    sec.textContent = data[attr].sec
    title_a.textContent = data[attr].title_a
    text_a.textContent = data[attr].text_a
    text_b.textContent = data[attr].text_b
    btn_a.textContent = data[attr].btn_a

    /* Preview */
    sec_p.textContent = data[attr].sec_p
    title_p.textContent = data[attr].title_p
    text_p_a.textContent = data[attr].text_p_a
    text_p_b.textContent = data[attr].text_p_b
    text_p_c.textContent = data[attr].text_p_c
    text_p_d.textContent = data[attr].text_p_d

    /* Video */
    youtube.textContent = data[attr].youtube

    /* Form */
    title_form.textContent = data[attr].title_form
    names.textContent = data[attr].names
    lastname.textContent = data[attr].lastname
    email.textContent = data[attr].email
    country.textContent = data[attr].country
    phone.textContent = data[attr].phone
    idiom.textContent = data[attr].idiom
    gender.textContent = data[attr].gender
    share.textContent = data[attr].share
    format.textContent = data[attr].format
    size.textContent = data[attr].size
    dob.textContent = data[attr].dob
    loc.textContent = data[attr].loc
    contac.textContent = data[attr].contac
    info.textContent = data[attr].info
    pais.textContent = data[attr].pais
    state.textContent = data[attr].state
    adress.textContent = data[attr].adress
    city.textContent = data[attr].city
    notify.textContent = data[attr].notify
  })
})

let data = {
  english: {
    title: "THE MOST INCREDIBLE ELECTRIC SNOWBOARD",
    text: "Meet the future... today. Portable, Sustainable, Efficient, Fast, and the most fun you'll ever have on a board.",
    btn: "I'M INTERESTED!",
    abt: "ABOUT" ,
    prv: "PREVIEW",
    con: "CONTACT",
    sec: "ABOUT",
    title_a: "Snowboarding just got to a new level",
    text_a: "Are you tired of paying for expensive trips to do some snowboarding? Car's not ready for the long drive to the getaway? Don't live near the mountains? No problem.",
    text_b: "With Starfire Snowboards all you'll ever need is a trail or a field to hold on for the ride of your life!",
    btn_a: "I NEED ONE!",
    sec_p: "PREVIEW",
    title_p: "Starfire Snowboards offer great benefits:",
    text_p_a: "The latest battery technology.",
    text_p_b: "Engineered with safety in mind.",
    text_p_c: "The best price on the market.",
    text_p_d: "Beginner friendly and easy to use.",
    youtube: "Meet the future of snowboarding, today.",
    title_form: "ARE YOU INTERESTED?",
    names: "First Name:",
    lastname: "Last Name:",
    email: "E-mail:",
    country: "Country:",
    phone: "Phone:",
    idiom: "Language:",
    gender: "Gender:",
    share: "Do you want to share something?",
    format: "*Allowed formats .pdf .png .jpeg .jpg",
    size: "*Maximum size: 5MB in total.",
    info: "Info/Comments/Questions:",
    dob: "Date of Birth:",
    loc: "Location",
    contac: "Contact Info",
    pais: "Country Code:",
    city: "City:",
    adress: "Adress:",
    state: "State:",
    notify: "Notify me of any updates"
  },
  spanish: {
    title: "EL SNOWBOARD ELÉCTRICO MÁS INCREÍBLE",
    text: "Conozca el futuro... hoy. Portátil, Sostenible, Eficiente, Rápido y lo más divertido que jamás experimentará en una tabla.",
    btn: "ME INTERESA!",
    abt: "ACERCA DE" ,
    prv: "VISTA PREVIA",
    con: "CONTACTO",
    sec: "ABOUT",
    title_a: "El snowboard acaba de llegar a un nuevo nivel",
    text_a: "¿Estás cansado de pagar viajes caros para hacer snowboard? ¿El coche no está listo para el largo viaje hasta la escapada? ¿No vives cerca de las montañas? Ningún problema.",
    text_b: "¡Con Starfire Snowboards todo lo que necesitarás es un sendero o un campo para aguantar el viaje de tu vida!",
    btn_a: "NECESITO UNO",
    sec_p: "VISTA PREVIA",
    title_p: "Starfire Snowboards ofrece beneficios:",
    text_p_a: "Tecnología de alta duración de batería.",
    text_p_b: "Diseñado pensando en la seguridad.",
    text_p_c: "El mejor precio del mercado.",
    text_p_d: "Amigable y fácil de usar.",
    youtube: "Conoce el futuro del snowboarding, hoy mismo.",
    title_form: "ESTÁS INTERESADO?",
    names: "Nombre(s):",
    lastname: "Apellido(s):",
    email: "Correo:",
    country: "País:",
    phone: "Teléfono:",
    idiom: "Idioma:",
    gender: "Sexo:",
    share: "Quieres compartirnos algo?",
    format: "*Formatos permitidos .pdf .png .jpeg .jpg",
    size: "*Tamaño máximo: 5MB en total.",
    info: "Comentarios/Preguntas:",
    dob: "Fecha de nacimiento:",
    loc: "Localización",
    contac: "Información de Contacto",
    pais: "Código de País:",
    city: "Ciudad:",
    adress: "Domicilio:",
    state: "Estado:",
    notify: "Notifícame de actualizaciones"
  },
  german: {
    title: "DAS UNGLAUBLICHSTE ELEKTRISCHE SNOWBOARD",
    text: "Lernen Sie die Zukunft kennen... heute. Tragbar, nachhaltig, effizient, schnell und der größte Spaß, den Sie jemals auf einem Board haben werden.",
    btn: "ICH BIN INTERESSIERT!",
    abt: "ÜBER UNS" ,
    prv: "VORSCHAU",
    con: "KONTAKT",
    sec: "ABOUT",
    title_a: "Snowboarden hat gerade ein neues Level erreicht!",
    text_a: "Sind Sie es leid, teure Ausflüge zum Snowboarden zu bezahlen? Das Auto ist noch nicht bereit für die lange Fahrt zum Urlaub? Wohnen Sie nicht in der Nähe der Berge? Kein Problem.",
    text_b: "Mit Starfire-Snowboards brauchen Sie nur einen Weg oder ein Feld, auf dem Sie sich für die Fahrt Ihres Lebens festhalten können!",
    btn_a: "ICH BRAUCHE EINEN!",
    sec_p: "VORSCHAU",
    title_p: "Starfire Snowboards bieten tolle Vorteile:",
    text_p_a: "modernste Batterietechnologie.",
    text_p_b: "Entwickelt mit Blick auf die Sicherheit.",
    text_p_c: "der beste Preis auf dem Markt.",
    text_p_d: "Freundlich und einfach zu bedienen.",
    youtube: "Lernen Sie noch heute die Zukunft des Snowboardens kennen.",
    title_form: "BIST DU INTERESSIERT?",
    names: "Name:",
    lastname: "der Nachname:",
    email: "E-mail:",
    country: "Land:",
    phone: "Telefon:",
    idiom: "Sprache:",
    gender: "Geschlecht:",
    share: "Möchten Sie etwas teilen?",
    format: "*Zulässige Formate .pdf .png .jpeg .jpg",
    size: "*Maximale Größe: insgesamt 5 MB.",
    info: "Comments:",
    dob: "Date of Birth:",
    loc: "Location",
    contac: "Contact Info",
    pais: "Land:",
    city: "Stadt:",
    adress: "ein Kleid:",
    state: "Zustand:",
    notify: "Benachrichtigen Sie mich über Aktualisierungen"
  }
}