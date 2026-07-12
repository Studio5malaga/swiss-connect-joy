import { useState } from "react";
import { usePlan } from "../context/PlanContext";
import audioLogo1 from "../assets/audio-logo-1.png.asset.json";
import audioLogo2 from "../assets/audio-logo-2.png.asset.json";
import audioLogo3 from "../assets/audio-logo-3.png.asset.json";
import audioLogo4 from "../assets/audio-logo-4.png.asset.json";
import audioLogo5 from "../assets/audio-logo-5.png.asset.json";
import audioLogo6 from "../assets/audio-logo-6.png.asset.json";

const AUDIO = {
  mytoursBcn: { img: audioLogo1.url, label: "AUDIOGUÍA", url: "https://mytours.city/es-barcelona/", alt: "mytours.city" },
  mytoursLyon: { img: audioLogo1.url, label: "AUDIOGUÍA", url: "https://mytours.city/es-lyon/", alt: "mytours.city" },
  mytoursGva: { img: audioLogo1.url, label: "AUDIOGUÍA", url: "https://mytours.city/es-ginebra/", alt: "mytours.city" },
  sherlock: { img: audioLogo2.url, label: "AUDIOGUÍA", url: "https://sherlockholmes.ch/en/Info/Museum/Audio_guide", alt: "Sherlock Holmes Meiringen" },
  suiza2026: { img: audioLogo3.url, label: "AUDIOGUÍA", url: "https://suiza2026proyecto.netlify.app/", alt: "Flexiguía Audioguías" },
  rtve: { img: audioLogo4.url, label: "AUDIOGUÍA", url: "https://www.rtve.es/play/audios/nomadas/nomadas-friburgo-alta-selva-negra-270316/1833547/", alt: "RNE Nómadas" },
  spotify: { img: audioLogo5.url, label: "AUDIOGUÍA", url: "https://open.spotify.com/episode/6WTvT819txJzEpMSLfsmy2", alt: "Spotify" },
  maptour: { img: audioLogo6.url, label: "AUDIOGUÍA", url: "https://maptour.info/strasbourg.php?lang=es", alt: "Maptour Strasbourg" },
};

