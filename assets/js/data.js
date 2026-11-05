/* ==========================================================================
   JUICE BAY — editable site data
   --------------------------------------------------------------------------
   VERIFIED (from the shop's own Swiggy listing, checked Nov 2026):
     • Shop name, address, phone, "₹100 for two", menu item names & prices
   SAMPLE / EDITABLE (demo-only, not confirmed):
     • Social links, opening hours, email, contact-form behaviour
   Change anything below — the page renders entirely from this object.
   ========================================================================== */

const JB = {
  business: {
  brand: "JUICE BAY",
  tagline: "Your Daily Dose of Fresh.",
  address: "Shop 17-1-376/14, Ground Floor, Sai Ratna Arcade, Santosh Nagar Main Road, New Santoshnagar, Santosh Nagar, Hyderabad, Telangana 500059",
  shortAddress: "Sai Ratna Arcade, Santosh Nagar Main Road, Hyderabad 500059",
  area: "Santosh Nagar, Hyderabad",
  phone: "+91 90634 31159",
  phoneDial: "+919063431159",
  mapQuery: "Juice Bay, Sai Ratna Arcade, Santosh Nagar Main Road, New Santoshnagar, Hyderabad 500059",
  listings: {
    swiggy: "https://www.swiggy.com/city/hyderabad/juice-bay-santoshnagar-and-saidabad-rest1135541",
  },
  // Not verified — shown as "please call to confirm" until the owner fills these in.
  hours: null,          // e.g. "10:00 am – 11:00 pm daily"
  email: null,          // e.g. "hello@juicebay.example"
  instagram: null,
  whatsapp: null,       // only set once WhatsApp is confirmed for the number
  menuNote: "Menu and prices as published on the shop's Swiggy listing (Nov 2026). Prices may change — please confirm when ordering.",
  demoNote: "Independent design concept. Not the official website and not affiliated with Swiggy.",
},
  menu: [
  {
    "id": "jb-01",
    "name": "Watermelon Juice",
    "category": "Juices",
    "price": 80,
    "desc": "Hydrating and naturally sweet, watermelon juice is packed with vitamins A, B6, and C.",
    "img": "watermelon-juice",
    "tags": [
      "Signature"
    ]
  },
  {
    "id": "jb-02",
    "name": "Pomegranate Juice",
    "category": "Juices",
    "price": 99,
    "desc": "Bursting with antioxidants, pomegranate juice supports heart health and boosts immunity.",
    "img": "pomegranate-juice",
    "tags": []
  },
  {
    "id": "jb-03",
    "name": "Mosambi Juice",
    "category": "Juices",
    "price": 90,
    "desc": "Light and citrusy, mosambi juice is packed with vitamin C.",
    "img": "mosambi-juice",
    "tags": []
  },
  {
    "id": "jb-04",
    "name": "Malta Orange Juice",
    "category": "Juices",
    "price": 180,
    "desc": "Sweet and refreshing, Malta orange juice is rich in vitamin C, promoting immunity and skin\u2026",
    "img": "malta-orange-juice",
    "tags": []
  },
  {
    "id": "jb-05",
    "name": "Pineapple Juice",
    "category": "Juices",
    "price": 90,
    "desc": "Tangy and tropical, pineapple juice is full of vitamin C and antioxidants.",
    "img": "pineapple-juice",
    "tags": []
  },
  {
    "id": "jb-06",
    "name": "Apple Juice",
    "category": "Juices",
    "price": 120,
    "desc": "Crisp and refreshing, apple juice is rich in antioxidants and fiber, supporting digestion and\u2026",
    "img": "apple-juice",
    "tags": []
  },
  {
    "id": "jb-07",
    "name": "Dragon Fruit Juice",
    "category": "Juices",
    "price": 150,
    "desc": "Exotic and slightly sweet, dragon fruit juice is full of antioxidants.",
    "img": "dragon-fruit-juice",
    "tags": []
  },
  {
    "id": "jb-08",
    "name": "Black Grape Juice",
    "category": "Juices",
    "price": 90,
    "desc": "Juicy green and black grapes bursting with sweetness, perfect for a refreshing snack or light\u2026",
    "img": "black-grape-juice",
    "tags": []
  },
  {
    "id": "jb-09",
    "name": "Strawberry Juice",
    "category": "Juices",
    "price": 99,
    "desc": "A sweet, slightly tangy juice packed with vitamin C and antioxidants.",
    "img": "strawberry-juice",
    "tags": []
  },
  {
    "id": "jb-10",
    "name": "Buttermilk",
    "category": "Juices",
    "price": 39,
    "desc": "A probiotic-rich drink made from fresh yogurt and spices.",
    "img": "buttermilk",
    "tags": []
  },
  {
    "id": "jb-11",
    "name": "Oreo Milkshake",
    "category": "Shakes",
    "price": 169,
    "desc": "A delicious blend of crushed Oreo cookies, vanilla ice cream, and milk, creating the ultimate\u2026",
    "img": "oreo-milkshake",
    "tags": [
      "Signature"
    ]
  },
  {
    "id": "jb-12",
    "name": "Nutella Milkshake",
    "category": "Shakes",
    "price": 169,
    "desc": "Nutella Milkshake Loaded with Nutella and blended to perfection, this shake is pure\u2026",
    "img": "nutella-milkshake",
    "tags": []
  },
  {
    "id": "jb-13",
    "name": "Strawberry Milkshake",
    "category": "Shakes",
    "price": 169,
    "desc": "Fresh strawberries blended with chilled milk and a touch of cream \u2014 fruity, refreshing, and\u2026",
    "img": "strawberry-milkshake",
    "tags": []
  },
  {
    "id": "jb-14",
    "name": "Badam Milkshake",
    "category": "Shakes",
    "price": 199,
    "desc": "Made with almonds, this creamy milkshake offers a nutty, smooth flavor that\u2019s both delicious\u2026",
    "img": "badam-milkshake",
    "tags": []
  },
  {
    "id": "jb-15",
    "name": "Kitkat Thickshake",
    "category": "Shakes",
    "price": 240,
    "desc": "Enjoy the crunch of KitKat chocolate bars combined with creamy ice cream for a thickshake like\u2026",
    "img": "kitkat-thickshake",
    "tags": []
  },
  {
    "id": "jb-16",
    "name": "Cold Coffee",
    "category": "Shakes",
    "price": 139,
    "desc": "A chilled coffee drink blended with ice cream and topped with whipped cream.",
    "img": "cold-coffee",
    "tags": []
  },
  {
    "id": "jb-17",
    "name": "Blue Curacao",
    "category": "Mocktails",
    "price": 79,
    "desc": "A visually stunning mocktail, crafted with the tropical, citrusy flavors of Blue Curacao.",
    "img": "blue-curacao",
    "tags": [
      "Signature"
    ]
  },
  {
    "id": "jb-18",
    "name": "Virgin Mojito",
    "category": "Mocktails",
    "price": 79,
    "desc": "A refreshing blend of fresh mint, lime, and soda.",
    "img": "virgin-mojito",
    "tags": []
  },
  {
    "id": "jb-19",
    "name": "Green Apple Mocktail",
    "category": "Mocktails",
    "price": 79,
    "desc": "A crisp, tangy mocktail that captures the tart essence of green apples.",
    "img": "green-apple-mocktail",
    "tags": []
  },
  {
    "id": "jb-20",
    "name": "Fresh Lime Soda",
    "category": "Mocktails",
    "price": 79,
    "desc": "A zesty mocktail made with freshly squeezed lime and a fizzy soda base.",
    "img": "fresh-lime-soda",
    "tags": []
  },
  {
    "id": "jb-21",
    "name": "Special Fruit Salad",
    "category": "Desserts",
    "price": 169,
    "desc": "A luxurious mix of premium fruits, with sweet cream and topped with dry fruits, making this a\u2026",
    "img": "special-fruit-salad",
    "tags": [
      "Signature"
    ]
  },
  {
    "id": "jb-22",
    "name": "Fruit Salad",
    "category": "Desserts",
    "price": 150,
    "desc": "A refreshing mix of fruits, served fresh and lightly sweetened with cream.",
    "img": "fruit-salad",
    "tags": []
  },
  {
    "id": "jb-23",
    "name": "Apricot Delight",
    "category": "Desserts",
    "price": 150,
    "desc": "A sweet and tangy dessert with ripe apricots and a creamy base.",
    "img": "apricot-delight",
    "tags": []
  },
  {
    "id": "jb-24",
    "name": "White Sauce maggi",
    "category": "Maggi",
    "price": 169,
    "desc": "A delicious fusion of creamy white sauce and Maggi noodles, offering a smooth and velvety\u2026",
    "img": "white-sauce-maggi",
    "tags": []
  },
  {
    "id": "jb-25",
    "name": "Cheese Corn Maggi",
    "category": "Maggi",
    "price": 130,
    "desc": "A creamy, cheesy delight combined with sweet corn kernels, making this Maggi variant a rich\u2026",
    "img": "cheese-corn-maggi",
    "tags": []
  },
  {
    "id": "jb-26",
    "name": "Masala Maggi",
    "category": "Maggi",
    "price": 99,
    "desc": "The beloved classic Maggi, packed with a delicious blend of masala spices, offering a perfect\u2026",
    "img": "masala-maggi",
    "tags": []
  }
]
};

window.JB_DATA = JB;
