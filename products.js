/* ============================================================
   LITTLE LABELLED - shop details and product list
   Edit this file to change what the website shows.
   - price: a number in AUD, or null for "Ask for a quote"
   - from: true shows "from $x"
   - unit: small words after the price, e.g. "each"
   - img: put a photo in the images folder and write e.g. "images/caps.jpg"
          (until then a drawn picture is shown, chosen by "icon")
   Keep wording about organising and labelling only - no health claims.
   ============================================================ */
window.SHOP = {
  key: "labelled",
  name: "Little Labelled",
  email: "littlelabelled@gmail.com",
  minOrder: 15,
  notePlaceholder: "Names, colours, vial size or pen model",
  socials: [
    { name: "Instagram", handle: "@littlelabelled", url: "https://www.instagram.com/littlelabelled/" },
    { name: "Facebook", handle: "", url: "" },   /* paste your Page link here */
    { name: "TikTok", handle: "", url: "" },     /* e.g. https://www.tiktok.com/@littlelabelled */
    { name: "Etsy", handle: "", url: "" }        /* paste your Etsy shop link here */
  ],
  allBlurb: "Personalised, 3D printed organisers for your vials and pens. Made to order in Queensland in your names and colours.",
  categories: [
    { id: "caps", name: "Vial caps & labels", blurb: "Know which vial is which at a glance: a name cap on top, or a printed label around the side." },
    { id: "pens", name: "Pen bands", blurb: "Name bands that clip or slide onto reusable pens, so you can grab the right one without thinking." },
    { id: "fridge", name: "Fridge organisers", blurb: "A labelled tray with a spot for every vial and pen, so the fridge door stays tidy." },
    { id: "sets", name: "Sets & custom", blurb: "Matching sets, gifts and anything custom." }
  ]
};

window.PRODUCTS = [
  { id: "vial-cap", cat: "caps", icon: "vialcap", badge: "Start here", name: "Vial name cap", price: 6, unit: "each", desc: "A 3D printed cap that sits on top of your vial, with the name pressed into the top in a second colour. Add a coloured side band for $1.", tags: ["Your words", "Colour-coded", "10% off 6+"] },
  { id: "vial-labels", cat: "caps", icon: "viallabel", name: "Printed vial labels", price: 1.5, unit: "each", desc: "Small printed wrap-around labels for vials. Minimum of 8 labels. 10% off 20+, 15% off 50+.", tags: ["Your words", "Printed"] },
  { id: "pen-band", cat: "pens", icon: "penband", badge: "New", name: "Pen name band", price: 9, from: true, desc: "A band with the name wrapped around it. Choose a slide-on ring or a clip-on C-clip, 2, 2.5 or 3 cm wide.", tags: ["Ring or clip", "Your words"] },
  { id: "pen-band-tile", cat: "pens", icon: "penband", name: "Pen band with name tile", price: 11, from: true, desc: "A band with a separate name tile that slides onto a little rail. Swap the tile when you change pens.", tags: ["Swappable"] },
  { id: "pen-band-write", cat: "pens", icon: "penband", name: "Write-on pen band", price: 10, from: true, desc: "A band with a flat panel you can write the date on.", tags: ["Write-on"] },
  { id: "fridge-tray", cat: "fridge", icon: "tray", badge: "Made to fit", name: "Fridge organiser tray", price: 35, from: true, desc: "A tray with a named row for each item: round wells for vials and grooves for pens. Tell us your vial sizes and how many of each. $1.50 per vial spot, $3 per pen slot.", tags: ["Named rows", "2–10 ml vials", "Pens"] },
  { id: "tray-lid", cat: "fridge", icon: "tray", name: "Tray lid", price: 20, desc: "A stackable lid for your fridge tray, with your label on top.", tags: ["Add-on", "Stackable"] },
  { id: "tray-write", cat: "fridge", icon: "label", name: "Write-on boxes", price: 5, desc: "Add a write-on box at the end of each row to note the date opened.", tags: ["Add-on"] },
  { id: "matching-set", cat: "sets", icon: "set", name: "Matching cap & band set", price: null, desc: "Caps and pen bands in matching colours for everything in your fridge. Send us your list and we'll put a set together.", tags: ["Colour-matched", "Gift idea"] },
  { id: "custom", cat: "sets", icon: "custom", name: "Something custom", price: null, desc: "Got a different vial, pen or box? Send us the measurements and we'll see what we can make.", tags: ["Custom"] }
];
