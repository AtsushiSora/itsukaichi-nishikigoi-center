import koiInventory from "./koi-inventory.json";

export type KoiStatus = "販売中" | "商談中" | "売約済み" | "売り切れ";

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

type KoiInventoryRecord = {
  id: string;
  variety: string;
  size: string;
  age: string;
  sex: string;
  price: string;
  status: KoiStatus;
  comment: string;
  mainImage: string;
  galleryImages: string[];
  videoUrl?: string;
  handover: string;
};

const isAbsoluteImageUrl = (source: string) => /^https?:\/\//i.test(source);

const normalizeGoogleDriveImageUrl = (source: string) => {
  const fileMatch = source.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  const idMatch = source.match(/[?&]id=([^&]+)/);
  const fileId = fileMatch?.[1] ?? idMatch?.[1];

  if (!fileId || !source.includes("drive.google.com")) {
    return source;
  }

  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

const inventoryImage = (source: string) => {
  const trimmedSource = source.trim();

  if (isAbsoluteImageUrl(trimmedSource)) {
    return normalizeGoogleDriveImageUrl(trimmedSource);
  }

  return `${import.meta.env.BASE_URL}images/live/inventory/${trimmedSource}`;
};

const toKoi = (record: KoiInventoryRecord): Koi => ({
  id: record.id,
  variety: record.variety,
  size: record.size,
  age: record.age,
  sex: record.sex,
  price: record.price,
  status: record.status,
  comment: record.comment,
  imageUrl: inventoryImage(record.mainImage),
  galleryImages: record.galleryImages.map(inventoryImage),
  videoUrl: record.videoUrl,
  handover: record.handover,
  detailUrl: `/koi/${record.id}`,
});

export const koiList: Koi[] = (koiInventory as KoiInventoryRecord[]).map(toKoi);

export const getKoiById = (id: string | undefined) =>
  koiList.find((koi) => koi.id === id);
