import { writeFileSync } from "fs";
import { join } from "path";

const PUBLIC = join(import.meta.dirname, "..", "public", "images");

// -- Helpers --
function svg(w, h, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${content}</svg>`;
}

function gradientDef(id, c1, c2, angle = 0) {
  const rad = (angle * Math.PI) / 180;
  const x1 = 50 - 50 * Math.cos(rad);
  const y1 = 50 - 50 * Math.sin(rad);
  const x2 = 50 + 50 * Math.cos(rad);
  const y2 = 50 + 50 * Math.sin(rad);
  return `<defs><linearGradient id="${id}" x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs>`;
}

function heroSvg(w, h, c1, c2, label, angle = 135) {
  const gd = gradientDef("g", c1, c2, angle);
  // decorative circles
  const circles = `
    <circle cx="${w * 0.8}" cy="${h * 0.2}" r="${h * 0.25}" fill="white" opacity="0.07"/>
    <circle cx="${w * 0.15}" cy="${h * 0.75}" r="${h * 0.2}" fill="white" opacity="0.05"/>
    <circle cx="${w * 0.5}" cy="${h * 0.5}" r="${h * 0.35}" fill="white" opacity="0.04"/>
  `;
  // graduation cap icon
  const capY = h * 0.35;
  const capX = w * 0.5;
  const cap = `
    <g transform="translate(${capX}, ${capY})" fill="white" opacity="0.2">
      <polygon points="0,-40 60,0 0,15 -60,0"/>
      <rect x="-3" y="0" width="6" height="35" rx="2"/>
      <ellipse cx="0" cy="35" rx="15" ry="5"/>
    </g>
  `;
  const text = `<text x="${w / 2}" y="${h * 0.72}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.min(w, h) * 0.06}" font-weight="600" fill="white" opacity="0.6">${label}</text>`;
  return svg(w, h, `${gd}<rect width="${w}" height="${h}" fill="url(#g)"/>${circles}${cap}${text}`);
}

function countrySvg(w, h, c1, c2, name, emoji, angle = 135) {
  const gd = gradientDef("g", c1, c2, angle);
  const deco = `
    <circle cx="${w * 0.85}" cy="${h * 0.15}" r="${h * 0.3}" fill="white" opacity="0.06"/>
    <circle cx="${w * 0.1}" cy="${h * 0.85}" r="${h * 0.25}" fill="white" opacity="0.05"/>
  `;
  const emojiText = `<text x="${w / 2}" y="${h * 0.42}" text-anchor="middle" font-size="${h * 0.22}">${emoji}</text>`;
  const label = `<text x="${w / 2}" y="${h * 0.72}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${h * 0.09}" font-weight="600" fill="white" opacity="0.9">${name}</text>`;
  return svg(w, h, `${gd}<rect width="${w}" height="${h}" fill="url(#g)"/>${deco}${emojiText}${label}`);
}

function blogSvg(w, h, c1, c2, idx) {
  const gd = gradientDef("g", c1, c2, 120 + idx * 15);
  const lines = `
    <rect x="${w * 0.15}" y="${h * 0.35}" width="${w * 0.5}" height="${h * 0.04}" rx="4" fill="white" opacity="0.25"/>
    <rect x="${w * 0.15}" y="${h * 0.45}" width="${w * 0.35}" height="${h * 0.04}" rx="4" fill="white" opacity="0.15"/>
    <rect x="${w * 0.15}" y="${h * 0.55}" width="${w * 0.45}" height="${h * 0.04}" rx="4" fill="white" opacity="0.1"/>
  `;
  // book icon
  const bx = w * 0.5, by = h * 0.25;
  const book = `<g transform="translate(${bx - 20},${by - 15})" fill="white" opacity="0.15"><rect x="0" y="0" width="18" height="25" rx="2"/><rect x="22" y="0" width="18" height="25" rx="2"/><rect x="16" y="2" width="8" height="21" rx="1"/></g>`;
  return svg(w, h, `${gd}<rect width="${w}" height="${h}" fill="url(#g)"/><circle cx="${w * 0.8}" cy="${h * 0.2}" r="${h * 0.2}" fill="white" opacity="0.06"/>${book}${lines}`);
}

function serviceSvg(w, h, c1, c2, label) {
  const gd = gradientDef("g", c1, c2, 150);
  const deco = `<circle cx="${w * 0.8}" cy="${h * 0.25}" r="${h * 0.3}" fill="white" opacity="0.06"/>`;
  const text = `<text x="${w / 2}" y="${h * 0.55}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${h * 0.07}" font-weight="600" fill="white" opacity="0.5">${label}</text>`;
  return svg(w, h, `${gd}<rect width="${w}" height="${h}" fill="url(#g)"/>${deco}${text}`);
}

function avatarSvg(size, c1, c2, initials) {
  const gd = gradientDef("g", c1, c2, 135);
  return svg(size, size, `${gd}<rect width="${size}" height="${size}" fill="url(#g)" rx="${size / 2}"/><text x="${size / 2}" y="${size / 2 + size * 0.12}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size * 0.38}" font-weight="600" fill="white" opacity="0.9">${initials}</text>`);
}

// -- Generate Hero Images --
const heroes = [
  { file: "hero-1.svg", c1: "#1e3a5f", c2: "#4a90d9", label: "Your Global Future Starts Here" },
  { file: "hero-2.svg", c1: "#2d1b69", c2: "#7c5cbf", label: "Study Abroad with Confidence" },
  { file: "hero-3.svg", c1: "#1a4731", c2: "#48b583", label: "World-Class Education Awaits" },
];
heroes.forEach((h) => writeFileSync(join(PUBLIC, "hero", h.file), heroSvg(1600, 900, h.c1, h.c2, h.label)));

// Hero banner specific
writeFileSync(join(PUBLIC, "hero", "hero-main.svg"), heroSvg(800, 1000, "#1e3a5f", "#4a90d9", "Global Education"));
writeFileSync(join(PUBLIC, "hero", "hero-secondary.svg"), heroSvg(300, 400, "#2d1b69", "#7c5cbf", "Study Abroad"));

// -- Generate Country Images --
const countryData = [
  { slug: "england", name: "England", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", c1: "#1e3a5f", c2: "#c41e3a" },
  { slug: "scotland", name: "Scotland", emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", c1: "#003078", c2: "#0065bd" },
  { slug: "wales", name: "Wales", emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", c1: "#00a651", c2: "#c41e3a" },
  { slug: "ireland", name: "Ireland", emoji: "🇮🇪", c1: "#169b62", c2: "#ff8200" },
  { slug: "united-states", name: "United States", emoji: "🇺🇸", c1: "#002868", c2: "#bf0a30" },
  { slug: "canada", name: "Canada", emoji: "🇨🇦", c1: "#d52b1e", c2: "#ff6b6b" },
  { slug: "australia", name: "Australia", emoji: "🇦🇺", c1: "#002f6c", c2: "#f9a825" },
  { slug: "new-zealand", name: "New Zealand", emoji: "🇳🇿", c1: "#00247d", c2: "#c8102e" },
  { slug: "germany", name: "Germany", emoji: "🇩🇪", c1: "#1a1a1a", c2: "#dd0000" },
  { slug: "france", name: "France", emoji: "🇫🇷", c1: "#002395", c2: "#ed2939" },
  { slug: "netherlands", name: "Netherlands", emoji: "🇳🇱", c1: "#21468b", c2: "#ae1c28" },
  { slug: "singapore", name: "Singapore", emoji: "🇸🇬", c1: "#ed2939", c2: "#fff" },
  { slug: "japan", name: "Japan", emoji: "🇯🇵", c1: "#bc002d", c2: "#ff6b81" },
  { slug: "south-korea", name: "South Korea", emoji: "🇰🇷", c1: "#003478", c2: "#cd2e3a" },
  { slug: "uae", name: "UAE", emoji: "🇦🇪", c1: "#00732f", c2: "#c41e3a" },
  { slug: "italy", name: "Italy", emoji: "🇮🇹", c1: "#009246", c2: "#ce2b37" },
  { slug: "spain", name: "Spain", emoji: "🇪🇸", c1: "#c60b1e", c2: "#ffc400" },
  { slug: "sweden", name: "Sweden", emoji: "🇸🇪", c1: "#004b87", c2: "#fecc00" },
  { slug: "switzerland", name: "Switzerland", emoji: "🇨🇭", c1: "#d52b1e", c2: "#ff6b6b" },
  { slug: "denmark", name: "Denmark", emoji: "🇩🇰", c1: "#c60c30", c2: "#ff6b81" },
  { slug: "china", name: "China", emoji: "🇨🇳", c1: "#de2910", c2: "#ffde00" },
  { slug: "malaysia", name: "Malaysia", emoji: "🇲🇾", c1: "#010066", c2: "#cc0001" },
];
countryData.forEach((c) =>
  writeFileSync(join(PUBLIC, "countries", `${c.slug}.svg`), countrySvg(400, 300, c.c1, c.c2, c.name, c.emoji))
);

// -- Generate Blog Placeholders --
const blogColors = [
  ["#1e3a5f", "#4a90d9"], ["#2d1b69", "#7c5cbf"], ["#1a4731", "#48b583"], ["#8b2252", "#d4618c"],
  ["#4a3728", "#b8860b"], ["#2c3e50", "#3498db"], ["#6b2fa0", "#c084fc"], ["#1b5e20", "#66bb6a"],
];
blogColors.forEach(([c1, c2], i) =>
  writeFileSync(join(PUBLIC, "blog", `blog-${i + 1}.svg`), blogSvg(600, 400, c1, c2, i))
);

// -- Generate Service Images --
const serviceData = [
  { slug: "career-counseling", label: "Career Counseling", c1: "#1e3a5f", c2: "#4a90d9" },
  { slug: "admission-processing", label: "Admission Processing", c1: "#2d1b69", c2: "#7c5cbf" },
  { slug: "visa-assistance", label: "Visa Assistance", c1: "#1a4731", c2: "#48b583" },
  { slug: "test-preparation", label: "Test Preparation", c1: "#8b2252", c2: "#d4618c" },
  { slug: "language-classes", label: "Language Classes", c1: "#4a3728", c2: "#b8860b" },
  { slug: "placement-guidance", label: "Placement Guidance", c1: "#2c3e50", c2: "#3498db" },
  { slug: "scholarship-support", label: "Scholarship Support", c1: "#6b2fa0", c2: "#c084fc" },
];
serviceData.forEach((s) =>
  writeFileSync(join(PUBLIC, "services", `${s.slug}.svg`), serviceSvg(600, 400, s.c1, s.c2, s.label))
);

// -- Generate Testimonial Avatars --
const avatarColors = [
  ["#e74c3c", "#ff7979"], ["#3498db", "#74b9ff"], ["#2ecc71", "#55efc4"],
  ["#9b59b6", "#a29bfe"], ["#f39c12", "#ffeaa7"], ["#1abc9c", "#81ecec"],
  ["#e67e22", "#fab1a0"], ["#2c3e50", "#636e72"], ["#8e44ad", "#d6a4e8"],
  ["#d35400", "#e17055"], ["#16a085", "#00cec9"], ["#c0392b", "#ff7675"],
];
const initials = ["AR", "SK", "PM", "JD", "NR", "TS", "AK", "RV", "MP", "KS", "LP", "DG"];
avatarColors.forEach(([c1, c2], i) =>
  writeFileSync(join(PUBLIC, "testimonials", `avatar-${i + 1}.svg`), avatarSvg(100, c1, c2, initials[i]))
);

// -- About Images --
writeFileSync(join(PUBLIC, "about", "story.svg"), heroSvg(800, 500, "#1e3a5f", "#4a90d9", "Our Story"));
writeFileSync(join(PUBLIC, "about", "team.svg"), heroSvg(800, 500, "#2d1b69", "#7c5cbf", "Our Team"));

// -- Page hero images (used directly in page files) --
const pageHeroes = [
  { file: "about.svg", c1: "#1e3a5f", c2: "#4a90d9", label: "About Care Hands" },
  { file: "contact.svg", c1: "#1a4731", c2: "#48b583", label: "Get in Touch" },
  { file: "courses.svg", c1: "#2d1b69", c2: "#7c5cbf", label: "Popular Courses" },
  { file: "blog.svg", c1: "#8b2252", c2: "#d4618c", label: "Blog" },
  { file: "services.svg", c1: "#2c3e50", c2: "#3498db", label: "Our Services" },
  { file: "success-stories.svg", c1: "#4a3728", c2: "#b8860b", label: "Success Stories" },
  { file: "trending.svg", c1: "#6b2fa0", c2: "#c084fc", label: "Trending Now" },
  { file: "destinations.svg", c1: "#1a4731", c2: "#48b583", label: "Study Destinations" },
];
pageHeroes.forEach((p) =>
  writeFileSync(join(PUBLIC, "pages", p.file), heroSvg(1600, 600, p.c1, p.c2, p.label))
);

console.log("All placeholder images generated!");
