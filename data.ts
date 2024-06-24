export const links = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },
  {
    id: 2,
    text: "Our History",
    url: "/our_history"
  },
  {
    id: 3,
    text: "Accommodation",
    url: "/accommodation"
  },

  {
    id: 4,
    text: "Restaurant",
    url: "/restaurant"
  },
  {
    id: 5,
    text: "Conferencing",
    url: "/conferencing"
  },
   {
    id: 6,
    text: "Attractions",
    url: "/attractions"
  },
{
    id: 7,
    text: "Contacts",
    url: "/contacts"
  },
]



export const rooms = [
	{
		id: 1,
		title: "Standard Sea Facing Room",
		in_season: 990,
		off_season: 990,
		special_rate: {
			enabled: true,
			title: "July Special",
			description: "Special Rates for the month of July 2024",
			rate_per_person: 990,
			rate_per_room: 990,
			capacity: 1,
		},
		breakfast: true,
		description:
			"This sea-facing en-suite room consists of one bed with a full private bathroom (with a separate bath and shower)",
		images: [
			"/images/double_room_1.jpg",
			"/images/double_room_4.jpg",
			"/images/sea_view_1.jpg",
			"/images/sea_view_3.jpg",
			"/images/sea_view_4.jpg",
			"/images/sea_view_5.jpg",
		],
	},
	{
		id: 2,
		title: "Standard Sea Facing Twin",
		in_season: 1180,
		off_season: 895,
		special_rate: {
			enabled: true,
			title: "July Special",
			description: "Special Rates for the month of July 2024",
			rate_per_person: 540,
			rate_per_room: 1080,
			capacity: 2,
		},
		breakfast: true,
		description:
			"This sea-facing en-suite room consists of two single beds (Twin) with a full private bathroom (with a separate bath and shower)",
		images: [
			"/images/twin_room_2.jpg",
			"/images/twin_room_1.jpg",
			"/images/twin_room_3.jpg",
			"/images/sea_view_10.jpg",
			"/images/sea_view_8.jpg",
			"/images/sea_view_9.jpg",
		],
	},
	{
		id: 3,
		title: "Standard Sea Facing Double",
		in_season: 1180,
		off_season: 895,
		special_rate: {
			enabled: true,
			title: "July Special",
			description: "Special Rates for the month of July 2024",
			rate_per_person: 540,
			rate_per_room: 1080,
			capacity: 2,
		},
		breakfast: true,
		description:
			"This sea-facing en-suite room consists of one double bed per room with a full private bathroom (with a separate bath and shower)",
		images: [
			"/images/double_room_6.jpg",
			"/images/double_room_7.jpg",
			"/images/double_room_8.jpg",
			"/images/sea_view_10.jpg",
			"/images/sea_view_8.jpg",
			"/images/sea_view_9.jpg",
		],
	},
	{
		id: 4,
		title: "Standard Sea Three Sleeper",
		in_season: 1620,
		off_season: 900,
		special_rate: {
			enabled: true,
			title: "July Special",
			description: "Special Rates for the month of July 2024",
			rate_per_person: 400,
			rate_per_room: 1200,
			capacity: 3,
		},
		breakfast: true,
		description:
			"This sea-facing en-suite room consists of three single beds or one double and one single bed",
		images: [
			"/images/double_room_1.jpg",
			"/images/double_room_2.jpg",
			"/images/double_room_3.jpg",
			"/images/sea_view_10.jpg",
			"/images/sea_view_8.jpg",
			"/images/sea_view_9.jpg",
		],
	},
	{
		id: 5,
		title: "Standard Sea Four Sleeper",
		in_season: 1910,
		off_season: 1000,
		special_rate: {
			enabled: true,
			title: "July Special",
			description: "Special Rates for the month of July 2024",
			rate_per_person: 350,
			rate_per_room: 1400,
			capacity: 4,
		},
		breakfast: true,
		description:
			"This sea-facing en-suite room consists of four single beds or one double bed and two single beds per room",
		images: [
			"/images/double_room_1.jpg",
			"/images/double_room_2.jpg",
			"/images/twin_room_3.jpg",
			"/images/twin_room_4.jpg",
			"/images/sea_view_10.jpg",
			"/images/sea_view_8.jpg",
			"/images/sea_view_9.jpg",
		],
	},
	// {
	//   id: 6,
	//   title: "Open Plan Sea Facing Family Room",
	//   in_season: 2000,
	//   off_season: 1500,
	//   breakfast: true,
	//   description: "This sea-facing en-suite family room consists of one double bed and three single beds per room",
	//   images: ["/images/family_room.jpg", "/images/double_room_2.jpg", "/images/twin_room_3.jpg", "/images/twin_room_4.jpg", "/images/sea_view_10.jpg", "/images/sea_view_8.jpg", "/images/sea_view_9.jpg"]
	// },
];




