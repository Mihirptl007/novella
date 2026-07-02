// Products data
export interface Product {
  id: number;
  name: string;
  shortName: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Soda Ash Light",
    shortName: "SODA ASH LIGHT",
    description: "Soda ash is the trade name for sodium carbonate. It is a white anhydrous powder that is available in powdered or granular material. It is essentially used in the manufacturing of glass.",
    category: "Basic Chemicals"
  },
  {
    id: 2,
    name: "Soda Ash Dense",
    shortName: "SODA ASH DENSE",
    description: "Soda ash dense, Sodium Carbonate also known as disodium carbonate is a chemical substance white in colour and its aqueous solution is clear and colorless.",
    category: "Basic Chemicals"
  },
  {
    id: 3,
    name: "Sodium Tri Polyphosphate (STPP)",
    shortName: "STPP",
    description: "STPP (sodium tripolyphosphate) is widely used in detergent industries from many years. Sodium triphosphate is an inorganic compound with formula Na5P3O10.",
    category: "Specialty Chemicals"
  },
  {
    id: 4,
    name: "Sodium Ligno Sulphonate (SLS)",
    shortName: "SLS",
    description: "Sodium lignosulfonate is used in the food industry as a de-foaming agent for paper production and in adhesives for items that come in contact with food. It has preservative properties.",
    category: "Specialty Chemicals"
  },
  {
    id: 5,
    name: "Caustic Soda Flakes",
    shortName: "CAUSTIC SODA FLAKES",
    description: "Caustic soda flakes is majorly used in textiles processing, soap and detergent, paper and pulp industry. It is also used as an intermediate for wide variety of organic chemicals.",
    category: "Basic Chemicals"
  },
  {
    id: 6,
    name: "Caustic Soda Lye",
    shortName: "CAUSTIC SODA LYE",
    description: "Caustic Soda Lye, also known as Sodium Hydroxide (NaOH), is a powerful and versatile chemical widely used in various industries. Its strong alkaline nature makes it an essential ingredient.",
    category: "Basic Chemicals"
  },
  {
    id: 7,
    name: "Borax Pentahydrate",
    shortName: "BORAX PENTAHYDRATE",
    description: "Borax is a salt (ionic compound), a hydrated borate of sodium. It is commonly available in powder or granular form and has many industrial applications.",
    category: "Boron Compounds"
  },
  {
    id: 8,
    name: "Boric Acid",
    shortName: "BORIC ACID",
    description: "Boric Acid Granular (H3BO3) is a highly versatile compound widely used across various industries for its unique chemical and physical properties. In the glass and ceramics industry.",
    category: "Boron Compounds"
  },
  {
    id: 9,
    name: "Borax Decahydrate",
    shortName: "BORAX DECAHYDRATE",
    description: "Borax Decahydrate available in granular and crystal forms. Widely used in cleaning products, cosmetics, and industrial applications.",
    category: "Boron Compounds"
  },
  {
    id: 10,
    name: "Melamine",
    shortName: "MELAMINE",
    description: "Melamine is combined with formaldehyde and other agents to produce melamine resins. Such resins are characteristically durable thermosetting plastic used in high-pressure applications.",
    category: "Polymers & Resins"
  },
  {
    id: 11,
    name: "Acrylamide",
    shortName: "ACRYLAMIDE",
    description: "The majority of acrylamide is used to manufacture various polymers, especially polyacrylamide. This water-soluble polymer, which has very low toxicity, is widely used as thickener and flocculating agent.",
    category: "Polymers & Resins"
  },
  {
    id: 12,
    name: "Acrylic Acid",
    shortName: "ACRYLIC ACID",
    description: "The majority of acrylamide is used to manufacture various polymers, especially polyacrylamide. This water-soluble polymer, which has very low toxicity, is widely used as thickener.",
    category: "Polymers & Resins"
  },
  {
    id: 13,
    name: "Di Ethylene Glycol (DEG)",
    shortName: "DEG",
    description: "Diethylene Glycol (DEG) is a versatile chemical widely used across various industries due to its excellent solvent properties, high boiling point, and hygroscopic nature.",
    category: "Specialty Chemicals"
  },
  {
    id: 14,
    name: "Poly Aluminium Chloride (PAC)",
    shortName: "PAC",
    description: "Poly Aluminium Chloride (PAC) is a versatile coagulant widely used in water treatment and various industrial applications. In water purification, it is highly effective.",
    category: "Specialty Chemicals"
  },
  {
    id: 15,
    name: "Bleaching Powder",
    shortName: "BLEACHING POWDER",
    description: "Bleaching powder, or calcium hypochlorite, is a powerful chemical widely used in various applications due to its disinfecting, bleaching, and oxidizing properties.",
    category: "Specialty Chemicals"
  },
  {
    id: 16,
    name: "Sodium Bi Carbonate",
    shortName: "SODIUM BI CARBONATE",
    description: "Sodium bicarbonate, commonly known as baking soda, is a versatile compound with a wide range of applications across various fields. Medically, it is used as an antacid.",
    category: "Specialty Chemicals"
  },
  {
    id: 17,
    name: "Sodium Silicate Liquid",
    shortName: "SODIUM SILICATE",
    description: "Sodium silicate, also known as liquid glass, is a versatile compound used in a variety of industries due to its strong binding, sealing, and protective properties.",
    category: "Specialty Chemicals"
  },
  {
    id: 18,
    name: "Phosphoric Acid",
    shortName: "PHOSPHORIC ACID",
    description: "Phosphoric acid is a colorless, odorless phosphorus-containing solid, and inorganic compound with the chemical formula H3PO4. It is commonly encountered as an 85% aqueous solution.",
    category: "Specialty Chemicals"
  },
  {
    id: 19,
    name: "Acetic Acid",
    shortName: "ACETIC ACID",
    description: "Glacial acetic acid, a concentrated form of acetic acid, is a highly versatile compound with numerous industrial, commercial, and laboratory applications.",
    category: "Specialty Chemicals"
  }
];

