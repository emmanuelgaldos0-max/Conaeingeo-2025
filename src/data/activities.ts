export type ActivityCategory =
  | "magistrales"
  | "concursos"
  | "workshops"
  | "tecnica"
  | "campo";

export type ActivitySession = {
  time: string;
  title: string;
  location: string;
  description: string;
  categories?: ActivityCategory[];
  highlight?: boolean;
};

export type ActivityDay = {
  dayNumber: number;
  date: string;
  monthShort: string;
  title: string;
  summary: string;
  bullets: string[];
  sessions: ActivitySession[];
};

export const activityDays: ActivityDay[] = [
  {
    dayNumber: 1,
    date: "02 de Agosto",
    monthShort: "AGO",
    title: "Apertura Institucional",
    summary:
      "Inicio oficial del congreso con actividades protocolares y espacios de bienvenida para los participantes.",
    bullets: [
      "Ceremonia inaugural",
      "Mesa redonda",
      "Entrega de kit y actividad de bienvenida",
    ],
    sessions: [
      {
        time: "08:00 - 09:30",
        title: "Ceremonia Inaugural",
        location: "Auditorio Principal",
        description:
          "Inicio oficial del XV CONAEINGEO – Arequipa 2026 con la participación de autoridades, comité organizador e invitados especiales.",
        highlight: true,
      },
      {
        time: "10:00 - 11:30",
        title: "Mesa Redonda",
        location: "Auditorio Principal",
        description:
          "Espacio de diálogo institucional y académico para compartir perspectivas sobre el congreso, la formación geológica y los retos del sector.",
        categories: ["magistrales"],
      },
      {
        time: "12:00 - 13:00",
        title: "Entrega de Kit",
        location: "Hall Principal",
        description:
          "Entrega de materiales, credenciales e indicaciones generales para los participantes del evento.",
      },
      {
        time: "16:00 - 18:00",
        title: "Actividad de Bienvenida",
        location: "Área de Integración",
        description:
          "Encuentro de bienvenida para fortalecer el compañerismo, la integración y el inicio de la experiencia del congreso.",
      },
    ],
  },
  {
    dayNumber: 2,
    date: "03 de Agosto",
    monthShort: "AGO",
    title: "Jornada Académica Magistral",
    summary:
      "Día enfocado en el intercambio académico y la participación estudiantil mediante espacios formativos y de integración.",
    bullets: ["Ponencias", "Foros", "Concurso de debate y actividad de integración"],
    sessions: [
      {
        time: "09:00 - 11:00",
        title: "Ponencias Magistrales",
        location: "Auditorio Principal",
        description:
          "Exposiciones de especialistas invitados sobre temas de actualidad en geociencias, ingeniería geológica e innovación aplicada.",
        categories: ["magistrales"],
        highlight: true,
      },
      {
        time: "11:30 - 13:00",
        title: "Foros Académicos",
        location: "Sala de Conferencias",
        description:
          "Espacios de análisis y debate sobre problemáticas, tendencias y oportunidades dentro de la ingeniería geológica.",
        categories: ["magistrales"],
      },
      {
        time: "15:00 - 16:30",
        title: "Concurso de Debate",
        location: "Aula Magna",
        description:
          "Dinámica académica orientada al análisis crítico, la argumentación y la participación estudiantil.",
        categories: ["concursos"],
      },
      {
        time: "17:00 - 18:30",
        title: "Actividad de Integración",
        location: "Área Social",
        description:
          "Espacio destinado a fomentar la convivencia, la interacción y el intercambio entre participantes.",
      },
    ],
  },
  {
    dayNumber: 3,
    date: "04 de Agosto",
    monthShort: "AGO",
    title: "Espacios de Análisis y Participación",
    summary:
      "Jornada orientada al análisis, la discusión y la participación activa en dinámicas académicas del congreso.",
    bullets: ["Ponencias", "Mesa redonda", "Concursos y actividad de integración"],
    sessions: [
      {
        time: "09:00 - 11:00",
        title: "Ponencias Temáticas",
        location: "Auditorio Principal",
        description:
          "Jornada de exposiciones enfocadas en temas específicos del congreso y áreas de interés para los asistentes.",
        categories: ["magistrales"],
        highlight: true,
      },
      {
        time: "11:30 - 13:00",
        title: "Mesa Redonda",
        location: "Sala de Conferencias",
        description:
          "Espacio de discusión abierta para profundizar en temas académicos y profesionales del evento.",
        categories: ["magistrales"],
      },
      {
        time: "15:00 - 17:00",
        title: "Concursos Académicos",
        location: "Ambientes Académicos",
        description:
          "Actividades competitivas que promueven creatividad, participación y aplicación de conocimientos.",
        categories: ["concursos"],
      },
      {
        time: "17:30 - 18:30",
        title: "Actividad de Integración",
        location: "Área Social",
        description:
          "Continuación de los espacios de convivencia entre participantes, organizadores e invitados.",
      },
    ],
  },
  {
    dayNumber: 4,
    date: "05 de Agosto",
    monthShort: "AGO",
    title: "Investigación y Formación Aplicada",
    summary:
      "Espacio dedicado a la presentación de trabajos, aprendizaje práctico y fortalecimiento de competencias académicas.",
    bullets: ["Exposición de investigaciones", "Workshop", "Concursos académicos"],
    sessions: [
      {
        time: "09:00 - 11:00",
        title: "Exposición de Investigaciones",
        location: "Hall de Exposiciones",
        description:
          "Presentación de trabajos, estudios y proyectos desarrollados por estudiantes e investigadores.",
        categories: ["magistrales"],
        highlight: true,
      },
      {
        time: "11:30 - 13:30",
        title: "Workshop Especializado",
        location: "Sala de Talleres",
        description:
          "Taller práctico orientado a fortalecer capacidades técnicas y aplicar conceptos de manera concreta.",
        categories: ["workshops", "magistrales"],
        highlight: true,
      },
      {
        time: "15:00 - 17:00",
        title: "Concursos Académicos",
        location: "Ambientes Académicos",
        description:
          "Espacios de evaluación, creatividad y participación estudiantil vinculados al contenido del congreso.",
        categories: ["concursos"],
      },
    ],
  },
  {
    dayNumber: 5,
    date: "06 de Agosto",
    monthShort: "AGO",
    title: "Actividades Técnicas",
    summary:
      "Experiencias fuera del aula orientadas a conectar la formación académica con escenarios reales de estudio y observación.",
    bullets: ["Actividades técnicas", "Salidas técnicas", "Salidas de campo"],
    sessions: [
      {
        time: "08:00 - 13:00",
        title: "Visitas Técnicas",
        location: "Punto de salida institucional",
        description:
          "Recorridos guiados para conocer espacios, procesos y escenarios vinculados al ejercicio profesional.",
        categories: ["tecnica", "campo"],
        highlight: true,
      },
      {
        time: "14:30 - 18:00",
        title: "Salidas de Campo",
        location: "Zona de práctica",
        description:
          "Actividades orientadas a la observación, interpretación y análisis directo en terreno.",
        categories: ["campo", "tecnica"],
      },
    ],
  },
  {
    dayNumber: 6,
    date: "07 de Agosto",
    monthShort: "AGO",
    title: "Actividades Técnicas Aplicadas",
    summary:
      "Continuación de las actividades prácticas con énfasis en observación, análisis y aprendizaje aplicado en campo.",
    bullets: [
      "Actividades técnicas aplicadas",
      "Salidas técnicas",
      "Salidas de campo",
    ],
    sessions: [
      {
        time: "08:00 - 13:00",
        title: "Visitas Técnicas Aplicadas",
        location: "Punto de salida institucional",
        description:
          "Continuación de las experiencias técnicas para reforzar la formación aplicada de los participantes.",
        categories: ["tecnica", "campo"],
        highlight: true,
      },
      {
        time: "14:30 - 18:00",
        title: "Salidas de Campo Aplicadas",
        location: "Zona de práctica",
        description:
          "Actividades de observación y análisis con énfasis en la aplicación de conocimientos en campo.",
        categories: ["campo", "tecnica"],
      },
    ],
  },
  {
    dayNumber: 7,
    date: "08 de Agosto",
    monthShort: "AGO",
    title: "Clausura Institucional",
    summary:
      "Cierre del congreso con reconocimiento a los participantes y actividades finales de despedida institucional.",
    bullets: ["Ceremonia de clausura", "Premiación", "Cierre oficial"],
    sessions: [
      {
        time: "10:00 - 11:30",
        title: "Ceremonia de Clausura",
        location: "Auditorio Principal",
        description:
          "Cierre oficial del congreso con balance general de actividades y mensaje institucional de despedida.",
      },
      {
        time: "11:30 - 12:30",
        title: "Premiación",
        location: "Auditorio Principal",
        description:
          "Reconocimiento a los ganadores de concursos y a las participaciones destacadas desarrolladas durante el evento.",
        categories: ["concursos"],
        highlight: true,
      },
      {
        time: "12:30 - 13:00",
        title: "Cierre Oficial",
        location: "Auditorio Principal",
        description:
          "Despedida institucional y cierre del XV CONAEINGEO – Arequipa 2026.",
      },
    ],
  },
];
