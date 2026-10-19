/* =====================================================================
   THE WEDDING WEEKEND · Estefanía & Fabio · Cartagena 2027 · v2
   ÚNICO ARCHIVO PARA EDITAR CONTENIDO.
   - Cada texto: "texto" (igual en ES/EN) o { es: "...", en: "..." }.
   - Campos vacíos ("" o null) NO se muestran en la web (no aparecen
     "por confirmar" repetidos). Al llenarlos, aparecen solos.
   ===================================================================== */
window.BODA = {
  novia: "Estefanía",
  novio: "Fabio",
  ciudad: "Cartagena de Indias",
  fechaISO: "2027-03-20T19:30:00-05:00",          // cuenta regresiva (hora Colombia)
  fechaTexto: { es: "Sábado 20 de marzo de 2027", en: "Saturday, March 20, 2027" },
  fechaCorta: "20 · 03 · 2027",

  bienvenida: {
    es: "Cartagena será el lugar donde celebraremos nuestro matrimonio, pero queremos que sea también una oportunidad para pasar unos días juntos, conocer la ciudad, comer rico, disfrutar del Caribe y crear recuerdos antes y después de la boda.",
    en: "Cartagena is where we will celebrate our marriage, but we also want it to be a chance to spend a few days together, discover the city, enjoy great food and the Caribbean, and make memories before and after the wedding."
  },

  // PENDIENTE: confirmar con la novia. Mientras estén vacíos no se muestran.
  padresNovia: "",
  padresNovio: "",
  historiaTexto: { es: "", en: "" },   // historia contada por ellos (pendiente)

  /* Fotos reales (4:5, mismo revelado cálido). Sin repetir la foto de portada. */
  fotos: [
    { src: "assets/v2/primera_foto.webp", alt: { es: "Estefanía y Fabio, primera foto juntos", en: "Estefanía and Fabio, first photo together" }, pie: { es: "Nuestra primera foto", en: "Our first photo" }, fecha: "21 · 09 · 2024" },
    { src: "assets/v2/viaje.webp", alt: { es: "Estefanía y Fabio de viaje", en: "Estefanía and Fabio travelling" }, pie: { es: "De viaje", en: "Travelling together" }, fecha: "" },
    { src: "assets/v2/cartagena1.webp", alt: { es: "Estefanía y Fabio en la muralla de Cartagena", en: "Estefanía and Fabio on the Cartagena city wall" }, pie: { es: "Sobre la muralla", en: "On the city wall" }, fecha: "" },
    { src: "assets/v2/heroe_cartagena2.webp", alt: { es: "Estefanía y Fabio en Cartagena", en: "Estefanía and Fabio in Cartagena" }, pie: "Cartagena", fecha: "" }
  ],

  /* ---------- EL FIN DE SEMANA (timeline). hora "" = no se muestra ---------- */
  itinerario: [
    { dia: { es: "Jueves", en: "Thursday" }, fecha: { es: "18 de marzo", en: "March 18" }, items: [
      { hora: "", t: { es: "Llegada y check-in", en: "Arrivals & check-in" }, d: { es: "Bienvenidos a Cartagena. Tarde libre para recorrer la Ciudad Amurallada.", en: "Welcome to Cartagena. A free afternoon to explore the Walled City." } } ] },
    { dia: { es: "Viernes", en: "Friday" }, fecha: { es: "19 de marzo", en: "March 19" }, items: [
      { hora: "", t: { es: "Planes con nosotros", en: "Plans with us" }, d: { es: "Cartagena de día, un día en el mar y un brindis al atardecer (opcionales).", en: "Cartagena by day, a day at sea and a sunset toast (optional)." } },
      { hora: "", t: { es: "Cena de bienvenida", en: "Welcome dinner" }, d: { es: "Un encuentro para recibirlos en la ciudad.", en: "A get-together to welcome you to the city." } } ] },
    { dia: { es: "Sábado", en: "Saturday" }, fecha: { es: "20 de marzo", en: "March 20" }, destacado: true, items: [
      { hora: "7:30 p. m.", t: { es: "Ceremonia", en: "Ceremony" }, d: { es: "Iglesia San Pedro Claver", en: "San Pedro Claver Church" } },
      { hora: "", t: { es: "Recepción", en: "Reception" }, d: { es: "Fuerte del Pastelillo – Club de Pesca", en: "Fuerte del Pastelillo – Club de Pesca" } } ] },
    { dia: { es: "Domingo", en: "Sunday" }, fecha: { es: "21 de marzo", en: "March 21" }, items: [
      { hora: "", t: { es: "Brunch de despedida", en: "Farewell brunch" }, d: { es: "Un último encuentro antes de volver a casa.", en: "One last get-together before heading home." } } ] }
  ],
  // Actividades que se pueden marcar en el RSVP
  actividades: [
    { id: "tour", n: { es: "Cartagena de día", en: "Cartagena by day" } },
    { id: "mar", n: { es: "Día en el mar", en: "A day at sea" } },
    { id: "sunset", n: { es: "Sunset drinks", en: "Sunset drinks" } },
    { id: "welcome", n: { es: "Cena de bienvenida", en: "Welcome dinner" } },
    { id: "brunch", n: { es: "Brunch de despedida", en: "Farewell brunch" } }
  ],

  /* ---------- CEREMONIA Y RECEPCIÓN ---------- */
  ceremonia: {
    hora: "7:30 p. m.", lugar: "Iglesia San Pedro Claver",
    direccion: { es: "Plaza de San Pedro Claver, Centro Histórico", en: "Plaza de San Pedro Claver, Historic Center" },
    maps: "https://www.google.com/maps/search/?api=1&query=Iglesia+San+Pedro+Claver+Cartagena+de+Indias",
    embed: "https://maps.google.com/maps?q=Iglesia%20San%20Pedro%20Claver%2C%20Cartagena%20de%20Indias&z=15&output=embed"
  },
  recepcion: {
    hora: "",   // PENDIENTE
    lugar: "Fuerte del Pastelillo – Club de Pesca",
    direccion: { es: "Manga, Cartagena", en: "Manga, Cartagena" },
    maps: "https://www.google.com/maps/search/?api=1&query=Club+de+Pesca+Fuerte+del+Pastelillo+Cartagena",
    embed: "https://maps.google.com/maps?q=Club%20de%20Pesca%20Fuerte%20del%20Pastelillo%2C%20Cartagena&z=15&output=embed"
  },
  ruta: "https://www.google.com/maps/dir/?api=1&origin=Iglesia+San+Pedro+Claver+Cartagena&destination=Club+de+Pesca+Fuerte+del+Pastelillo+Cartagena&travelmode=driving",

  dress: {
    titulo: "Summer Formal",
    intro: { es: "Una noche elegante y fresca en Cartagena: looks formales en telas ligeras, pensados para el clima cálido. Sin estética tropical ni de playa.",
             en: "An elegant, fresh evening in Cartagena: formal looks in light fabrics, suited to the warm climate. Not tropical or beach-style." },
    hombres: { es: "Traje beige, arena o taupe; lino o mezclas ligeras. Camisa clara y calzado elegante.", en: "Beige, sand or taupe suit; linen or light blends. Light shirt and elegant shoes." },
    mujeres: { es: "Vestidos elegantes y frescos, telas ligeras y siluetas sofisticadas. Evitar estampados tropicales y colores muy saturados.", en: "Elegant, fresh dresses in light fabrics and sophisticated silhouettes. Please avoid tropical prints and very saturated colours." },
    paleta: ["#E9E1D3", "#D8CBB9", "#C9B79C", "#A99B87", "#A8B09A", "#747B61"]
  },

  /* ---------- HOTELES ---------- */
  hoteles: [
    { nombre: "Anandá Hotel Boutique", zona: { es: "Centro Histórico", en: "Historic Center" },
      codigo: "BODAESTEFANIAYFABIO", url: "https://www.anandahotelboutique.com/",
      detalle: { es: ["Tarifa especial reservando en la web del hotel.", "Estancias del 16 al 27 de marzo de 2027.", "Al reservar elige «Código Especial» → «Descuento»."],
                 en: ["Special rate when booking on the hotel website.", "Stays from March 16 to 27, 2027.", "When booking choose “Código Especial” → “Descuento”."] } },
    { nombre: "Hotel Capellán de Getsemaní", zona: { es: "Getsemaní", en: "Getsemaní" },
      codigo: "ESTEFANIAYFABIO", url: "https://be.synxis.com/?Hotel=35586&promo=ESTEFANIAYFABIO",
      detalle: { es: ["10 % sobre la tarifa pública (excepto I Prefer).", "Estancias del 18 al 22 de marzo de 2027.", "Reserva antes del 15 de febrero de 2027."],
                 en: ["10% off the public rate (except I Prefer).", "Stays from March 18 to 22, 2027.", "Book by February 15, 2027."] } },
    { nombre: "Hotel Santa Catalina", zona: { es: "Centro Histórico", en: "Historic Center" },
      codigo: "FABIOANDESTEF", url: "https://www.santacatalinahotel.com.co/en/",
      detalle: { es: ["14 % sobre la tarifa web, desayuno incluido.", "Estancias del 18 al 24 de marzo · mínimo 2 noches.", "Reserva antes del 24 de febrero de 2027."],
                 en: ["14% off the website rate, breakfast included.", "Stays from March 18 to 24 · 2-night minimum.", "Book by February 24, 2027."] } }
  ],

  /* ---------- BUENO SABER (acordeón) ---------- */
  viaje: [
    { t: { es: "Cómo llegar", en: "Getting there" }, d: { es: "Aeropuerto Internacional Rafael Núñez (CTG), a pocos minutos de la Ciudad Amurallada. Vuelos directos desde Bogotá, Medellín y varias ciudades internacionales.", en: "Rafael Núñez International Airport (CTG), minutes from the Walled City. Direct flights from Bogotá, Medellín and several international cities." } },
    { t: { es: "Transporte", en: "Getting around" }, d: { es: "Taxis oficiales o apps disponibles en Colombia: Uber, Cabify y DiDi. El centro histórico se recorre muy bien a pie.", en: "Official taxis or the apps available in Colombia: Uber, Cabify and DiDi. The historic center is best explored on foot." } },
    { t: { es: "Clima y qué empacar", en: "Weather & packing" }, d: { es: "Cálido y húmedo; marzo suele ser temporada seca. Lino o algodón, zapatos cómodos para calles empedradas, protector solar y tu look Summer Formal.", en: "Warm and humid; March is usually dry season. Linen or cotton, comfortable shoes for cobblestones, sunscreen and your Summer Formal look." } },
    { t: { es: "Moneda y propinas", en: "Currency & tipping" }, d: { es: "Peso colombiano (COP). Las tarjetas se aceptan ampliamente. En restaurantes se sugiere un 10 % de servicio voluntario.", en: "Colombian peso (COP). Cards are widely accepted. Restaurants usually suggest a voluntary 10% service charge." } },
    { t: { es: "Electricidad e internet", en: "Power & internet" }, d: { es: "110–120 V, enchufes tipo A/B (como en EE. UU.). Wifi en hoteles; puedes activar una eSIM antes de viajar.", en: "110–120 V, type A/B plugs (as in the US). Wi-Fi in hotels; you can activate an eSIM before you travel." } },
    { t: { es: "Requisitos de entrada", en: "Entry requirements" }, d: { es: "Viajeros internacionales: revisen los requisitos vigentes de Migración Colombia (formulario Check-MIG).", en: "International travellers: check Migración Colombia’s current requirements (Check-MIG form)." } }
  ],
  faq: [
    { q: { es: "¿Dónde nos recomiendan hospedarnos?", en: "Where do you recommend staying?" }, a: { es: "En la Ciudad Amurallada o Getsemaní, cerca de la iglesia. Arriba están los hoteles con código de descuento.", en: "In the Walled City or Getsemaní, close to the church. See the hotels with discount codes above." } },
    { q: { es: "¿Qué zapatos recomiendan?", en: "Which shoes do you recommend?" }, a: { es: "Las calles del centro son empedradas: tacón ancho o plataforma serán tus aliados.", en: "Old-town streets are cobbled: block heels or platforms are your best friends." } },
    { q: { es: "¿Tengo una restricción alimentaria?", en: "I have a dietary restriction" }, a: { es: "Cuéntanos en el formulario de confirmación y lo tendremos en cuenta.", en: "Tell us in the RSVP form and we will take care of it." } },
    { q: { es: "¿La recepción es al aire libre?", en: "Is the reception outdoors?" }, a: "" },     // PENDIENTE (vacío = no se muestra)
    { q: { es: "¿Puedo llevar acompañante?", en: "Can I bring a guest?" }, a: "" },             // PENDIENTE
    { q: { es: "¿Hay mesa de regalos?", en: "Is there a gift registry?" }, a: "" }               // PENDIENTE
  ],
  guia: [
    { cat: { es: "Comer", en: "Eat" }, items: "Celele · Carmen · La Cevichería" },
    { cat: { es: "Tomar algo", en: "Drinks" }, items: "Alquímico · Café del Mar" },
    { cat: { es: "Ver", en: "See" }, items: { es: "Murallas · Castillo San Felipe · Plaza de Santo Domingo · La Popa", en: "City walls · San Felipe Castle · Santo Domingo Square · La Popa" } },
    { cat: { es: "Mar", en: "Sea" }, items: { es: "Islas del Rosario · Playa Blanca (Barú)", en: "Rosario Islands · Playa Blanca (Barú)" } }
  ],

  /* ---------- RSVP ----------
     Envío real con FormSubmit (sin cuenta). La PRIMERA vez que alguien envía,
     FormSubmit manda un correo de activación a rsvp.estefaniayfabio@gmail.com:
     hay que hacer clic en «Activate Form» una sola vez. Hasta entonces, la web
     ofrece automáticamente el envío por correo (mailto) como respaldo. */
  rsvp: {
    email: "rsvp.estefaniayfabio@gmail.com",
    endpoint: "https://formsubmit.co/ajax/rsvp.estefaniayfabio@gmail.com",
    fechaLimite: ""   // PENDIENTE, p. ej. { es: "15 de enero de 2027", en: "January 15, 2027" }
  }
};