// Días específicos del Plan B (Gran Tour Ferroviario): preceden a la base alpina
const planBPrefix: any[] = [
  {
    day: 1,
    date: "29 Sep (Lunes)",
    route: "Málaga → Barcelona",
    title: "Inicio del Gran Tour · Tren Iryo a Barcelona",
    image: "/images/dia-barcelona.jpg",
    alt: "Vista aérea de Barcelona con la Sagrada Familia",
    tags: ["Tren Iryo", "Barrio de Gracia", "104 €/pers."],
    highlights:
      "Arranca la expedición en clave ferroviaria. Tren Iryo desde Málaga María Zambrano hasta Barcelona Sants — 6h 27min cómodos, con maleta facturada incluida. Llegada al apartamento en el barrio de Gracia para descansar antes del primer paseo nocturno.",
    sections: [
      {
        title: "🚄 Tren Iryo Málaga → Barcelona",
        content: [
          "Salida: 11:39 desde Málaga María Zambrano",
          "Llegada: 18:06 a Barcelona Sants",
          "Duración: 6h 27min · maleta 23 kg incluida",
          "Precio: 65 €/persona",
        ],
      },
      {
        title: "🏙️ Llegada a Barcelona",
        content: [
          "Check-in en Barcelona Classic Gracia Apartments (calle de l'Or, parada Fontana L3)",
          "20:30 · Cena local en Gràcia: Plaça del Sol o Plaça de la Virreina, a 5 min andando — terrazas auténticas y precios mucho mejores que en el centro turístico",
          "Reservar lo justo para no madrugar al día siguiente",
        ],
      },
      {
        title: "🚇 Transporte en Barcelona · Tarjeta T-familiar",
        content: [
          "🔗 TMB: https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-familiar",
          "La ganadora: T-familiar (multipersonal). Se pasa la misma tarjeta hasta 6 veces seguidas por el torno para que fiche todo el grupo",
          "Cada T-familiar incluye 8 viajes. Para los 36 viajes totales del grupo: 5 tarjetas (5×8 = 40 viajes)",
          "Coste total grupo: 5 × 10,70 € = 53,50 € (~9,58 €/persona) — sobran 4 viajes de recuerdo",
        ],
      },
      {
        title: "🚆 Coche + Cercanías Málaga (recomendado)",
        content: [
          "Opción A: dejar el coche en la zona del aeropuerto de Málaga (parking económico larga estancia)",
          "Opción Eva: dejar el coche por casa de Eva. A la vuelta, Uber de 6 hasta su casa (~35-40 €) y desde allí los demás en coche",
          "Opción B: dejar el coche cerca del Hospital Quirón o Martín Carpena, metro hasta Vialia (parada El Perchel). A la vuelta Uber de 4 (~18 €) y Eva y yo otro Uber",
          "🔗 Cercanías Málaga: https://www.renfe.com/es/es/cercanias/cercanias-malaga (dirección María Zambrano)",
          "Ventaja: el coche disponible a la vuelta del aeropuerto el 11 Oct a las 00:20 h",
        ],
      },
      {
        title: "🚗 Opciones de Parking en el Aeropuerto de Málaga (AGP)",
        content: [
          "1️⃣ Low-Cost con traslado (más barato): recintos vigilados a 2 min en minibús 24h. Requiere dejar las llaves",
          "🔗 Picasso Parking (~94 €): https://www.parkingairportpicasso.com/reservas.php",
          "🔗 Costa Golf Parking (~54 €): https://www.parkingcostagolf.com/",
          "2️⃣ Aena Larga Estancia P3 (más bueno): dentro del recinto, lanzadera 24h gratuita, te quedas con las llaves, apertura por matrícula",
          "🔗 Aena: https://www.aena.es/es/landing/aparcamiento-aeropuerto-malaga-costa-del-sol",
          "3️⃣ Valet / Aparcacoches (más cómodo): chófer recoge en T3 Salidas y entrega en Llegadas a las 00:20 h",
          "4️⃣ Uber directo: coche 4 plazas (~18 €/trayecto) · coche 6 plazas (~51 €/trayecto)",
          "💡 Al reservar parking o chófer, indica siempre el número de vuelo de regreso por si hay retrasos",
        ],
      },
    ],
    tip: "💡 Comprobad los billetes Iryo con 2 meses de antelación: a esos precios se agotan rápido.",

  },

  {
    day: 2,
    date: "30 Sep (Martes)",
    route: "Barcelona libre",
    title: "Día completo en Barcelona",
    image: "/images/dia-barcelona.jpg",
    alt: "Calles del Barrio Gótico de Barcelona",
    tags: ["Sagrada Familia", "Barrio Gótico", "Mediterráneo"],
    highlights:
      "Día completo para empaparse de Barcelona antes de subir a Francia. Mañana en la Sagrada Familia y Passeig de Gràcia (Gaudí), tarde por el Barrio Gótico y Born, y atardecer en la Barceloneta.",
    sections: [
      {
        title: "🌅 Mañana · Modernismo y Barrio Gótico",
        content: [
          "09:00 · Paseo de Gracia a pie (La Pedrera y Casa Batlló desde la acera) hasta Plaza de Cataluña",
          "10:15 · Las Ramblas y Mercado de La Boqueria (gratis)",
          "11:15 · Barrio Gótico, Pont del Bisbe y Basílica de Santa Maria del Pi (entrada 4 €)",
          "12:45 · Almuerzo rápido (menú del día o porciones de pizza)",
        ],
      },
      {
        title: "🌳 Tarde · Laberinto + Sagrada Familia",
        content: [
          "13:30 · Metro L3 (Liceu/Catalunya) hasta Mundet (~15-20 min)",
          "14:00 · Parque del Laberinto de Horta (entrada 2,23 €)",
          "15:45 · Transbordo a L5 en Diagonal hasta Sagrada Família",
          "16:30 · Sagrada Familia por fuera (gratis): rodea las fachadas del Nacimiento y la Pasión",
        ],
      },
      {
        title: "🌇 Atardecer · Bunkers del Carmel",
        content: [
          "17:45 · Bus V21 o metro L5 hasta Alfons X y subida al Turó de la Rovira",
          "18:30-19:30 · Bunkers del Carmel (gratis) · panorámica 360° de Barcelona al atardecer (~19:35 h)",
          "Importante: el recinto cierra puntualmente a las 19:30 h en horario de verano/septiembre",
          "⚠️ Aviso logístico: el último tramo a la cima es una subida peatonal empinada con escaleras. Si se prefieren paseos llanos, cambiar Bunkers por una terraza con vistas en la parte alta de la ciudad",
          "19:40 · Bus V17 de bajada directa hasta Gràcia, prácticamente en la puerta del apartamento",
        ],
      },
    ],
    tip: "💡 Reservad la Sagrada Familia con 3-4 semanas de antelación para asegurar horario y entrada con torres. La parada Fontana (L3) está al lado del apartamento — moveros siempre por metro.",

    closingImage: "/images/barcelona2.png",
    closingAlt: "Atardecer en el Parque Güell con vistas a la Sagrada Familia y al mar",
    audioButtons: [AUDIO.mytoursBcn],

  },
  {
    day: 3,
    date: "1 Oct (Miércoles)",
    route: "Barcelona → Lyon",
    title: "Tren SNCF a Lyon · Capital gastronómica",
    image: "/images/dia-lyon.jpg",
    alt: "Vista del Vieux Lyon con el río Saona",
    tags: ["Tren SNCF", "Vieux Lyon UNESCO", "97 €/pers."],
    highlights:
      "Tren directo SNCF desde Barcelona Sants hasta Lyon Part-Dieu, cruzando el Mediterráneo francés y la Provenza. Llegada a primera hora de la tarde al apartamento con terraza en el Vieux Lyon.",
    sections: [
      {
        title: "🚄 Tren SNCF Barcelona → Lyon",
        content: [
          "Salida: 08:14 desde Barcelona Sants",
          "Llegada: 13:20 a Lyon Part-Dieu",
          "Duración: 5h 06min · maleta 23 kg incluida",
          "Precio: 79 €/persona",
        ],
      },
      {
        title: "🍷 Tarde en Lyon",
        content: [
          "Check-in en Appartement Vieux Lyon Terrasse",
          "Paseo por el Vieux Lyon (Patrimonio UNESCO)",
          "Cena en un bouchon lyonnais tradicional",
        ],
      },
    ],
    audioButtons: [AUDIO.mytoursLyon],
  },
  {
    day: 4,
    date: "2 Oct (Jueves)",
    route: "Lyon libre",
    title: "Día completo en Lyon",
    image: "/images/dia-lyon.jpg",
    alt: "Basílica de Fourvière en lo alto de Lyon",
    tags: ["Fourvière", "Traboules", "Gastronomía"],
    highlights:
      "Día para descubrir la capital gastronómica de Francia. Subida a la Basílica de Fourvière, paseo por las traboules del Vieux Lyon y mercado de Les Halles Paul Bocuse.",
    sections: [
      {
        title: "🚇 Transporte en Lyon · 3 Carnets de 10 viajes",
        content: [
          "🔗 TCL: https://www.tcl.fr/",
          "Billete físico recargable (0,20 €) que permite multi-validación (pasar la misma tarjeta 6 veces seguidas)",
          "Carnet de 10 viajes: 20,00 € (2,00 €/viaje). Para los 30 viajes del grupo: 3 carnets",
          "Coste total grupo: 60,00 € (~10,00 €/persona)",
        ],
      },
      {
        title: "☕ Mañana · Desayuno y Traboules",
        content: [
          "09:00 · Desayuno en Pralus, Quai Saint-Antoine — Tarte aux Pralines o brioche de pralines, mermeladas premiadas",
          "🔗 Pastelería Pralus: https://www.boulangerie-pralus.com/",
          "🔗 Ubicación: https://maps.app.goo.gl/VpoqL3UQjx2JZyJk7",
          "10:00 · Traboules ocultos del Vieux Lyon (Rue Saint-Jean) — pasadizos medievales que cruzan edificios",
          "11:00 · Catedral de Saint-Jean (gratis) con su reloj astronómico del siglo XIV",
        ],
      },
      {
        title: "⛪ Mediodía · Fourvière y zona romana",
        content: [
          "12:00 · Funicular F2 desde Vieux Lyon hasta Fourvière (incluido en los carnets TCL)",
          "12:15 · Basílica de Notre-Dame de Fourvière (gratis): mosaicos dorados y mejor mirador de Lyon",
          "13:30 · Théâtres Romains de Fourvière (gratis · año 15 a.C.) y Odéon",
          "15:00 · Bajada caminando por el Jardin du Rosaire",
        ],
      },
      {
        title: "🌳 Tarde · Parc de la Tête d'Or",
        content: [
          "16:30 · Metro D + transbordo en Sax-Gambetta a línea B hasta Charpennes",
          "🔗 Parc de la Tête d'Or: https://www.lyon.es/parque-tete-dor",
          "Parque urbano gratuito · invernaderos de hierro y cristal · jardín botánico · zoo de acceso libre",
        ],
      },
      {
        title: "🍷 Cena · Bouchons lyonnais auténticos",
        content: [
          "Busca la pegatina amarilla «Authentique Bouchon Lyonnais» (Gnafron con vaso de vino)",
          "🔗 Les Fine Gueules (Rue Lainerie · Vieux Lyon): https://fines-gueules.fr/ — andouillette y quenelle, vigas de madera",
          "🔗 Le Musée (Presqu'île): https://www.bouchonlemusee.fr/ — el dueño Luc canta el menú, traboule privado dentro del local",
          "🔗 Le Garet (cerca de la Ópera): https://lacarte.menu/restaurants/lyon/le-garet — años 50, raciones gigantescas, tarta de praliné rosa",
          "⚠️ Reservar online con antelación · llegada 19:30-20:00 h",
          "Menú completo de 3 platos: 25-32 €/persona",
        ],
      },

    ],
    tip: "💡 Huye de los menús masivos en diez idiomas de la calle Saint-Jean — postureo para turistas. Los bouchons auténticos son familiares, ruidosos y con manteles de cuadros rojos.",
    closingImage: "/images/lyon2.png",
    closingAlt: "Cena en un Bouchon Lyonnais tradicional del Vieux Lyon con Fourvière al fondo",

  },
  {
    day: 5,
    date: "3 Oct (Viernes)",
    route: "Lyon → Ginebra",
    title: "Tren a Ginebra · Entrada en Suiza",
    image: "/images/dia1-ginebra-kandersteg.jpg",
    alt: "Lago Lemán y Jet d'Eau de Ginebra",
    tags: ["Tren transfronterizo", "Lago Lemán", "Hôtel Astoria"],
    highlights:
      "Trayecto corto y cómodo de Lyon a Ginebra (2h). Tarde libre por el casco antiguo de Ginebra y el Lago Lemán antes de empezar el bloque alpino del viaje al día siguiente.",
    sections: [
      {
        title: "🚂 Tren Lyon → Ginebra",
        content: [
          "Salida: 12:38 desde Lyon Part-Dieu",
          "Llegada: 14:40 a Ginebra Cornavin",
          "Duración: 2h 02min · 35,10 €/persona",
        ],
      },
      {
        title: "🌆 Tarde en Ginebra · Lago Lemán",
        content: [
          "Check-in en Hôtel Astoria: enfrente de la estación Cornavin — cruzas la calle y dejas las maletas",
          "ℹ️ Desayuno no incluido (17 CHF/persona/día, 7:00-10:30 h)",
          "🔗 Geneva Transport Card GRATIS: https://www.geneve.com/en/plan-stay/getting-around/free-geneva-transport-card — tranvías, buses y barcos Mouettes ilimitados (llega por email 3 días antes)",
          "WiFi urbano gratis: conéctate a «((o)) city-geneva»",
          "16:30 · Bajada por Rue du Mont-Blanc hasta el Lago Lemán (~10 min)",
          "🔗 17:00 · Jet d'Eau (140 m): https://www.myswitzerland.com/es-es/descubrir-suiza/jet-deau-chorro-de-agua/",
          "🔗 Reloj de Flores (Jardin Anglais): https://www.geneva.info/flower-clock/",
          "🔗 18:15 · Crucero Mouettes Genevoises (gratis con la tarjeta): https://www.mouettesgenevoises.com/",
          "🔗 Barrio de Les Grottes / «Edificios Pitufo» detrás del hotel: https://www.enelmundoperdido.com/les-grottes-el-barrio-pitufo-de-ginebra/",
          "🔗 Opcional · Bains des Pâquis (~2 CHF): https://www.myswitzerland.com/es-es/descubrir-suiza/bains-des-paquis-1/ — espigón sobre el lago, cantina barata",
          "🔗 Opcional · Catedral de Saint-Pierre (entrada libre, torres 5 CHF): https://www.cathedrale-geneve.ch/en/visit/",
        ],
      },

      {
        title: "🏨 Alojamiento en Ginebra (1 noche · 3-4 Oct)",
        content: [
          "Hotel: Hôtel Astoria — junto a la estación Cornavin",
          "Precio: 95 €/persona (1 noche)",
          "Desayuno incluido · check-in cómodo a pie desde la estación",
          "🔗 Reserva: https://www.booking.com/hotel/ch/astoria-geneve.es.html",
        ],
      },
    ],
    tip: "💡 La Geneva Transport Card te llegará por email 3 días antes de la llegada con un formulario online. Una vez rellenado, recibes la tarjeta digital al instante. ¡No pagues cruceros turísticos cuando las Mouettes son gratis!",
    audioButtons: [AUDIO.mytoursGva],

  },

];