export const breakfastMenu = [
  {
    id: 1,
    title: "Chapman Breakfast",
    description: "2 Fried eggs, bacon, sausage, savoury mince, fried mushrooms and grilled tomato",
    price: 80,
  },
  {
    id: 2,
    title: "Sunrise Breakfast",
    description: "2 Fried eggs, bacon, grilled tomato, chips & a slice of toast",
    price: 60
  },
  {
    id: 3,
    title: "Scrambled Eggs and Mince on Toast",
    description: "Scrambled Eggs or Mince on Toast ",
    price: 70
  },
  {
    id: 4,
    title: "Chapmans Benedict",
    description: "Poached eggs and ham on an English muffin, topped with Hollandaise and served with oven-roasted baby tomatoes",
    price: 85
  },
  {
    id: 5,
    title: "Salmon Scrambled Eggs",
    description: "Soft scrambled eggs with salmon, cream cheese and capers, prepared on a croissant",
    price: 85
  },
  {
    id: 6,
    title: "Chapman Omelette",
    description: "3 Egg omelette with a spicy mince, potato, mushroom and peppers filling, topped with cheese and baked",
    price: 85
  },
  {
    id: 7,
    title: "Health Breakfast",
    description: "A medley of yoghurt, muesli, fruit salad and honey",
    price: 85
  },
  {
    id: 8,
    title: "French Croissant & Berries",
    description: "Croissant (prepared in a French toast style) served with honey, berries and cream cheese – delicious!",
    price: 85
  },
]


export const lunchMenu = [
  {
    id: 1,
    title: "Blackbeard’s Burger",
    description: "Homemade beef patty or chicken breast fillet, topped with caramelized red onion and tomato salsa and served with salad or potato wedges",
    price: 49,
  },
  {
    id: 2,
    title: "Sweet Chilli Chicken Wrap",
    description: "Chicken, Cream Cheese, Sweet Chilli Sauce, Lettuce and Tomato; served with salad or potato wedges",
    price: 49,
  },
  {
    id: 3,
    title: "Hake and Chips",
    description: "Fried Hake served with salad or potato wedges",
    price: 55,
  },
  {
    id: 4,
    title: "Thai Fish Cakes",
    description: "Served with a mild green curry dressing and salad or potato wedges",
    price: 55,
  },
  {
    id: 5,
    title: "Grilled Prawns",
    description: "10 grilled prawns, served with salad, rice or potato wedges",
    price: 79,
  },

]


export const nibblesMenu = [
  {
    id: 1,
    title: "Garlic Pizza Bread",
    description: "Pizza bread, topped with freshly chopped garlic and herbs and baked in our wood-burning pizza oven",
    price: 29,
  },
  {
    id: 2,
    title: "Herb Pizza Bread",
    description: "Pizza bread, topped with herbs and baked in our wood-burning pizza oven",
    price: 29,
  },
  {
    id: 3,
    title: "Garlic Pizza Bread with Cheese Topping",
    description: "Pizza bread, topped with freshly chopped garlic, herbs and mozzarella cheese and baked in our wood-burning pizza oven",
    price: 36,
  },
  {
    id: 4,
    title: "Herb Pizza Bread with Cheese Topping",
    description: "Pizza bread, topped with herbs and mozzarella cheese and baked in our wood-burning pizza oven",
    price: 36,
  },
  {
    id: 5,
    title: "Margherita Pizza",
    description: "The captains pizza topped with a tomato and mozzarella cheese base, fresh herbs and slices of tomato and baked in our wood-burning pizza oven.",
    price: 44,
  },

]


