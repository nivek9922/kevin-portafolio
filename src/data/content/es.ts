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
          "Productos propios, de la idea a clientes que pagan: Citavek, SaaS de reservas con negocios pagando; DEMACHOS, e-commerce sobre mi base white-label; Stockvek, ERP ligero en desarrollo; y KYZZ.",
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
      { title: "Citavek", subtitle: "SaaS de reservas · Con clientes", tone: "ink", page: "projects", anchor: "citavek" },
      {
        title: "DEMACHOS",
        subtitle: "E-commerce · Casi listo",
        tone: "sage",
        page: "projects",
        anchor: "demachos",
      },
      { title: "Stockvek", subtitle: "ERP ligero · En desarrollo", tone: "paper", page: "projects", anchor: "stockvek" },
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
      title: "Productos propios, de la idea a clientes que pagan.",
    },
    citavek: {
      anchor: "citavek",
      label: "01 · Citavek",
      status: { label: "En producción · con clientes", tone: "live" },
      titleLines: ["SaaS de reservas", "y agenda"],
      summary:
        "Plataforma multi-tenant para barberías, salones, spas y uñas en Colombia: cada negocio tiene su tienda de reservas con su marca, una agenda por profesional, caja y comisiones, y recordatorios por WhatsApp. Definí el producto y la arquitectura, lo construí de punta a punta y hoy lo vendo y lo opero.",
      metrics: [
        { value: "2", label: "negocios pagando su plan" },
        { value: "20", label: "posibles clientes en proceso" },
      ],
      stack: [
        { label: "Next.js 16 · React 19", tone: "ink" },
        { label: "Hexagonal", tone: "neutral" },
        { label: "Multi-tenant", tone: "neutral" },
        { label: "PostgreSQL · Prisma 7", tone: "neutral" },
        { label: "Better Auth", tone: "neutral" },
        { label: "WhatsApp Cloud API", tone: "neutral" },
        { label: "Mercado Pago", tone: "neutral" },
        { label: "PWA · Web Push", tone: "neutral" },
        { label: "Vitest · Playwright", tone: "neutral" },
      ],
      links: [
        { label: "citavek.com", href: projectUrls.citavek, variant: "accent" },
        { label: "Ver una tienda de ejemplo", href: projectUrls.citavekShowcase, variant: "sage-soft" },
      ],
      built: {
        title: "Qué ofrece hoy",
        items: [
          {
            title: "Tienda de reservas por negocio",
            note: "citavek.com/su-negocio con cinco plantillas, su color, logo y servicios. El cliente reserva sin app ni cuenta, y cambia o cancela su cita desde su enlace.",
          },
          {
            title: "Agenda, caja y equipo",
            note: "Agenda por profesional y por horas, «¿Cómo pagó?» al completar, cierre del día, comisiones, fidelidad, no-shows y reporte del mes.",
          },
          {
            title: "WhatsApp automático",
            note: "Con la API oficial de Meta: cita agendada, recordatorio con «Sí, ahí estaré» o «No puedo ir» que libera el cupo, y avisos al negocio. Además, avisos push al celular.",
          },
          {
            title: "Suscripciones",
            note: "Planes Básico y Premium con precio por tamaño del equipo, 30 días de prueba, cobro recurrente con Mercado Pago y referidos automáticos.",
          },
          {
            title: "Torre de control",
            note: "Telemetría de la plataforma: negocios activos, adopción de funciones, salud de las cuentas, onboarding y costos.",
            emphasis: true,
          },
        ],
      },
      preview: {
        image: images.citavekLanding,
        alt: "Landing de Citavek con el titular «Tu agenda, llena y en orden.», un campo para escribir el nombre del negocio y elegir su color, y la vista previa de la tienda de reservas de un salón.",
        url: "citavek.com",
      },
      gallery: [
        {
          image: images.citavekTemplates,
          alt: "Sección «Elige cómo se ve tu tienda» con las plantillas Clásica, Taller y Club aplicadas a la tienda de ejemplo San Fernando Barber Club.",
          caption: "Plantillas de tienda",
        },
        {
          image: images.citavekBooking,
          alt: "Tienda de reservas de San Fernando Barber Club en el celular, con la plantilla Taller: portada, botones Reservar y WhatsApp y la carta de servicios.",
          caption: "Reserva en el celular",
        },
        {
          image: images.citavekDay,
          alt: "Sección «Un día en tu negocio»: el recordatorio por WhatsApp de la víspera con los botones «Sí, ahí estaré» y «No puedo ir», junto a la cita pendiente en la agenda.",
          caption: "Recordatorio por WhatsApp",
        },
        {
          image: images.citavekReport,
          alt: "Sección «El día 1 sabes cómo te fue»: caja, clientes, retorno, no-shows y ocupación del mes, con la notificación del reporte mensual en el celular.",
          caption: "Reporte del mes",
        },
      ],
    },
    demachos: {
      anchor: "demachos",
      label: "02 · DEMACHOS",
      status: { label: "Casi lista para producción", tone: "soon" },
      titleLines: ["E-commerce completo", "sobre mi base white-label"],
      summary:
        "Tienda en línea de una distribuidora de productos de barbería en Popayán, conectada a su ERP. Es la primera tienda de vek-ecommerce, la base white-label que saqué de KYZZ para vender tiendas con pocos cambios por cliente: cada cliente es un repo creado desde un tag de la plantilla y lo de su marca vive en un solo lugar.",
      metrics: [
        { value: "900+", label: "referencias leídas del ERP" },
        { value: "1.100+", label: "pruebas automatizadas" },
      ],
      stack: [
        { label: "White-label", tone: "ink" },
        { label: "Wompi · Webhooks", tone: "paper" },
        { label: "API del ERP EFFI", tone: "paper" },
        { label: "Next.js 16", tone: "paper-outline" },
        { label: "React 19", tone: "paper-outline" },
        { label: "TypeScript", tone: "paper-outline" },
        { label: "Prisma", tone: "paper-outline" },
        { label: "PostgreSQL", tone: "paper-outline" },
        { label: "Better Auth", tone: "paper-outline" },
        { label: "Cloudinary", tone: "paper-outline" },
        { label: "Vitest · Playwright", tone: "paper-outline" },
      ],
      links: [{ label: "demachos.vercel.app", href: projectUrls.demachos, variant: "sage" }],
      featureGroups: [
        {
          title: "Tienda",
          tone: "paper",
          items: [
            "Catálogo con filtros y búsqueda",
            "Combos con opción por producto",
            "Carrito lateral con complementos",
            "Wompi: tarjeta, Nequi, PSE, DaviPlata",
            "Contraentrega y retiro en tienda",
            "Seguimiento del pedido",
            "Cuenta de cliente",
            "Correos con la marca",
            "Navegación inferior en el celular",
          ],
        },
        {
          title: "Panel de operación",
          tone: "ink",
          items: [
            "«Para hoy» y cifras del mes",
            "Pedidos con el siguiente paso",
            "Recaudos y conciliación",
            "Inventario y carga por Excel",
            "Productos, categorías y colores",
            "Envíos y módulos activables",
            "Usuarios y permisos",
          ],
        },
        {
          title: "Integración y plantilla",
          tone: "paper",
          items: [
            "Webhook firmado del ERP",
            "Cron diario de respaldo",
            "Cerrojo en Postgres",
            "Marca en un solo lugar",
            "Tienda nueva desde un tag",
            "Impuesto configurable",
            "Fotos comprimidas al subir",
          ],
          footnote:
            "El stock y el precio llegan solos del ERP EFFI: un aviso firmado dispara la lectura y un cron diario es la red. Las mejoras genéricas vuelven a la plantilla y cada tienda las trae con un merge.",
        },
      ],
      preview: {
        image: images.demachosStorefront,
        alt: "Portada de la tienda DEMACHOS con el titular «Todo para tu barbería», búsqueda, menú de categorías y los beneficios de domicilio, contraentrega y retiro en el local.",
        url: "demachos.vercel.app",
      },
      gallery: [
        {
          image: images.demachosCatalog,
          alt: "Catálogo de DEMACHOS con categorías y conteo de productos a la izquierda, orden y tarjetas con etiquetas «Nuevo» y «Agotado».",
          caption: "Catálogo y filtros",
        },
        {
          image: images.demachosMobile,
          alt: "Portada de DEMACHOS en el celular con búsqueda, chips de categorías y la barra inferior de navegación.",
          caption: "Experiencia móvil",
        },
      ],
    },
    stockvek: {
      anchor: "stockvek",
      label: "03 · Stockvek",
      status: { label: "En desarrollo", tone: "soon" },
      titleLines: ["ERP ligero", "de inventario y ventas"],
      summary:
        "El segundo producto de la familia Vek: inventario, compras, ventas, caja, facturación electrónica DIAN y rentabilidad para pymes colombianas que venden productos. Es un SaaS multi-tenant genérico: las diferencias entre negocios se resuelven con configuración, no con código. El primer piloto es una dulcería mayorista.",
      stack: [
        { label: "Monolito modular", tone: "ink" },
        { label: "Hexagonal", tone: "neutral" },
        { label: "PostgreSQL · RLS", tone: "neutral" },
        { label: "Prisma 7 + SQL", tone: "neutral" },
        { label: "Outbox · pg-boss", tone: "neutral" },
        { label: "Next.js 16", tone: "neutral" },
        { label: "Zod 4", tone: "neutral" },
        { label: "TanStack Table", tone: "neutral" },
      ],
      links: [],
      built: {
        title: "Avance",
        items: [
          {
            title: "Fundaciones",
            note: "Empresas con plantilla de negocio, roles y permisos por sede, invitaciones, aislamiento por empresa con RLS probado, idempotencia y outbox con worker.",
          },
          {
            title: "Catálogo y precios",
            note: "Productos y servicios con empaques y conversión de unidades, lector de códigos y cámara, impuestos, listas de precios con escalas, clientes y proveedores.",
          },
          {
            title: "Inventario multi-sede",
            note: "Kardex de solo inserciones, saldos y costo promedio, ajustes, toma física a ciegas, consumo interno y traslados en dos pasos entre sedes.",
          },
          {
            title: "Lo que sigue",
            note: "Importador de Excel de hasta 200.000 filas, punto de venta, cierre de caja con arqueo, reportes de utilidad y facturación electrónica DIAN.",
            emphasis: true,
          },
        ],
      },
      preview: {
        image: images.stockvekStock,
        alt: "Prototipo de Stockvek con datos de ejemplo: pantalla de Existencias con el valor del inventario, stock bajo y sin existencias, y la tabla de productos por sede.",
        url: "Stockvek · diseño aprobado",
      },
      gallery: [
        {
          image: images.stockvekKardex,
          alt: "Prototipo del kardex de un producto: entradas, salidas, saldo, costo promedio y el detalle de cada movimiento.",
          caption: "Kardex",
        },
        {
          image: images.stockvekProfit,
          alt: "Prototipo del reporte de utilidad: ventas, costo de lo vendido, utilidad y margen por producto, con el aviso de un producto vendido por debajo del costo.",
          caption: "Reporte de utilidad",
        },
      ],
    },
    kyzz: {
      anchor: "kyzz",
      label: "04 · KYZZ",
      status: { label: "Sale a producción pronto", tone: "soon" },
      titleLines: ["E-commerce de moda", "con operación propia"],
      summary:
        "Tienda de moda femenina completa: catálogo con variantes, inventario, carrito, wishlist, checkout y pagos con Wompi, más un panel donde el negocio gestiona productos, pedidos, cupones y clientes. Su código es el origen de vek-ecommerce, la base de DEMACHOS.",
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
