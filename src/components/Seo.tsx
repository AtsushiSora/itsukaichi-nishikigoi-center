import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { absoluteUrl, getSeoMetadata, ogImageUrl, siteBaseUrl } from "../data/seo";
import { siteInfo } from "../data/site";

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

const setCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
};

const setJsonLd = () => {
  const id = "local-business-json-ld";
  let element = document.getElementById(id) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: siteInfo.name,
    url: siteBaseUrl,
    image: ogImageUrl,
    telephone: siteInfo.phone,
    address: {
      "@type": "PostalAddress",
      postalCode: siteInfo.postalCode,
      addressRegion: "広島県",
      addressLocality: "広島市佐伯区",
      streetAddress: "五日市中央7丁目10-7",
      addressCountry: "JP",
    },
    areaServed: "広島県",
    description:
      "広島の錦鯉専門店。錦鯉の養殖・販売、アフターフォロー、池や設備のメンテナンスに対応します。",
  });
};

export function Seo() {
  const location = useLocation();

  useEffect(() => {
    const metadata = getSeoMetadata(location.pathname);
    const canonicalUrl = absoluteUrl(metadata.path);
    const imageUrl = metadata.imageUrl ?? ogImageUrl;

    document.title = metadata.title;
    setMeta('meta[name="description"]', "name", "description", metadata.description);
    setMeta('meta[name="robots"]', "name", "robots", "index,follow");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", siteInfo.name);
    setMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
    setMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
    setMeta('meta[property="og:type"]', "property", "og:type", metadata.path === "/" ? "website" : "article");
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMeta('meta[property="og:locale"]', "property", "og:locale", "ja_JP");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);
    setCanonical(canonicalUrl);
    setJsonLd();
  }, [location.pathname]);

  return null;
}