// Días específicos del Plan A: 2 noches en Ginebra antes de subir a los Alpes
const planAGenevaPrefix: any[] = [
  {
    day: 1,
    date: "2 Oct (Vie)",
    route: "Málaga → Ginebra",
    title: "Vuelo SWISS a Ginebra y tarde libre",
    image: "/images/dia1-ginebra-kandersteg.jpg",
    alt: "Jet d'Eau de Ginebra al atardecer con el Lago Lemán",
    tags: ["Vuelo SWISS directo", "Llegada mediodía", "Nonanteneuf · 2 noches"],
    highlights:
      "Arranca la expedición sin madrugones. Vuelo directo de SWISS desde Málaga a Ginebra en 2h 20min, llegada a mediodía y tarde libre para descubrir la ciudad sin prisas antes de descansar en el apart-hotel junto al aeropuerto.",
    sections: [
      {
        title: "✈️ Vuelo SWISS AGP → GVA",
        content: [
          "Salida: 09:40 desde Málaga (AGP)",
          "Llegada: 12:00 a Ginebra (GVA) · 2h 20min",
          "Maleta facturada 23 kg incluida (perfil Senior · 189 €)",
          "Sin maleta (perfil Junior · 150 €)",
        ],
      },
      {
        title: "🚆 Traslado aeropuerto → hotel",
        content: [
          "El billete gratuito de transporte público (Geneva Transport Card) se recoge en la zona de llegadas",
          "Tren / tranvía directo hasta la zona de Étang (~15 min)",
          "Check-in en Nonanteneuf Appart Hôtel y descanso",
        ],
      },
      {
        title: "🌆 Tarde libre en Ginebra",
        content: [
          "Paseo por la Vieille Ville y Catedral de Saint-Pierre",
          "Foto en el Jet d'Eau (chorro de 140 m sobre el Lago Lemán)",
          "Reloj de las Flores en el Jardin Anglais",
          "Cena ligera junto al lago",
        ],
      },
      {
        title: "🏨 Alojamiento en Ginebra (2 noches · 2-4 Oct)",
        content: [
          "Hotel: Nonanteneuf Appart Hôtel Genève Étang · Airport",
          "Precio: 126 €/persona (2 noches)",
          "Apartamentos con cocina · junto al aeropuerto y transporte público directo al centro",
          "🔗 Reserva: https://www.booking.com/hotel/ch/nonanteneuf-geneve-etang-airport-contactless-check-in.es.html",
        ],
      },
    ],
    tip: "💡 La Geneva Transport Card es gratuita para todos los huéspedes de hoteles en Ginebra y cubre tranvía, bus y tren urbanos durante toda la estancia.",
  },
  {
    day: 2,
    date: "3 Oct (Sáb)",
    route: "Ginebra (día completo)",
    title: "Día completo en Ginebra · Lago Lemán y diplomacia",
    image: "/images/dia1-ginebra-kandersteg.jpg",
    alt: "Vista panorámica del Lago Lemán y la ciudad de Ginebra",
    tags: ["Vieille Ville", "Lago Lemán", "Naciones Unidas", "Museos"],
    highlights:
      "Día completo para descubrir Ginebra a fondo antes del bloque alpino. Mañana cultural en el casco histórico, mediodía junto al lago y tarde a elegir entre los museos del barrio internacional o un crucero corto por el Lemán.",
    sections: [
      {
        title: "🌅 Mañana — Vieille Ville",
        content: [
          "09:30 · Subida a la Catedral de Saint-Pierre (torre con vistas)",
          "10:30 · Muro de los Reformadores en el Parc des Bastions",
          "11:30 · Place du Bourg-de-Four (la plaza más antigua)",
          "13:00 · Comida en una brasserie del casco antiguo",
        ],
      },
      {
        title: "🚢 Mediodía — Lago Lemán",
        content: [
          "Mini-crucero CGN por la rada (1h, gratis con Swiss Travel Pass si ya activado)",
          "Paseo por el Quai du Mont-Blanc",
          "Reloj de las Flores y Jardin Anglais",
        ],
      },
      {
        title: "🌍 Tarde — Barrio internacional (a elegir)",
        content: [
          "Opción A: Palacio de las Naciones (ONU) · visita guiada con reserva previa",
          "Opción B: Museo Internacional de la Cruz Roja (CICR) · muy didáctico",
          "Opción C: Museo Patek Philippe · relojería suiza de lujo",
          "Cierre del día: cena junto al lago al atardecer",
        ],
      },
    ],
    tip: "💡 Reservad la visita al Palacio de la ONU con varios días de antelación: las plazas son limitadas y hay que llevar el pasaporte.",
  },
];

