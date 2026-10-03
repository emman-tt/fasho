export type ShopCategory = "all" | "men" | "women" | "children";

export interface ShopProduct {
  id: string;
  name: string;
  price: string;
  category: Exclude<ShopCategory, "all">;
  stock: number;
  sold: number;
  views: number;
  image: string;
  sizes: string[];
  colors: string[];
}

export interface ShopColor {
  name: string;
  hex: string;
}

export const SHOP_COLORS: ShopColor[] = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#f2f2f2" },
  { name: "Navy", hex: "#1d0a5f" },
  { name: "Olive", hex: "#6b7c4a" },
  { name: "Sand", hex: "#d9c7a7" },
  { name: "Rust", hex: "#c25e3a" },
  { name: "Denim", hex: "#4a6b8a" },
  { name: "Blush", hex: "#e8b4b8" },
];

const SIZES = ["XS", "S", "M", "L", "XL"];

export type SortKey = "featured" | "price-asc" | "price-desc" | "sold";

export const SORT_OPTIONS: { id: SortKey; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "sold", label: "Most sold" },
];

const u = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=600&auto=format&fit=crop`;

type Raw = [name: string, price: string, photo: string];

const MEN: Raw[] = [
  ["Essential Boxy Tee", "$45.00", "photo-1564382225035-dbdf309682a6"],
  ["Ink Wide Trouser", "$89.00", "photo-1584865288642-42078afe6942"],
  ["Warm Overshirt", "$120.00", "photo-1675442141177-b99b70652416"],
  ["Motion Runner", "$150.00", "photo-1705997696447-acfa8f31da50"],
  ["Onyx Crew Tee", "$42.00", "photo-1565383690591-1ee1b6582cef"],
  ["Indigo Crew Tee", "$44.00", "photo-1536548665027-b96d34a005ae"],
  ["White V-Neck Tee", "$38.00", "photo-1591258739316-17f40ff7174d"],
  ["White Crew Tee", "$39.00", "photo-1624561187289-198fc6eee90b"],
  ["Studio Tee & Trouser", "$110.00", "photo-1618001789159-ffffe6f96ef2"],
  ["Voyager Tee", "$48.00", "photo-1602107525858-2de7d7cf21b3"],
  ["Field Shirt", "$72.00", "photo-1593643798898-d5cbbb6220b2"],
  ["Chambray Set", "$98.00", "photo-1593536364145-d92bb5151092"],
  ["Washed Denim Jacket", "$130.00", "photo-1754570136399-0692a1ac32c8"],
  ["Doorway Denim Jacket", "$128.00", "photo-1755326970820-c8c58891ce88"],
  ["Noir Street Jacket", "$140.00", "photo-1745240261519-0b988d54d098"],
  ["Court Sneaker Duo", "$145.00", "photo-1680204101400-aeac783c9d87"],
  ["Tempo Runner", "$138.00", "photo-1637437757614-6491c8e915b5"],
  ["Samba Classic", "$120.00", "photo-1695552837550-5751313ee8ba"],
  ["Blazer Low Knit", "$125.00", "photo-1631167986287-1c3e6dd0597c"],
  ["Hanging White Tees", "$52.00", "photo-1521572163474-6864f9cf17ab"],
  ["Folded Tee Pack", "$58.00", "photo-1576566588028-4147f3842f27"],
  ["Rail Essential Tees", "$60.00", "photo-1523381210434-271e8be1f52b"],
  ["Studio Tee Mockup", "$40.00", "photo-1618354691373-d851c5c3a990"],
  ["Everyday Hanging Tee", "$36.00", "photo-1620799140408-edc6dcb6d633"],
  ["Model White Tee", "$44.00", "photo-1617137968427-85924c800a22"],
  ["Rail Tees", "$55.00", "photo-1602810318383-e386cc2a3ccf"],
  ["Essential White Shirt", "$66.00", "photo-1598033129183-c4f50c736f10"],
  ["Oxford Studio Shirt", "$74.00", "photo-1603252109303-2751441dd157"],
  ["Tailored Blazer", "$160.00", "photo-1594938298603-c8148c4dae35"],
  ["Cloud Hoodie", "$85.00", "photo-1611312449408-fcece27cdbb7"],
  ["Print Tee Bundle", "$62.00", "photo-1620012253295-c15cc3e65df4"],
  ["Rail Shirts", "$70.00", "photo-1571945153237-4929e783af4a"],
  ["Gallery White Tee", "$41.00", "photo-1503341504253-dff4815485f1"],
  ["Everyday Hoodie", "$82.00", "photo-1556821840-3a63f95609a7"],
];

const WOMEN: Raw[] = [
  ["Draped Midi Dress", "$135.00", "photo-1560607812-923a837d906c"],
  ["Soft Knit Top", "$68.00", "photo-1616788149922-c79ff38ab896"],
  ["Pleated Skirt", "$78.00", "photo-1700676194542-1ff76ca23729"],
  ["Bloom Summer Top", "$64.00", "photo-1561648512-2d9c26a7768b"],
  ["Meadow Maxi Dress", "$142.00", "photo-1691315975425-6c33bce29bdc"],
  ["Meadow Midi Dress", "$132.00", "photo-1758539197771-4d98e9c78f87"],
  ["Scarlet Sunset Dress", "$148.00", "photo-1684885954133-79c8fa86540f"],
  ["Ivory Slip Dress", "$128.00", "photo-1603139622656-2285f20e7368"],
  ["Cocoa Knit", "$72.00", "photo-1573587302894-7d0475939841"],
  ["Ember Knit", "$70.00", "photo-1519891289766-8e94a0893d3f"],
  ["Stone Knit", "$69.00", "photo-1608852756362-2cab885fe809"],
  ["Cream Collar Knit", "$76.00", "photo-1765337210325-768dafc12989"],
  ["Bridal Muse Dress", "$155.00", "photo-1595777457583-95e059d581b8"],
  ["Ivory Muse Dress", "$138.00", "photo-1515372039744-b8f02a3ae446"],
  ["Rouge Muse Dress", "$145.00", "photo-1572804013309-59a88b7e92f1"],
  ["Citrus Muse Set", "$118.00", "photo-1581044777550-4cfa60707c03"],
  ["Citrus Denim Set", "$112.00", "photo-1529139574466-a303027c1d8b"],
  ["Denim Muse Set", "$108.00", "photo-1594633312681-425c7b97ccd1"],
  ["Wildflower Dress", "$136.00", "photo-1525507119028-ed4c629a60a3"],
  ["Muse Wrap Dress", "$130.00", "photo-1596783074918-c84cb06531ca"],
  ["Muse Slip Dress", "$126.00", "photo-1496747611176-843222e1e57c"],
  ["Vintage Rail Edit", "$95.00", "photo-1434389677669-e08b4cac3105"],
  ["Atelier Coat Rail", "$150.00", "photo-1445205170230-053b83016050"],
  ["Minimal Rail Edit", "$92.00", "photo-1441986300917-64674bd600d8"],
  ["Studio Rail Edit", "$88.00", "photo-1556905055-8f358a7a47b2"],
  ["Folded Knit Stack", "$74.00", "photo-1576871337622-98d48d1cf531"],
  ["Cloudspun Sweater", "$71.00", "photo-1551163943-3f6a855d1153"],
  ["Wrap Midi Skirt", "$80.00", "photo-1577900232427-18219b9166a0"],
  ["Vintage Wash Jeans", "$98.00", "photo-1541099649105-f69ad21f3246"],
  ["Rigid Wash Jeans", "$96.00", "photo-1542272604-787c3835535d"],
  ["Classic Blue Jeans", "$94.00", "photo-1487222477894-8943e31ef7b2"],
  ["Gallery Wrap Dress", "$134.00", "photo-1551489186-cf8726f514f8"],
  ["Honey Hoodie", "$84.00", "photo-1503342217505-b0a15ec3261c"],
];

const CHILDREN: Raw[] = [
  ["Mini Graphic Tee", "$28.00", "photo-1635327343808-37edbaf09d70"],
  ["Kids Denim Set", "$55.00", "photo-1604694059170-4e97188079a8"],
  ["Little Puffer", "$85.00", "photo-1710425805333-906c53afa4bc"],
  ["Trail Buddy Set", "$52.00", "photo-1695263174454-abfd52fd4f76"],
  ["Road Trip Jacket", "$82.00", "photo-1710425809357-5d595cde0ebc"],
  ["Studio Kid Fit", "$58.00", "photo-1758782213532-bbb5fd89885e"],
  ["Field Day Shirt", "$34.00", "photo-1617627057301-7b03d1097672"],
  ["Heli Crew Look", "$62.00", "photo-1713460701364-940099d3e370"],
  ["Forest Dress", "$48.00", "photo-1695262620870-ee68192264e3"],
  ["Bubble Day Jacket", "$80.00", "photo-1695263747144-a52aa3739d62"],
  ["Twirl Dress", "$46.00", "photo-1695262620869-fedab63bcc41"],
  ["Cloud Dress", "$44.00", "photo-1695262620884-b1fdb55a631e"],
  ["Pop Star Set", "$60.00", "photo-1747069340536-4db7b52b8a73"],
  ["Kimono Play Set", "$56.00", "photo-1742541755766-f8495b15bc98"],
  ["Gallery Kid Look", "$50.00", "photo-1503454537195-1dcabb73ffb9"],
  ["Portrait Knit", "$42.00", "photo-1540479859555-17af45c78602"],
  ["Best Friends Set", "$64.00", "photo-1542810634-71277d95dcbb"],
  ["Jump Around Set", "$54.00", "photo-1774641374227-866fa0f0adf7"],
  ["Park Play Fit", "$38.00", "photo-1471286174890-9c112ffca5b4"],
  ["Doodle Tee", "$26.00", "photo-1596870230751-ebdfce98ec42"],
  ["First Steps Set", "$40.00", "photo-1514090458221-65bb69cf63e6"],
  ["Explorer Hat Set", "$45.00", "photo-1551189706-75c0bc4b6ab8"],
  ["Sunbeam Set", "$43.00", "photo-1476234251651-f353703a034d"],
  ["Newborn Soft Set", "$36.00", "photo-1519238263530-99bdd11df2ea"],
  ["Folded Kids Tees", "$32.00", "photo-1622290291468-a28f7a7dc6a8"],
  ["Skater Kid Set", "$57.00", "photo-1503919545889-aef636e10ad4"],
  ["Print Pop Tee", "$27.00", "photo-1685883518316-355533810d68"],
  ["Nursery Soft Set", "$35.00", "photo-1522771930-78848d9293e8"],
  ["Meadow Run Set", "$47.00", "photo-1502086223501-7ea6ecd79368"],
  ["Sparkler Set", "$49.00", "photo-1472162072942-cd5147eb3902"],
  ["Playground Layers", "$53.00", "photo-1560785496-3c9d27877182"],
  ["Sleepy Soft Set", "$33.00", "photo-1519689680058-324335c77eba"],
  ["Rainy Day Set", "$51.00", "photo-1604467794349-0b74285de7e7"],
  ["Puddle Jumper Set", "$59.00", "photo-1519457431-44ccd64a579b"],
];

function toProducts(
  list: Raw[],
  category: ShopProduct["category"],
  prefix: string,
): ShopProduct[] {
  return list.map(([name, price, photo], i) => ({
    id: `${prefix}-${i + 1}`,
    name,
    price,
    category,
    stock: 120 + ((i * 37 + prefix.length * 53) % 420),
    sold: 60 + ((i * 53 + prefix.length * 29) % 320),
    views: 900 + ((i * 97 + prefix.length * 61) % 8900),
    image: u(photo),
    sizes: [0, 1, 2].map((k) => SIZES[(i + k) % SIZES.length]),
    colors: [0, 1].map(
      (k) => SHOP_COLORS[(i * 3 + k * 5) % SHOP_COLORS.length].name,
    ),
  }));
}

export const SHOP_PRODUCTS: ShopProduct[] = [
  ...toProducts(MEN, "men", "m"),
  ...toProducts(WOMEN, "women", "w"),
  ...toProducts(CHILDREN, "children", "k"),
];

export const SHOP_CATEGORIES: { id: ShopCategory; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "children", label: "Children" },
];
