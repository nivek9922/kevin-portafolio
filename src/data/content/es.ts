import type { SiteContent } from "@/types/content";
import { images, person, projectUrls } from "./shared";

/** Spanish copy, taken verbatim from «Portfolio Kevin v2». Mono labels are uppercased in CSS. */
export const es = {
  locale: "es",
  meta: {
    ogLocale: "es_CO",
    jobTitle: "Frontend Engineer",
    pages: {
      home: {
        title: "Kevin Rodríguez — Frontend Engineer",
        description:
          "Frontend Engineer en Cali, Colombia. Más de 4 años construyendo aplicaciones web para los sectores financiero y salud con React, Next.js y TypeScript.",
      },
      experience: {
        title: "Experiencia",
        description:
          "Cuatro años en software financiero y de salud: home banking del Banco de Venezuela con microfrontends en Smart Financial y préstamos y servicios financieros en Promedico.",
      },
      projects: {
        title: "Proyectos",
        description:
          "Dos productos completos, construidos de cero: Citavek, SaaS de gestión de citas en producción, y KYZZ, e-commerce de moda con operación propia.",
      },
      contact: {
        title: "Contacto",
        description: "¿Construimos algo juntos? Remoto · LATAM / EE. UU. Disponibilidad inmediata.",
      },
    },
  },
  nav: {
    label: "Principal",
    items: { home: "Inicio", experience: "Experiencia", projects: "Proyectos", contact: "Contacto" },
    languageSwitch: { label: "EN", name: "English" },
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    newTab: "(abre en una pestaña nueva)",
  },
  resume: { label: "Descargar CV", href: "/cv/kevin-rodriguez-cv-es.pdf" },
  home: {
    eyebrow: "Frontend Engineer · Cali, Colombia",
    greeting: { text: "Hola, soy Kevin", accent: "." },
    portraitAlt: "Kevin Rodríguez",
    coreStack: [
      { label: "React", tone: "ink" },
      { label: "Next.js", tone: "neutral" },
      { label: "TypeScript", tone: "neutral" },
      { label: "Microfrontends", tone: "accent" },
    ],
    lead: "Más de 4 años construyendo aplicaciones web para los sectores financiero y salud.",
    summary:
      "Especialista en frontend con React, Next.js y TypeScript, incluyendo el diseño e implementación de arquitecturas de microfrontends con Module Federation. Mi capacidad full stack —Node.js, APIs REST, SQL— me permite diagnosticar de punta a punta y liderar técnicamente el desarrollo web de un producto.",
    availability: [
      { label: "Remoto · LATAM / EE. UU.", tone: "paper" },
      { label: "Disponibilidad inmediata", tone: "sage" },
    ],
    shortcuts: [
      {
        title: "Smart Financial",
        subtitle: "Banco de Venezuela · Líder técnico web",
        tone: "paper",
        page: "experience",
        anchor: "smart-financial",
      },
      { title: "Citavek", subtitle: "SaaS de citas · En producción", tone: "ink", page: "projects", anchor: "citavek" },
      { title: "KYZZ", subtitle: "E-commerce completo · Sale pronto", tone: "sage", page: "projects", anchor: "kyzz" },
    ],
    capabilities: [
      {
        title: "Microfrontends",
        description: "Next.js y Module Federation: módulos que evolucionan y se despliegan por separado.",
      },
      { title: "Vertical Slice", description: "El dominio se corta por funcionalidad, no por capa técnica." },
      {
        title: "Atomic Design",
        description: "Sistema de componentes con Material UI que estandariza la interfaz entre módulos.",
      },
      {
        title: "Punta a punta",
        description: "Del frontend a las APIs, los servicios y la base de datos, con Sentry como apoyo.",
      },
    ],
    principles: {
      eyebrow: "Cómo construyo",
      title: "Código que otro equipo puede mantener.",
      body: "Todo lo que construyo sigue principios SOLID y patrones de diseño, con clean code, buenas prácticas de desarrollo y mejoras continuas de performance. Esa disciplina es la que sostiene un producto cuando crece.",
      items: [
        "SOLID",
        "Patrones de diseño",
        "Clean Code",
        "Buenas prácticas",
        "Performance",
        "Arquitectura escalable",
        "Seguridad",
      ],
    },
  },
  experience: {
    intro: {
      eyebrow: "Experiencia profesional",
      title: "Cuatro años en software financiero y de salud.",
    },
    smartFinancial: {
      anchor: "smart-financial",
      label: "01 · Smart Financial",
      title: { lead: "Home banking", accent: "de marca blanca" },
      summary:
        "Home banking del Banco de Venezuela, el banco más grande del país, con una plataforma diseñada para soportar más de 10 millones de usuarios. Durante más de un año construimos 4 productos —Personas y Empresas, en web y app—; lideré técnicamente y desarrollé la parte web, coordinando con backend, QA y producto bajo Agile/Scrum. La plataforma se construyó en marca blanca para venderse a más bancos.",
      facts: {
        periodLabel: "Periodo",
        period: "Oct 2023 – Jun 2026",
        roleLabel: "Rol",
        role: "Analista de Desarrollo · Líder técnico de desarrollo web",
        clientLabel: "Cliente",
        client: "Banco de Venezuela",
        productsLabel: "Productos",
        products: "Personas y Empresas · web y app",
        scaleLabel: "Escala",
        scale: "Diseñada para más de 10 millones de usuarios",
        stackLabel: "Stack",
        stack: ["React", "Next.js", "TypeScript", "Material UI v5", "Zustand", "Node.js", "Java", "Oracle"],
      },
      architecture: {
        title: "Arquitectura frontend",
        tag: "Module Federation",
        host: {
          title: "Host",
          meta: "Shell · Routing · Auth",
          note: "Orquesta la carga de los módulos remotos y concentra sesión y navegación.",
        },
        remotes: [
          { title: "Módulo remoto", note: "Despliegue y evolución independientes." },
          { title: "Módulo remoto", note: "Un vertical slice por dominio." },
          { title: "Módulo remoto", note: "Contratos compartidos con el host." },
        ],
        system: {
          title: "Sistema de componentes",
          meta: "Atomic Design · MUI",
          note: "Componentes reutilizables que estandarizan interfaz y experiencia entre módulos y microfrontends.",
        },
      },
      diagnostics: {
        title: "Ruta de diagnóstico",
        tag: "Sentry",
        steps: [
          { title: "Frontend", note: "React · TypeScript" },
          { title: "APIs REST", note: "Desarrollo y consumo con Node.js." },
          { title: "Servicios Java", note: "Capa de negocio del banco." },
          { title: "Oracle", note: "Consultas SQL para validar información." },
        ],
      },
      security: {
        title: "Seguridad bancaria en la capa web",
        tag: "JWT · JWS · JWE",
        items: [
          { title: "Tokens JWT", note: "Firmados con JWS y cifrados con JWE en el intercambio con las APIs." },
          { title: "Payloads cifrados", note: "La información sensible viaja cifrada entre el cliente y los servicios." },
          { title: "Cookies seguras", note: "HttpOnly, Secure y SameSite; ningún token en el almacenamiento del navegador." },
          { title: "Sesión estricta", note: "Recargar la página o quedar inactivo cierra la sesión." },
          { title: "MFA · OTP", note: "Segundo factor de autenticación en el acceso y las operaciones." },
          { title: "CSP · CSRF", note: "Política de seguridad de contenido y protección contra peticiones falsificadas." },
        ],
      },
      decisions: {
        title: "Decisiones y responsabilidades",
        items: [
          "Investigué alternativas arquitectónicas y diseñé la arquitectura de microfrontends con Next.js y Module Federation, aplicando Vertical Slice para separar dominios.",
          "Segmenté la plataforma por dominios: los usuarios premium acceden por un dominio con despliegue propio para garantizar mayor fluidez.",
          "Construimos la plataforma en marca blanca, para que pudiera venderse a otros bancos además del Banco de Venezuela.",
          "Optimicé el rendimiento del frontend: listas grandes, renders innecesarios, carga de datos y uso de recursos.",
          "Fui referente técnico en el diagnóstico de incidentes de punta a punta, con Sentry para monitoreo y análisis.",
          "Desplegué en ambientes de prueba y validación con Docker y Kubernetes antes de cada liberación.",
        ],
        practices: [
          { label: "Docker", dot: "accent" },
          { label: "Kubernetes", dot: "sage" },
          { label: "Agile / Scrum", dot: "accent" },
        ],
      },
    },
    promedico: {
      anchor: "promedico",
      label: "02 · Promedico",
      titleLines: ["Préstamos y servicios", "financieros"],
      summary:
        "Fondo de empleados exclusivo para médicos en Colombia, con sede en Cali, que ofrece a sus asociados ahorro, crédito, amparos y bienestar. Evolucioné las aplicaciones web de su operación diaria y desarrollé su app móvil, publicada en App Store y Google Play.",
      facts: {
        periodLabel: "Periodo",
        period: "Jul 2022 – Oct 2023",
        roleLabel: "Rol",
        role: "Analista de Desarrollo (Full Stack)",
        stackLabel: "Stack",
        stack: ["PHP", "JavaScript", "Laravel 8", "React JS", "React Native", "SOAP · SAP", "AWS"],
      },
      highlights: [
        "Integré SAP mediante servicios web SOAP para gestionar la información de los asociados, y DataCrédito para análisis crediticio y validación de riesgo.",
        "Desarrollé la app móvil con React Native e implementé en AWS las APIs REST que la alimentan; la publiqué en App Store y Google Play.",
        "Implementé nuevas funciones y requerimientos sobre los desarrollos existentes en Laravel 8 y React JS.",
        "Di soporte a aplicativos internos y externos: corrección de errores, mejoras y mantenimiento en producción.",
        "Documenté en detalle los desarrollos y los procesos.",
      ],
      stack: {
        clients: [
          { title: "Web", meta: "React" },
          { title: "Mobile", meta: "React Native" },
        ],
        api: { title: "APIs REST", meta: "Clientes web y móvil" },
        backend: { title: "Laravel · PHP", meta: "Backend" },
        integrations: [
          { title: "SAP", meta: "SOAP" },
          { title: "DataCrédito", meta: "Riesgo" },
        ],
      },
      deployment: {
        title: "Despliegue",
        targets: [
          { title: "Servidores internos", note: "Subida de archivos y despliegue de los aplicativos internos." },
          { title: "cPanel", note: "Despliegue de las aplicaciones React JS y Laravel." },
          { title: "AWS", note: "APIs REST que sirven a las aplicaciones móviles." },
          { title: "App Store · Google Play", note: "Publicación de la app en React Native." },
        ],
      },
      services: {
        title: "Servicios del fondo",
        tone: "paper",
        items: [
          "Ahorro y CDT",
          "Créditos de vivienda y vehículo",
          "Libre inversión",
          "Amparos de vida y exequiales",
          "Auxilios por incapacidad y maternidad",
          "Reservas en sedes vacacionales",
          "Convenios y descuentos",
        ],
      },
    },
    education: {
      label: "Formación",
      degree: "Ingeniería Informática",
      institution: "Universidad Autónoma de Occidente, Cali",
      status: "Graduado · Mar 2025",
    },
    certifications: {
      label: "Certificaciones · Platzi",
      items: ["Next.js Avanzado", "React Avanzado", "NestJS", "Express.js"],
      languages: "Español nativo · Inglés A2 en mejora continua",
    },
    nextStep: "Ver proyectos",
  },
  projects: {
    intro: {
      eyebrow: "Proyectos propios",
      title: "Dos productos completos, construidos de cero.",
    },
    citavek: {
      anchor: "citavek",
      label: "01 · Citavek",
      status: { label: "En producción", tone: "live" },
      titleLines: ["SaaS de gestión", "de citas"],
      summary:
        "Plataforma multi-tenant de reservas para barberías en Colombia. Hoy permite administrar negocios, servicios, barberos, clientes, disponibilidad y agenda desde un dashboard. Definí el producto, la arquitectura y lo construí de punta a punta.",
      stack: [
        { label: "Next.js 16 · App Router", tone: "ink" },
        { label: "Clean / Hexagonal", tone: "neutral" },
        { label: "Multi-tenant", tone: "neutral" },
        { label: "Node.js", tone: "neutral" },
        { label: "PostgreSQL", tone: "neutral" },
        { label: "Autenticación", tone: "neutral" },
        { label: "APIs REST", tone: "neutral" },
      ],
      links: [
        { label: "citavek.com", href: projectUrls.citavek, variant: "accent" },
        { label: "Repositorio", href: projectUrls.citavekRepository, variant: "subtle" },
        { label: "Ver una barbería real", href: projectUrls.citavekShowcase, variant: "sage-soft" },
      ],
      built: {
        title: "Qué construí",
        items: [
          {
            title: "Reserva pública en 4 pasos",
            note: "Servicio → barbero → fecha → confirmación, con precios y duraciones que se suman.",
          },
          {
            title: "Página pública por negocio",
            note: "Cada barbería tiene su propio enlace —citavek.com/su-barberia— totalmente personalizable desde su panel: colores, logo, foto de portada, servicios y precios.",
          },
          {
            title: "Panel de gestión",
            note: "Negocios, servicios, barberos, clientes, disponibilidad y agenda, con acceso autenticado por rol.",
          },
          {
            title: "Torre de control",
            note: "Telemetría de la plataforma: negocios activos, citas, adopción de features, salud de cuentas y onboarding.",
            emphasis: true,
          },
        ],
      },
      preview: {
        image: images.citavekLanding,
        alt: "Landing de Citavek: sección «¿Te suena familiar?» sobre la agenda por WhatsApp, las inasistencias y la falta de control del negocio, seguida de «Tres pasos y listo».",
        url: "citavek.com",
      },
      gallery: [
        {
          image: images.citavekBooking,
          alt: "Paso de confirmación de la reserva en la página pública de San Fernando Barber Club: resumen de servicios, barbero, fecha y hora.",
          caption: "Flujo de reserva",
        },
        {
          image: images.citavekSignUp,
          alt: "Formulario de Citavek para crear la cuenta y la barbería: datos del dueño, URL pública, ciudad, color de marca y código de activación.",
          caption: "Registro de barbería",
        },
        {
          image: images.citavekSignIn,
          alt: "Formulario de inicio de sesión del panel de gestión de Citavek.",
          caption: "Acceso al panel",
        },
      ],
    },
    kyzz: {
      anchor: "kyzz",
      label: "02 · KYZZ",
      status: { label: "Sale a producción pronto", tone: "soon" },
      titleLines: ["E-commerce de moda", "con operación propia"],
      summary:
        "Tienda de moda femenina completa: catálogo con variantes, inventario, carrito, wishlist, checkout y pagos con Wompi, más un panel donde el negocio gestiona productos, pedidos, cupones y clientes.",
      stack: [
        { label: "Wompi · Webhooks", tone: "ink" },
        { label: "Contraentrega", tone: "paper" },
        { label: "WhatsApp · Instagram", tone: "paper" },
        { label: "Next.js 16", tone: "paper-outline" },
        { label: "React 19", tone: "paper-outline" },
        { label: "TypeScript", tone: "paper-outline" },
        { label: "Node.js", tone: "paper-outline" },
        { label: "Prisma", tone: "paper-outline" },
        { label: "PostgreSQL", tone: "paper-outline" },
        { label: "Tailwind CSS", tone: "paper-outline" },
        { label: "Cloudinary", tone: "paper-outline" },
      ],
      links: [{ label: "kyzz-shop.vercel.app", href: projectUrls.kyzz, variant: "sage" }],
      featureGroups: [
        {
          title: "Storefront",
          tone: "paper",
          items: [
            "Colecciones y categorías",
            "Filtros y densidad de rejilla",
            "Color, talla y cantidad",
            "Guía de tallas y envíos",
            "Favoritos y carrito",
            "Variantes e inventario",
            "Checkout y pagos",
            "Búsqueda avanzada",
            "Recomendaciones",
            "Reseñas",
            "Pedido por WhatsApp",
            "Envío gratis progresivo",
            "Seguimiento del pedido",
          ],
        },
        {
          title: "Panel de operación",
          tone: "ink",
          items: [
            "Ingresos y ticket promedio",
            "Ingresos por canal",
            "Contraentrega y tasa de cancelación",
            "Estados de pedido",
            "Productos, categorías y colores",
            "Cupones y newsletter",
            "Devoluciones y usuarios",
            "Más vendidos",
          ],
        },
        {
          title: "Arquitectura y rendimiento",
          tone: "paper",
          items: [
            "Server Components",
            "Server Actions",
            "Cache Components",
            "Turbopack",
            "SOLID",
            "Clean Code",
            "Mobile-first",
          ],
          footnote:
            "Arquitectura escalable con patrones de diseño, seguridad y UX mobile-first; imágenes en Cloudinary y pagos conciliados por webhooks de Wompi.",
        },
      ],
      preview: {
        image: images.kyzzStorefront,
        alt: "Portada de la tienda KYZZ con el titular «Kyzz: Tu estilo, tu esencia» sobre una foto de la nueva colección.",
        url: "kyzz-shop.vercel.app",
      },
      gallery: [
        {
          image: images.kyzzCollection,
          alt: "Catálogo de KYZZ con pestañas por categoría, selector de densidad de rejilla y tarjetas de producto con variantes de color.",
          caption: "Colección y filtros",
        },
        {
          image: images.kyzzProduct,
          alt: "Ficha del Vestido Slip Satén: galería, color, talla, cantidad, botones de compra y consulta por WhatsApp.",
          caption: "Detalle de producto",
        },
        {
          image: images.kyzzCategories,
          alt: "Sección de categorías de KYZZ: blusas, chaquetas, enterizos y jeans.",
          caption: "Categorías",
        },
        {
          image: images.kyzzAdminDashboard,
          alt: "Dashboard del panel de KYZZ con ingresos, ticket promedio, ingresos por canal, contraentrega y productos más vendidos.",
          caption: "Panel · Dashboard",
        },
        {
          image: images.kyzzAdminOrders,
          alt: "Listado de pedidos del panel de KYZZ con filtros por estado, canal y pago; los datos de los clientes están difuminados.",
          caption: "Panel · Pedidos",
        },
        {
          image: images.kyzzSpecialCollection,
          alt: "Carrusel «Colección Especial» de KYZZ con productos y favoritos, seguido de la sección de historia de la marca.",
          caption: "Colección especial",
        },
        {
          image: images.kyzzCart,
          alt: "Carrito de KYZZ con barra de progreso hacia el envío gratis, resumen del pedido y recomendaciones «Completa tu outfit».",
          caption: "Carrito y envío gratis",
        },
        {
          image: images.kyzzOrderTracking,
          alt: "Detalle de una orden en KYZZ con la línea de estado del envío y el resumen de pago contraentrega; la dirección de entrega está difuminada.",
          caption: "Seguimiento del pedido",
        },
      ],
    },
    nextStep: "Hablemos",
  },
  contact: {
    eyebrow: "Contacto",
    title: { text: "¿Construimos algo juntos", accent: "?" },
    tags: [
      { label: "Cali, Colombia", tone: "paper" },
      { label: "Remoto · LATAM / EE. UU.", tone: "paper" },
      { label: "Disponibilidad inmediata", tone: "sage" },
    ],
    channels: [
      { label: "Email", value: person.email, href: `mailto:${person.email}`, tone: "ink", external: false },
      { label: "Teléfono", value: person.phone.display, href: person.phone.href, tone: "paper", external: false },
      { label: "LinkedIn", value: person.name, href: person.linkedin, tone: "paper", external: true },
      { label: "GitHub", value: person.github.handle, href: person.github.url, tone: "paper", external: true },
      { label: "Citavek", value: "citavek.com", href: projectUrls.citavek, tone: "sage", external: true },
      { label: "KYZZ", value: "kyzz-shop.vercel.app", href: projectUrls.kyzz, tone: "sage", external: true },
    ],
  },
  notFound: {
    eyebrow: "Error 404",
    title: "Esta página no existe.",
    body: "Puede que el enlace esté roto o que la página haya cambiado de lugar.",
    cta: "Volver al inicio",
  },
} as const satisfies SiteContent;