export const startersMenu = [
  {
    id: 1,
    title: "Blackbeards Calamari",
    description: "Chef’s choice selection of calamari prepared according to your requirement; served with a choice of either rice or selected pasta",
    price: 49,
  },
  {
    id: 2,
    title: "Shipwheel Salad",
    description: "A variety of fresh salad and fruit in season",
    price: 37,
  },
  {
    id: 3,
    title: "Avocado or Hawaiian Seafood Medley",
    description: "Half an avocado or half a pineapple, served with a medley of Blackbeards treasures prepared in a seafood mayonnaise",
    price: 49,
  },
  {
    id: 4,
    title: "Greek Salad",
    description: "A variety of fresh salad prepared with feta cheese, olives and a red wine dressing",
    price: 42,
  },
  {
    id: 5,
    title: "Mushroom Island",
    description: "A whole black mushroom cooked in garlic butter, garnished with mussels and topped with a creamy white sauce",
    price: 45,
  },
  {
    id: 6,
    title: "Seafarer’s Choice",
    description: "Mussels and calamari cooked in either a tomato, white wine, green pepper, mushroom, onion and garlic sauce or cooked in a creamy fish chowder sauce; served with a choice of either rice or selected pasta",
    price: 49,
  },
  {
    id: 7,
    title: "Musselled Smoked Salmon Salad",
    description: "Thinly sliced smoked salmon prepared together with a variety of fresh salad and garnished with mussels; served together with black pepper",
    price: 59,
  },
  {
    id: 8,
    title: "Escargot Provencal (Snails)",
    description: "6 snails prepared in a creamy garlic and parsley sauce",
    price: 47,
  },
  {
    id: 9,
    title: "Blackbeards Treasure Bake",
    description: "Chef’s choice bake of selected seafoods prepared in a creamy white sauce, topped with cheese and baked",
    price: 49,
  },
  {
    id: 10,
    title: "Mussels in Cream",
    description: "Mussels cooked in a cream, white wine, onion, green pepper and garlic sauce and served with a choice of either rice or selected pasta",
    price: 49,
  },
]


export const vegetarianMenu = [
  {
  id: 1,
  title: "Vegetarian Marseilles",
  description: "Stir-fried vegetables, served on a bed of pasta and topped with a spinach and feta sauce; topped with mozzarella cheese and baked in our wood-burning pizza oven",
  price: 69,
},
  {
  id: 2,
  title: "Pizza Vegetarian",
  description: "Topped with a tomato and mozzarella cheese base, mushrooms, peppers, onions, asparagus and sliced tomatoes and baked in our wood-burning pizza oven",
  price: 62,
},
]

