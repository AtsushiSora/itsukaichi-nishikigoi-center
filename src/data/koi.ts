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

const siteReferenceImage = `${import.meta.env.BASE_URL}images/site-reference.png`;

// iPadなどからの在庫更新機能を追加する際は、この配列をJSON/APIに置き換える想定です。
export const koiList: Koi[] = [
  {
    id: "koi-001",
    variety: "紅白",
    size: "42cm",
    age: "2歳",
    sex: "メス",
    price: "税込 88,000円",
    status: "販売中",
    comment: "白地が明るく、緋盤のまとまりがよい一尾です。初めての鑑賞池にもおすすめです。",
    imageUrl: siteReferenceImage,
    galleryImages: [siteReferenceImage, siteReferenceImage, siteReferenceImage],
    handover: "店頭で状態をご確認いただいたうえで、受け渡し方法を個別にご相談ください。",
    detailUrl: "/koi/koi-001",
  },
  {
    id: "koi-002",
    variety: "大正三色",
    size: "48cm",
    age: "3歳",
    sex: "オス",
    price: "税込 132,000円",
    status: "商談中",
    comment: "墨の配置に品があり、成長後の変化も楽しめる個体です。",
    imageUrl: siteReferenceImage,
    galleryImages: [siteReferenceImage, siteReferenceImage, siteReferenceImage],
    handover: "商談状況をご確認のうえ、来店確認またはお電話でのご相談をお願いします。",
    detailUrl: "/koi/koi-002",
  },
  {
    id: "koi-003",
    variety: "昭和三色",
    size: "55cm",
    age: "4歳",
    sex: "メス",
    price: "税込 198,000円",
    status: "販売中",
    comment: "力強い体形と深い墨が魅力。存在感のある池づくりに向いています。",
    imageUrl: siteReferenceImage,
    galleryImages: [siteReferenceImage, siteReferenceImage, siteReferenceImage],
    handover: "大型個体のため、池の環境や搬入方法を確認したうえで受け渡しをご案内します。",
    detailUrl: "/koi/koi-003",
  },
  {
    id: "koi-004",
    variety: "丹頂",
    size: "36cm",
    age: "2歳",
    sex: "不明",
    price: "税込 66,000円",
    status: "販売中",
    comment: "頭部の丸い緋が美しく、落ち着いた印象のある一尾です。",
    imageUrl: siteReferenceImage,
    galleryImages: [siteReferenceImage, siteReferenceImage, siteReferenceImage],
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
    imageUrl: siteReferenceImage,
    galleryImages: [siteReferenceImage, siteReferenceImage, siteReferenceImage],
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
    imageUrl: siteReferenceImage,
    galleryImages: [siteReferenceImage, siteReferenceImage, siteReferenceImage],
    handover: "店頭で色味や泳ぎをご確認いただき、持ち帰りまたは個別配送をご相談ください。",
    detailUrl: "/koi/koi-006",
  },
];

export const getKoiById = (id: string | undefined) =>
  koiList.find((koi) => koi.id === id);
