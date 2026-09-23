import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getContent } from "@/data/content";
import { defaultLocale, hasLocale, locales } from "@/lib/i18n";
import { siteName } from "@/lib/site";

// Not part of the design: a share card composed from the site's tokens and Inicio copy.
// ImageResponse cannot use next/font, so it reads the same families as TTF (OFL, see assets/fonts).

export const alt = `${siteName} — Frontend Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const fontsDir = join(process.cwd(), "src/assets/fonts");

const chipStyles = {
  ink: { background: "#241c16", color: "#fffdf8" },
  neutral: { background: "rgba(36, 28, 22, 0.06)", color: "#241c16" },
  accent: { background: "rgba(180, 85, 47, 0.12)", color: "#8e3f1f" },
  paper: { background: "rgba(255, 253, 248, 0.9)", color: "#241c16" },
  "paper-outline": { background: "rgba(255, 253, 248, 0.9)", color: "#241c16" },
} as const;

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { home } = getContent(hasLocale(lang) ? lang : defaultLocale);
  const [display, sans, mono] = await Promise.all([
    readFile(join(fontsDir, "Gabarito-ExtraBold.ttf")),
    readFile(join(fontsDir, "HankenGrotesk-Regular.ttf")),
    readFile(join(fontsDir, "JetBrainsMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#241c16",
        fontFamily: "Hanken Grotesk",
        backgroundColor: "#f7f2e9",
        backgroundImage:
          "radial-gradient(circle at 8% -8%, #dce7d6 0%, rgba(220, 231, 214, 0) 55%), radial-gradient(circle at 96% 4%, #f6dccd 0%, rgba(246, 220, 205, 0) 50%)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            letterSpacing: 2.2,
            textTransform: "uppercase",
            color: "#6b5b4e",
          }}
        >
          <div style={{ width: 11, height: 11, borderRadius: 999, background: "#7e9070" }} />
          {home.eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontFamily: "Gabarito",
            fontSize: 124,
            lineHeight: 0.94,
            letterSpacing: -4.3,
          }}
        >
          {siteName}
          <span style={{ color: "#b4552f" }}>.</span>
        </div>
        <div style={{ marginTop: 34, maxWidth: 860, fontSize: 34, lineHeight: 1.4, color: "#33271f" }}>
          {home.lead}
        </div>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {home.coreStack.map((chip) => (
          <div
            key={chip.label}
            style={{ display: "flex", padding: "12px 22px", borderRadius: 999, fontSize: 24, ...chipStyles[chip.tone] }}
          >
            {chip.label}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Gabarito", data: display, weight: 800, style: "normal" },
        { name: "Hanken Grotesk", data: sans, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