const days: any[] = [
  {
    day: 1,
    date: "4 Oct (Dom)",
    route: "Ginebra → Meiringen → Kandersteg",
    title: "Ginebra → Kandersteg con parada en Meiringen · Tren panorámico",
    image: "/images/dia1-ginebra-kandersteg.jpg",
    alt: "Tren panorámico junto al Lago Lemán con los Alpes al fondo",
    tags: ["Mañana en Ginebra", "Parada Meiringen", "Cataratas Reichenbach", "Chalet-Hotel Adler"],
    highlights:
      "Día de transición aprovechado al máximo. Tren a media mañana desde Ginebra con parada larga en Meiringen para conocer las Cataratas Reichenbach, el funicular de madera de 1899 y el museo de Sherlock Holmes. Llegada por la tarde al Chalet-Hotel Adler en un valle completamente llano.",
    sections: [
      {
        title: "🚂 Ruta del día",
        content: [
          "10:00 · Salida de Ginebra Cornavin (tren hacia Meiringen vía Berna e Interlaken Ost)",
          "13:15 · Llegada a Meiringen — dejar maletas en consignas automáticas (6-10 CHF/maleta)",
          "🔗 SBB Meiringen · taquillas/equipamiento: https://www.sbb.ch/en/travel-information/stations/find-station/station.16965.meiringen.html#equipment_lockers",
          "🔗 SBB Meiringen · ficha de la estación: https://www.sbb.ch/en/travel-information/stations/find-station/station.16965.meiringen.html",
          "13:30 · Almuerzo ligero en el pueblo o sándwiches suizos tradicionales",
          "14:15 · Funicular histórico de madera a las Cataratas Reichenbach (escenario del enfrentamiento final de Sherlock Holmes)",
          "15:45 · Museo de Sherlock Holmes (gratis con el pase, abre hasta 17:30/18:00 h) · merengue local en pastelería tradicional",
          "17:30 · Recoger maletas y tren de enlace a Kandersteg",
          "19:15 · Llegada al Chalet-Hotel Adler · cena y opcional piscina/spa (15 €)",
        ],
      },
      {
        title: "🏨 Alojamiento en Kandersteg (3 noches · 4-7 Oct)",
        content: [
          "Hotel: Chalet-Hotel Adler (Alpen Chalet)",
          "Precio: 121 €/persona (3 noches)",
          "Piscina y spa (15 €/día) · cocina disponible · WiFi gratuito",
          "A 5-7 min andando de la estación, sin cuestas",
        ],
      },
    ],
    tip: "💡 ¿Por qué Kandersteg es perfecto? A diferencia de Wengen (con muchas cuestas), Kandersteg es un pueblo en un valle plano. El Lago Oeschinen tiene un microbús eléctrico que lleva hasta la orilla. El hotel tiene piscina y spa para descansar las piernas cada noche (15 €/día).",
    audioButtons: [AUDIO.mytoursGva, AUDIO.sherlock, AUDIO.suiza2026],
  },


  {
    day: 2,
    date: "30 Sep (Martes)",
    route: "Kandersteg → Zweisimmen → Montreux → Kandersteg",
    title: "El GoldenPass Belle Époque, Castillo de Chillon & Barco de Vapor",
    image: "/images/dia2-chillon-barco.jpg",
    alt: "Castillo de Chillon junto al Lago Lemán con tren Belle Époque",
    tags: ["GoldenPass Belle Époque", "Castillo medieval", "Barco de vapor", "Freddie Mercury"],
    highlights:
      "El día estrella del viaje. El GoldenPass Belle Époque no es un tren normal; es una joya histórica inspirada en el Orient Express de los años 30. Vagones de madera noble, terciopelo azul y verde, ventanales gigantes. El tren desciende desde los picos alpinos hasta la orilla del Lago Lemán.",
    sections: [
      {
        title: "🚂 Tren GoldenPass Belle Époque",
        content: [
          "Salida: 12:02 desde Zweisimmen",
          "Llegada a Montreux: 14:11",
          "Coste billete: 0 € (Swiss Travel Pass)",
          "Reserva asientos: ~10 €/persona (recomendado para ir los 6 juntos)",
        ],
      },
      {
        title: "🏰 Castillo de Chillon & Barco de Vapor",
        content: [
          "El monumento histórico más visitado de Suiza",
          "Prisiones, salas de banquetes y torres con vistas al lago",
          "Entrada castillo: GRATIS (Swiss Travel Pass = Pase de Museos)",
          "Barco de vapor CGN: GRATIS (incluido en el pase) — ruedas de madera laterales",
          "Tarde: Paseo por el muelle — estatua de Freddie Mercury",
          "Final del día: Piscina y spa en el hotel Adler",
        ],
      },
    ],
    savings: { label: "Ahorro Total Día 2", amount: "~90 €", detail: "Solo gastaréis en comida" },
    audioButtons: [AUDIO.suiza2026],
  },
  {
    day: 3,
    date: "1 Oct (Miércoles)",
    route: "Kandersteg → Interlaken → Brienz → Giessbach → Blausee → Kandersteg",
    title: "Lago de Brienz, Funicular del Giessbach & Blausee",
    image: "/images/dia3-sherlock-blausee.jpg",
    alt: "Lago de Brienz turquesa, cascadas de Giessbach y Blausee en Suiza",
    tags: ["Crucero Brienz", "Funicular Giessbach", "Lago turquesa", "Día relajado"],
    highlights:
      "Al haber adelantado la parada de Meiringen al Día 1, queda un día mucho más relajado dedicado a los lagos azules. Crucero por el majestuoso Lago de Brienz, parada en el histórico Grand Hotel Giessbach y broche de oro en el Blausee.",
    sections: [
      {
        title: "🌅 Mañana · Crucero por el Lago de Brienz",
        content: [
          "Tren Kandersteg → Interlaken Ost (GRATIS con el pase)",
          "Barco de línea por el Lago de Brienz: GRATIS con Swiss Travel Pass",
          "Agua azul turquesa brillante (partículas de glaciar) · vistas a pueblos como Iseltwald",
        ],
      },
      {
        title: "🚠 Extra recomendado · Grand Hotel Giessbach",
        content: [
          "Bajada en la parada intermedia «Giessbach See»",
          "🔗 Funicular histórico del Grand Hotel Giessbach (100% gratis con Swiss Travel Pass): https://giessbach.ch/en/giessbach-bahn-1",
          "Subida cómoda con vistas a las cascadas",
          "🔗 Café/refresco en la Terraza Kehrli con vistas al lago: https://giessbach.ch/en/restaurant-bar/kehrli-terrasse",
        ],
      },
      {
        title: "🏘️ Mediodía · Pueblo de Brienz y regreso",
        content: [
          "Tomar de nuevo el barco hasta el pueblo de Brienz · famoso por sus casas de madera tallada tradicionales",
          "Tren de Brienz de vuelta hacia la zona de Kandersteg",
          "Almuerzo tranquilo en Interlaken o junto al lago en Spiez",
        ],
      },
      {
        title: "💎 Tarde · El Blausee (Lago Azul) — Broche de Oro",
        content: [
          "Bus 230 desde Kandersteg (8-10 min · GRATIS con la Swiss Travel Pass)",
          "Sendero 100% llano y accesible hasta el lago",
          "Barca con fondo de cristal incluida en el acceso · truchas y estatua hundida visibles",
          "Tarifas: L-V adultos 11 CHF · fines de semana 13 CHF · niños 7-9 CHF",
          "Regreso rápido al hotel a descansar",
        ],
      },
    ],
    tip: "💡 Día pensado para disfrutar del agua y los paisajes de postal sin prisas, tras el intenso Día 1 con la parada en Meiringen.",
    savings: { label: "Ahorro Total Día 3", amount: "~80 €", detail: "Transporte + funicular Giessbach cubiertos" },
    audioButtons: [AUDIO.suiza2026],
  },

  {
    day: 4,
    date: "2 Oct (Jueves)",
    route: "Kandersteg → Interlaken → Grindelwald → Basilea → Gengenbach",
    title: "De los Glaciares Suizos a la Selva Negra",
    image: "/images/dia4-grindelwald-first.jpg",
    alt: "First Cliff Walk en Grindelwald, pasarela suspendida sobre los Alpes suizos",
    tags: ["Cliff Walk", "ICE alemán", "Pueblo de cuento", "Consigna maletas"],
    highlights:
      "El día más intenso del viaje: despedida épica de Suiza con el Cliff Walk del Eiger y luego el gran salto a Alemania en el tren ICE más rápido del país.",
    sections: [
      {
        title: "🏔️ Mañana: Grindelwald First",
        content: [
          "Salida temprana hacia Grindelwald (2h de tren)",
          "Teleférico con 50% de descuento con Swiss Travel Pass (~34 €/persona)",
          "Cliff Walk: pasarela metálica pegada al acantilado con vistas a la pared norte del Eiger",
          "GRATIS una vez arriba",
        ],
      },
      {
        title: "🧳 Mediodía: Logística de Maletas",
        content: [
          "Dejar maletas en consignas de Interlaken Ost por la mañana (ir ligeros a Grindelwald)",
          "Recogerlas antes de subir al tren hacia Alemania",
          "Coste: ~7-10 € por taquilla grande",
        ],
      },
      {
        title: "🚄 Tarde: El Gran Tren Alemán (ICE 276)",
        content: [
          "Ruta: Interlaken → Basilea (GRATIS con Swiss Pass) → Offenburg → Gengenbach",
          "El ICE 276 cruza la frontera a 250 km/h",
          "Asientos amplios, Wi-Fi gratis y vagón restaurante",
          "Precio tramo alemán: ~20 €/persona",
        ],
      },
      {
        title: "🏡 Noche: Llegada a Gengenbach",
        content: [
          "Pueblo de cuento de hadas con calles empedradas y casas de madera",
          "Check-in en Villa Beckmann a partir de las 16:00h",
          "Cena típica alemana: codillo, salchichas y cerveza local",
        ],
      },
    ],
    costs: [
      { concept: "Teleférico Grindelwald First (50% dto.)", pp: "~34 €", group: "~238 €" },
      { concept: "Tren a Alemania (Basilea → Gengenbach)", pp: "~20-30 €", group: "~140-210 €" },
      { concept: "Consigna maletas Interlaken Ost", pp: "~7-10 €", group: "~21-30 €" },
      { concept: "Tramo suizo (Interlaken → Basilea)", pp: "0 € (Swiss Pass)", group: "0 €" },
    ],
    tip: '💡 Truco para grupos: Buscad la "Sparpreis Gruppe" (Tarifa reducida para grupos) en la web de Deutsche Bahn. Suele salir por unos 9,99 €/persona si se reserva con tiempo.',
    audioButtons: [AUDIO.suiza2026],
  },
  {
    day: 5,
    date: "3 Oct (Viernes)",
    route: "Gengenbach → Triberg → Gengenbach",
    title: "Triberg: Cascadas, Reloj de Cuco & Tarta Selva Negra",
    image: "/images/dia5-triberg-cascadas.jpg",
    alt: "Cascadas de Triberg y reloj de cuco gigante en la Selva Negra",
    tags: ["Cascadas 163m", "Reloj de cuco gigante", "Tarta original 1915", "KONUS gratis"],
    highlights:
      "Dos días para descubrir los secretos de la Selva Negra. Todo con transporte gratuito gracias a la tarjeta KONUS.",
    sections: [
      {
        title: "🌊 Cascadas de Triberg",
        content: [
          "Las más altas de Alemania, con siete niveles de caída",
          "Paseo agradable por el bosque",
          "¡Llevad cacahuetes! Hay ardillas muy simpáticas que se acercan a comer de la mano",
          "Entrada: ~8 €/persona",
          "Tren Gengenbach → Triberg: ~30 min, GRATIS con KONUS",
        ],
      },
      {
        title: "⏰ El Reloj de Cuco Gigante — Eble Uhren-Park (Schonach)",
        content: [
          "Un reloj de cuco del tamaño de una casa",
          "Podéis entrar dentro para ver los engranajes gigantes de madera",
          "Cada media hora sale el pájaro gigante a cantar",
          "Entrada: ~2 €/persona",
        ],
      },
      {
        title: "🍰 Tarta Selva Negra — Café Schäfer",
        content: [
          "Se guarda la receta original de 1915",
          "Tarta con mucha nata, chocolate y cerezas al licor (Kirsch)",
          "~5-7 € la porción — ¡Imprescindible!",
        ],
      },
    ],
    afternoonOptions: {
      title: "Opciones de Tarde (Día 5 o 6)",
      options: [
        {
          label: "OPCIÓN A — «Vistas de Infarto»",
          desc: "El Púlpito del Diablo. Ruta de senderismo desde Gengenbach. Subida de 1h entre viñedos para ver el atardecer. Coste: 0 € | Esfuerzo: Medio.",
        },
        {
          label: "OPCIÓN B — «Viaje al Pasado»",
          desc: "Museo Vogtsbauernhof. Granjas históricas de la Selva Negra. Ideal para ver cómo vivían hace 600 años. Coste: 13 € | Esfuerzo: Bajo.",
        },
        {
          label: "OPCIÓN C — Monte Schauinsland",
          desc: "El teleférico más largo de Alemania. Desde arriba se ve toda la Selva Negra y, en días claros, incluso los Alpes suizos. Coste: ~15 € ida y vuelta.",
        },
      ],
    },
  },
  {
    day: 6,
    date: "4 Oct (Sábado)",
    route: "Gengenbach → Friburgo → Gengenbach",
    title: "Friburgo de Brisgovia: Canales, Catedral & Schauinsland",
    image: "/images/dia6-friburgo-canales.jpg",
    alt: "Bächle (canales medievales) de Friburgo con catedral gótica al fondo",
    tags: ["Bächle medievales", "Catedral gótica", "KONUS gratis", "Mercado sábado"],
    highlights:
      "La capital ecológica de Alemania. Ciudad universitaria llena de vida, con canales que corren por las aceras y un casco antiguo precioso. Tren desde Gengenbach: ~1 hora, GRATIS con la tarjeta KONUS.",
    sections: [
      {
        title: "🏛️ Friburgo Centro",
        content: [
          "Catedral gótica de piedra arenisca roja con torre de 116m",
          "La plaza del mercado que la rodea es donde está todo el ambiente",
          "Los Bächle: pequeños canales de agua que recorren las calles del centro",
          "¡Quien mete el pie en un Bächle, se casa con alguien de Friburgo!",
        ],
      },
      {
        title: "🌭 Gastronomía Local",
        content: [
          "«Lange Rote»: la salchicha típica de Friburgo",
          "La venden en puestos rojos en la misma plaza del mercado",
          "~4,50 € — la forma más auténtica de comer como un local",
        ],
      },
      {
        title: "🛒 Mercado de Sábado en Gengenbach",
        content: [
          "De 8:00 a 12:00 en la plaza del ayuntamiento",
          "Productos frescos de la zona: quesos, embutidos y pan artesano",
          "Ideal para comprar desayunos o cenas para la Villa",
        ],
      },
    ],
  },
  {
    day: 7,
    date: "5 Oct (Domingo)",
    route: "A elección del grupo",
    title: "El Gran Cierre — 3 Opciones",
    image: "/images/dia7-opciones.jpg",
    alt: "Tres destinos opcionales: Estrasburgo, Baden-Baden y Castillo Haut-Koenigsbourg",
    tags: ["3 opciones", "Día libre", "Francia o Alemania"],
    highlights:
      "Nuestro último día completo. Tenemos 3 opciones muy distintas. En todas ellas la base es Gengenbach y el transporte es principalmente en tren. Elegid según el ritmo y las ganas del grupo.",
    sections: [
      {
        title: "🏰 Opción 1-A: Aventura Imperial — Castillo + Estrasburgo",
        content: [
          "Mañana: Castillo de Haut-Koenigsbourg (Francia). Salas del trono, cocinas reales y murallas con cañones",
          "Tarde: Estrasburgo — Catedral y canales de la «Petite France»",
          "Transporte: ~12-15 €/persona",
          "Entrada castillo: 12 € adultos / 8 € niños",
          "Coste total estimado: ~27 €/persona",
        ],
      },
      {
        title: "🏘️ Opción 1-B: Esplendor Alsaciano — Solo Estrasburgo",
        content: [
          "Todo el día: Petite France, Catedral de Notre-Dame y su reloj astronómico",
          "Opcional: Paseo en barco por los canales (Batorama, 15 €/persona)",
          "Transporte: ~5-7 €/persona",
          "Muy relajado, sin prisas por horarios",
          "Coste total estimado: ~7 €/persona",
        ],
      },
      {
        title: "👑 Opción 2: La Ruta de Sissi — Baden-Baden + Monte Merkur",
        content: [
          "Mañana: Lichtentaler Allee en Baden-Baden — el parque de lujo donde la Emperatriz Sissi paseaba a diario",
          "Tarde: Funicular Merkurberg a la cima de la montaña",
          "Transporte: 0 € (TOTALMENTE GRATIS con KONUS)",
          "Funicular Merkur: 6 € ida y vuelta",
          "Coste total estimado: ~6 €/persona",
        ],
      },
    ],
    tip: "En todas las opciones, el gasto principal será la comida. El transporte está cubierto total o parcialmente por la tarjeta KONUS.",
  },
  {
    day: 8,
    date: "11 Oct (Dom)",
    route: "Gengenbach → Basilea → Málaga",
    title: "Regreso a Málaga · Vuelo nocturno easyJet",
    image: "/images/dia8-regreso.jpg",
    alt: "Aeropuerto de Basilea con avión despegando al atardecer",
    tags: ["easyJet 21:30", "Llegada 00:20", "Día completo libre"],
    highlights:
      "Último día sin agobios. El vuelo de regreso es por la noche, así que hay tiempo para una mañana relajada en Gengenbach, almuerzo tranquilo y traslado cómodo a Basilea EuroAirport por la tarde.",
    sections: [
      {
        title: "🕐 Horarios Clave del Día",
        content: [
          "Mañana libre en Gengenbach · desayuno y últimas compras",
          "Check-out de Villa Beckmann y consigna de maletas si es necesario",
          "Tren regional Gengenbach → Basilea SBB a media tarde (~17:00)",
          "Autobús Línea 50 a EuroAirport BSL: cada 7-10 min · ~20 min de trayecto",
          "Vuelo easyJet BSL → AGP: salida 21:30 · llegada Málaga 00:20 · 2h 50min",
        ],
      },
      {
        title: "💰 Costes del Último Día",
        content: [
          "Tren Gengenbach → Basilea: 0 € (tarjeta KONUS)",
          "Bus Línea 50 al Aeropuerto: 5 € (4,70 CHF)",
          "Vuelo Basilea → Málaga: 129 € (Senior · maleta facturada) · 45 € (Junior · sin maleta)",
        ],
      },
    ],
    tip: "⚠️ Cuidado con la estación en Basilea: al venir de Alemania, el tren suele parar primero en Basel Bad Bf. Para coger el bus 50 al aeropuerto más fácilmente, aseguraos de llegar hasta la estación principal Basel SBB. Haced el check-in online el día anterior para evitar colas.",
  },
];