// Industries data
export interface Industry {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const industries: Industry[] = [
  {
    id: 1,
    name: "Textiles",
    image: "/images/industry-textiles.jpg",
    description: "Chemical processing for textile manufacturing, dyeing, and finishing."
  },
  {
    id: 2,
    name: "Paper & Pulp",
    image: "/images/industry-paper.jpg",
    description: "Chemical treatment solutions for paper production and pulp processing."
  },
  {
    id: 3,
    name: "Healthcare",
    image: "/images/industry-healthcare.jpg",
    description: "Pharmaceutical-grade chemicals for medical and healthcare applications."
  },
  {
    id: 4,
    name: "Construction",
    image: "/images/industry-construction.jpg",
    description: "Chemical additives for concrete, cement, and construction materials."
  },
  {
    id: 5,
    name: "Laundry",
    image: "/images/industry-laundry.jpg",
    description: "Detergent chemicals and cleaning solutions for commercial laundry."
  },
  {
    id: 6,
    name: "Chemical Processing",
    image: "/images/industry-chemical.jpg",
    description: "Raw chemicals and intermediates for chemical manufacturing industries."
  },
  {
    id: 7,
    name: "Ceramic & Glass",
    image: "/images/ceramic-glass.jpg",
    description: "Chemicals and additives for ceramic glazing, glass processing, and high-quality finishing."
  },
  {
    id: 8,
    name: "Agro & fertilizers",
    image: "/images/agro-fertilizers.jpg",
    description: "Agricultural inputs and specialty chemicals that support crop health and improved yields."
  },
  {
    id: 9,
    name: "Plywood & Laminate",
    image: "/images/ply-laminate.jpg",
    description: "Adhesion-focused chemical solutions used in plywood and laminate manufacturing for durability."
  }
];



// Testimonials data
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We've been sourcing chemicals from your company for over few years now, and the consistency in quality and delivery has been exceptional. Their products are reliable, and the team is always proactive in offering support.",
    author: "Simpolo Group",
    company: "Valued Client"
  },
  {
    id: 2,
    quote: "The quality of chemicals we receive from your company has always met our expectations. Their team understands industry requirements well and ensures smooth communication and timely dispatches.",
    author: "Italica Tiles",
    company: "Valued Client"
  },
  {
    id: 3,
    quote: "Finding a dependable chemical supplier is not easy, but your company has proven to be just that. Their attention to compliance, quality, and customer service is truly commendable.",
    author: "L Group",
    company: "Valued Client"
  },
  {
    id: 4,
    quote: "We appreciate your company's commitment to quality and safety. Their technical knowledge and support helped us resolve a critical formulation challenge quickly.",
    author: "Sunheart Group",
    company: "Valued Client"
  },
  {
    id: 5,
    quote: "What we like most about your company is their transparency and consistency. From the first order itself, they have maintained high standards, both in product and service.",
    author: "Ostwal Group Of Industries Ltd",
    company: "Valued Client"
  },
  {
    id: 6,
    quote: "Their team is responsive, knowledgeable, and always willing to go the extra mile. The chemicals we purchase from your company perform exactly as required — no surprises, no compromises.",
    author: "Gokul Agro Resources Ltd",
    company: "Valued Client"
  },
  {
    id: 7,
    quote: "We've worked with several suppliers in the past, but your company stands out for their professionalism and product integrity. Their chemicals are dependable, and the after-sales support is excellent.",
    author: "Sudarshan Group",
    company: "Valued Client"
  },
  {
    id: 8,
    quote: "I've been using their agricultural products for a while now, and the results are great. Crop quality has improved, and pest control is much more effective. A reliable and trustworthy company!",
    author: "Jay Somnath Starch",
    company: "Valued Client"
  },
  {
    id: 9,
    quote: "This company truly understands farmers’ needs. Their pest control solutions worked great for my field. I’ve had healthier crops and fewer losses.",
    author: "Maheshwari Starchtech Pvt Ltd.",
    company: "Valued Client"
  },
  {
    id: 10,
    quote: "Very good experience so far. Their agri products are affordable, effective, and give visible results. I recommend them to fellow farmers.",
    author: "Sanjay Adhesive",
    company: "Valued Client"
  },
  {
    id: 11,
    quote: "I've been using their seeds and fertilizers, and the results are excellent. Crop growth is strong, and yields have gone up. Very happy with their quality and service.",
    author: "Borosil Limited",
    company: "Valued Client"
  },
  {
    id: 12,
    quote: "Good quality, timely delivery, and helpful support. Their products truly make a difference in farming. I trust this company completely.",
    author: "Shiva Global Agro Industries Ltd",
    company: "Valued Client"
  },
  {
    id: 13,
    quote: "Their team guided me with proper usage instructions. Easy to apply products, and great results. They really care about farmers.",
    author: "Transworld Fertichem Pvt Ltd",
    company: "Valued Client"
  },
  {
    id: 14,
    quote: "Simple solutions that bring big results. Their products helped me grow healthier crops. I’m sticking with this brand.",
    author: "Gujarat Polysol Chemicals Ltd",
    company: "Valued Client"
  },
  {
    id: 15,
    quote: "My harvest has improved since I started using their products. They offer the perfect balance of quality and cost. I recommend them with full confidence.",
    author: "Omicron Lifescience LLP",
    company: "Valued Client"
  },
  {
    id: 16,
    quote: "Reliable, safe, and consistent. Your company has proven to be a dependable partner in our supply chain. Highly recommended for anyone in the chemical industry.",
    author: "20 Micron Ltd",
    company: "Valued Client"
  },
  {
    id: 17,
    quote: "We've worked with this company for years. Consistent quality, timely deliveries, and excellent customer support make them a trusted partner.",
    author: "Varmora Group",
    company: "Valued Client"
  }
];

