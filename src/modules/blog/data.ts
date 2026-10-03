import { IMAGES } from '../../data';

export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string[];
  quote?: string;
}

export const BLOG_TAGS = ['All', 'Styling', 'Trends', 'Fabric', 'Guides', 'Culture'] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'layer-warm-cloth',
    title: 'How to layer warm cloth this season',
    tag: 'Styling',
    excerpt:
      'Three layers, zero bulk — the exact formula for staying warm without losing your silhouette.',
    image: IMAGES.thumb1,
    date: 'Feb 12, 2026',
    readTime: '6 min read',
    featured: true,
    content: [
      'Layering is less about piling on clothes and more about building a system. Start with a breathable base — a fitted tee or thermal that sits close to the skin and moves moisture away from the body. This is the layer doing the quiet work, so keep it simple and fitted.',
      'The middle layer is where the warmth lives. Think heavyweight knits, fleece overshirts, or a quilted vest. This is also where texture enters the outfit: a chunky knit against a smooth base creates depth even in a monochrome palette.',
      'Finish with a shell that blocks wind and rain — a structured wool coat or a technical parka depending on the day. The rule of three keeps proportions clean: slim base, relaxed middle, structured outer. Remove one layer indoors and the outfit should still hold together.',
    ],
    quote: 'Dress for the coldest part of your day, but build every layer to stand alone.',
  },
  {
    slug: 'curated-looks-that-last',
    title: 'Curated looks that actually last',
    tag: 'Trends',
    excerpt:
      'Micro-trends burn out in weeks. Here is how to spot the silhouettes that survive past the season.',
    image: IMAGES.thumb2,
    date: 'Feb 4, 2026',
    readTime: '5 min read',
    content: [
      'Every season arrives with a handful of loud trends engineered for attention, not longevity. The trick is learning to tell the difference between a silhouette with staying power and a novelty cut that will date your photos by spring.',
      'Look for three signals: does it appear across multiple houses rather than one viral brand, does it work in at least two fabrics, and can you picture it with pieces you already own? Boxy tees, wide trousers, and relaxed tailoring all pass this test — they have been reinterpreted for a decade.',
      'Build 80 percent of your wardrobe from these durable shapes and spend the remaining 20 percent on seasonal energy — a colour, a print, an accessory. You stay current without rebuilding your closet twice a year.',
    ],
  },
  {
    slug: 'fabrics-that-feel-like-air',
    title: 'Fabrics that feel like air',
    tag: 'Fabric',
    excerpt:
      'Tencel, washed linen, and featherweight cotton — a field guide to fabrics that breathe.',
    image: IMAGES.thumb3,
    date: 'Jan 28, 2026',
    readTime: '4 min read',
    content: [
      'Fabric is the difference between a shirt you tolerate and a shirt you reach for every morning. The lightest options share one trait: fibres that manage moisture instead of trapping it against the skin.',
      'Tencel leads the pack — silky, wrinkle-resistant, and cool to the touch. Washed linen follows with more texture and an effortless crease that looks intentional rather than messy. For everyday basics, a high-quality combed cotton at a lower GSM outperforms thick, stiff alternatives.',
      'When shopping, check the label before the price tag. A 120 GSM Tencel tee will outlast and out-comfort a heavier fast-fashion equivalent, wash after wash.',
    ],
  },
  {
    slug: 'capsule-wardrobe-guide',
    title: 'The 12-piece capsule wardrobe, solved',
    tag: 'Guides',
    excerpt:
      'Twelve versatile pieces, thirty-plus outfits. The math behind a wardrobe that dresses itself.',
    image: IMAGES.seasonLarge,
    date: 'Jan 20, 2026',
    readTime: '8 min read',
    content: [
      'A capsule wardrobe is an exercise in compatibility: every piece must work with nearly every other piece. That means a disciplined palette — two neutrals, one accent — and silhouettes that share a common language.',
      'The twelve: two tees, one shirt, one knit, one jacket, two trousers, one denim, one dress or blazer, two shoes, one accessory. Count them and notice what is missing — nothing statement, nothing single-outfit.',
      'The payoff is mornings without decisions. When everything matches, getting dressed becomes selection rather than problem-solving, and each piece earns its cost-per-wear within a single season.',
    ],
    quote: 'When everything matches, getting dressed becomes selection rather than problem-solving.',
  },
  {
    slug: 'denim-fits-explained',
    title: 'Every denim fit, explained in plain terms',
    tag: 'Guides',
    excerpt:
      'Straight, relaxed, wide, tapered — what the labels actually mean for your legs.',
    image: IMAGES.seasonPortrait,
    date: 'Jan 14, 2026',
    readTime: '5 min read',
    content: [
      'Denim naming has drifted into marketing fog, but the geometry is simple. Ignore the names and read three measurements: rise, thigh, and leg opening. Those numbers determine everything about how jeans sit and drape.',
      'Straight is the baseline — consistent width from knee to hem. Tapered narrows below the knee and works best with sneakers. Wide and relaxed add volume through the whole leg and pair with chunkier footwear to balance the silhouette.',
      'When trying on, sit down before deciding. A fit that works standing but binds at the hip will spend its life in the drawer.',
    ],
  },
  {
    slug: 'street-style-culture',
    title: 'Where street style actually comes from',
    tag: 'Culture',
    excerpt:
      'From Harajuku to Lagos to the runway — tracing how sidewalk looks move the whole industry.',
    image: IMAGES.motionOrange,
    date: 'Jan 7, 2026',
    readTime: '7 min read',
    content: [
      'Long before mood boards, style moved through sidewalks. The most influential fashion images of the last forty years were not shot in studios — they were captured outside shows, in markets, and on subway platforms.',
      'The pipeline is well documented now: subcultures invent, street photographers amplify, fast fashion copies, luxury houses legitimise. Each step dilutes the original context a little, which is why credit and history matter when you wear the result.',
      'The healthiest way to engage is to learn the reference. Knowing why cargo pockets, varsity jackets, or Ankara prints look the way they do turns imitation into appreciation.',
    ],
  },
  {
    slug: 'colour-theory-wardrobe',
    title: 'Colour theory for people who wear black',
    tag: 'Styling',
    excerpt:
      'A gentle on-ramp to colour: one accent, three neutrals, and the 60-30-10 rule.',
    image: IMAGES.motionBlue,
    date: 'Dec 30, 2025',
    readTime: '5 min read',
    content: [
      'If your wardrobe is a sea of black, the leap to colour feels risky — but it does not require a personality transplant. The 60-30-10 rule keeps things safe: 60 percent dominant neutral, 30 percent secondary neutral, 10 percent accent.',
      'Start with one accent in a shade you already like — olive, rust, cobalt, sand. Wear it in a single piece against your usual neutrals and let it be the only loud thing in the outfit.',
      'Over time the accent category expands naturally. Most lifelong colour-wearers started with a single pair of trousers or a single knit they could not stop reaching for.',
    ],
    quote: 'Let one thing be loud. Everything else holds the ladder.',
  },
  {
    slug: 'care-repair-clothes',
    title: 'Wash less, repair more: make clothes last years',
    tag: 'Fabric',
    excerpt:
      'Cold cycles, air drying, and a needle and thread — the unglamorous habits that double garment life.',
    image: IMAGES.fabric,
    date: 'Dec 18, 2025',
    readTime: '6 min read',
    content: [
      'The average garment is washed far more often than it needs to be, and every hot cycle costs fibres. Cold water cleans just as well for daily wear, and air drying eliminates the single most damaging step in garment care.',
      'Learn three repairs — a fallen hem, a loose button, a small seam split — and you will rescue most of what currently heads to donation bags. Each takes under fifteen minutes with a basic kit.',
      'Buy with care in mind: natural fibres with tight weaves, reinforced seams, and corozo or metal buttons rather than thin plastic. Durability is visible if you know where to look.',
    ],
  },
  {
    slug: 'dressing-for-occasion',
    title: 'Dress codes, decoded: what to actually wear',
    tag: 'Guides',
    excerpt:
      'Smart casual, cocktail, black tie optional — translating invitation language into outfits.',
    image: IMAGES.hairFlow,
    date: 'Dec 9, 2025',
    readTime: '6 min read',
    content: [
      'Dress codes fail because nobody defines them. Smart casual is the worst offender — it spans everything from dark denim with a blazer to a full suit without a tie. When in doubt, ask the host for one reference photo.',
      'Cocktail means a suit or an equivalent polished set — texture and colour are welcome, shorts and sneakers are not. Black tie optional means a tux is ideal but a dark suit with formal details passes comfortably.',
      'The universal safety net: overdressed beats underdressed by a wide margin. You can always remove a tie; you cannot conjure a blazer from nothing.',
    ],
  },
];
