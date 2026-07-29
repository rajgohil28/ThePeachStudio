"use client";

import React, { useEffect } from "react";
import { getAssetPath } from "@/utils/paths";
import styles from "./ProjectDetail.module.css";

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  dimensions: string;
  materials: string;
  heroImage: string;
  focusImage: string;
  middleBanner?: string;
  extraGridImages?: string[];
  btsImages: string[];
}

// Complete 15-project high-fidelity database harvested from Figma
const projectsData: ProjectData[] = [
  {
    id: "sealink",
    title: "sealink",
    subtitle: "Facebook Office, Mumbai",
    quote: "“The sun above. The ocean below...”",
    description: "Inspired by the Bandra–Worli Sea Link, this mural reimagines the city as a mirage where movement, light, and water converge. The palette draws from Mumbai’s coastal hues, layered with the expressive energy of Van Gogh–like strokes. The moment captured sits at the horizon, where day softens and two powerful forces—the sun and the ocean meet, connected by the bridge between them.",
    dimensions: "8 ft (h) X 23 ft (w)",
    materials: "Acrylic paints, Asian royal water-base paints and threads on wall",
    heroImage: getAssetPath("/images/projects/2712b32e-e4c6-4b8c-97a6-d0b69d4ca284.jpg"),
    focusImage: getAssetPath("/images/projects/c5a3da82-82f5-415a-88f4-b4eaa213b93b.jpg"),
    middleBanner: getAssetPath("/images/projects/2712b32e-e4c6-4b8c-97a6-d0b69d4ca284.jpg"),
    btsImages: [
      getAssetPath("/images/projects/728f7ed9-20cf-489d-aa0c-e0d1e00aa74e.jpg"),
      getAssetPath("/images/projects/ea3ec1ae-21d0-45bb-89b8-da7e419db017.jpg"),
      getAssetPath("/images/projects/ff51dba6-4caa-4cd8-8682-a03c6293164c.jpg"),
      getAssetPath("/images/projects/fb7986b6-f743-4e76-a950-32a6aa02fd4d.jpg"),
      getAssetPath("/images/projects/66325075-34fb-4b57-8d65-f129efa54e75.jpg"),
      getAssetPath("/images/projects/35f29aa2-3488-442d-ada8-48a9996be399.jpg"),
      getAssetPath("/images/projects/6e3aee7f-78e3-41d5-a535-cf5ec9bf809c.jpg")
    ]
  },
  {
    id: "soul-of-konkan",
    title: "the soul of konkan",
    subtitle: "The Fern Samali Resort, Dapoli, Series by Marriott",
    quote: "“Where waves meet red earth, Stories take shape”",
    description: "This large-scale reception mural draws inspiration from the soul of Konkan—its lush orchards, abundant coastline, native birds, and iconic tiled roofs. Crafted in layered plywood modules, the grid introduces rhythm and depth, allowing every texture and silhouette to become a fragment of the region's living landscape. It feels timeless, poetic, and architectural—perfect for a hospitality project where the design celebrates the identity of a place.",
    dimensions: "11 ft (h) X 21 ft (w)",
    materials: "Wooden ply of 8mm and 10 mm, acrylic putty, asian royal paints water base and coated with waterproof lotion",
    heroImage: getAssetPath("/images/projects/85a1c9f7-ff88-44c2-a13c-6ecb16e64d45.jpg"),
    focusImage: getAssetPath("/images/projects/07eec494-c213-4b57-bd50-d0de3a932952.jpg"),
    middleBanner: getAssetPath("/images/projects/2a25f7b3-4d33-479c-baae-4796f951b3b9.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/56413af5-6731-43a1-9012-7aa2e7fd1306.jpg"),
      getAssetPath("/images/projects/85a1c9f7-ff88-44c2-a13c-6ecb16e64d45.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/5212837f-a551-4fcb-bc72-89c77597b4c2.jpg"),
      getAssetPath("/images/projects/13666dde-97cd-4922-adf4-3af5f4f8c475.jpg"),
      getAssetPath("/images/projects/912006c7-94dd-44cc-b237-e90f5e8e0c41.jpg"),
      getAssetPath("/images/projects/ad89f2e5-a7b7-41de-8f64-882173acb379.jpg"),
      getAssetPath("/images/projects/dc002703-8f5f-40aa-b710-813ba14ad107.jpg"),
      getAssetPath("/images/projects/f2582039-08fc-4b22-814c-044acdfaebed.jpg"),
      getAssetPath("/images/projects/ce554a0e-afed-4405-b96f-3e3f9ae490f4.jpg")
    ]
  },
  {
    id: "strategy-meets-space",
    title: "where strategy meets space",
    subtitle: "Oritso Office, Noida",
    quote: "“Built with intention. Experienced with purpose.”",
    description: "Having partnered with Oritso on their branding and website, the brand already felt like an extension of our own team. This space was designed to bring that identity to life—reflecting the culture, inspiring everyday behaviours, and creating an immersive brand experience. From concept-driven digital artworks to bespoke installations, feature walls, and custom-designed elements. Unified through a carefully curated palette, graphics, and spatial concepts, every corner contributes to a cohesive design language—creating an environment that is both functional and deeply connected to the people who inhabit it.",
    dimensions: "Multiple surfaces - covering 3000 sq. ft. area",
    materials: "Canvas Paintings, Various Materials - Vinyl, 3D Acrylic, Chrome, Magnets.",
    heroImage: getAssetPath("/images/projects/38b727cb-7643-4261-aad2-f58cbb9e68ed.jpg"),
    focusImage: getAssetPath("/images/projects/14187cc3-6557-4b8a-8ff7-572960153d43.jpg"),
    middleBanner: getAssetPath("/images/projects/f6230d06-e794-41a5-8585-81b18eb41b04.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/c7e7e78a-7d17-463d-a21f-4be913ee7074.jpg"),
      getAssetPath("/images/projects/7caa83cd-bf81-4365-a260-defbb16b57c2.jpg"),
      getAssetPath("/images/projects/580b9a0c-6966-4257-9c80-be64b60e9f79.jpg"),
      getAssetPath("/images/projects/96efa7d7-d32c-4a28-b914-652d6615e2ca.jpg"),
      getAssetPath("/images/projects/8002ffd4-431c-4058-bd41-593d08a12db7.jpg"),
      getAssetPath("/images/projects/3ecc5068-8fc2-4e80-b5f7-2f2480c9f7c9.jpg"),
      getAssetPath("/images/projects/bc214ae5-2c37-4dfe-8aa6-e54fc806afa4.jpg"),
      getAssetPath("/images/projects/547fe2f5-4a85-431e-a244-eccf73702ec9.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/d2136d9a-e180-4fc4-8045-4dd814b5cb23.jpg"),
      getAssetPath("/images/projects/06bc119f-ad37-4d7e-bf61-c02f82ddf47a.jpg"),
      getAssetPath("/images/projects/547fe2f5-4a85-431e-a244-eccf73702ec9.jpg"),
      getAssetPath("/images/projects/91651cd6-a6fc-4320-ae7b-f986b724e6d1.jpg")
    ]
  },
  {
    id: "mumbai-in-pixels",
    title: "mumbai in pixels",
    subtitle: "Facebook Office, Mumbai",
    quote: "“A city always live, built one block at a time”",
    description: "A custom LEGO wall installation created for Facebook Live at the Facebook, Mumbai office. Iconic city landmarks—from the Gateway of India to the Bandra Worli Sea Link—are reimagined through playful LEGO forms. Subtle social media emojis echo real-time reactions and engagement, blending Mumbai’s cultural energy with Facebook’s digital language.",
    dimensions: "7.5 ft (h) X 8 ft (w)",
    materials: "Lego pieces on lego plates",
    heroImage: getAssetPath("/images/projects/34d9524a-251f-4d3c-8fe9-6e0beec8a3fb.jpg"),
    focusImage: getAssetPath("/images/projects/e4622e01-cd05-461d-bc1b-527e5418c695.jpg"),
    middleBanner: getAssetPath("/images/projects/34d9524a-251f-4d3c-8fe9-6e0beec8a3fb.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/d4e94ad7-2598-495a-a3a4-167b9fd43240.jpg"),
      getAssetPath("/images/projects/659596f4-92e4-4c5a-8bbc-f422811be660.jpg"),
      getAssetPath("/images/projects/7325f113-83fd-4fa5-9c16-e16cc68c76b1.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/f4ab5ab2-c9aa-4657-96df-e543deb9cb48.jpg"),
      getAssetPath("/images/projects/1806ed41-a34f-4d6f-b161-cc9cefe2a04e.jpg"),
      getAssetPath("/images/projects/1e728d83-5b1a-492d-84da-77783acda3ca.jpg")
    ]
  },
  {
    id: "elephant-mandala",
    title: "the elephant mandala",
    subtitle: "S'thetic Design Studio",
    quote: "“Symbols of belonging. Stories of togetherness”",
    description: "Inspired by the timeless craft of Kutch, this Lippan artwork celebrates the beauty of earth, mirrors, and light. At its heart, elephants move together in harmony—a symbol of family, unity, and enduring bonds. Sculpted in layers of mud and adorned with hand-cut mirrors, every raised surface captures shifting shadows, allowing the artwork to transform throughout the day as light breathes life into its intricate details.",
    dimensions: "7.5 ft (h) X 7.5 ft (w)",
    materials: "Asian paints - Acrylic putty, Fevicol, Mirrors, Dry putty",
    heroImage: getAssetPath("/images/projects/4deee7b8-3698-4419-90c9-4cc3673be481.jpg"),
    focusImage: getAssetPath("/images/projects/41a66ca4-f2ce-418b-9083-1841e2220411.jpg"),
    middleBanner: getAssetPath("/images/projects/4deee7b8-3698-4419-90c9-4cc3673be481.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/7a258596-8418-4e2b-b7ff-1354a4a31923.jpg"),
      getAssetPath("/images/projects/7a258596-8418-4e2b-b7ff-1354a4a31923.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/9e410d36-787e-4963-8694-44117858d303.jpg"),
      getAssetPath("/images/projects/0e771e4a-e785-499b-ac62-29442e97c1e9.jpg"),
      getAssetPath("/images/projects/d7c57e80-fcfa-4439-a26f-7a528caaaf0a.jpg")
    ]
  },
  {
    id: "palm-arc",
    title: "under the palm arc",
    subtitle: "Muse Lab",
    quote: "“Tropical, but quiet. Nature held at rest.”",
    description: "Designed around the client’s colour palette, this bedroom painting draws from the client’s love for tropical plants and trees. Lush foliage wraps gently around the bed-back, creating an immersive yet restrained tropical narrative. Through controlled tones, layered illustrations, and a focused composition, the artwork balances nature with rest—bringing the essence of the tropics while preserving the calm of a bedroom.",
    dimensions: "7 ft (h) X 10 ft (w)",
    materials: "Asian Royal Paints on wall",
    heroImage: getAssetPath("/images/projects/217fac71-a887-467b-9b01-c37c2b80c61c.jpg"),
    focusImage: getAssetPath("/images/projects/12e0c0f2-b5ae-4e68-87c6-6d3265991014.jpg"),
    middleBanner: getAssetPath("/images/projects/217fac71-a887-467b-9b01-c37c2b80c61c.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/5b218f34-fed6-4a0a-8176-115937397994.jpg"),
      getAssetPath("/images/projects/1e0b350d-2109-4daa-ace7-cf029ff96b09.jpg"),
      getAssetPath("/images/projects/c18dcaf6-70d7-4069-8ee5-b2e080fd0def.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/b1dfb16e-7e77-4773-af2f-9537f6c2591d.jpg"),
      getAssetPath("/images/projects/2ea6da8f-3f4d-41d6-8934-3ba3dd023a3a.jpg"),
      getAssetPath("/images/projects/dc116394-e276-4aa5-8380-d71166d20aff.jpg"),
      getAssetPath("/images/projects/86dec7e8-0dcc-4fbc-9625-1d6c93454eb2.jpg"),
      getAssetPath("/images/projects/ccbc0a4f-75e1-48b5-92bb-6446519085ab.jpg"),
      getAssetPath("/images/projects/41d14423-7591-4ad0-8a73-2eef8dba2058.jpg"),
      getAssetPath("/images/projects/ba7b95cf-b3e5-40e0-ad96-c6d340b9abf9.jpg")
    ]
  },
  {
    id: "bloomspace",
    title: "bloomspace",
    subtitle: "ADCPL Firm",
    quote: "“A season in bloom, Held within the pillars.”",
    description: "These artworks are created on architectural pillars featuring an interesting textured surface. As the pillars face a lush green garden, the compositions are inspired by vibrant floral elements. The colourful flower arrangements create a visual dialogue between the built structure and the surrounding landscape, enhancing the connection between interior and exterior spaces.",
    dimensions: "15 ft (h) X 3 ft (w)",
    materials: "Acrylic putty, ply, acrylic colours",
    heroImage: getAssetPath("/images/projects/b332c5e6-7c34-498e-b3d8-09ca0f5b6a25.jpg"),
    focusImage: getAssetPath("/images/projects/6d29a872-497e-4923-85d6-747bdbc278c3.jpg"),
    middleBanner: getAssetPath("/images/projects/3982e285-83e8-470e-95eb-d03caeca7aee.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/647fc052-11c4-457a-8438-bb7168e91204.jpg"),
      getAssetPath("/images/projects/8bab54a8-0901-4bc6-bbf6-a49e38e73938.jpg"),
      getAssetPath("/images/projects/f1378af3-0a20-4ef5-ad1f-124e93f8473d.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/4179f470-7250-421b-b9fe-2bee7953c65c.jpg"),
      getAssetPath("/images/projects/ae79c050-3874-4a4c-bab1-a621c8633cf9.jpg"),
      getAssetPath("/images/projects/90f4c48d-878c-43ce-a886-391ac23cc3ac.jpg"),
      getAssetPath("/images/projects/be89b0bb-a5d0-4ab1-af9f-e0a3ff5f09bb.jpg")
    ]
  },
  {
    id: "city-threshold",
    title: "a city of every threshold",
    subtitle: "Capgemini Office, Mumbai",
    quote: "“The spirit of Mumbai, Framed within every doorway”",
    description: "Each conference room door features an illustrated fragment of Mumbai— familiar, local, unmistakable. Drawn in black and white, anchored by Capgemini brand accents, the artwork grounds a global organisation in the city it works from.",
    dimensions: "8 ft (h) X 3 ft (w)",
    materials: "Acrylic paint on wooden doors",
    heroImage: getAssetPath("/images/projects/43dd91de-461d-42b7-bc99-c1446954d767.jpg"),
    focusImage: getAssetPath("/images/projects/79e61ae1-cb9d-4da2-8039-3bcfea6a5ccd.jpg"),
    middleBanner: getAssetPath("/images/projects/43dd91de-461d-42b7-bc99-c1446954d767.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/e0ee2294-63e0-4ea4-856f-08364eb29c87.jpg"),
      getAssetPath("/images/projects/160cfef8-19c2-44d5-ba56-7f8090a98a23.jpg"),
      getAssetPath("/images/projects/4dd949a1-3660-454b-b3ce-b94e64f99df3.jpg"),
      getAssetPath("/images/projects/a2ed97e9-c8eb-4e34-97d6-c2c4b2dbc786.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/ac004bf4-8bd9-4cac-8a33-0ed92bd4d933.jpg"),
      getAssetPath("/images/projects/56791d41-7d03-45bd-8bdb-6bb4c9daf2ca.jpg"),
      getAssetPath("/images/projects/b22e46a7-4541-4811-96c6-4bb6b04622f7.jpg"),
      getAssetPath("/images/projects/761678a0-63ae-4dc3-97c8-7f9e4c62c97a.jpg")
    ]
  },
  {
    id: "birdsong-october",
    title: "birdsong in october",
    subtitle: "Muse Lab",
    quote: "“The song of a bird, Kept inside the room”",
    description: "Inspired by nature, local birds, and floral elements, this master bedroom feature wall painting creates an elegant natural backdrop. The soft textures and hand-painted illustration bring a calm, organic narrative to the space, creating a beautiful natural canvas.",
    dimensions: "9 ft (h) X 12 ft (w)",
    materials: "Asian Royal Paints on wall",
    heroImage: getAssetPath("/images/projects/71c64222-68d3-4f4d-a7f4-a40a45d379de.jpg"),
    focusImage: getAssetPath("/images/projects/3a3be2ef-3193-43de-856c-e4526a98bffe.jpg"),
    middleBanner: getAssetPath("/images/projects/dca28a98-7825-4932-a609-f970520e2000.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/00e168b8-8406-4343-a57e-3bde89976dea.jpg"),
      getAssetPath("/images/projects/df709332-a06f-44a5-af25-8602708b3be8.jpg"),
      getAssetPath("/images/projects/8b3e5192-1ed1-4a62-b019-894f97fa2899.jpg"),
      getAssetPath("/images/projects/b6bcf019-396a-4171-ad4b-26847cbcf903.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/7c583c4d-485a-4a6a-a66e-bcd7cd6695e6.jpg"),
      getAssetPath("/images/projects/1785ec89-7ff1-40f4-b237-fc0866b953fb.jpg"),
      getAssetPath("/images/projects/fa98eb84-cdac-47f0-be42-d234cf98a03d.jpg"),
      getAssetPath("/images/projects/df709332-a06f-44a5-af25-8602708b3be8.jpg")
    ]
  },
  {
    id: "many-stories",
    title: "many stories, one city!",
    subtitle: "Facebook Office, Mumbai",
    quote: "“The city in sketches, Built on the walls of ideas”",
    description: "An artwork for Facebook Live in the Facebook, Mumbai office. Using a clean black sketch outline on a bright yellow backdrop, the composition frames fragments of local daily lives, iconic yellow-black taxis, cutting chai, local trains, and historical architecture - celebrating the stories that bring Mumbai's community together.",
    dimensions: "7.5 ft (h) X 12 ft (w)",
    materials: "Asian Royal Paints on wall",
    heroImage: getAssetPath("/images/projects/3244ddbb-5069-4df0-82b4-fed4fd22f5d6.jpg"),
    focusImage: getAssetPath("/images/projects/3244ddbb-5069-4df0-82b4-fed4fd22f5d6.jpg"),
    middleBanner: getAssetPath("/images/projects/3244ddbb-5069-4df0-82b4-fed4fd22f5d6.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/a25307fa-aa19-474f-ac1d-9a18ad5151f2.jpg"),
      getAssetPath("/images/projects/b9ffbdfb-91c0-4e66-bc3d-c667dfac426c.jpg"),
      getAssetPath("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/f7d3d71c-9d42-42d4-9d1d-8511cc71dc0f.jpg"),
      getAssetPath("/images/projects/6b4fe0af-3ce3-40f0-b1c8-f1fef5f2f87a.jpg"),
      getAssetPath("/images/projects/0ee31ecd-4d33-4085-acc9-717763be15e1.jpg")
    ]
  },
  {
    id: "tree-of-life",
    title: "tree of life",
    subtitle: "Facebook Office, Mumbai",
    quote: "“Life held in details, Expressed in shapes”",
    description: "A paper-cut artwork created for Facebook Live in the Facebook, Mumbai office. Inspired by the Gond traditional art, this piece celebrates the natural community, animals, and life. The modular layers introduce architectural rhythm and depth, reflecting the cultural heritage in a modern digital environment.",
    dimensions: "7.5 ft (h) X 15 ft (w)",
    materials: "Paper cut layers, custom frame",
    heroImage: getAssetPath("/images/projects/ace1bebf-c8e9-476d-b105-693b3a425f08.jpg"),
    focusImage: getAssetPath("/images/projects/c82aeeed-b9e7-4f3a-9967-e67513330b29.jpg"),
    middleBanner: getAssetPath("/images/projects/ace1bebf-c8e9-476d-b105-693b3a425f08.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/1593ce88-a955-418e-8fc7-593fa7264406.jpg"),
      getAssetPath("/images/projects/03c8e7e0-2cb0-4aac-b51e-943da0c350b0.jpg"),
      getAssetPath("/images/projects/77c36f99-c8d9-439d-a2a7-f9e8e9830e4a.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/3898ba83-2147-4d05-b40f-eb532b3b0aa8.jpg"),
      getAssetPath("/images/projects/64bdf05e-d411-4c2f-88f9-b5b0e7e55ad4.jpg"),
      getAssetPath("/images/projects/f1c628a1-ce9b-4b3b-ac2d-5077fb0759e3.jpg"),
      getAssetPath("/images/projects/ff07d7ab-69ce-4e8b-8ffd-dff5080433d5.jpg")
    ]
  },
  {
    id: "maa-saraswati",
    title: "maa saraswati",
    subtitle: "Oritso Office, Noida",
    quote: "“The flow of learning. The rhythm of wisdom.”",
    description: "A custom wall painting celebrating Maa Saraswati at the Oritso Office reception. Reimagining the traditional iconography through stylized strokes and an inspiring brand-accents palette, the artwork reflects Oritso's identity, design craft, and cultural focus.",
    dimensions: "8 ft (h) X 8 ft (w)",
    materials: "Asian Royal Paints on wall",
    heroImage: getAssetPath("/images/projects/826acde8-bb1e-4907-94b0-c2e7da6ab5b4.jpg"),
    focusImage: getAssetPath("/images/projects/826acde8-bb1e-4907-94b0-c2e7da6ab5b4.jpg"),
    middleBanner: getAssetPath("/images/projects/826acde8-bb1e-4907-94b0-c2e7da6ab5b4.jpg"),
    btsImages: [
      getAssetPath("/images/projects/93b80628-3b5d-4bc1-939e-372276ee8589.jpg"),
      getAssetPath("/images/projects/7c38a905-c18b-415b-a3d3-fd25e0638542.jpg"),
      getAssetPath("/images/projects/43f0b2b1-4671-43ed-9729-20042bcb4a2b.jpg")
    ]
  },
  {
    id: "strings-of-sound",
    title: "strings of sound made visible",
    subtitle: "Oritso Office, Noida",
    quote: "“Sound visualized. Vibrations captured.”",
    description: "Bespoke acoustic feature canvas installations created for Oritso's conference and huddle spaces. Intricate geometric motifs symbolize sound waves, and local architectural structures meet digital rhythm. Functional, gorgeous, and brand-driven, enhancing creative vibes throughout.",
    dimensions: "5 ft (h) X 5 ft (w)",
    materials: "Acrylic on Acoustic boards, custom canvas frames",
    heroImage: getAssetPath("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg"),
    focusImage: getAssetPath("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg"),
    middleBanner: getAssetPath("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg"),
    btsImages: [
      getAssetPath("/images/projects/fa98eb84-cdac-47f0-be42-d234cf98a03d.jpg"),
      getAssetPath("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg")
    ]
  },
  {
    id: "portrait-landscape",
    title: "a portrait of landscape",
    subtitle: "The Samudra House, Kashid",
    quote: "“The earth and sea, Framed in one gaze”",
    description: "A private beach house lounge feature mural. Inspired by Caspar David Friedrich's landscape vistas, the artwork reimagines Kashid's coast as an expressive romantic landscape painting. Hand-crafted textures bring a deep natural narrative that completely elevates the beach house's modern design.",
    dimensions: "9 ft (h) X 14 ft (w)",
    materials: "Asian Royal Paints, structural plaster on wall",
    heroImage: getAssetPath("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg"),
    focusImage: getAssetPath("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg"),
    middleBanner: getAssetPath("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg"),
    btsImages: [
      getAssetPath("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg"),
      getAssetPath("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg")
    ]
  },
  {
    id: "rituals-adornment",
    title: "rituals of adornment",
    subtitle: "Private Residence, Pune",
    quote: "“Collected over generations. Treasured in a moment”",
    description: "A hand-painted composition of Maharashtrian traditional and adornment accessories, created across multiple canvases to frame the dressing area - celebrating timeless rituals of beauty and heritage.",
    dimensions: "1 ft (h) X 1 ft (w), multiple frames",
    materials: "Acrylic on canvas",
    heroImage: getAssetPath("/images/projects/c67d1d8f-1c00-424c-8d47-0b4c2dee8236.jpg"),
    focusImage: getAssetPath("/images/projects/50ba21c6-c16f-4438-b5d0-c528d68f317e.jpg"),
    middleBanner: getAssetPath("/images/projects/c67d1d8f-1c00-424c-8d47-0b4c2dee8236.jpg"),
    extraGridImages: [
      getAssetPath("/images/projects/e8699605-7336-4a32-a37d-3f78dc8c8616.jpg"),
      getAssetPath("/images/projects/3193c6b3-1f80-4b6a-b94e-5bc8c1c25439.jpg")
    ],
    btsImages: [
      getAssetPath("/images/projects/72dd8dc9-e0f9-4b77-874a-2ef5072c8fa6.jpg"),
      getAssetPath("/images/projects/37cf2e7a-db16-48d6-8dfa-c06619197758.jpg"),
      getAssetPath("/images/projects/85ac08a4-a632-47cb-8940-927c90fa73dd.jpg"),
      getAssetPath("/images/projects/ed2ba671-e8c4-4ac3-b4b1-e1f03e75a862.jpg"),
      getAssetPath("/images/projects/acc28d5f-1656-47d6-9501-c6628ad05a5e.jpg"),
      getAssetPath("/images/projects/e6dcf6e7-52d8-4479-8c60-96b1137e547c.jpg")
    ]
  }
];