window.UI = {
  es: {
    nav: { inicio: "Inicio", historia: "Nuestra historia", finde: "El fin de semana", boda: "Ceremonia y recepción", hospedaje: "Dónde hospedarse", rsvp: "Confirmar" },
    menu: "Menú", cerrar: "Cerrar", skip: "Ir al contenido",
    kicker: "The Wedding Weekend", nosCasamos: "Nos casamos", cta1: "Confirmar asistencia", cta2: "Ver el fin de semana",
    faltan: "Faltan", dias: "días", horas: "horas", min: "min",
    kHist: "Nuestra historia", hHist: "Un fin de semana para celebrar juntos",
    bendicion: "Con la bendición de Dios y de nuestros padres", padresNovia: "Padres de la novia", padresNovio: "Padres del novio",
    kFinde: "18 – 21 de marzo", hFinde: "El fin de semana", horarioPend: "Horarios por confirmar · los publicaremos aquí",
    kBoda: "Sábado 20 de marzo", hBoda: "Ceremonia y recepción", ceremonia: "Ceremonia", recepcion: "Recepción",
    comoLlegar: "Cómo llegar", verMapa: "Ver en el mapa", ruta: "Ruta de la iglesia a la recepción",
    dressK: "Dress code", hombres: "Ellos", mujeres: "Ellas",
    kHosp: "Hoteles recomendados", hHosp: "Dónde hospedarse", hospIntro: "Tarifas especiales para nuestros invitados. Reserva directamente con el código.",
    codigo: "Código", copiar: "Copiar", copiado: "Copiado ✓", reservar: "Reservar",
    bueno: "Bueno saber", viajeros: "Para viajeros", preguntas: "Preguntas frecuentes", guia: "Nuestra guía de Cartagena",
    kRsvp: "RSVP", hRsvp: "Confirma tu asistencia", rsvpIntro: "Nos encantará saber si nos acompañas. Tu respuesta nos llega directamente.", fechaLimite: "Por favor confirma antes del",
    nombre: "Nombre completo", email: "Correo electrónico", tel: "Teléfono / WhatsApp", asistire: "¿Nos acompañas?", si: "Sí, con mucho gusto", no: "No podré asistir",
    acompanante: "Nombre de tu acompañante (si tu invitación lo incluye)", actividades: "¿A qué planes te sumas?", hospedaje: "¿Dónde te hospedarás?", otro: "Otro / aún no sé", elegir: "Elige una opción",
    restricciones: "Restricciones alimentarias o consideraciones especiales", mensaje: "Mensaje para los novios", opcional: "opcional",
    enviar: "Enviar confirmación", enviando: "Enviando…", gracias: "¡Gracias! Recibimos tu confirmación.", graciasNo: "Gracias por avisarnos. Te vamos a extrañar.",
    fallback: "No pudimos enviarlo automáticamente. Abre tu correo con el mensaje listo o cópialo:", abrirCorreo: "Abrir mi correo", copiarMsj: "Copiar mensaje",
    obligatorio: "Por favor completa tu nombre, tu correo y si nos acompañas.", asunto: "RSVP boda Estefanía & Fabio", o: "¿Prefieres escribirnos?",
    pie: "Con amor", volver: "Volver arriba"
  },
  en: {
    nav: { inicio: "Home", historia: "Our story", finde: "The weekend", boda: "Ceremony & reception", hospedaje: "Where to stay", rsvp: "RSVP" },
    menu: "Menu", cerrar: "Close", skip: "Skip to content",
    kicker: "The Wedding Weekend", nosCasamos: "We’re getting married", cta1: "RSVP", cta2: "See the weekend",
    faltan: "In", dias: "days", horas: "hours", min: "min",
    kHist: "Our story", hHist: "A weekend to celebrate together",
    bendicion: "With the blessing of God and our parents", padresNovia: "Parents of the bride", padresNovio: "Parents of the groom",
    kFinde: "March 18 – 21", hFinde: "The weekend", horarioPend: "Times to be confirmed · we’ll post them here",
    kBoda: "Saturday, March 20", hBoda: "Ceremony & reception", ceremonia: "Ceremony", recepcion: "Reception",
    comoLlegar: "Directions", verMapa: "Show on map", ruta: "Route from the church to the reception",
    dressK: "Dress code", hombres: "For him", mujeres: "For her",
    kHosp: "Where to stay", hHosp: "Where to stay", hospIntro: "Special rates for our guests. Book directly using the code.",
    codigo: "Code", copiar: "Copy", copiado: "Copied ✓", reservar: "Book",
    bueno: "Good to know", viajeros: "For travellers", preguntas: "Frequently asked questions", guia: "Our Cartagena guide",
    kRsvp: "Kindly reply", hRsvp: "Will you join us?", rsvpIntro: "We would love to know if you can make it. Your reply comes straight to us.", fechaLimite: "Please reply by",
    nombre: "Full name", email: "Email", tel: "Phone / WhatsApp", asistire: "Will you join us?", si: "Joyfully accepts", no: "Regretfully declines",
    acompanante: "Your guest’s name (if your invitation includes one)", actividades: "Which plans will you join?", hospedaje: "Where will you stay?", otro: "Other / not sure yet", elegir: "Choose an option",
    restricciones: "Dietary restrictions or special considerations", mensaje: "A message for the couple", opcional: "optional",
    enviar: "Send my RSVP", enviando: "Sending…", gracias: "Thank you! We’ve received your reply.", graciasNo: "Thank you for letting us know. We’ll miss you.",
    fallback: "We couldn’t send it automatically. Open your email with the message ready, or copy it:", abrirCorreo: "Open my email", copiarMsj: "Copy message",
    obligatorio: "Please fill in your name, your email and whether you can join us.", asunto: "RSVP Estefanía & Fabio wedding", o: "Prefer to write to us?",
    pie: "With love", volver: "Back to top"
  }
};
