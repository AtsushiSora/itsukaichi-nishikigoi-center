export type KoiStatus = "販売中" | "商談中" | "売約済み";

export type Koi = {
  id: string;
  variety: string;
  size: string;
  age: string;
  sex: string;
  price: string;
  status: KoiStatus;
  comment: string;
  imageUrl: string;
  galleryImages: string[];
  videoUrl?: string;
  handover: string;
  detailUrl: string;
};

const inventoryImage = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/live/inventory/${fileName}`;

const inventoryImages = {
  koi001: inventoryImage("koi-001-main.png"),
  koi002: inventoryImage("koi-002-main.png"),
  koi003: inventoryImage("koi-003-main.png"),
  koi004: inventoryImage("koi-004-main.png"),
  koi005: inventoryImage("koi-005-main.png"),
  koi006: inventoryImage("koi-006-main.png"),
};

// iPadなどからの在庫更新機能を追加する際は、この配列をJSON/APIに置き換える想定です。
export const koiList: Koi[] = [
  {
    id: "koi-001",
    variety: "昭和三色",
    size: "53cm",
    age: "2歳",
    sex: "メス",
    price: "税込 148,000円",
    status: "販売中",
    comment: "力強い墨と鮮やかな緋が映える、存在感のある昭和三色です。",
    imageUrl: inventoryImages.koi001,
    galleryImages: [inventoryImages.koi001, inventoryImages.koi003, inventoryImages.koi002],
    handover: "店頭で状態をご確認いただいたうえで、受け渡し方法を個別にご相談ください。",
    detailUrl: "/koi/koi-001",
  },
  {
    id: "koi-002",
    variety: "丹頂紅白",
    size: "45cm",
    age: "3歳",
    sex: "オス",
    price: "税込 98,000円",
    status: "商談中",
    comment: "白地と頭部の丹頂が美しい、落ち着いた印象の一尾です。",
    imageUrl: inventoryImages.koi002,
    galleryImages: [inventoryImages.koi002, inventoryImages.koi001, inventoryImages.koi003],
    handover: "商談状況をご確認のうえ、来店確認またはお電話でのご相談をお願いします。",
    detailUrl: "/koi/koi-002",
  },
  {
    id: "koi-003",
    variety: "大正三色",
    size: "48cm",
    age: "4歳",
    sex: "メス",
    price: "税込 120,000円",
    status: "販売中",
    comment: "緋と墨のバランスがよく、成長後の変化も楽しめる大正三色です。",
    imageUrl: inventoryImages.koi003,
    galleryImages: [inventoryImages.koi003, inventoryImages.koi001, inventoryImages.koi002],
    handover: "大型個体のため、池の環境や搬入方法を確認したうえで受け渡しをご案内します。",
    detailUrl: "/koi/koi-003",
  },
  {
    id: "koi-004",
    variety: "山吹黄金",
    size: "50cm",
    age: "2歳",
    sex: "不明",
    price: "税込 95,000円",
    status: "販売中",
    comment: "水面で明るく映える黄金色が魅力。池全体を華やかに見せます。",
    imageUrl: inventoryImages.koi004,
    galleryImages: [inventoryImages.koi004, inventoryImages.koi003, inventoryImages.koi002],
    handover: "店頭確認後、移動時の水合わせ方法も含めてご案内します。",
    detailUrl: "/koi/koi-004",
  },
  {
    id: "koi-005",
    variety: "白写り",
    size: "50cm",
    age: "3歳",
    sex: "メス",
    price: "税込 154,000円",
    status: "売約済み",
    comment: "白と墨の対比がはっきりした個体です。参考掲載として残しています。",
    imageUrl: inventoryImages.koi005,
    galleryImages: [inventoryImages.koi005, inventoryImages.koi003, inventoryImages.koi004],
    handover: "売約済みの参考掲載です。類似個体をお探しの場合はお問い合わせください。",
    detailUrl: "/koi/koi-005",
  },
  {
    id: "koi-006",
    variety: "黄金",
    size: "44cm",
    age: "2歳",
    sex: "オス",
    price: "税込 99,000円",
    status: "販売中",
    comment: "水面で映える明るい色味。池全体を華やかに見せます。",
    imageUrl: inventoryImages.koi006,
    galleryImages: [inventoryImages.koi006, inventoryImages.koi001, inventoryImages.koi002],
    handover: "店頭で色味や泳ぎをご確認いただき、持ち帰りまたは個別配送をご相談ください。",
    detailUrl: "/koi/koi-006",
  },
];

export const getKoiById = (id: string | undefined) =>
  koiList.find((koi) => koi.id === id);
