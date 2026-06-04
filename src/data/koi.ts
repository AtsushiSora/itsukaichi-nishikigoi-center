import koiInventory from "./koi-inventory.json";

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

const inventoryImage = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/live/inventory/${fileName}`;

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