export const meatMenu = [
  {
    id: 1,
    title: "Chicken Diavola",
    description: "Choice cut of chicken, grilled in peri-peri and served with a separate bowl of rice.",
    price: 69
  },
  {
    id: 2,
    title: "Blackbeards Fillet Steak",
    description: "Choice fillet of beef, grilled according to your requirements and served with either vegetables in season or chip",
    price: 89
  },
  {
    id: 3,
    title: "Pizza Pizzaiola",
    description: "Topped with a tomato and mozzarella cheese base, mushrooms, peppers, onions, sliced tomatoes and chicken strips and baked in our wood-burning pizza oven.",
    price: 69
  },
  {
    id: 4,
    title: "Blackbeards Pizzaiola (Cliffie’s Favourite)",
    description: "Choice fillet of beef or cut of chicken, grilled and cooked in our famous marinada sauce together with vegetables in season, mushrooms, boiled potato and pasta.",
    price: 119
  },
  {
    id: 5,
    title: "Prima Chicken Arrabiata",
    description: "Small pieces of cubed chicken dipped in a light flour, pan fried, cooked with cream, white wine, mushrooms, masala spice and cheese and prepared on a bed of pasta.",
    price: 79
  },
  {
    id: 6,
    title: "Blackbeards Fillet Steak Treasure Island",
    description: "Choice fillet of beef, grilled, topped with a creamy shrimp, smoked mussel, green pepper, onion and mushroom sauce and garnished with mussels.",
    price: 119
  },
  {
    id: 7,
    title: "Smuggler’s Schnitzel",
    description: "Thin slices of fillet of chicken, dipped in a batter and fried; topped with a cheese sauce and garnished with mussels.",
    price: 79
  },
  {
    id: 8,
    title: "Chicken Brodino",
    description: "Choice cut of chicken, grilled, prepared with mussels and calamari and cooked in our famous marinada sauce; served in a special preparation dish with a choice of either rice or selected pasta.",
    price: 119
  },
  {
    id: 9,
    title: "Picata Bella",
    description: "Small pieces of fillet of beef dipped in a light flour, pan fried, cooked with cream, white wine, mushrooms and cheese and prepared on a bed of pasta.",
    price: 89
  },
  {
    id: 10,
    title: "Blackbeards Fillet Steak Brodino",
    description: "Choice fillet of beef, grilled, prepared with mussels and calamari and cooked in our famous marinada sauce; served in a special preparation dish with a choice of either rice or selected pasta.",
    price: 139
  },
  {
    id: 11,
    title: "Blackbeards Fillet Steak Brodino",
    description: "Choice fillet of beef, grilled, prepared with mussels and calamari and cooked in our famous marinada sauce; served in a special preparation dish with a choice of either rice or selected pasta.",
    price: 139
  },
]


export const seafood = [
  {
    id: 1,
    title: "Mussels In Cream",
    description: "Mussels cooked in a cream, white wine, onion, green pepper and garlic sauce; served with a choice of either rice or selected pasta",
    price: 79,
  },
  {
    id: 2,
    title: "Trout Lady Bea",
    description: "Choice trout, grilled and topped with a creamy shrimp, smoked mussel, green pepper,onion and mushroom sauce; served with vegetables in season or chips.",
    price: 129,
  },
  {
    id: 3,
    title: "Mussels Cajun",
    description: "Mussels cooked in either a spicy tomato, white wine, green pepper, mushroom, onion and garlic sauce or cooked in a spicy creamy fish chowder and masala sauce; served with a choice of either rice or selected pasta.",
    price: 79,
  },
  {
    id: 4,
    title: "Trout Nelson",
    description: "Choice trout, grilled, prepared with a creamy asparagus and mushroom sauce, topped with cheese and baked; served with vegetables in season or chips.",
    price: 129,
  },
  {
    id: 5,
    title: "Pizza di Mare",
    description: "Topped with a tomato and mozzarella cheese base, mushrooms, peppers, onions,sliced tomatoes, mussels, calamari and flaked fish and baked in our wood-burning pizza oven.",
    price: 79,
  },
  {
    id: 6,
    title: "Linefish Chef’s Choice",
    description: "A unique spicy preparation of a choice linefish fillet, prepared together with mussels and calamari and cooked in a creamy fish chowder and masala sauce; served in a special preparation dish with a choice of either rice or pasta",
    price: 129,
  },
  {
    id: 7,
    title: "Calamari Fried or Grilled",
    description: "Chef’s choice selection of calamari either dipped in a light flour, seasoned with spices and deep fried or grilled; served on a bed of rice together with lemons and tartare sauce",
    price: 79,
  },
  {
    id: 8,
    title: "Merluza Blackbeards Thermidor",
    description: "Choice merluza, grilled, prepared with a cream, mushroom and white wine sauce, topped with cheese and baked; served with vegetables in season or chips",
    price: 89,
  },
  {
    id: 9,
    title: "Seafood Marseilles",
    description: "Choice linefish, grilled, topped with a creamy spinach and feta cheese sauce,garnished with mussels and baked.",
    price: 89,
  },
  {
    id: 10,
    title: "Cajun Seafarer’s Choice",
    description: "Mussels and calamari cooked in either a spicy tomato, white wine, green pepper, mushroom,onion and garlic sauce or cooked in a spicy creamy fish chowder and masala sauce; served with a choice of either rice or selected pasta",
    price: 95,
  },
  {
    id: 11,
    title: "Merluza Brodino",
    description: "Choice merluza, prepared with mussels and calamari and cooked in our famous marinada sauce; served in a special preparation dish together with a separate bowl of rice or selected pasta.",
    price: 119,
  },
  {
    id: 12,
    title: "Kingklip Thermidor",
    description: "Choice kingklip, grilled, prepared with a cream, mushroom and white wine sauce, topped with cheese and baked; served with vegetables in season or chips.",
    price: 119,
  },
]


