export type CaseCategory = "池メンテナンス" | "導入相談" | "アフターフォロー" | "設備改善";

export type CaseStudy = {
  id: string;
  category: CaseCategory;
  title: string;
  summary: string;
  challenge: string;
  response: string;
  result: string;
  imageUrl: string;
};

const liveImage = (path: string) => `${import.meta.env.BASE_URL}images/live/${path}`;

export const caseStudies: CaseStudy[] = [
  {
    id: "case-001",
    category: "池メンテナンス",
    title: "水の濁りと濾過能力を確認した池の点検",
    summary: "餌やり量、濾過槽、ポンプまわりを確認し、無理のない清掃と運用改善をご提案した想定事例です。",
    challenge: "水の濁りが続き、錦鯉の状態確認がしづらい状況でした。",
    response: "濾過槽、ポンプ、水流、給餌量、底の汚れを確認し、段階的な清掃と給餌量の見直しを提案しました。",
    result: "水質管理のポイントが整理され、日常点検で確認すべき項目が明確になりました。",
    imageUrl: liveImage("services/maintenance.png"),
  },
  {
    id: "case-002",
    category: "導入相談",
    title: "初めての錦鯉選びと池への導入相談",
    summary: "池の水量や飼育経験に合わせて、サイズと品種を比較しながら導入候補を選ぶ想定事例です。",
    challenge: "初めての購入で、どのサイズや品種が池に合うか判断しづらい状況でした。",
    response: "池の環境、予算、見え方の好みを伺い、無理なく飼育できる個体を比較してご案内しました。",
    result: "導入後の水合わせや観察ポイントも含めて、購入前の不安を整理できました。",
    imageUrl: liveImage("inventory/koi-001-main.png"),
  },
  {
    id: "case-003",
    category: "アフターフォロー",
    title: "導入後の餌やりと季節管理の見直し",
    summary: "導入後の食欲や水温変化に合わせ、餌やり量と観察ポイントを整理した想定事例です。",
    challenge: "導入直後で、餌を始めるタイミングや量に不安がありました。",
    response: "水温、泳ぎ方、食欲、池の状態を確認し、少量から様子を見る管理方法をご案内しました。",
    result: "季節ごとの給餌量と体調変化の見方がわかり、日々の管理に取り入れやすくなりました。",
    imageUrl: liveImage("services/aftercare.png"),
  },
  {
    id: "case-004",
    category: "設備改善",
    title: "ポンプ・配管まわりの点検と改善提案",
    summary: "池全体の水流や設備の経年変化を確認し、必要な改善を段階的に整理した想定事例です。",
    challenge: "ポンプの状態や水流に不安があり、設備交換の必要性を判断したい状況でした。",
    response: "ポンプ、配管、濾過槽、エアレーションを確認し、優先順位をつけて改善案をまとめました。",
    result: "すぐに対応する箇所と、時期を見て検討する箇所を分けて計画できました。",
    imageUrl: liveImage("services/breeding.png"),
  },
];
