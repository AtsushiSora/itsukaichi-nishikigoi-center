import { getKoiById } from "./koi";
import { siteInfo } from "./site";

const defaultSiteBaseUrl = "https://atsushisora.github.io/itsukaichi-nishikigoi-center";

export const siteBaseUrl = (import.meta.env.VITE_SITE_BASE_URL ?? defaultSiteBaseUrl).replace(/\/$/, "");

export const ogImageUrl = `${siteBaseUrl}/images/live/site/hero-koi-banner.png`;

export type SeoMetadata = {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
};

const siteTitle = siteInfo.name;

const pageSeo: Record<string, Omit<SeoMetadata, "path">> = {
  "/": {
    title: `${siteTitle} | 広島の錦鯉専門店`,
    description:
      "広島の錦鯉専門店、五日市錦鯉センター。錦鯉の養殖・販売、アフターフォロー、池や設備のメンテナンスまでご相談ください。",
  },
  "/koi": {
    title: `販売中の錦鯉 | ${siteTitle}`,
    description:
      "販売中の錦鯉一覧です。品種、サイズ、価格、状態を確認し、気になる一尾について来店相談やお問い合わせができます。",
  },
  "/about": {
    title: `養殖・販売について | ${siteTitle}`,
    description:
      "錦鯉の養殖・販売に関する考え方、選び方、店頭でのご相談についてご案内します。",
  },
  "/aftercare": {
    title: `アフターフォロー | ${siteTitle}`,
    description:
      "錦鯉の導入後の餌やり、水質、体調変化、飼育相談など、購入後のサポートについてご案内します。",
  },
  "/maintenance": {
    title: `池・設備メンテナンス | ${siteTitle}`,
    description:
      "錦鯉の池、濾過槽、ポンプ、水質、設備点検など、池・設備メンテナンスの相談についてご案内します。",
  },
  "/cases": {
    title: `事例紹介 | ${siteTitle}`,
    description:
      "池のメンテナンス、錦鯉の導入相談、購入後のアフターフォローなど、五日市錦鯉センターへの相談内容の例をご紹介します。",
  },
  "/contact": {
    title: `お問い合わせ・アクセス | ${siteTitle}`,
    description:
      "五日市錦鯉センターへのお問い合わせ、在庫確認、来店予約、飼育相談、池や設備のメンテナンス相談はこちらから。",
  },
  "/thanks": {
    title: `お問い合わせ送信完了 | ${siteTitle}`,
    description:
      "五日市錦鯉センターへのお問い合わせを受け付けました。内容を確認のうえ、担当者よりご連絡いたします。",
  },
  "/faq": {
    title: `よくある質問 | ${siteTitle}`,
    description:
      "錦鯉を初めて購入する方、飼育方法、池の管理、購入後の相談、配送・受け渡しについてよくある質問をまとめました。",
  },
  "/privacy": {
    title: `プライバシーポリシー | ${siteTitle}`,
    description:
      "五日市錦鯉センターのお問い合わせ・来店相談・アフターフォローに伴う個人情報の取り扱いについて。",
  },
  "/commerce": {
    title: `特定商取引法に基づく表記 | ${siteTitle}`,
    description:
      "五日市錦鯉センターの販売条件、支払方法、引き渡し、返品・交換、通販対応に関する表記です。",
  },
};

export const absoluteUrl = (path: string) => `${siteBaseUrl}${path === "/" ? "/" : path}`;

export const getSeoMetadata = (pathname: string): SeoMetadata => {
  const normalizedPath = pathname === "" ? "/" : pathname;
  const koiDetailMatch = normalizedPath.match(/^\/koi\/([^/]+)$/);

  if (koiDetailMatch) {
    const koi = getKoiById(koiDetailMatch[1]);

    if (koi) {
      return {
        title: `${koi.variety} ${koi.size} | 販売中の錦鯉 | ${siteTitle}`,
        description: `${koi.variety}、${koi.size}、${koi.age}、${koi.status}。${koi.comment} 詳細確認や来店相談はお問い合わせください。`,
        path: normalizedPath,
        imageUrl: absoluteUrl(koi.imageUrl.replace(import.meta.env.BASE_URL, "/")),
      };
    }
  }

  const metadata = pageSeo[normalizedPath] ?? {
    title: `${siteTitle} | 広島の錦鯉専門店`,
    description:
      "広島の錦鯉専門店、五日市錦鯉センター。錦鯉の販売、飼育相談、池や設備のメンテナンスまでご相談ください。",
  };

  return {
    ...metadata,
    path: normalizedPath,
    imageUrl: ogImageUrl,
  };
};