// Fechas reasignadas por plan para los días base (D1-D8): empiezan el 4 Oct
const planADates = [
  "4 Oct (Dom)",
  "5 Oct (Lun)",
  "6 Oct (Mar)",
  "7 Oct (Mié)",
  "8 Oct (Jue)",
  "9 Oct (Vie)",
  "10 Oct (Sáb)",
  "11 Oct (Dom)",
];

const planBBaseDates = [
  "4 Oct (Dom)",
  "5 Oct (Lun)",
  "6 Oct (Mar)",
  "7 Oct (Mié)",
  "8 Oct (Jue)",
  "9 Oct (Vie)",
  "10 Oct (Sáb)",
  "11 Oct (Dom)",
];

export default function ItinerarySection() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const { plan } = usePlan();

  const planBDay1Extra = [
    {
      title: "🏛️ Mañana ampliada en Ginebra (Plan B)",
      content: [
        "09:30 · Casco Antiguo (Vieille Ville) en tranvía desde Cornavin (gratis con la Geneva Transport Card)",
        "Calles adoquinadas y Place du Bourg-de-Four — la plaza más antigua de la ciudad",
        "10:15 · Catedral de Saint-Pierre (entrada libre). Torres con la mejor vista 360° de Ginebra: 5 CHF",
        "11:30 · Parc des Bastions y Muro de los Reformadores (gratis) · tableros de ajedrez gigantes",
        "12:30 · Barrio de Les Grottes — los «Edificios Pitufo» justo detrás del Hôtel Astoria",
        "Arquitectura orgánica y colorida estilo Gaudí · gratis · pegado al hotel para recoger maletas",
      ],
    },
  ];

  const baseDays: any[] = days.map((d: any, i: number) => {
    const next: any = { ...d, date: plan === "A" ? planADates[i] : planBBaseDates[i] };
    if (i === 0 && plan === "B") {
      next.sections = [...planBDay1Extra, ...(d.sections ?? [])];
    }
    return next;
  });


  const displayDays: any[] =
    plan === "A"
      ? [...planAGenevaPrefix, ...baseDays].map((d: any, i: number) => ({ ...d, day: i + 1 }))
      : [...planBPrefix, ...baseDays].map((d: any, i: number) => ({ ...d, day: i + 1 }));





  const heading =
    plan === "A"
      ? `Plan A · 10 días · 2-11 Oct 2026`
      : `Plan B · 13 días · 29 Sep-11 Oct 2026`;

  return (
    <section id="itinerario" className="section-padding" aria-label="Itinerario completo">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          {heading}
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Itinerario Completo
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Los días 1 a {plan === "B" ? "5" : "3"} cambian según el plan elegido. Pulsa en cada día para
          ver todos los detalles, horarios y costes.
        </p>

        <div className="mt-12 space-y-8">
          {displayDays.map((d: any) => {
            const isExpanded = expandedDay === d.day;
            return (

              <div
                key={d.day}
                className="group overflow-hidden rounded-2xl border border-border bg-card/90 backdrop-blur-sm shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Image header */}
                <div className="relative h-56 sm:h-72 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg">
                        {d.day}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white/80">{d.date}</p>
                        <h3 className="text-lg font-bold text-white sm:text-xl">{d.title}</h3>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-white/70">📍 {d.route}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {d.tags.map((t: string) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        ★ {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{d.highlights}</p>

                  {d.savings && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground">
                      💰 {d.savings.label}: {d.savings.amount} — {d.savings.detail}
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedDay(isExpanded ? null : d.day)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Ocultar detalles ▲" : "Ver todos los detalles ▼"}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-4 fade-in">
                      {d.sections?.map((sec: any, i: number) => (
                        <div key={i} className="rounded-xl bg-surface/80 p-4">
                          <h4 className="text-sm font-bold text-foreground mb-2">{sec.title}</h4>
                          <ul className="space-y-1.5">
                            {sec.content.map((line: string, j: number) => (
                              <li key={j} className="flex gap-2 text-sm text-foreground">
                                <span className="text-accent shrink-0">•</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {d.costs && (
                        <div className="rounded-xl bg-surface/80 p-4">
                          <h4 className="text-sm font-bold text-foreground mb-2">💰 Desglose de Costes</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-border">
                                  <th className="text-left py-1.5 font-semibold text-foreground">Concepto</th>
                                  <th className="text-right py-1.5 font-semibold text-foreground">Por persona</th>
                                  <th className="text-right py-1.5 font-semibold text-foreground">Grupo (6)</th>
                                </tr>
                              </thead>
                              <tbody>
                                {d.costs.map((c: any, j: number) => (
                                  <tr key={j} className="border-b border-border/50">
                                    <td className="py-1.5 text-muted-foreground">{c.concept}</td>
                                    <td className="py-1.5 text-right font-mono text-foreground">{c.pp}</td>
                                    <td className="py-1.5 text-right font-mono text-foreground">{c.group}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {d.afternoonOptions && (
                        <div className="rounded-xl bg-surface/80 p-4">
                          <h4 className="text-sm font-bold text-foreground mb-3">
                            🌅 {d.afternoonOptions.title}
                          </h4>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {d.afternoonOptions.options.map((opt: any, j: number) => (
                              <div key={j} className="rounded-lg border border-border bg-card p-3">
                                <p className="font-semibold text-sm text-primary mb-1">{opt.label}</p>
                                <p className="text-xs text-muted-foreground">{opt.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {d.tip && (
                        <div className="rounded-xl border border-accent/30 bg-accent/5 p-4">
                          <p className="text-sm text-foreground leading-relaxed">{d.tip}</p>
                        </div>
                      )}

                      {d.closingImage && (
                        <div className="overflow-hidden rounded-xl border border-border">
                          <img
                            src={d.closingImage}
                            alt={d.closingAlt || ""}
                            className="w-full h-auto"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