// Team members data
export interface TeamMember {
  id: number;
  name: string;
  role: string;
}

export const teamMembers: TeamMember[] = [
  { id: 1, name: "Vikas Patel", role: "Founder of Novella Group" },
  { id: 2, name: "Satish Patel", role: "CEO" },
  { id: 3, name: "Divyesh Borsaniya", role: "Senior Manager" },
  { id: 4, name: "Anand Patel", role: "Marketing Manager" }
];

// Partner companies data
export interface Partner {
  id: number;
  name: string;
  description: string;
}

export const partners: Partner[] = [
  { id: 1, name: "Nirma Limited", description: "Leading Indian consumer products company with diversified chemical manufacturing operations." },
  { id: 2, name: "Grasim Industries", description: "Aditya Birla Group flagship, a leader in chemicals, textiles, and cement." },
  { id: 3, name: "Kutch Chemical", description: "Specialty chemical manufacturer focused on industrial chemical solutions." },
  { id: 4, name: "Reliance Industries", description: "India's largest private sector conglomerate with extensive chemical operations." },
  { id: 5, name: "Epigral Limited", description: "Chemical manufacturing excellence with focus on chlor-alkali products." },
  { id: 6, name: "Three Elephant (V-Bor)", description: "Boron-based chemical specialists providing high-quality boron compounds." }
];

// Job openings data
export interface JobOpening {
  id: number;
  title: string;
  positions: string;
  experience: string;
  salary: string;
  gender: string;
  qualification: string;
  skills: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: "Domestic Marketing",
    positions: "03 Candidates",
    experience: "2-3 Years",
    salary: "₹15k - ₹30k",
    gender: "Female",
    qualification: "Graduate",
    skills: "Speaking English & Hindi, MS Excel/Word, B2B Portal, IndiaMart, Online Marketing, etc."
  },
  {
    id: 2,
    title: "Import-Export",
    positions: "01 Candidate",
    experience: "2-3 Years",
    salary: "₹20k - ₹40k",
    gender: "Male/Female",
    qualification: "Graduate",
    skills: "Import Export Knowledge, All Documentation, Good Communication, MS Excel/Word, etc."
  }
];

// Company stats
export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "25+", label: "Years Experience" },
  { value: "19+", label: "Chemical Products" },
  { value: "250+", label: "Cr Turnover Annually" },
  { value: "7000", label: "Metric Tonnes" },
  { value: "6", label: "Partner Companies" },
  { value: "500+", label: "Clients Served" }
];

// Navigation links
export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Industries", path: "/industries" },
  { label: "Distributorship", path: "/distributorship" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" }
];

// Contact info
export const contactInfo = {
  addresses: [
    "Plot no 7, B/H Iscon Plaza, 8 A N Highway, Nr Dariyalal Hotel, Rafadeshwar Chokdi, Paneli Road, Morbi-2, 363642",
    "1213, RK World Tower, 150 feet Ring Road, Sheetal Park, Rajkot"
  ],
  phones: ["+91 98254 31018", "+91 99982 77711"],
  email: "novella.corporation@gmail.com",
  social: {
    facebook: "https://www.facebook.com/people/Novella-Corporation/100054429822554/",
    twitter: "https://x.com/NovellaGroup",
    linkedin: "https://www.linkedin.com/company/novella-corporation",
    youtube: "https://www.youtube.com/@Novella_Corporation",
    instagram: "https://www.instagram.com/novella_corporation/"
  }
};