interface ProjectDetailProps {
  projectId: string;
  onClose: () => void;
}

export default function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  const project = projectsData.find((p) => p.id === projectId);

  // Lock body scroll while project details are open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) {
    return null;
  }

  return (
    <div className={styles.projectMain}>
      {/* Back Button */}
      <button className={styles.backButton} onClick={onClose} aria-label="Go back to landing page">
        ← Back to Home
      </button>

      {/* Hero Section */}
      <header className={styles.heroSection}>
        <div 
          className={styles.heroBackground} 
          style={{ backgroundImage: `url(${project.heroImage})` }} 
        />
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          {project.subtitle && <p className={styles.projectSubtitle}>{project.subtitle}</p>}
        </div>
      </header>

      {/* Content Section - High-fidelity layout matching Figma designs */}
      <section className={styles.contentSection}>
        <div className={styles.leftContent}>
          <blockquote className={styles.quote}>
            {project.quote}
          </blockquote>
          
          <p className={styles.description}>
            {project.description}
          </p>

          <div className={styles.specs}>
            <p><strong>Dimensions:</strong> {project.dimensions}</p>
            <p><strong>Materials:</strong> {project.materials}</p>
          </div>
        </div>
        
        <div className={styles.rightContent}>
          <div className={styles.focusImageContainer}>
            <img 
              src={project.focusImage} 
              alt={`${project.title} focus detail`} 
              className={styles.focusImage}
            />
          </div>
        </div>
      </section>

      {/* Middle Immersive Banner Section (if available) */}
      {project.middleBanner && (
        <section className={styles.immersiveSection}>
          <div className={styles.immersiveContainer}>
            <img 
              src={project.middleBanner} 
              alt={`${project.title} in context`} 
              className={styles.immersiveImage}
            />
          </div>
        </section>
      )}

      {/* Optional Extra Grid Images */}
      {project.extraGridImages && project.extraGridImages.length > 0 && (
        <section className={styles.gridSection}>
          <div className={styles.imageGrid}>
            {project.extraGridImages.map((imgUrl, index) => (
              <div key={index} className={styles.gridImageContainer}>
                <img 
                  src={imgUrl} 
                  alt={`${project.title} detail ${index + 1}`} 
                  className={styles.gridImage}
                />
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Behind the Scenes Section */}
      <section className={styles.btsSection}>
        <h2 className={styles.btsHeading}>behind the scenes</h2>
        <div className={styles.btsTickerContainer}>
          <div className={styles.btsTickerTrack}>
            {/* First Set of Images */}
            {project.btsImages.map((imgUrl, index) => (
              <div key={`bts-1-${index}`} className={styles.btsCard}>
                <img 
                  src={imgUrl} 
                  alt={`${project.title} creation progress ${index + 1}`} 
                  className={styles.btsImage}
                />
              </div>
            ))}
            {/* Second Set of Images for seamless looping */}
            {project.btsImages.map((imgUrl, index) => (
              <div key={`bts-2-${index}`} className={styles.btsCard}>
                <img 
                  src={imgUrl} 
                  alt={`${project.title} creation progress ${index + 1}`} 
                  className={styles.btsImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
