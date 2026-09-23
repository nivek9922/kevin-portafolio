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
          "Four years in financial and healthcare software: white-label home banking with microfrontends at Smart Financial, and loans and financial services at Promedico.",
      },
      projects: {
        title: "Projects",
        description:
          "Two complete products, built from scratch: Citavek, an appointment management SaaS in production, and KYZZ, a fashion e-commerce with its own back office.",
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
        subtitle: "Home banking · Technical lead",
        tone: "paper",
        page: "experience",
        anchor: "smart-financial",
      },
      { title: "Citavek", subtitle: "Booking SaaS · In production", tone: "ink", page: "projects", anchor: "citavek" },
      { title: "KYZZ", subtitle: "Full e-commerce · Launching soon", tone: "sage", page: "projects", anchor: "kyzz" },
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
        "Enterprise home banking platform for financial institutions. I led the web development and frontend architecture decisions, coordinating with backend, QA and product under Agile/Scrum.",
      facts: {
        periodLabel: "Period",
        period: "Oct 2023 – Jun 2026",
        roleLabel: "Role",
        role: "Development Analyst · Technical lead, web development",
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
      decisions: {
        title: "Decisions and responsibilities",
        items: [
          "Researched architectural options and designed the microfrontend architecture with Next.js and Module Federation, applying Vertical Slice to separate domains.",
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
      title: "Two complete products, built from scratch.",
    },
    citavek: {
      anchor: "citavek",
      label: "01 · Citavek",
      status: { label: "In production", tone: "live" },
      titleLines: ["Appointment", "management SaaS"],
      summary:
        "A multi-tenant booking platform for barbershops in Colombia. Today it manages businesses, services, barbers, customers, availability and scheduling from one dashboard. I defined the product, the architecture and built it end to end.",
      stack: [
        { label: "Next.js 16 · App Router", tone: "ink" },
        { label: "Clean / Hexagonal", tone: "neutral" },
        { label: "Multi-tenant", tone: "neutral" },
        { label: "Node.js", tone: "neutral" },
        { label: "PostgreSQL", tone: "neutral" },
        { label: "Auth", tone: "neutral" },
        { label: "REST APIs", tone: "neutral" },
      ],
      links: [
        { label: "citavek.com", href: projectUrls.citavek, variant: "accent" },
        { label: "Repository", href: projectUrls.citavekRepository, variant: "subtle" },
        { label: "See a live barbershop", href: projectUrls.citavekShowcase, variant: "sage-soft" },
      ],
      built: {
        title: "What I built",
        items: [
          {
            title: "Public booking in 4 steps",
            note: "Service → barber → date → confirmation, with prices and durations adding up.",
          },
          {
            title: "A public page per business",
            note: "Every barbershop gets its own link — citavek.com/their-shop — fully customisable from their panel: colours, logo, cover photo, services and prices.",
          },
          {
            title: "Management panel",
            note: "Businesses, services, barbers, customers, availability and scheduling, with role-based authenticated access.",
          },
          {
            title: "Control tower",
            note: "Platform telemetry: active businesses, appointments, feature adoption, account health and onboarding.",
            emphasis: true,
          },
        ],
      },
      preview: {
        image: images.citavekLanding,
        alt: "Citavek landing page: the Spanish “¿Te suena familiar?” (Sound familiar?) section on WhatsApp scheduling, no-shows and lack of business control, followed by “Three steps and done”.",
        url: "citavek.com",
      },
      gallery: [
        {
          image: images.citavekBooking,
          alt: "Booking confirmation step on the San Fernando Barber Club public page: summary of services, barber, date and time.",
          caption: "Booking flow",
        },
        {
          image: images.citavekSignUp,
          alt: "Citavek form to create the account and the barbershop: owner details, public URL, city, brand colour and activation code.",
          caption: "Barbershop sign-up",
        },
        {
          image: images.citavekSignIn,
          alt: "Sign-in form of the Citavek management panel.",
          caption: "Panel sign in",
        },
      ],
    },
    kyzz: {
      anchor: "kyzz",
      label: "02 · KYZZ",
      status: { label: "Launching soon", tone: "soon" },
      titleLines: ["Fashion e-commerce", "with its own back office"],
      summary:
        "A complete womenswear store: catalogue with variants, inventory, cart, wishlist, checkout and Wompi payments, plus a panel where the business manages products, orders, coupons and customers.",
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
