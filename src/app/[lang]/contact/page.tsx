import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { PillLink } from "@/components/ui/pill-link";
import { Tag } from "@/components/ui/tag";
import { getContent } from "@/data/content";
import { ContactCard } from "@/features/contact/contact-card";
import { resolveLocale } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  return buildPageMetadata(await resolveLocale(params), "contact");
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const locale = await resolveLocale(params);
  const { contact, resume } = getContent(locale);

  return (
    <div className="animate-view-up">
      <PageIntro
        eyebrow={contact.eyebrow}
        dot="accent"
        title={contact.title.text}
        accent={contact.title.accent}
        size="display-contact"
      />
      <div className="mt-18 flex flex-wrap items-center gap-x-16 gap-y-12">
        <ul className="flex flex-wrap gap-8">
          {contact.tags.map((tag) => (
            <Tag key={tag.label} as="li" variant="meta" tone={tag.tone}>
              {tag.label}
            </Tag>
          ))}
        </ul>
        <PillLink href={resume.href} variant="cta" download>
          {resume.label}
        </PillLink>
      </div>
      {/* 300 (design: 230) gives 3 + 3 cards instead of 4 + 2 with two empty slots. */}
      <ul className="mt-[clamp(24px,3.2vw,44px)] auto-grid-300 max-w-1080 gap-grid">
        {contact.channels.map((channel) => (
          <li key={channel.label}>
            <ContactCard {...channel} />
          </li>
        ))}
      </ul>
    </div>
  );
}