export const dessertMenu = [
  {
    id: 1,
    title: "Ice cream & Hot Chocolate Sauce",
    description: "Ice cream & Hot Chocolate Sauce",
    price: 26,
  },
  {
    id: 2,
    title: "Chocolate Ice Cream",
    description: "Chocolate Ice Cream",
    price: 26,
  },
  {
    id: 3,
    title: "Fresh Fruit Salad and Ice Cream",
    description: "Fresh Fruit Salad and Ice Cream",
    price: 29,
  },
  {
    id: 4,
    title: "Crème Caramelle",
    description: "Delicious custard dessert served with cream or ice cream",
    price: 29,
  },
  {
    id: 5,
    title: "Chocolate Brownies",
    description: "Brownie Squares made with real chocolate served warm with cream or ice cream",
    price: 35,
  },
  {
    id: 6,
    title: "Italian Cassata",
    description: "Home-made Italian Cassata with fruit & nuts",
    price: 35,
  },
  {
    id: 7,
    title: "Chocolate Mousse",
    description: "Light & Fluffy Mousse made with a dark Alpine Chocolate",
    price: 35,
  },
  {
    id: 8,
    title: "Blackbeards Cheesecake",
    description: "Selected homemade cheesecakes (Enquire as to the flavour of the day)",
    price: 35,
  },
  {
    id: 9,
    title: "Malva Pudding",
    description: "A warm sponge pudding drenched in a Butter & cream sauce",
    price: 35,
  },
  {
    id: 10,
    title: "Pecan Nut Pie",
    description: "A rich caramelized Pecan Nut filling baked in short crust pastry, served with cream or ice cream",
    price: 35,
  },
  {
    id: 11,
    title: "Chapman’s Peak Parfait",
    description: "A layered dessert consisting of a medley of fruits, ice cream, cream and mousse",
    price: 39,
  },
  {
    id: 12,
    title: "Rum Bananas",
    description: "Banana’s Flambed in a rum & honey-based syrup served with ice cream",
    price: 45,
  },
  {
    id: 13,
    title: "Cheese Board Platter for one",
    description: "Cheese Board Platter for one",
    price: 55,
  },
  {
    id: 14,
    title: "Cheese Board Platter for two",
    description: "Cheese Board Platter for two",
    price: 75,
  },
]


export const coffeeMenu = [
  {
    id: 1,
    title: "Filter Coffee",
    price: 12
  },
  {
    id: 2,
    title: "Lavazza Espresso",
    price: 14
  },
  {
    id: 3,
    title: "Lavazza Macchiato",
    price: 17
  },
  {
    id: 4,
    title: "Lavazza Americano",
    price: 17
  },
  {
    id: 5,
    title: "Lavazza Cappuccino",
    price: 18
  },
  {
    id: 6,
    title: "Lavazza Caffe Latte",
    price: 18
  },
  {
    id: 7,
    title: "Lavazza Caffe Mocha",
    price: 20
  },
]



export const attractions = [
  {
    id: 1,
    title: "Addo Elephant Park",
   image: "/images/african_bush_elephants.jpg",
   width: 1024,
   height: 768
  },
  {
    id: 2,
    title: "Horse Memorial",
   image: "/images/horse_memorial_2.jpg",
    width: 640,
   height: 480
  },
  {
    id: 3,
    title: "Humewood Beach",
   image: "/images/humewood-beach.jpg",
    width: 1280,
   height: 960
  },
  {
    id: 4,
    title: "Kragga Kamma Game Reserve",
   image: "/images/kragga_kamma.jpg",
    width: 650,
   height: 432
  },


]
