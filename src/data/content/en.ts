import type { SiteContent } from "@/types/content";
import { images, person, projectUrls } from "./shared";

/** English copy, taken verbatim from «Portfolio Kevin v2». Mono labels are uppercased in CSS. */
export const en = {
  locale: "en",
  meta: {
    ogLocale: "en_US",
    jobTitle: "Frontend Engineer",
    pages: {
      home: {
        title: "Kevin Rodríguez — Frontend Engineer",
        description:
          "Frontend Engineer based in Cali, Colombia. Over 4 years building web applications for the financial and healthcare sectors with React, Next.js and TypeScript.",
      },
      experience: {
        title: "Experience",
        description:
          "Four years in financial and healthcare software: Banco de Venezuela's home banking with microfrontends at Smart Financial, and loans and financial services at Promedico.",
      },
      projects: {
        title: "Projects",
        description:
          "My own products, from idea to paying customers: Citavek, a booking SaaS with paying businesses; DEMACHOS, e-commerce on my white-label base; Stockvek, a lightweight ERP in development; and KYZZ.",
      },
      contact: {
        title: "Contact",
        description: "Shall we build something together? Remote · LATAM / US. Available now.",
      },
    },
  },
  nav: {
    label: "Main",
    items: { home: "Home", experience: "Experience", projects: "Projects", contact: "Contact" },
    languageSwitch: { label: "ES", name: "Español" },
  },
  a11y: {
    skipToContent: "Skip to content",
    newTab: "(opens in a new tab)",
  },
  resume: { label: "Download CV", href: "/cv/kevin-rodriguez-cv-en.pdf" },
  home: {
    eyebrow: "Frontend Engineer · Cali, Colombia",
    greeting: { text: "Hi, I'm Kevin", accent: "." },
    portraitAlt: "Kevin Rodríguez",
    coreStack: [
      { label: "React", tone: "ink" },
      { label: "Next.js", tone: "neutral" },
      { label: "TypeScript", tone: "neutral" },
      { label: "Microfrontends", tone: "accent" },
    ],
    lead: "Over 4 years building web applications for the financial and healthcare sectors.",
    summary:
      "Frontend specialist in React, Next.js and TypeScript, including the design and implementation of microfrontend architectures with Module Federation. My full stack range — Node.js, REST APIs, SQL — lets me debug end to end and lead the web development of a product.",
    availability: [
      { label: "Remote · LATAM / US", tone: "paper" },
      { label: "Available now", tone: "sage" },
    ],
    shortcuts: [
      {
        title: "Smart Financial",
        subtitle: "Banco de Venezuela · Web technical lead",
        tone: "paper",
        page: "experience",
        anchor: "smart-financial",
      },
      { title: "Citavek", subtitle: "Booking SaaS · Paying customers", tone: "ink", page: "projects", anchor: "citavek" },
      {
        title: "DEMACHOS",
        subtitle: "E-commerce · Almost ready",
        tone: "sage",
        page: "projects",
        anchor: "demachos",
      },
      { title: "Stockvek", subtitle: "Lightweight ERP · In development", tone: "paper", page: "projects", anchor: "stockvek" },
    ],
    capabilities: [
      {
        title: "Microfrontends",
        description: "Next.js and Module Federation: modules that evolve and deploy separately.",
      },
      { title: "Vertical Slice", description: "The domain is cut by feature, not by technical layer." },
      {
        title: "Atomic Design",
        description: "A Material UI component system that standardises the interface across modules.",
      },
      {
        title: "End to end",
        description: "From frontend to APIs, services and database, with Sentry alongside.",
      },
    ],
    principles: {
      eyebrow: "How I build",
      title: "Code another team can maintain.",
      body: "Everything I build follows SOLID principles and design patterns, with clean code, solid development practices and continuous performance work. That discipline is what holds a product together as it grows.",
      items: [
        "SOLID",
        "Design patterns",
        "Clean Code",
        "Best practices",
        "Performance",
        "Scalable architecture",
        "Security",
      ],
    },
  },
  experience: {
    intro: {
      eyebrow: "Professional experience",
      title: "Four years in financial and healthcare software.",
    },
    smartFinancial: {
      anchor: "smart-financial",
      label: "01 · Smart Financial",
      title: { lead: "Home banking", accent: "white label" },
      summary:
        "Home banking for Banco de Venezuela, the country's largest bank, on a platform designed to support more than 10 million users. Over more than a year we built 4 products — Personal and Business, on web and app; I technically led and built the web side, coordinating with backend, QA and product under Agile/Scrum. The platform was built white-label so it could be sold to more banks.",
      facts: {
        periodLabel: "Period",
        period: "Oct 2023 – Jun 2026",
        roleLabel: "Role",
        role: "Development Analyst · Technical lead, web development",
        clientLabel: "Client",
        client: "Banco de Venezuela",
        productsLabel: "Products",
        products: "Personal and Business · web and app",
        scaleLabel: "Scale",
        scale: "Designed for 10+ million users",
        stackLabel: "Stack",
        stack: ["React", "Next.js", "TypeScript", "Material UI v5", "Zustand", "Node.js", "Java", "Oracle"],
      },
      architecture: {
        title: "Frontend architecture",
        tag: "Module Federation",
        host: {
          title: "Host",
          meta: "Shell · Routing · Auth",
          note: "Orchestrates remote module loading and owns session and navigation.",
        },
        remotes: [
          { title: "Remote module", note: "Independent deploy and evolution." },
          { title: "Remote module", note: "One vertical slice per domain." },
          { title: "Remote module", note: "Shared contracts with the host." },
        ],
        system: {
          title: "Component system",
          meta: "Atomic Design · MUI",
          note: "Reusable components standardising interface and experience across modules and microfrontends.",
        },
      },
      diagnostics: {
        title: "Diagnostic path",
        tag: "Sentry",
        steps: [
          { title: "Frontend", note: "React · TypeScript" },
          { title: "REST APIs", note: "Built and consumed with Node.js." },
          { title: "Java services", note: "The bank's business layer." },
          { title: "Oracle", note: "SQL queries to validate data." },
        ],
      },
      security: {
        title: "Banking-grade security on the web layer",
        tag: "JWT · JWS · JWE",
        items: [
          { title: "JWT tokens", note: "Signed with JWS and encrypted with JWE when exchanged with the APIs." },
          { title: "Encrypted payloads", note: "Sensitive data travels encrypted between the client and the services." },
          { title: "Secure cookies", note: "HttpOnly, Secure and SameSite; no tokens in browser storage." },
          { title: "Strict session", note: "Reloading the page or going idle ends the session." },
          { title: "MFA · OTP", note: "Second authentication factor for sign-in and transactions." },
          { title: "CSP · CSRF", note: "Content Security Policy and protection against forged requests." },
        ],
      },
      decisions: {
        title: "Decisions and responsibilities",
        items: [
          "Researched architectural options and designed the microfrontend architecture with Next.js and Module Federation, applying Vertical Slice to separate domains.",
          "Segmented the platform by domain: premium users come in through a domain with its own deployment, for a smoother experience.",
          "Built the platform white-label so it could be sold to other banks beyond Banco de Venezuela.",
          "Optimised frontend performance: large lists, unnecessary renders, data loading and resource use.",
          "Acted as technical reference for end-to-end incident diagnosis, with Sentry for monitoring and analysis.",
          "Deployed to test and staging environments with Docker and Kubernetes before each release.",
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
      titleLines: ["Loans and financial", "services"],
      summary:
        "An employee fund exclusively for doctors in Colombia, headquartered in Cali, offering its members savings, loans, cover and well-being services. I evolved the web applications behind its daily operation and built its mobile app, published on the App Store and Google Play.",
      facts: {
        periodLabel: "Period",
        period: "Jul 2022 – Oct 2023",
        roleLabel: "Role",
        role: "Development Analyst (Full Stack)",
        stackLabel: "Stack",
        stack: ["PHP", "JavaScript", "Laravel 8", "React JS", "React Native", "SOAP · SAP", "AWS"],
      },
      highlights: [
        "Integrated SAP through SOAP web services to manage member data, and DataCrédito for credit analysis and risk validation.",
        "Built the mobile app with React Native and deployed the REST APIs behind it on AWS; published it on the App Store and Google Play.",
        "Shipped new features and requirements on the existing Laravel 8 and React JS applications.",
        "Supported internal and external applications: bug fixes, improvements and production maintenance.",
        "Documented developments and processes in detail.",
      ],
      stack: {
        clients: [
          { title: "Web", meta: "React" },
          { title: "Mobile", meta: "React Native" },
        ],
        api: { title: "REST APIs", meta: "Web and mobile clients" },
        backend: { title: "Laravel · PHP", meta: "Backend" },
        integrations: [
          { title: "SAP", meta: "SOAP" },
          { title: "DataCrédito", meta: "Risk" },
        ],
      },
      deployment: {
        title: "Deployment",
        targets: [
          { title: "Internal servers", note: "File uploads and deployment of the internal applications." },
          { title: "cPanel", note: "Deployment of the React JS and Laravel applications." },
          { title: "AWS", note: "REST APIs serving the mobile applications." },
          { title: "App Store · Google Play", note: "Publishing the React Native app." },
        ],
      },
      services: {
        title: "The fund's services",
        tone: "paper",
        items: [
          "Savings and term deposits (CDT)",
          "Housing and car loans",
          "Personal loans",
          "Life and funeral cover",
          "Disability and maternity benefits",
          "Holiday home bookings",
          "Partner discounts",
        ],
      },
    },
    education: {
      label: "Education",
      degree: "Computer Engineering",
      institution: "Universidad Autónoma de Occidente, Cali",
      status: "Graduated · Mar 2025",
    },
    certifications: {
      label: "Certifications · Platzi",
      items: ["Next.js Advanced", "React Advanced", "NestJS", "Express.js"],
      languages: "Native Spanish · English A2, improving",
    },
    nextStep: "See projects",
  },
  projects: {
    intro: {
      eyebrow: "My own products",
      title: "My own products, from idea to paying customers.",
    },
    citavek: {
      anchor: "citavek",
      label: "01 · Citavek",
      status: { label: "In production · paying customers", tone: "live" },
      titleLines: ["Booking and", "scheduling SaaS"],
      summary:
        "A multi-tenant platform for barbershops, hair salons, spas and nail studios in Colombia: every business gets its own branded booking store, a schedule per professional, cash-up and commissions, and WhatsApp reminders. I defined the product and the architecture, built it end to end, and today I sell and run it.",
      metrics: [
        { value: "2", label: "businesses paying for a plan" },
        { value: "20", label: "prospects in the sales pipeline" },
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
        { label: "See a sample store", href: projectUrls.citavekShowcase, variant: "sage-soft" },
      ],
      built: {
        title: "What it offers today",
        items: [
          {
            title: "A booking store per business",
            note: "citavek.com/their-business with five templates, their colour, logo and services. Customers book without an app or an account, and reschedule or cancel from their own link.",
          },
          {
            title: "Schedule, cash-up and team",
            note: "Schedule per professional and by the hour, “How did they pay?” on completion, end-of-day cash-up, commissions, loyalty, no-shows and a monthly report.",
          },
          {
            title: "Automated WhatsApp",
            note: "Through Meta's official API: booking confirmation, a reminder with “I'll be there” or “I can't make it” that frees the slot, and alerts to the business. Plus push notifications on the phone.",
          },
          {
            title: "Subscriptions",
            note: "Basic and Premium plans priced by team size, a 30-day trial, recurring billing with Mercado Pago and automatic referrals.",
          },
          {
            title: "Control tower",
            note: "Platform telemetry: active businesses, feature adoption, account health, onboarding and costs.",
            emphasis: true,
          },
        ],
      },
      preview: {
        image: images.citavekLanding,
        alt: "Citavek landing page with the Spanish headline “Tu agenda, llena y en orden.” (your schedule, full and in order), a field to type the business name and pick its colour, and a preview of a salon's booking store.",
        url: "citavek.com",
      },
      gallery: [
        {
          image: images.citavekTemplates,
          alt: "The “Elige cómo se ve tu tienda” (choose how your store looks) section with the Clásica, Taller and Club templates applied to the San Fernando Barber Club sample store.",
          caption: "Store templates",
        },
        {
          image: images.citavekBooking,
          alt: "San Fernando Barber Club booking store on a phone with the Taller template: cover, Book and WhatsApp buttons and the service menu.",
          caption: "Mobile booking",
        },
        {
          image: images.citavekDay,
          alt: "The “Un día en tu negocio” (a day in your business) section: the eve-of-appointment WhatsApp reminder with “I'll be there” and “I can't make it” buttons, next to the pending appointment in the schedule.",
          caption: "WhatsApp reminder",
        },
        {
          image: images.citavekReport,
          alt: "The monthly report section: revenue, customers, retention, no-shows and occupancy, with the report notification on a phone.",
          caption: "Monthly report",
        },
      ],
    },
    demachos: {
      anchor: "demachos",
      label: "02 · DEMACHOS",
      status: { label: "Almost ready for production", tone: "soon" },
      titleLines: ["Full e-commerce", "on my white-label base"],
      summary:
        "Online store for a barber-supply distributor in Popayán, connected to its ERP. It is the first store on vek-ecommerce, the white-label base I extracted from KYZZ to sell stores with few changes per client: each client is a repo created from a template tag, and everything brand-specific lives in one place.",
      metrics: [
        { value: "900+", label: "SKUs read from the ERP" },
        { value: "1,100+", label: "automated tests" },
      ],
      stack: [
        { label: "White-label", tone: "ink" },
        { label: "Wompi · Webhooks", tone: "paper" },
        { label: "EFFI ERP API", tone: "paper" },
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
          title: "Storefront",
          tone: "paper",
          items: [
            "Catalogue with filters and search",
            "Bundles with per-item options",
            "Side cart with add-ons",
            "Wompi: card, Nequi, PSE, DaviPlata",
            "Cash on delivery and pickup",
            "Order tracking",
            "Customer accounts",
            "Branded emails",
            "Bottom navigation on mobile",
          ],
        },
        {
          title: "Operations panel",
          tone: "ink",
          items: [
            "“Today” and monthly figures",
            "Orders with the next step",
            "Collections and reconciliation",
            "Inventory and Excel upload",
            "Products, categories, colours",
            "Shipping and toggleable modules",
            "Users and permissions",
          ],
        },
        {
          title: "Integration and template",
          tone: "paper",
          items: [
            "Signed ERP webhook",
            "Daily fallback cron",
            "Postgres advisory lock",
            "Brand in one place",
            "New store from a tag",
            "Configurable tax",
            "Photos compressed on upload",
          ],
          footnote:
            "Stock and prices flow in from the EFFI ERP on their own: a signed notification triggers the sync and a daily cron is the safety net. Generic improvements go back to the template and each store pulls them with a merge.",
        },
      ],
      preview: {
        image: images.demachosStorefront,
        alt: "DEMACHOS storefront with the Spanish headline “Todo para tu barbería” (everything for your barbershop), search, the category menu and the delivery, cash-on-delivery and in-store pickup perks.",
        url: "demachos.vercel.app",
      },
      gallery: [
        {
          image: images.demachosCatalog,
          alt: "DEMACHOS catalogue with categories and product counts on the left, sorting, and cards tagged “Nuevo” (new) and “Agotado” (sold out).",
          caption: "Catalogue and filters",
        },
        {
          image: images.demachosMobile,
          alt: "DEMACHOS home on a phone with search, category chips and the bottom navigation bar.",
          caption: "Mobile experience",
        },
      ],
    },
    stockvek: {
      anchor: "stockvek",
      label: "03 · Stockvek",
      status: { label: "In development", tone: "soon" },
      titleLines: ["Lightweight ERP", "for stock and sales"],
      summary:
        "The second product of the Vek family: inventory, purchasing, sales, cash register, DIAN e-invoicing and profitability for Colombian SMEs that sell products. It is a generic multi-tenant SaaS: differences between businesses are solved with configuration, not code. The first pilot is a wholesale confectionery.",
      stack: [
        { label: "Modular monolith", tone: "ink" },
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
        title: "Progress",
        items: [
          {
            title: "Foundations",
            note: "Companies created from a business template, roles and per-branch permissions, invitations, tested tenant isolation with RLS, idempotency and an outbox with a worker.",
          },
          {
            title: "Catalogue and pricing",
            note: "Products and services with packs and unit conversion, barcode scanner and camera, taxes, tiered price lists, customers and suppliers.",
          },
          {
            title: "Multi-branch inventory",
            note: "Insert-only stock ledger, balances and average cost, adjustments, blind stock counts, internal use and two-step transfers between branches.",
          },
          {
            title: "What comes next",
            note: "Excel importer for up to 200,000 rows, point of sale, cash-up with count, profit reports and DIAN e-invoicing.",
            emphasis: true,
          },
        ],
      },
      preview: {
        image: images.stockvekStock,
        alt: "Stockvek prototype with sample data: the Stock screen with inventory value, low stock and out-of-stock counts, and the product table per branch.",
        url: "Stockvek · approved design",
      },
      gallery: [
        {
          image: images.stockvekKardex,
          alt: "Prototype of a product's stock ledger: inbound, outbound, balance, average cost and the detail of each movement.",
          caption: "Stock ledger",
        },
        {
          image: images.stockvekProfit,
          alt: "Prototype of the profit report: sales, cost of goods sold, profit and margin per product, with an alert for a product sold below cost.",
          caption: "Profit report",
        },
      ],
    },
    kyzz: {
      anchor: "kyzz",
      label: "04 · KYZZ",
      status: { label: "Launching soon", tone: "soon" },
      titleLines: ["Fashion e-commerce", "with its own back office"],
      summary:
        "A complete womenswear store: catalogue with variants, inventory, cart, wishlist, checkout and Wompi payments, plus a panel where the business manages products, orders, coupons and customers. Its code is the origin of vek-ecommerce, the base behind DEMACHOS.",
      stack: [
        { label: "Wompi · Webhooks", tone: "ink" },
        { label: "Cash on delivery", tone: "paper" },
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
            "Collections and categories",
            "Filters and grid density",
            "Colour, size and quantity",
            "Size guide and shipping",
            "Wishlist and cart",
            "Variants and inventory",
            "Checkout and payments",
            "Advanced search",
            "Recommendations",
            "Reviews",
            "Order via WhatsApp",
            "Progressive free shipping",
            "Order tracking",
          ],
        },
        {
          title: "Operations panel",
          tone: "ink",
          items: [
            "Revenue and average ticket",
            "Revenue by channel",
            "COD and cancellation rate",
            "Order statuses",
            "Products, categories, colours",
            "Coupons and newsletter",
            "Returns and users",
            "Best sellers",
          ],
        },
        {
          title: "Architecture and performance",
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
            "Scalable architecture with design patterns, security and mobile-first UX; images on Cloudinary and payments reconciled through Wompi webhooks.",
        },
      ],
      preview: {
        image: images.kyzzStorefront,
        alt: "KYZZ storefront hero with the Spanish headline “Kyzz: Tu estilo, tu esencia” (your style, your essence) over a new-collection photo.",
        url: "kyzz-shop.vercel.app",
      },
      gallery: [
        {
          image: images.kyzzCollection,
          alt: "KYZZ catalogue with category tabs, a grid-density switcher and product cards with colour variants.",
          caption: "Collection and filters",
        },
        {
          image: images.kyzzProduct,
          alt: "Product page for the Vestido Slip Satén: gallery, colour, size, quantity, purchase buttons and WhatsApp enquiry.",
          caption: "Product detail",
        },
        {
          image: images.kyzzCategories,
          alt: "KYZZ categories section: blouses, jackets, jumpsuits and jeans.",
          caption: "Categories",
        },
        {
          image: images.kyzzAdminDashboard,
          alt: "KYZZ admin dashboard with revenue, average ticket, revenue by channel, cash on delivery and best sellers.",
          caption: "Panel · Dashboard",
        },
        {
          image: images.kyzzAdminOrders,
          alt: "KYZZ admin order list with status, channel and payment filters; customer details are blurred.",
          caption: "Panel · Orders",
        },
        {
          image: images.kyzzSpecialCollection,
          alt: "KYZZ “Colección Especial” carousel with products and wishlist toggles, followed by the brand story section.",
          caption: "Special collection",
        },
        {
          image: images.kyzzCart,
          alt: "KYZZ cart with a free-shipping progress bar, order summary and “Completa tu outfit” recommendations.",
          caption: "Cart and free shipping",
        },
        {
          image: images.kyzzOrderTracking,
          alt: "KYZZ order detail with the shipping status timeline and the cash-on-delivery summary; the delivery address is blurred.",
          caption: "Order tracking",
        },
      ],
    },
    nextStep: "Let's talk",
  },
  contact: {
    eyebrow: "Contact",
    title: { text: "Shall we build something together", accent: "?" },
    tags: [
      { label: "Cali, Colombia", tone: "paper" },
      { label: "Remote · LATAM / US", tone: "paper" },
      { label: "Available now", tone: "sage" },
    ],
    channels: [
      { label: "Email", value: person.email, href: `mailto:${person.email}`, tone: "ink", external: false },
      { label: "Phone", value: person.phone.display, href: person.phone.href, tone: "paper", external: false },
      { label: "LinkedIn", value: person.name, href: person.linkedin, tone: "paper", external: true },
      { label: "GitHub", value: person.github.handle, href: person.github.url, tone: "paper", external: true },
      { label: "Citavek", value: "citavek.com", href: projectUrls.citavek, tone: "sage", external: true },
      { label: "KYZZ", value: "kyzz-shop.vercel.app", href: projectUrls.kyzz, tone: "sage", external: true },
    ],
  },
  notFound: {
    eyebrow: "Error 404",
    title: "This page doesn't exist.",
    body: "The link may be broken or the page may have moved.",
    cta: "Back to home",
  },
} as const satisfies SiteContent;
