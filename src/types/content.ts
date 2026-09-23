import type { StaticImageData } from "next/image";
import type { Locale, PageKey } from "@/lib/i18n";

/** Text whose last fragment is painted in the accent colour, e.g. "Hola, soy Kevin" + ".". */
export interface AccentedText {
  readonly text: string;
  readonly accent: string;
}

export interface PageIntroContent {
  readonly eyebrow: string;
  readonly title: string;
}

export type TechChipTone = "ink" | "neutral" | "accent" | "paper" | "paper-outline";

export interface TechChip {
  readonly label: string;
  readonly tone: TechChipTone;
}

export interface MetaTag {
  readonly label: string;
  readonly tone: "paper" | "sage";
}

/** A box in a diagram or step list; `note` is revealed on hover/focus. */
export interface DiagramNodeContent {
  readonly title: string;
  readonly meta?: string;
  readonly note?: string;
}

export interface Screenshot {
  readonly image: StaticImageData;
  readonly alt: string;
  readonly caption: string;
}

export interface BrowserPreview {
  readonly image: StaticImageData;
  readonly alt: string;
  readonly url: string;
}

// ── Home ────────────────────────────────────────────────────────────────

export interface ProjectShortcut {
  readonly title: string;
  readonly subtitle: string;
  readonly tone: "paper" | "ink" | "sage";
  readonly page: PageKey;
  readonly anchor: string;
}

export interface Capability {
  readonly title: string;
  readonly description: string;
}

export interface HomeContent {
  readonly eyebrow: string;
  readonly greeting: AccentedText;
  readonly portraitAlt: string;
  readonly coreStack: readonly TechChip[];
  readonly lead: string;
  readonly summary: string;
  readonly availability: readonly MetaTag[];
  readonly shortcuts: readonly ProjectShortcut[];
  readonly capabilities: readonly Capability[];
  readonly principles: {
    readonly eyebrow: string;
    readonly title: string;
    readonly body: string;
    readonly items: readonly string[];
  };
}

// ── Experience ──────────────────────────────────────────────────────────

export interface RoleFacts {
  readonly periodLabel: string;
  readonly period: string;
  readonly roleLabel: string;
  readonly role: string;
}

export interface Practice {
  readonly label: string;
  readonly dot: "accent" | "sage";
}

export interface SmartFinancialContent {
  readonly anchor: string;
  readonly label: string;
  readonly title: { readonly lead: string; readonly accent: string };
  readonly summary: string;
  readonly facts: RoleFacts & { readonly stackLabel: string; readonly stack: readonly string[] };
  readonly architecture: {
    readonly title: string;
    readonly tag: string;
    readonly host: DiagramNodeContent;
    readonly remotes: readonly DiagramNodeContent[];
    readonly system: DiagramNodeContent;
  };
  readonly diagnostics: {
    readonly title: string;
    readonly tag: string;
    readonly steps: readonly DiagramNodeContent[];
  };
  readonly decisions: {
    readonly title: string;
    readonly items: readonly string[];
    readonly practices: readonly Practice[];
  };
}

export interface PromedicoContent {
  readonly anchor: string;
  readonly label: string;
  readonly titleLines: readonly string[];
  readonly summary: string;
  readonly facts: RoleFacts & { readonly stackLabel: string; readonly stack: readonly string[] };
  readonly highlights: readonly string[];
  readonly stack: {
    readonly clients: readonly DiagramNodeContent[];
    readonly api: DiagramNodeContent;
    readonly backend: DiagramNodeContent;
    readonly integrations: readonly DiagramNodeContent[];
  };
  /** Where each application was deployed: internal servers, cPanel, AWS and the app stores. */
  readonly deployment: { readonly title: string; readonly targets: readonly DiagramNodeContent[] };
  /** Services the fund offers its members; context for the applications. */
  readonly services: FeatureGroupContent;
}

export interface ExperienceContent {
  readonly intro: PageIntroContent;
  readonly smartFinancial: SmartFinancialContent;
  readonly promedico: PromedicoContent;
  readonly education: {
    readonly label: string;
    readonly degree: string;
    readonly institution: string;
    readonly status: string;
  };
  readonly certifications: {
    readonly label: string;
    readonly items: readonly string[];
    readonly languages: string;
  };
  readonly nextStep: string;
}

// ── Projects ────────────────────────────────────────────────────────────

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
  readonly variant: "accent" | "subtle" | "sage-soft" | "sage";
}

interface ProjectBase {
  readonly anchor: string;
  readonly label: string;
  readonly status: { readonly label: string; readonly tone: "live" | "soon" };
  readonly titleLines: readonly string[];
  readonly summary: string;
  readonly stack: readonly TechChip[];
  readonly links: readonly ProjectLink[];
  readonly preview?: BrowserPreview;
  readonly gallery: readonly Screenshot[];
}

export interface BuiltItem extends DiagramNodeContent {
  readonly emphasis?: boolean;
}

export interface CitavekContent extends ProjectBase {
  readonly built: { readonly title: string; readonly items: readonly BuiltItem[] };
}

export interface FeatureGroupContent {
  readonly title: string;
  readonly tone: "paper" | "ink";
  readonly items: readonly string[];
  readonly footnote?: string;
}

export interface KyzzContent extends ProjectBase {
  readonly featureGroups: readonly FeatureGroupContent[];
}

export interface ProjectsContent {
  readonly intro: PageIntroContent;
  readonly citavek: CitavekContent;
  readonly kyzz: KyzzContent;
  readonly nextStep: string;
}

// ── Contact ─────────────────────────────────────────────────────────────

export interface ContactChannel {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly tone: "ink" | "paper" | "sage";
  readonly external: boolean;
}

export interface ContactContent {
  readonly eyebrow: string;
  readonly title: AccentedText;
  readonly tags: readonly MetaTag[];
  readonly channels: readonly ContactChannel[];
}

// ── Site ────────────────────────────────────────────────────────────────

export interface PageMeta {
  readonly title: string;
  readonly description: string;
}

export interface SiteContent {
  readonly locale: Locale;
  readonly meta: {
    readonly ogLocale: string;
    readonly jobTitle: string;
    readonly pages: Readonly<Record<PageKey, PageMeta>>;
  };
  readonly nav: {
    readonly label: string;
    readonly items: Readonly<Record<PageKey, string>>;
    /** Shown label (e.g. "EN") and full name of the other language. */
    readonly languageSwitch: { readonly label: string; readonly name: string };
  };
  readonly a11y: {
    readonly skipToContent: string;
    readonly newTab: string;
  };
  /** Downloadable CV in the page's language. */
  readonly resume: { readonly label: string; readonly href: string };
  readonly home: HomeContent;
  readonly experience: ExperienceContent;
  readonly projects: ProjectsContent;
  readonly contact: ContactContent;
  readonly notFound: {
    readonly eyebrow: string;
    readonly title: string;
    readonly body: string;
    readonly cta: string;
  };
}
