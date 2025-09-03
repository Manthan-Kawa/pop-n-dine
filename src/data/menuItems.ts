import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [

  //Indian-Selection
  {
    id: 1,
    name: 'Shorba (Tomato/Palak)',
    description: 'Delicious tomato/palak soup',
    price: 180,
    category: 'Indian-Selection',
    image: 'https://vismaifood.com/storage/app/uploads/public/5a0/eb4/375/thumb__700_0_0_0_auto.jpg',
    isVeg: true,
    hasPortions: true,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Alice Johnson',
        rating: 4,
        date: '2024-06-15',
        comment: 'Good flavor, could be spicier.'
      },
      {
        userName: 'Mike Smith',
        rating: 5,
        date: '2024-06-16',
        comment: 'Loved it! Perfect for a cold day.'
      }
    ]
  },
  {
    id: 2,
    name: 'Shorba (Chicken)',
    description: 'Delicious chicken soup',
    price: 200,
    category: 'Indian-Selection',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
    isVeg: false,
    hasPortions: true,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Sarah Davis',
        rating: 3,
        date: '2024-06-17',
        comment: 'Nice but needs more chicken.'
      },
      {
        userName: 'John Doe',
        rating: 4,
        date: '2024-06-18',
        comment: 'Good for a quick meal.'
      }
    ]
  },
  {
    id: 3,
    name: 'Mulligatwani Soup',
    description: 'Delicious mulligatwani soup',
    price: 190,
    category: 'Indian-Selection',
    image: 'https://th.bing.com/th/id/OIP.pDpqEJxnQmvZULiuMTHg9gHaH6?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'John Doe',
        rating: 5,
        date: '2024-06-01',
        comment: 'Absolutely delicious!'
      },
      {
        userName: 'Jane Smith',
        rating: 4,
        date: '2024-06-02',
        comment: 'Great taste, could be a bit more spicy.'
      }
    ]
  },
  {
    id: 4, 
    name: 'Cream of Tomato / Palak',
    description: 'Delicious cream of tomato/palak soup',
    price: 180,
    category: 'Indian-Selection',
    image: 'https://th.bing.com/th/id/OIP.u3MGoCPn1w5oB0pNC9Xz1AAAAA?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Emily Brown',
        rating: 5,
        date: '2024-06-19',
        comment: 'Best soup ever!'
      },
      {
        userName: 'Michael Lee',
        rating: 4,
        date: '2024-06-20',
        comment: 'Nice and creamy.'
      }
    ]
  },
  
// Starters - Veg
    {
      id: 7,
      name: 'Hara Bara Kebab',
      description: 'Delicious hara bara kebab',
      price: 270,
      category: 'Starters',
      image: 'https://th.bing.com/th/id/OIP.CtNQCAjhlm9DpcRhg97HPgHaLH?rs=1&pid=ImgDetMain',
      isVeg: true,
      hasPortions: false,
      hasQuantity: false,
      reviews: [
        {
          userName: 'Alice Johnson',
          rating: 4,
          date: '2024-06-15',
          comment: 'Great taste, a bit too dry.'
        },
        {
          userName: 'Bob Brown',
          rating: 5,
          date: '2024-06-16',
          comment: 'Perfect appetizer, highly recommend!'
        }
      ]
    },
    {
      id: 8,
      name: 'Cheese Palak Tikki',
      description: 'Delicious cheese palak tikki',
      price: 290,
      category: 'Starters',
      image: 'https://cookingdeliciousyum.files.wordpress.com/2019/02/palak-tikki-1-2.jpg?w=534',
      isVeg: true,
      hasPortions: false,
      hasQuantity: false,
      reviews: [
        {
          userName: 'Carol Taylor',
          rating: 3,
          date: '2024-06-17',
          comment: 'Needs more cheese, but good flavor.'
        },
        {
          userName: 'David Wilson',
          rating: 4,
          date: '2024-06-18',
          comment: 'Nice and healthy option.'
        }
      ]
    },
    {
      id: 9,
      name: 'Veg Kurkure',
      description: 'Delicious veg kurkure',
      price: 280,
      category: 'Starters',
      image: 'https://th.bing.com/th/id/OIP.YzRgXuqKsLDUyvD3YxswjQFNC7?rs=1&pid=ImgDetMain',
      isVeg: true,
      hasPortions: false,
      hasQuantity: false,
      reviews: [
        {
          userName: 'Eva Davis',
          rating: 5,
          date: '2024-06-19',
          comment: 'Loved it! Best veg starter.'
        },
        {
          userName: 'Frank Lee',
          rating: 4,
          date: '2024-06-20',
          comment: 'Good but could be spicier.'
        }
      ]
    },
    {
      id: 10,
      name: 'Aloo Corn Tikki',
      description: 'Delicious aloo corn tikki',
      price: 270,
      category: 'Starters',
      image: 'https://th.bing.com/th/id/R.b80fcaeec707e0a063cca8610739a1da?rik=W9hkdwFjnbaUGQ&riu=http%3a%2f%2fwww.novicehousewife.com%2fwp-content%2fuploads%2f2017%2f05%2fCorn-aloo-tikki-35.jpg&ehk=oQo%2bydjWUNCH%2fPksKE64dcWAipRfNEIgYZLp0AIuzxI%3d&risl=&pid=ImgRaw&r=0',
      isVeg: true,
      hasPortions: false,
      hasQuantity: false,
      reviews: [
        {
          userName: 'Grace Kim',
          rating: 4,
          date: '2024-06-21',
          comment: 'Nice texture, but a bit too oily.'
        },
        {
          userName: 'Henry Park',
          rating: 5,
          date: '2024-06-22',
          comment: 'Perfect blend of flavors.'
        }
      ]
    },
    {
      id: 11,
      name: 'Paneer Sev Roll',
      description: 'Delicious paneer sev roll',
      price: 290,
      category: 'Starters',
      image: 'https://bing.com/th?id=OSK.ba7207edca989fd58ccbb8038d1aa46b',
      isVeg: true,
      hasPortions: false,
      hasQuantity: false,
      reviews: [
        {
          userName: 'Isabella White',
          rating: 5,
          date: '2024-06-23',
          comment: 'Amazing! Best paneer dish ever.'
        },
        {
          userName: 'Jack Black',
          rating: 4,
          date: '2024-06-24',
          comment: 'Good but could be more filling.'
        }
      ]
    },
 
  //Non-Veg Starters
  {
    id: 12,
    name: 'Pomfret / Surmai',
    description: 'Delicious rawa fried with fish or prawns',
    price: 200,
    category: 'Starters',
    image: 'https://indiafishcompany.com/wp-content/uploads/2022/08/Surmai-boneless-cubes.jpg.webp',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Alice Johnson',
        rating: 4,
        date: '2024-06-15',
        comment: 'Good flavor, a bit too oily.'
      },
      {
        userName: 'Mike Smith',
        rating: 5,
        date: '2024-06-16',
        comment: 'Loved it! Great for a seafood lover.'
      }
    ]
  },
  {
    id: 13,
    name: 'Rawa Fried (Fish / Prawns)',
    description: 'Delicious rawa fried with fish or prawns',
    price: 500,
    category: 'Starters',
    image: 'https://thumbs.dreamstime.com/z/crispy-rawa-fried-prawns-crispy-rawa-fried-prawns-171342380.jpg',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Sarah Davis',
        rating: 3,
        date: '2024-06-17',
        comment: 'Nice but needs more seafood.'
      },
      {
        userName: 'John Doe',
        rating: 4,
        date: '2024-06-18',
        comment: 'Good for a quick seafood meal.'
      }
    ]
  },
  {
    id: 14,
    name: 'Koliwada (Fish / Prawns)',
    description: 'Delicious koliwada with fish or prawns',
    price: 500,
    category: 'Starters',
    image: 'https://3.bp.blogspot.com/-sp08rAc9sLw/UTeqLhG_KDI/AAAAAAAAAvo/RKF9xNBeuWU/s1600/D5DE9B09-90FC-4817-AE3A-8858DD886398.JPG',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Emily Brown',
        rating: 5,
        date: '2024-06-19',
        comment: 'Best seafood starter!'
      },
      {
        userName: 'Michael Lee',
        rating: 4,
        date: '2024-06-20',
        comment: 'Nice and creamy.'
      }
    ]
  },
  {
    id: 15,
    name: 'Fish Finger with Tarter Sauce',
    description: 'Delicious fish finger with tarter sauce',
    price: 520,
    category: 'Starters',
    image: 'https://th.bing.com/th/id/OIP.978oJBbf3EGDSZmR9OOHkgHaE8?rs=1&pid=ImgDetMain',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Isabella White',
        rating: 5,
        date: '2024-06-21',
        comment: 'Amazing! Best fish finger ever.'
      },
      {
        userName: 'Jack Black',
        rating: 4,
        date: '2024-06-22',
        comment: 'Good but could be more crispy.'
      }
    ]
  },

  //Tandoor Selection Sea-Food
  {
    id: 16,
    name: 'Tandoori Pomfret',
    description: 'Delicious tandoori pomfret',
    price: 1000,
    category: 'Tandoor Sea-Food',
    image: 'https://recipes.timesofindia.com/thumb/53707424.cms?imgsize=151367&width=800&height=800',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Alice Johnson',
        rating: 5,
        date: '2024-06-15',
        comment: 'The best pomfret I have ever had!'
      },
      {
        userName: 'Bob Brown',
        rating: 4,
        date: '2024-06-16',
        comment: 'Great flavor, but a bit too salty.'
      },
      {
        userName: 'Carol Davis',
        rating: 5,
        date: '2024-06-17',
        comment: 'Absolutely delicious, highly recommend!'
      }
    ]
  },
  {
    id: 17,
    name: 'Fish / Prawns Tikka',
    description: 'Delicious fish or prawns tikka',
    price: 500,
    category: 'Tandoor Sea-Food',
    image: 'https://th.bing.com/th/id/OIP.gh7m9xApOqhUFpC446gs4QHaHa?rs=1&pid=ImgDetMain',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'David Wilson',
        rating: 4,
        date: '2024-06-18',
        comment: 'Good for a seafood lover.'
      },
      {
        userName: 'Eva Davis',
        rating: 5,
        date: '2024-06-19',
        comment: 'Loved it! Best seafood starter.'
      },
      {
        userName: 'Frank Lee',
        rating: 3,
        date: '2024-06-20',
        comment: 'Nice but could be more crispy.'
      }
    ]
  },
  {
    id: 18,
    name: 'Macchi Ajwani Tikka',
    description: 'Delicious macchi ajwani tikka',
    price: 500,
    category: 'Tandoor Sea-Food',
    image: 'https://img-global.cpcdn.com/recipes/54d378df458de1c5/1200x630cq70/photo.jpg',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Grace Kim',
        rating: 4,
        date: '2024-06-21',
        comment: 'Nice texture, but a bit too oily.'
      },
      {
        userName: 'Henry Park',
        rating: 5,
        date: '2024-06-22',
        comment: 'Perfect blend of flavors.'
      },
      {
        userName: 'Isabella White',
        rating: 5,
        date: '2024-06-23',
        comment: 'Amazing! Best macchi dish ever.'
      }
    ]
  },
  {
    id: 19,
    name: 'Sea Food Tandoori Platters',
    description: 'Delicious sea food tandoori platters',
    price: 1600,
    category: 'Tandoor Sea-Food',
    image: 'https://th.bing.com/th/id/OIP.3GMVbBm-LTi_zDuEIm8lPAHaJN?rs=1&pid=ImgDetMain',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Jack Black',
        rating: 4,
        date: '2024-06-24',
        comment: 'Good but could be more filling.'
      },
      {
        userName: 'Jill Green',
        rating: 5,
        date: '2024-06-25',
        comment: 'Absolutely delicious!'
      },
      {
        userName: 'Ken Scott',
        rating: 4,
        date: '2024-06-26',
        comment: 'Great taste, would recommend.'
      }
    ]
  },

  //Tandoor Selection - Veg
  {
    id: 20,
    name: 'Paneer Tikka / Hariyali / Lasooni',
    description: 'Delicious paneer tikka with hariyali and lasooni',
    price: 350,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.PC34O7_YPvVdeB6aKAH1-AHaLH?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Alice Johnson',
        rating: 4,
        date: '2024-06-15',
        comment: 'Great taste, a bit too oily.'
      },
      {
        userName: 'Bob Brown',
        rating: 5,
        date: '2024-06-16',
        comment: 'Perfect appetizer, highly recommend!'
      },
      {
        userName: 'Carol Davis',
        rating: 3,
        date: '2024-06-17',
        comment: 'Needs more hariyali.'
      }
    ]
  },
  {
    id: 21,
    name: 'Paneer Shola Tikka / Sultani Tikka',
    description: 'Delicious paneer shola and sultani tikka',
    price: 360,
    category: 'Tandoor Selection',
    image: 'https://static.fanpage.it/wp-content/uploads/sites/22/2021/08/paneer-tikka.jpg',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'David Wilson',
        rating: 4,
        date: '2024-06-18',
        comment: 'Good for a seafood lover.'
      },
      {
        userName: 'Eva Davis',
        rating: 5,
        date: '2024-06-19',
        comment: 'Loved it! Best seafood starter.'
      }
    ]
  },
  {
    id: 22,
    name: 'Makai Malai Seekh Kebab',
    description: 'Delicious makai malai seekh kebab',
    price: 300,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.AtlanCW3eDD4RuFh_GcG9wHaFw?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Grace Kim',
        rating: 4,
        date: '2024-06-21',
        comment: 'Nice texture, but a bit too oily.'
      },
      {
        userName: 'Henry Park',
        rating: 5,
        date: '2024-06-22',
        comment: 'Perfect blend of flavors.'
      }
    ]
  },
  {
    id: 23,
    name: 'Subzi Nawabi Seekh Kebab',
    description: 'Delicious subzi nawabi seekh kebab',
    price: 350,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.jaO6rKbfUodTR1r_DkBpzQHaFj?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Isabella White',
        rating: 5,
        date: '2024-06-23',
        comment: 'Amazing! Best subzi dish ever.'
      },
      {
        userName: 'Jack Black',
        rating: 4,
        date: '2024-06-24',
        comment: 'Good but could be more filling.'
      }
    ]
  },
  {
    id: 24,
    name: 'Soya Seekh Kebab',
    description: 'Delicious soya seekh kebab',
    price: 280,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.tf1o6Yp1s09LCC1obcsA9QHaHa?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Jill Green',
        rating: 5,
        date: '2024-06-25',
        comment: 'Absolutely delicious!'
      },
      {
        userName: 'Ken Scott',
        rating: 4,
        date: '2024-06-26',
        comment: 'Great taste, would recommend.'
      }
    ]
  },
  {
    id: 25,
    name: 'Achari / Tandoori Mushroom',
    description: 'Delicious achari or tandoori mushroom',
    price: 300,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.mHokMtVtPuwjj1PGmt3euwHaEK?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Alice Johnson',
        rating: 4,
        date: '2024-06-15',
        comment: 'Good flavor, could be spicier.'
      },
      {
        userName: 'Mike Smith',
        rating: 5,
        date: '2024-06-16',
        comment: 'Loved it! Perfect for a cold day.'
      }
    ]
  },
  {
    id: 26,
    name: 'Mushroom Multani',
    description: 'Delicious mushroom multani',
    price: 340,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.v-kV9JVEM--4tD28DqmpiAHaIZ?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Sarah Davis',
        rating: 3,
        date: '2024-06-17',
        comment: 'Nice but needs more mushroom.'
      },
      {
        userName: 'John Doe',
        rating: 4,
        date: '2024-06-18',
        comment: 'Good for a quick meal.'
      },
      {
        userName: 'Emily Brown',
        rating: 5,
        date: '2024-06-19',
        comment: 'Best mushroom dish ever!'
      }
    ]
  },
  {
    id: 27,
    name: 'Tandori / Hyderabadi Aloo',
    description: 'Delicious tandori aloo or aloo hyderabadi',
    price: 280,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.TC32Nd5-NuhkvEfkpJOaegHaLH?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Michael Lee',
        rating: 4,
        date: '2024-06-20',
        comment: 'Nice and creamy.'
      },
      {
        userName: 'Isabella White',
        rating: 5,
        date: '2024-06-21',
        comment: 'Amazing! Best aloo dish ever.'
      }
    ]
  },
  {
    id: 28,
    name: 'Tandori Babycorn / Gobi',
    description: 'Delicious tandori babycorn or gobi',
    price: 300,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.9s1NK3Yg_skVpBCCD47eawHaDp?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Jack Black',
        rating: 4,
        date: '2024-06-22',
        comment: 'Good but could be more crispy.'
      },
      {
        userName: 'Jill Green',
        rating: 5,
        date: '2024-06-23',
        comment: 'Absolutely delicious!'
      }
    ]
  },
  {
    id: 29,
    name: 'Stuffed Aloo',
    description: 'Delicious stuffed aloo',
    price: 310,
    category: 'Tandoor Selection',
    image: 'https://bing.com/th?id=OSK.e8c0510c00c4c13942d45c793bec1a84',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Ken Scott',
        rating: 4,
        date: '2024-06-24',
        comment: 'Good but could be more filling.'
      },
      {
        userName: 'Alice Johnson',
        rating: 5,
        date: '2024-06-25',
        comment: 'Absolutely delicious!'
      }
    ]
  },
  {
    id: 30,
    name: 'Assorted Veg. Tandoori Kebab Platter',
    description: 'Delicious assorted veg tandoori kebab platter',
    price: 650,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.ERZg0_Mj-9Vloz8S8Xya3QAAAA?rs=1&pid=ImgDetMain',
    isVeg: true,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Bob Brown',
        rating: 5,
        date: '2024-06-26',
        comment: 'Perfect blend of flavors.'
      },
      {
        userName: 'Carol Davis',
        rating: 4,
        date: '2024-06-27',
        comment: 'Good for a seafood lover.'
      },
      {
        userName: 'David Wilson',
        rating: 3,
        date: '2024-06-28',
        comment: 'Needs more seasoning.'
      }
    ]
  },

  //Tandoor Selection - Non-Veg
  {
    id: 31,
    name: 'Murg Dilruba Full / Half',
    description: 'Delicious murg dilruba available full or half',
    price: 550,
    category: 'Tandoor Selection',
    image: 'https://4.bp.blogspot.com/-aNer2-sMJvc/VPRcASf9e-I/AAAAAAAAaro/WCm0xcij650/s1600/DSC06378.JPG',
    isVeg: false,
    hasPortions: true,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Alice Johnson',
        rating: 5,
        date: '2024-06-15',
        comment: 'The best dilruba I have ever tasted.'
      },
      {
        userName: 'Bob Brown',
        rating: 4,
        date: '2024-06-16',
        comment: 'Great flavor, but a bit too expensive.'
      }
    ]
  },
  {
    id: 32,
    name: 'Murg Tandori Full / Half',
    description: 'Delicious murg tandori available full or half',
    price: 550,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.WMH73nX7qxcCvXcqfk82zgHaE8?rs=1&pid=ImgDetMain',
    isVeg: false,
    hasPortions: true,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Carol Taylor',
        rating: 3,
        date: '2024-06-17',
        comment: 'Needs more spice, but good overall.'
      },
      {
        userName: 'David Wilson',
        rating: 4,
        date: '2024-06-18',
        comment: 'Good for a special occasion.'
      },
      {
        userName: 'Eva Davis',
        rating: 5,
        date: '2024-06-19',
        comment: 'Loved it! Highly recommend.'
      }
    ]
  },
  {
    id: 33,
    name: 'Murg Tangdi Kebab (Afghani / Banjara / Hyderabadi)',
    description: 'Delicious murg tangdi kebab',
    price: 360,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/R.34a0abd5a0f7a241d5e33ffdcaae04fe?rik=kYhgA2%2fdKoil0A&riu=http%3a%2f%2fspicyworld.in%2frecipeimages%2fmurgh-banjara-kabab.jpg&ehk=WW5DpfB6kFm7WsL62%2f3iPcLr%2bPtA28Ojrd6g0d4Om8U%3d&risl=&pid=ImgRaw&r=0',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Grace Kim',
        rating: 4,
        date: '2024-06-21',
        comment: 'Nice texture, but a bit too oily.'
      },
      {
        userName: 'Henry Park',
        rating: 5,
        date: '2024-06-22',
        comment: 'Perfect blend of flavors.'
      }
    ]
  },
  {
    id: 34,
    name: 'Reshmi / Kalimiri / Achari',
    description: 'Delicious reshmi, kalimiri, or achari',
    price: 370,
    category: 'Tandoor Selection',
    image: 'https://tse3.mm.bing.net/th?id=OIP.9WnhS5plnlDrzz3xPqPcyQHaEK&pid=Api&P=0&h=180',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Isabella White',
        rating: 5,
        date: '2024-06-23',
        comment: 'Amazing! Best reshmi dish ever.'
      },
      {
        userName: 'Jack Black',
        rating: 4,
        date: '2024-06-24',
        comment: 'Good but could be more filling.'
      }
    ]
  },
  {
    id: 35,
    name: 'Murg Cheese Seekh Kebab',
    description: 'Delicious murg cheese seekh kebab',
    price: 380,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.xKP4xLzHiMdVKJfFPlwXtAHaFq?rs=1&pid=ImgDetMain',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Jill Green',
        rating: 5,
        date: '2024-06-25',
        comment: 'Absolutely delicious!'
      },
      {
        userName: 'Ken Scott',
        rating: 4,
        date: '2024-06-26',
        comment: 'Great taste, would recommend.'
      }
    ]
  },
  {
    id: 36,
    name: 'Murg Alishan Tikka',
    description: 'Delicious murg alishan tikka',
    price: 380,
    category: 'Tandoor Selection',
    image: 'https://tse3.mm.bing.net/th?id=OIP.nkdg2mrhOxoH1hZg1be9jgHaEK&pid=Api&P=0&h=180',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Alice Johnson',
        rating: 4,
        date: '2024-06-15',
        comment: 'Good flavor, could be spicier.'
      },
      {
        userName: 'Mike Smith',
        rating: 5,
        date: '2024-06-16',
        comment: 'Loved it! Perfect for a cold day.'
      },
      {
        userName: 'Sarah Davis',
        rating: 3,
        date: '2024-06-17',
        comment: 'Nice but needs more chicken.'
      }
    ]
  },
  {
    id: 37,
    name: 'Murg Uttaranchal / Rosali Kebab',
    description: 'Delicious murg uttaranchal or rosali kebab',
    price: 410,
    category: 'Tandoor Selection',
    image: 'https://tse4.mm.bing.net/th?id=OIP.BzWub_xJh7Wu8fdQUtgCcAHaEK&pid=Api&P=0&h=180',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Emily Brown',
        rating: 5,
        date: '2024-06-19',
        comment: 'Best dish ever!'
      },
      {
        userName: 'Michael Lee',
        rating: 4,
        date: '2024-06-20',
        comment: 'Nice and creamy.'
      }
    ]
  },
  {
    id: 38,
    name: 'Mutton Seekh Kebab',
    description: 'Delicious mutton seekh kebab',
    price: 500,
    category: 'Tandoor Selection',
    image: 'https://www.awesomecuisine.com/wp-content/uploads/2009/10/Mutton-Seekh-Kebab.jpg',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Isabella White',
        rating: 5,
        date: '2024-06-21',
        comment: 'Amazing! Best mutton dish ever.'
      },
      {
        userName: 'Jack Black',
        rating: 4,
        date: '2024-06-22',
        comment: 'Good but could be more crispy.'
      }
    ]
  },
  {
    id: 39,
    name: 'Murg Kebab Platter',
    description: 'Delicious murg kebab platter',
    price: 1300,
    category: 'Tandoor Selection',
    image: 'https://imperialtandoor.com/cdn/shop/products/Untitleddesign_1200x1200.png?v=1667254916',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Ken Scott',
        rating: 4,
        date: '2024-06-24',
        comment: 'Good but could be more filling.'
      },
      {
        userName: 'Alice Johnson',
        rating: 5,
        date: '2024-06-25',
        comment: 'Absolutely delicious!'
      },
      {
        userName: 'Bob Brown',
        rating: 3,
        date: '2024-06-26',
        comment: 'Needs more seasoning.'
      }
    ]
  },
  {
    id: 40,
    name: 'Assorted Non-Veg. Kebab Platter',
    description: 'Delicious assorted non-veg kebab platter',
    price: 1600,
    category: 'Tandoor Selection',
    image: 'https://th.bing.com/th/id/OIP.UNxce-SHE6W6xcofh_agUgHaHR?rs=1&pid=ImgDetMain',
    isVeg: false,
    hasPortions: false,
    hasQuantity: false,
    reviews: [
      {
        userName: 'Carol Davis',
        rating: 3,
        date: '2024-06-27',
        comment: 'Nice but needs more chicken.'
      },
      {
        userName: 'David Wilson',
        rating: 4,
        date: '2024-06-28',
        comment: 'Good for a quick meal.'
      }
    ]
  },

//Main Course Veg
{
  id: 41,
  name: 'Paneer Chatpata',
  description: '360 Delicate cubes of cottage cheese cooked with spicy red gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://www.cookclickndevour.com/wp-content/uploads/2019/01/paneer-chatpata-recipe-500x500.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 42,
  name: 'Paneer Tikka Masala',
  description: 'Cubes of Delicate cottage cheese lightly cooked in Tandoor and spicy Tomato Gravy',
  price: 370,
  category: 'Main Course',
  image: 'https://bing.com/th?id=OSK.ab6f9630fb4c7f8eaee60dff6cf1a1a7',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more cheese.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 43,
  name: 'Paneer Pasanda',
  description: 'Stuffed Cottage cheese cooked in rich Cashewnut Gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://bing.com/th?id=OSK.ee5eaf9400b4808556b2245690e7c637',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best paneer dish ever.'
    }
  ]
},
{
  id: 44,
  name: 'Paneer Lasooni Methi',
  description: 'Classic combination of fenugreek and cottage cheese with garlic Tadka',
  price: 360,
  category: 'Main Course',
  image: 'https://bing.com/th?id=OSK.85d993c2547456ae3d48bed9497ac1d9',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more crispy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 45,
  name: 'Palak Paneer',
  description: 'A Classic Combination of Spinach and cottage Cheese',
  price: 350,
  category: 'Main Course',
  image: 'https://bing.com/th?id=OSK.3acd803877b2ed6453c4f90ea2d462ba',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 46,
  name: 'Hari Pyaaz Paneer Masala',
  description: 'Diced cottage cheese and spring onion tossed in onion gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://th.bing.com/th?id=OSK.95cd70c73a4e9b66d92c313b36707621',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},
{
  id: 47,
  name: 'Paneer Makhani',
  description: 'Cottage cheese cooked in Cashew nuts Gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://indianhealthyrecipes.com/wp-content/uploads/2015/11/paneer-makhani.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    },
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    }
  ]
},
{
  id: 48,
  name: 'Subzi Diwani Handi',
  description: 'Classic combination of Vegetable cooked with spinach/onion gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP.L-gI7XZCALcIipfZ_iuHLgHaFl?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 49,
  name: 'Subzi Maharaja',
  description: 'Veg crockets served in chef special brown gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP.2OR3GV5IEqQdkOVUGt01JQHaEK?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 50,
  name: 'Sarso Ka Saag',
  description: 'Classic dish made with Sarso (mustard greens) and spices',
  price: 300,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP._hW9bmb1-yOXveyAV3ydawHaE8?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-26',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 51,
  name: 'Sabzi Makhmali',
  description: 'A classic combination of one chopped vegetable & Paneer cooked in Red Gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://img-global.cpcdn.com/recipes/dced4c3e7a798eb3/1200x630cq70/photo.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 52,
  name: 'Subzi Shamiana',
  description: 'Diced vegetable, baby corn, capsicum cooked in tomato & onion blended Gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://tse3.mm.bing.net/th?id=OIP.qe--eXdmMQlLlAmdQPEZVQHaEK&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more vegetable.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 53,
  name: 'Bhindi Aap Ki Pasand',
  description: '(Masala/ Tawa/ Crispy Fried)',
  price: 300,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP.-0U4FQsMGpHrVN_uXzLUlQHaJo?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    }
  ]
},
{
  id: 54,
  name: 'Subzi Bemisal',
  description: 'Classical combination of Minced vegetable cooked in rich Yellow Gravy',
  price: 300,
  category: 'Main Course',
  image: 'https://images.slurrp.com/prod/recipe_images/better-butter/subzi-bemisaal-1614319385_C2HGTY6K05WLGC4YUINO.webp?impolicy=slurrp-20210601&width=1200&height=675',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more crispy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 55,
  name: 'Subzi Jaipuri',
  description: 'Seasonal Veg. Cooked in Authentic Jaipuri Style',
  price: 310,
  category: 'Main Course',
  image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/83841085/3432501189.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 56,
  name: 'Methi Tikki Masala',
  description: 'Deep fried Fenugreek cutlets cooked in rich Brown Gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://tse4.mm.bing.net/th?id=OIP.0sW9oVOSniaFCe13799MGwHaFj&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},
{
  id: 57,
  name: 'Methi Mutter Malai',
  description: 'Classic combination of Fenugreek and Green Peas cooked in Creamy Gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP.Ul4KMbJn83gdt4QGsAqEIwHaGL?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    },
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    }
  ]
},
{
  id: 58,
  name: 'Subzi Chilli Milli Masala',
  description: 'Chopped vegetable cooked in spicy Red Gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/R.0135e962713063c97118df406539f17b?rik=ju0LT%2b%2bM9yV%2bOA&riu=http%3a%2f%2fwww.tasty-indian-recipes.com%2fwp-content%2fuploads%2f2013%2f10%2fVeg-Chilli-Milli-Recipe-300x194%402x.jpg&ehk=vgFW8bm554X6BD0znnbhGh6pCVBZzcHIANF%2bCG%2buCNs%3d&risl=&pid=ImgRaw&r=0',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 59,
  name: 'Subzi Lassoni Masala',
  description: 'Mixed Veg. Fried Garlic & Spring Onions Served in Onion Gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://img.freepik.com/premium-photo/lasooni-palak-recipe-dhaba-style-garlic-spinach-curry-indian-main-course-served-with-naan_1093310-44.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 60,
  name: 'Chole Masaledar',
  description: 'Authentic Rich cooked chick peas cooked in Punjabi Style',
  price: 290,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP.kvZmpp_gOw_k_hQUefjaAwHaEK?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-26',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 61,
  name: 'Kofta',
  description: '(Malai / Cheese Palak / Veg)',
  price: 360,
  category: 'Main Course',
  image: 'https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/12/malai-kofta-recipe-step-by-step-instructions.jpg?fit=3676%2C2878&quality=30&strip=all&ssl=1',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 62,
  name: 'Firangi Kofta',
  description: 'Cottage cheese & cheese stuff Balls Tossed in Rich Yellow Gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP.oPWYOXNiSOzdCI86qbouTAHaEK?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more cheese.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 63,
  name: 'Dum Aloo Punjabi',
  description: 'Potato cooked in rich gravy',
  price: 310,
  category: 'Main Course',
  image: 'https://bing.com/th?id=OSK.ffd8d4ce0b5db943d0644612cf3f1a39',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    }
  ]
},
{
  id: 64,
  name: 'Dal Makhani',
  description: 'Creamy and rich lentils',
  price: 280,
  category: 'Main Course',
  image: 'https://i.pinimg.com/originals/25/0c/c7/250cc7485406f27d4e2e61f63a36f91b.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more crispy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 65,
  name: 'Dal Tadka / Dal Fry',
  description: 'Spiced lentils tempered with garlic and cumin',
  price: 250,
  category: 'Main Course',
  image: 'https://spicecravings.com/wp-content/uploads/2021/05/Dal-Tadka-Featured-768x768.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 66,
  name: 'Dahi Kadi Pakodi',
  description: 'Fried fritters served with yogurt and curry',
  price: 270,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/R.5cd2726e3610cbb37adb10fbd3331b2c?rik=nIUeufSXcFTu7g&riu=http%3a%2f%2fyummyindiankitchen.com%2fwp-content%2fuploads%2f2016%2f04%2fdahi-kadhi-recipe-besan-ki-kadhi.jpg&ehk=2rznGAuN4b3XToxYakAbmtva%2bX54k%2fFUDUrYcGCzBTc%3d&risl=&pid=ImgRaw&r=0',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},

//Main Course Non-Veg
{
  id: 67,
  name: 'Murg Angara',
  description: 'Barbequed chunks of chicken cooked in spicy red gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/R.12340c6c7f469af097d51b3eb968990c?rik=5p2ofucWwz%2bTIA&riu=http%3a%2f%2fwww.vishualfoodie.com%2fwp-content%2fuploads%2f2017%2f09%2fma2.jpg&ehk=ADECTvmLsNkRrEi4wDPQ4meDyWnwuKIIi9GNlnwFar8%3d&risl=&pid=ImgRaw&r=0',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 68,
  name: 'Murg Makhani',
  description: 'A delicate chicken cooked in mild tomato gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP.tIIsPiM2F6O_zXfEFOJeogHaE8?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more chicken.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 69,
  name: 'Murg Achari Masala',
  description: 'Boneless chicken cooked in pickle favour curry',
  price: 360,
  category: 'Main Course',
  image: 'https://tse3.mm.bing.net/th?id=OIP.fp1tZvVLCwVgSKumFH0rJAHaEK&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 5,
      date: '2024-06-19',
      comment: 'Best dish ever!'
    },
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    }
  ]
},
{
  id: 70,
  name: 'Murg Tikka Masala',
  description: 'Boneless barbecued chicken cooked in spicy red gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://bing.com/th?id=OSK.7aa8023e1e371b769ba79f979685c456',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best chicken dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 71,
  name: 'Murg Methi',
  description: 'Fiery chicken cooked together with fenugreek masala',
  price: 360,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/R.0dca4c7ae803db481563d4e19abd7130?rik=OcokQnvTKaXb%2fg&riu=http%3a%2f%2fspicyworld.in%2frecipeimages%2fmurgh-methi-malai-end.jpg&ehk=%2fxbhCFiqFLIbCbdJar6bzxn%2bLOC788RriboVs2Mmqtk%3d&risl=&pid=ImgRaw&r=0',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 72,
  name: 'Murg Ra Ra Masala',
  description: 'Chunks & minced chicken cooked together in red gravy',
  price: 370,
  category: 'Main Course',
  image: 'https://thecurryculture.ca/wp-content/uploads/2020/12/Gosht-Rara-300x222.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 73,
  name: 'Murg Hyderabadi Masala',
  description: 'Chunks of chicken cooked with mint & spring onion gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP.4a9kS1zLtoAiRXyg3jsBdAHaE8?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more chicken.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 74,
  name: 'Murg Aftabhi',
  description: 'Chicken chest pieces cooked in cashewnut gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://www.masala.tv/wp-content/uploads/2021/03/Murgh-Desi-Karahii.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    }
  ]
},
{
  id: 75,
  name: 'Murg Ka Saalan',
  description: 'Chicken cooked in homemade style spicy thin gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://www.boldsky.com/img/2013/03/12-murgkasalan.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more crispy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 76,
  name: 'Murg Kurchand',
  description: 'Diced chicken & bell peppers cooked in red gravy',
  price: 360,
  category: 'Main Course',
  image: 'https://i.pinimg.com/originals/97/18/87/971887a0f60af9a9aa3f1b8d443de1e1.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 77,
  name: 'Bhatti Chicken',
  description: 'Barbeque chicken with bone tossed in spicy tomato gravy',
  price: 420,
  category: 'Main Course',
  image: 'https://bing.com/th?id=OSK.27c7079bc02d20ccee3fc9739fd654df',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},
{
  id: 78,
  name: 'Murg Maharaja',
  description: 'Delicate shredded pieces of chicken cooked with Indian spices',
  price: 360,
  category: 'Main Course',
  image: 'https://th.bing.com/th/id/OIP.0boM4IPn7QShKVeSpwiEBgHaFj?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    },
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    }
  ]
},
//Lamb spcialities
{
  id: 79,
  name: 'Mutton Rogan Gosht',
  description: 'Bone Mutton Cooked in spicy traditional Punjabi Style',
  price: 450,
  category: 'Lamb Specialities',
  image: 'https://2.bp.blogspot.com/--qSXjvPqwlk/WNIdQmvaN6I/AAAAAAAADAg/h0j9hytktVY2lFI_AuhBR1fE7UkfK3t0gCLcB/s1600/Mutton%2BRogan%2BJosh%2BRecipe.JPG',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Delicious and hearty, perfect for winter.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'One of the best lamb dishes I\'ve ever had.'
    }
  ]
},
{
  id: 80,
  name: 'Bhuna Gosht',
  description: 'A popular Lamb Preparation Served with Selected Indian Herbs and Spices',
  price: 450,
  category: 'Lamb Specialities',
  image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/PAKISTANI_BHUNA_GOSHT.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Needs more spice to enhance the flavor.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'A good dish for a special occasion.'
    }
  ]
},
{
  id: 81,
  name: 'Gosht Lababdar',
  description: 'Chunks of Meat tossed with Tomato, Capsicum & Onions Served in Brown Gravy',
  price: 450,
  category: 'Lamb Specialities',
  image: 'https://th.bing.com/th/id/OIP.wikOlDM9ll_nDr8vu5ZoMwHaEo?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 5,
      date: '2024-06-19',
      comment: 'The rich gravy makes this dish exceptional.'
    },
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'A flavorful dish, highly recommended.'
    }
  ]
},
{
  id: 82,
  name: 'Dhaba Gosht',
  description: 'Tender Mutton Cooked with Coriander & Onion Base Gravy',
  price: 450,
  category: 'Lamb Specialities',
  image: 'https://th.bing.com/th/id/OIP.1mpv1Wy4F3EBCntTo1gt3gHaE8?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best mutton dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 83,
  name: 'Gosht Ra Ra Masala',
  description: 'Chunks of Meat and minced meat cooked together in Brown Gravy',
  price: 470,
  category: 'Lamb Specialities',
  image: 'https://bing.com/th?id=OSK.46e105483ff138f9aca5d3d4fa6924d2',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 84,
  name: 'Hariyali Gosht',
  description: 'Bone Mutton cooked in spinach a gravy added with India Spices',
  price: 450,
  category: 'Lamb Specialities',
  image: 'https://maunikagowardhan.co.uk/wp-content/uploads/2022/02/IMG_4548-1024x768.jpeg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 85,
  name: 'Mutton Nilgiri',
  description: 'Boneless Mutton cooked in cashew nuts and onion gravy flavored with mint',
  price: 450,
  category: 'Lamb Specialities',
  image: 'https://th.bing.com/th/id/OIP.Y1p4rDRMapXMOZ_m1SpJNwHaE8?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more mutton.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 86,
  name: 'Gosht Lalmiri',
  description: 'Boneless mutton cooked in onion gravy',
  price: 450,
  category: 'Lamb Specialities',
  image: 'https://tse4.mm.bing.net/th?id=OIP.vjOo7QDPoXFS2M5MPmH1pQHaEK&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    }
  ]
},
{
  id: 87,
  name: 'Mutton Kheema Hyderabadi',
  description: 'Minced mutton cooked with exotic Indian spices & Mint',
  price: 450,
  category: 'Lamb Specialities',
  image: 'https://tse4.mm.bing.net/th?id=OIP.uMgMvW3Ihv8M96o6oEjGhwHaEK&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more crispy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},

//Sea Food Specialities
{
  id: 88,
  name: 'Pomfret Amristari Masala',
  description: 'Shallow Fried of Pomfret Tossed with spicy red gravy',
  price: 2000,
  category: 'Sea-Food Specialities',
  image: 'https://th.bing.com/th/id/OIP.11qg5WYEq45ZGbyUrUgs4QHaE8?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-15',
      comment: 'The best Pomfret I have ever tasted!'
    },
    {
      userName: 'Bob Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too spicy for my taste.'
    }
  ]
},
{
  id: 89,
  name: 'Pomfret Chutneywala',
  description: 'Fillet of Pomfret Cooked with Spicy Mint & Coriander Chutney',
  price: 2000,
  category: 'Sea-Food Specialities',
  image: 'https://th.bing.com/th/id/OIP.1Vl64JNCnts_vIkREdGjTgHaFi?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Carol Taylor',
      rating: 3,
      date: '2024-06-17',
      comment: 'Needs more spice, but good overall.'
    },
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Nice and flavorful, highly recommended.'
    }
  ]
},
{
  id: 90,
  name: 'Fish Tikka Masala',
  description: '(Surmai Rawas, Prawns)',
  price: 550,
  category: 'Sea-Food Specialities',
  image: 'https://bing.com/th?id=OSK.3e75683bb4daf5f75a9f664aeb3b0ba4',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    },
    {
      userName: 'Frank Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    }
  ]
},
{
  id: 91,
  name: 'Macchi Ka Salan',
  description: '(Surmai / Rawas / Prawns)',
  price: 550,
  category: 'Sea-Food Specialities',
  image: 'https://th.bing.com/th/id/R.661ec5d47e8f35f0705789cdd97fc781?rik=Or21V8usESAaVQ&riu=http%3a%2f%2fwww.pak101.com%2frecipes%2fFish%2f2017%2f12%2f4%2fMachli_Ka_Salan_Recipe_cqwif_Pak101(dot)com.jpg&ehk=24JkTA01HnGgYVuLtOhDfhb5iW4ascLZUVIoj%2fkO11g%3d&risl=&pid=ImgRaw&r=0',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 92,
  name: 'Prawns Charminar',
  description: 'Sauteed Prawns Served in Onion Based Brown Gravy',
  price: 550,
  category: 'Sea-Food Specialities',
  image: 'https://tse4.mm.bing.net/th?id=OIP.1Vl64JNCnts_vIkREdGjTgHaFi&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 93,
  name: 'Sea Food Goan Curry',
  description: '(Surmai / Rawas / Prawns)',
  price: 550,
  category: 'Sea-Food Specialities',
  image: 'https://th.bing.com/th/id/OIP.cw7eEofmyZ4tobNUn2mVxgHaHa?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},

//Roti
{
  id: 94,
  name: 'Roti Ki Tokri',
  description: 'A basket of assorted Indian bread',
  price: 350,
  category: 'Roti',
  image: 'https://www.holidify.com/blog/wp-content/uploads/2015/10/roti-ki-tokri.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Great variety of breads, perfect with curry.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the assortment, will order again.'
    }
  ]
},
{
  id: 95,
  name: 'Stuffed Paratha / Naan / Kulcha',
  description: 'Indian bread stuffed with a variety of fillings',
  price: 150,
  category: 'Roti',
  image: 'https://th.bing.com/th/id/OIP.Hz_iRqJ0_08Rc-t_Leb1twHaI5?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Needs more filling, but tasty.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 96,
  name: 'Cheese Naan',
  description: 'Naan bread with Cheese',
  price: 160,
  category: 'Roti',
  image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/cheese-naan-recipe-without-yeast.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 5,
      date: '2024-06-19',
      comment: 'Best cheese naan ever!'
    },
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    }
  ]
},
{
  id: 97,
  name: 'Garlic Naan',
  description: 'Naan bread with Garlic',
  price: 140,
  category: 'Roti',
  image: 'https://bing.com/th?id=OSK.93473d2d34f12dddc58a67ec5ab61b32',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best garlic naan ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more garlicky.'
    }
  ]
},
{
  id: 98,
  name: 'Reshmi Tawa Paratha',
  description: 'Delicious paratha cooked on a tawa',
  price: 110,
  category: 'Roti',
  image: 'https://th.bing.com/th/id/OIP.P8GijnncARsCWssp_LLaygHaE9?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 4,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 3,
      date: '2024-06-24',
      comment: 'Needs more seasoning.'
    }
  ]
},
{
  id: 99,
  name: 'Butter Roomali',
  description: 'Thin and crisp roomali bread with butter',
  price: 80,
  category: 'Roti',
  image: 'https://i.pinimg.com/736x/1c/6e/e2/1c6ee2b170b8d6739ab76e89bbee74bc--roti-eyes.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 100,
  name: 'Plain Roomali',
  description: 'Thin and crisp roomali bread without butter',
  price: 75,
  category: 'Roti',
  image: 'https://th.bing.com/th/id/OIP.r0q5InL3pLDHsSYaPyu2jQHaFj?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more butter.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 101,
  name: 'Paratha/Naan/Kulcha (Butter)',
  description: 'Indian bread with butter',
  price: 70,
  category: 'Roti',
  image: 'https://c.ndtvimg.com/2023-07/ud453q6g_butter-garlic-naan_625x300_07_July_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    }
  ]
},
{
  id: 102,
  name: 'Paratha/Naan/Kulcha (Plain)',
  description: 'Indian bread without butter',
  price: 65,
  category: 'Roti',
  image: 'https://littlespicy11.com/wp-content/uploads/2022/04/plain-paratha.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more crispy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 103,
  name: '(Methi / Pudina / Laccha)Paratha',
  description: 'Paratha with methi, pudina, or laccha',
  price: 75,
  category: 'Roti',
  image: 'https://img-global.cpcdn.com/recipes/8bb658f31f3d6e8d/680x482cq70/methi-laccha-paratha-recipe-main-photo.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 104,
  name: 'Butter Roti',
  description: 'Indian bread with butter',
  price: 55,
  category: 'Roti',
  image: 'https://th.bing.com/th/id/OIP.i9mpbwMj7D5jrJlHnijjAwHaHa?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},
{
  id: 105,
  name: 'Plain Roti',
  description: 'Indian bread without butter',
  price: 50,
  category: 'Roti',
  image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/tandoori-roti-recipe.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    },
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    }
  ]
},
{
  id: 106,
  name: 'Phulka (Butter)',
  description: 'Whole wheat flatbread with butter',
  price: 45,
  category: 'Roti',
  image: 'https://bing.com/th?id=OSK.f2d66c6824e2c9cdc737b7149533b5fb',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 107,
  name: 'Phulka (Plain)',
  description: 'Whole wheat flatbread without butter',
  price: 40,
  category: 'Roti',
  image: 'https://bing.com/th?id=OSK.f2d66c6824e2c9cdc737b7149533b5fb',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    }
  ]
},

// Rice Preparations
{
  id: 108,
  name: 'Steamed Rice',
  description: 'Plain Basmati Rice steam Cooked',
  price: 190,
  category: 'Rice Preparations',
  image: 'https://popmenucloud.com/arufwdik/6ca9b1c2-15a1-4aaf-915e-26fc62596f0d.jfif',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 109,
  name: 'Jeera Rice',
  description: 'Cumin Fried Basmati Rice Tossed in Butter',
  price: 220,
  category: 'Rice Preparations',
  image: 'https://www.funfoodfrolic.com/wp-content/uploads/2022/11/Jeera-Rice-Blog.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more cumin.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 110,
  name: 'Dal Khichadi',
  description: 'The Finest Basmati Rice Cooked with Lentils or Spinach with touch of Ghee',
  price: 260,
  category: 'Rice Preparations',
  image: 'https://tse3.mm.bing.net/th?id=OIP.FM2gv1HCFyQCHi1_XfCyYgHaHa&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 5,
      date: '2024-06-19',
      comment: 'Best dish ever!'
    },
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    }
  ]
},
{
  id: 111,
  name: 'Palak Khichadi',
  description: 'The Finest Basmati Rice Cooked with Lentils or Spinach with touch of Ghee',
  price: 260,
  category: 'Rice Preparations',
  image: 'https://th.bing.com/th/id/OIP.CL58q2xTP1xaPwy6LVowgAHaHa?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best palak dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 112,
  name: 'Subzi Pulav',
  description: 'The King of Rice tossed with Assorted Vegetable and Paneer Peas',
  price: 260,
  category: 'Rice Preparations',
  image: 'https://img-global.cpcdn.com/recipes/6bfea9a32478cc9c/680x482cq70/subzi-pulao-recipe-main-photo.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 113,
  name: 'Peas Pulav',
  description: 'The King of Rice tossed with Assorted Vegetable and Paneer Peas',
  price: 260,
  category: 'Rice Preparations',
  image: 'https://th.bing.com/th/id/OIP.18VxxiOIYz0gyxv_pJAwPQHaHa?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},
{
  id: 114,
  name: 'Paneer Dum Biriyani',
  description: 'Basmati rice cooked with paneer and spices',
  price: 380,
  category: 'Rice Preparations',
  image: 'https://bing.com/th?id=OSK.0467d24df505837d8ac9ecf0cd8a6038',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    },
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    }
  ]
},
{
  id: 115,
  name: 'Subzi Dum Biryani',
  description: 'The Finest Basmati rice and vegetable favoured with Herbs Dum cooked',
  price: 300,
  category: 'Rice Preparations',
  image: 'https://bing.com/th?id=OSK.53e6ce9db3a3471eee7f981c65266c41',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 116,
  name: 'Subzi Hyderabadi Biryani',
  description: 'The Finest Basmati rice and vegetable favoured with Herbs Dum cooked',
  price: 300,
  category: 'Rice Preparations',
  image: 'https://1.bp.blogspot.com/-3atUVHlsE0U/YIcgH7jHOCI/AAAAAAAASIE/1TxRFFlU5qEK-X7iZry8oQq6f8BivC9DgCLcBGAsYHQ/s1200/Biryani-1.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 117,
  name: 'Murg Dum Biryani',
  description: 'Meat and rice Steam Dum cooked with Indian spices served in handi',
  price: 380,
  category: 'Rice Preparations',
  image: 'https://i0.wp.com/spiceandcolour.com/wp-content/uploads/2020/06/receta-presentacion-biryani-de-pollo-01.jpg?fit=1140%2C760&ssl=1',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-26',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 118,
  name: 'Ghost Dum Biryani',
  description: 'Meat and rice Steam Dum cooked with Indian spices served in handi',
  price: 450,
  category: 'Rice Preparations',
  image: 'https://tse1.mm.bing.net/th?id=OIP.v9fWvTBxfMU45MW5gbReVwHaDd&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 119,
  name: 'Murg Makhani Biryani',
  description: 'Chicken cooked in Makhani sauce or Keema style served with rice',
  price: 400,
  category: 'Rice Preparations',
  image: 'https://product-assets.faasos.io/production/product/image_1666782758748_Alishaan_Murgh_Makhani.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more chicken.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 120,
  name: 'Murg Keema Biryani',
  description: 'Chicken cooked in Makhani sauce or Keema style served with rice',
  price: 400,
  category: 'Rice Preparations',
  image: 'https://product-assets.faasos.io/production/product/image_1680599687260_Chicken_Kheema.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    }
  ]
},
{
  id: 121,
  name: 'Prawns Dum Biryani',
  description: 'Prawns and Basmati Rice Steam cooked with Indian Spices and Herbs served in handi',
  price: 450,
  category: 'Rice Preparations',
  image: 'https://tse1.mm.bing.net/th?id=OIP.NqkOtHZ5sT3z6BK-r1dtBgHaE8&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more crispy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},
// Salad / Raitha
{
  id: 122,
  name: 'SALAD / RAITHA',
  description: 'Traditional Indian salad',
  price: 150,
  category: 'Salad / Raitha',
  image: 'https://bing.com/th?id=OSK.72e2812ca91e5031ab3cfa82ea69eebe',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 123,
  name: 'Russian Salad',
  description: 'A mix of vegetables in a creamy dressing',
  price: 190,
  category: 'Salad / Raitha',
  image: 'https://tse3.mm.bing.net/th?id=OIP.BPZDJXSf5KS4TBIyj2ji5AHaGo&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more vegetables.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 124,
  name: 'French Fries',
  description: 'Crispy potato fries',
  price: 190,
  category: 'Salad / Raitha',
  image: 'https://tse2.mm.bing.net/th?id=OIP.GqUvr8wmgKYa7LL8YpnGMAHaE7&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 5,
      date: '2024-06-19',
      comment: 'Best fries ever!'
    },
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and crispy.'
    }
  ]
},
{
  id: 125,
  name: 'Chicken Hawaiian Salad',
  description: 'Salad with grilled chicken, pineapple, and mixed greens',
  price: 250,
  category: 'Salad / Raitha',
  image: 'https://bing.com/th?id=OSK.c19373e9350ef4bf39d315a1b726eeaf',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best chicken dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 126,
  name: 'Egg of your Choice',
  description: 'Your choice of egg preparation',
  price: 120,
  category: 'Salad / Raitha',
  image: 'https://therealfooddietitians.com/wp-content/uploads/2019/06/IMG_4979-e1559770925214-650x975.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 127,
  name: 'Egg Omlette',
  description: 'Egg omelet or scrambled eggs',
  price: 160,
  category: 'Salad / Raitha',
  image: 'https://bing.com/th?id=OSK.4d7ff60c5f067a3e54119e8c6160b1c4',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 128,
  name: 'Bhurji',
  description: 'Egg omelet or scrambled eggs',
  price: 240,
  category: 'Salad / Raitha',
  image: 'https://tse1.mm.bing.net/th?id=OIP.hRSpO1ojO2r2OGtxswSYnwHaFU&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more eggs.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 129,
  name: 'Cheese Chilli Toast',
  description: 'Spicy cheese toast',
  price: 260,
  category: 'Salad / Raitha',
  image: 'https://tse4.mm.bing.net/th?id=OIP.bWDDjGweVt-zlGg3MonM8wHaFj&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    }
  ]
},
{
  id: 130,
  name: 'Plain Cheese',
  description: 'Simple cheese dish',
  price: 200,
  category: 'Salad / Raitha',
  image: 'https://tse4.mm.bing.net/th?id=OIP.ucXSZN0QKuMvttHQUvxR5QHaE8&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more cheesy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 131,
  name: 'Chaat as per Choice',
  description: 'Indian street food of your choice',
  price: 160,
  category: 'Salad / Raitha',
  image: 'https://tse4.mm.bing.net/th?id=OIP.d4Pn64ur2K6S_CelT1I6WAHaEo&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 132,
  name: 'Plain Curd',
  description: 'Plain yogurt',
  price: 130,
  category: 'Salad / Raitha',
  image: 'https://bing.com/th?id=OSK.a8c932d8a78591961b3f3a163228001d',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},
{
  id: 133,
  name: 'Choice of Raitas',
  description: 'Indian yogurt-based side dish',
  price: 150,
  category: 'Salad / Raitha',
  image: 'https://th.bing.com/th/id/OIP.dbhlcO2f4gKQQsVPqCQwtAHaEK?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    },
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    }
  ]
},
{
  id: 134,
  name: 'Masala Papad',
  description: 'Spiced lentil wafers',
  price: 60,
  category: 'Salad / Raitha',
  image: 'https://tse2.mm.bing.net/th?id=OIP.HSISqoE6_9JdlseaZn4YQAHaFT&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 135,
  name: 'Roasted / Fried Papad',
  description: 'Roasted or fried lentil wafers',
  price: 40,
  category: 'Salad / Raitha',
  image: 'http://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/How_to_roast_papad.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more crispy.'
    }
  ]
},
{
  id: 136,
  name: 'Roomali Masala Papad',
  description: 'Thin spiced lentil wafers',
  price: 160,
  category: 'Salad / Raitha',
  image: 'https://th.bing.com/th/id/OIP.4qGtbq9PqwrS0MP5VrC4rgHaEh?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-26',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 137,
  name: 'Khichiya Papad Roasted / Fried',
  description: 'Roasted or fried chickpea wafers',
  price: 80,
  category: 'Salad / Raitha',
  image: 'https://tse2.mm.bing.net/th?id=OIP.Tg1_M6uM_yFH8iSVNb4sEAHaE8&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 198,
  name: 'Khichiya Masala Papad',
  description: 'Spiced chickpea wafers',
  price: 90,
  category: 'Salad / Raitha',
  image: 'https://tse4.mm.bing.net/th?id=OIP.fh8y4XG3r_bH955VbqgIVwHaFW&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more chickpea.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},

// Chinese Selection Soup Veg
{
  id: 138,
  name: 'Veg. Manchow Soup',
  description: 'Vegetable Manchow Soup',
  price: 180,
  category: 'Chinese Selection Soup',
  image: 'https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Veg-Manchow-Soup-1300x867.jpeg?v=1621618246',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'A delightful and hearty soup.'
    },
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfect for a cold day.'
    }
  ]
},
{
  id: 139,
  name: 'Veg. Pecking Soup',
  description: 'Vegetable Pecking Soup',
  price: 160,
  category: 'Chinese Selection Soup',
  image: 'https://www.bitensip.com/wp-content/uploads/2023/09/veg-peking-soup-500x500.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Carol Taylor',
      rating: 3,
      date: '2024-06-17',
      comment: 'Needs more vegetables for my taste.'
    },
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'A good choice for a light meal.'
    }
  ]
},
{
  id: 140,
  name: 'Veg. Hot n Sour Soup',
  description: 'Vegetable Hot n Sour Soup',
  price: 160,
  category: 'Chinese Selection Soup',
  image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/veg-hot-and-sour-soup-1.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Pranav Mukharjee',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best soup starter.'
    },
    {
      userName: 'Frank Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and tangy.'
    }
  ]
},
{
  id: 141,
  name: 'Veg Lemon Coriander Soup',
  description: 'Vegetable Lemon Coriander Soup',
  price: 160,
  category: 'Chinese Selection Soup',
  image: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/03/lemon_coriander_soup.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 142,
  name: 'Four Treasure ginger Garlic Soup',
  description: 'Vegetable Four Treasure ginger Garlic Soup',
  price: 170,
  category: 'Chinese Selection Soup',
  image: 'https://www.nestleprofessional.ph/sites/default/files/styles/np_recipe_detail/public/2022-11/Four%20Treasure%20Soup%20with%20Crab%20Meat.png?itok=L4s1_2fr',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 143,
  name: 'Veg Mangolian Fire Pot Soup',
  description: 'Vegetable Mangolian Fire Pot Soup',
  price: 160,
  category: 'Chinese Selection Soup',
  image: 'https://tse3.mm.bing.net/th?id=OIP.QRDRuFIRWfCpCMRWFpZXQAHaHa&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 144,
  name: 'Veg. Tom Yum Soup',
  description: 'Vegetable Tom Yum Soup',
  price: 170,
  category: 'Chinese Selection Soup',
  image: 'https://bing.com/th?id=OSK.c5e1ac5b16bd2d6ee8413eaa925379c1',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},
{
  id: 145,
  name: 'Cream of Veg / Mushroom',
  description: 'Creamy vegetable and mushroom soup',
  price: 190,
  category: 'Chinese Selection Soup',
  image: 'https://bing.com/th?id=OSK.ced1ee4b7fdc892f86d6a21c192f9447',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    },
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    }
  ]
},
{
  id: 146,
  name: 'Veg Royal Soup',
  description: 'Vegetable Royal Soup',
  price: 160,
  category: 'Chinese Selection Soup',
  image: 'http://4.bp.blogspot.com/-oOzoAwEji3g/U0apvNhJErI/AAAAAAAACHQ/GM_5IE0yPq4/w1200-h630-p-k-no-nu/Royal-Vegetarian-Soup-720x540.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 147,
  name: 'Veg. Rainbow Soup',
  description: 'Vegetable Rainbow Soup',
  price: 160,
  category: 'Chinese Selection Soup',
  image: 'https://tse3.mm.bing.net/th?id=OIP.pO6hIHtMqAE94koH2IDDpQHaE7&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    }
  ]
},  // Chinese Selection Soup Non-Veg
{
  id: 148,
  name: 'Chicken Pecking Soup',
  description: 'Chicken soup with a unique flavor',
  price: 210,
  category: 'Chinese Selection Soup',
  image: 'https://tse2.mm.bing.net/th?id=OIP.73eOQz5SU9Xk3lKIXoCi5QHaEK&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'A delightful and hearty soup.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 149,
  name: 'Chicken Royal Soup',
  description: 'A rich and flavorful chicken soup',
  price: 210,
  category: 'Chinese Selection Soup',
  image: 'https://images.squarespace-cdn.com/content/v1/5cca9a6f331fc30001582916/1563864124093-QX8ARRS2BKGRTZDUWMMN/Chickensoup.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more chicken.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 150,
  name: 'Chicken Manchow Soup',
  description: 'Chicken soup with a Manchow twist',
  price: 220,
  category: 'Chinese Selection Soup',
  image: 'https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 5,
      date: '2024-06-19',
      comment: 'Best soup ever!'
    },
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    }
  ]
},
{
  id: 151,
  name: 'Chicken Hot & Sour Soup',
  description: 'Spicy and tangy chicken soup',
  price: 210,
  category: 'Chinese Selection Soup',
  image: 'https://bing.com/th?id=OSK.d8642c7f1526440c528e5ccff3e3d318',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best chicken dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 152,
  name: 'Chicken Sweet Corn Soup',
  description: 'Chicken soup with sweet corn',
  price: 210,
  category: 'Chinese Selection Soup',
  image: 'https://realfood.tesco.com/media/images/Chinese-chicken--sweetcorn-soup-recipe-1400x919-3078923d-9838-433c-bcb4-69c5521055b5-0-1400x919.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 153,
  name: 'Chicken Lemon Coriander Soup',
  description: 'Chicken soup with lemon and coriander',
  price: 210,
  category: 'Chinese Selection Soup',
  image: 'https://tse4.mm.bing.net/th?id=OIP.qYNNyTcEYsxSO1-fv75X5AHaHa&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 154,
  name: 'Chicken Dumpling Soup',
  description: 'Soup with chicken or prawns dumplings',
  price: 190,
  category: 'Chinese Selection Soup',
  image: 'https://natashaskitchen.com/wp-content/uploads/2014/10/Chicken-and-Dumpling-Soup-10-600x900.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more dumplings.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 155,
  name: 'Prawns Dumpling Soup',
  description: 'Soup with chicken or prawns dumplings',
  price: 220,
  category: 'Chinese Selection Soup',
  image: 'https://tse4.mm.bing.net/th?id=OIP.pbRnGse-r-wBMuC1jGXybwHaE8&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    }
  ]
},
{
  id: 156,
  name: 'Cream of Chicken Soup',
  description: 'Creamy chicken soup',
  price: 220,
  category: 'Chinese Selection Soup',
  image: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/Cream-Cheese-Chicken-Soup_exps14118_CW143433C03_21_2b_RMS.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more crispy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 157,
  name: 'Chicken Mangolian Fire Pot Soup',
  description: 'Chicken soup with Mangolian spices',
  price: 220,
  category: 'Chinese Selection Soup',
  image: 'https://bakeitwithlove.com/wp-content/uploads/2018/04/Instant-Pot-Mongolian-Chicken-h.jpg.webp',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 158,
  name: 'Tom Yum Chicken',
  description: 'Chicken in Tom Yum broth',
  price: 220,
  category: 'Chinese Selection Soup',
  image: 'https://bing.com/th?id=OSK.95c913465170195a305e69e8f9a49a39',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},
{
  id: 159,
  name: 'Tom Yum Prawns',
  description: 'Prawns in Tom Yum broth',
  price: 240,
  category: 'Chinese Selection Soup',
  image: 'https://th.bing.com/th?id=OSK.7c59af62c8344626c84c90cef0c41be8&w=193&h=128&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    },
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    }
  ]
},
{
  id: 160,
  name: 'Spicy Crab Meat Soup',
  description: 'Spicy soup with crab meat',
  price: 240,
  category: 'Chinese Selection Soup',
  image: 'https://th.bing.com/th/id/R.d8248cab28bd1ba3376edcb113cc4d94?rik=Jy8I1erklV%2fYQA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0126%2f6076%2f8825%2farticles%2fSpicyCrabSoupPFFM_1_of_1_1200x1200.jpg%3fv%3d1539734763&ehk=oufZuGg9DXfnW9%2fYzk62U4Tfco0ce2Ebai8DgZ3%2b%2fm8%3d&risl=&pid=ImgRaw&r=0',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 161,
  name: 'Spicy Sea Food Soup',
  description: 'Spicy soup with various seafood',
  price: 240,
  category: 'Chinese Selection Soup',
  image: 'https://40aprons.com/wp-content/uploads/2021/09/Seafood-Soup-6-1-scaled.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    }
  ]
}, // Starters Veg Continue
{
  id: 162,
  name: 'Spring Rolls Veg',
  description: 'Delicious vegetable spring rolls',
  price: 270,
  category: 'Starters',
  image: 'https://th.bing.com/th/id/OIP.WATf1vMEFyq6wNP4gE3QJwHaE8?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Great taste, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 163,
  name: 'Spring Rolls (Cheese Palak)',
  description: 'Spring rolls with cheese palak filling',
  price: 300,
  category: 'Starters',
  image: 'https://tse1.mm.bing.net/th?id=OIP.Tz-oz75biEwK0nTqcKYfqgHaEL&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more cheese.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 164,
  name: 'Crispy Potato Chilly with Spring Onion',
  description: 'Crispy potato with chillies and spring onion',
  price: 260,
  category: 'Starters',
  image: 'https://bing.com/th?id=OSK.2386b61c5b8f10e2fed11cbcc1f6a781',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 5,
      date: '2024-06-19',
      comment: 'Best dish ever!'
    },
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    }
  ]
},
{
  id: 165,
  name: 'Corn Cheese balls in Singapore Style',
  description: 'Corn cheese balls prepared in Singapore style',
  price: 300,
  category: 'Starters',
  image: 'https://bing.com/th?id=OSK.5f1963a89f987e591ad9ebdeac738423',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 166,
  name: 'Crispy Thread Paneer',
  description: 'Crispy paneer threads',
  price: 360,
  category: 'Starters',
  image: 'https://th.bing.com/th/id/OIP.OM_vQdpoWC61NeO7CyQ0GgHaE8?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 167,
  name: 'Crispy Veg / Veg Crunchy Munchy',
  description: 'Crispy and crunchy vegetable munchies',
  price: 260,
  category: 'Starters',
  image: 'https://th.bing.com/th/id/OIP.azlah12kYmtQvL-tUer8DwHaFj?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 168,
  name: 'Veg Sesame Corn Toast',
  description: 'Vegetable sesame corn toast',
  price: 280,
  category: 'Starters',
  image: 'https://bing.com/th?id=OSK.fbb4a82e62dba979c15bc2a80e6d4d5c',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Davis',
      rating: 3,
      date: '2024-06-17',
      comment: 'Nice but needs more sesame.'
    },
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    }
  ]
},
{
  id: 169,
  name: 'Paneer & Corn in Spinach Sauce',
  description: 'Paneer and corn in spinach sauce',
  price: 340,
  category: 'Starters',
  image: 'https://bing.com/th?id=OSK.13a46e811bc963a51e418c11e1b2a292',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Michael Lee',
      rating: 4,
      date: '2024-06-20',
      comment: 'Nice and creamy.'
    },
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-21',
      comment: 'Amazing! Best dish ever.'
    }
  ]
},
{
  id: 170,
  name: 'Paneer Chilly / Shanghai',
  description: 'Paneer in chilli or Shanghai style',
  price: 360,
  category: 'Starters',
  image: 'https://s-media-cache-ak0.pinimg.com/564x/a7/24/b6/a724b6dc7023d0121a2c7210c0e147d7.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-22',
      comment: 'Good but could be more crispy.'
    },
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-23',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 171,
  name: 'Paneer Red cooked / twin pepper',
  description: 'Paneer red cooked with twin pepper',
  price: 360,
  category: 'Starters',
  image: 'https://th.bing.com/th/id/OIP.gPjKNgl3bVG8SbqnS5PWqAHaHa?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    },
    {
      userName: 'Alice Johnson',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    }
  ]
},
{
  id: 172,
  name: 'Wok Tossed Vegetables',
  description: 'Stir-fried vegetables',
  price: 380,
  category: 'Starters',
  image: 'https://c8.alamy.com/comp/PFPM0G/vegetables-being-tossed-into-wok-on-gas-cooker-close-up-PFPM0G.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Bob Brown',
      rating: 5,
      date: '2024-06-26',
      comment: 'Perfect blend of flavors.'
    },
    {
      userName: 'Carol Davis',
      rating: 4,
      date: '2024-06-27',
      comment: 'Good for a seafood lover.'
    }
  ]
},
{
  id: 173,
  name: 'Veg Wonton Fried / Steamed',
  description: 'Fried or steamed veg wonton',
  price: 280,
  category: 'Starters',
  image: 'https://plantbasedonabudget.com/wp-content/uploads/2023/01/11-Crispy-Fried-Wontons-Plant-Based-on-a-Budget-1-2.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'David Wilson',
      rating: 4,
      date: '2024-06-18',
      comment: 'Good for a quick meal.'
    },
    {
      userName: 'Eva Davis',
      rating: 5,
      date: '2024-06-19',
      comment: 'Loved it! Best seafood starter.'
    }
  ]
},
{
  id: 174,
  name: 'Stuffed mushroom with hot garlic sauce',
  description: 'Mushrooms stuffed with hot garlic sauce',
  price: 340,
  category: 'Starters',
  image: 'https://tse1.mm.bing.net/th?id=OIP.SYY8Wx7lNI5c3N89r9XQMwHaKX&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Grace Kim',
      rating: 4,
      date: '2024-06-21',
      comment: 'Nice texture, but a bit too oily.'
    },
    {
      userName: 'Henry Park',
      rating: 5,
      date: '2024-06-22',
      comment: 'Perfect blend of flavors.'
    }
  ]
},
{
  id: 175,
  name: 'Cream of Veg / Mushroom',
  description: 'Creamy vegetable and mushroom soup',
  price: 190,
  category: 'Starters',
  image: 'https://assets.bonappetit.com/photos/5e5ec025e86a7100087c9b50/1:1/w_2560%2Cc_limit/HLY-Mushroom-Soup-16x9.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Isabella White',
      rating: 5,
      date: '2024-06-23',
      comment: 'Amazing! Best dish ever.'
    },
    {
      userName: 'Jack Black',
      rating: 4,
      date: '2024-06-24',
      comment: 'Good but could be more filling.'
    }
  ]
},
{
  id: 176,
  name: 'Shredded Potato with Baby corn',
  description: 'Shredded potatoes with baby corn',
  price: 260,
  category: 'Starters',
  image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Shredded-Potato-Casserole_exps27749_TH10606B08_04_6b_RMS.jpg?resize=696,696',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Jill Green',
      rating: 5,
      date: '2024-06-25',
      comment: 'Absolutely delicious!'
    },
    {
      userName: 'Ken Scott',
      rating: 4,
      date: '2024-06-26',
      comment: 'Great taste, would recommend.'
    }
  ]
},
{
  id: 177,
  name: 'Veg Chinese Platter',
  description: 'A platter of various Chinese veg dishes',
  price: 110,
  category: 'Starters',
  image: 'https://tse3.mm.bing.net/th?id=OIP.q_SrTz4KEpkdTQsbZ6SHSQHaLH&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Good flavor, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},

//Starters Non-Veg Continue
{
  id: 178,
  name: 'Chicken Pepper Blast',
  description: 'Chicken cooked with a peppery blast',
  price: 370,
  category: 'Starters',
  image: 'https://tse3.mm.bing.net/th?id=OIP.9eoi1-EMl16DO0LENKDTvQHaFj&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Great taste, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 179,
  name: 'Thai Chicken with Cashewnuts',
  description: 'Chicken dish with cashewnuts',
  price: 370,
  category: 'Starters',
  image: 'https://tse3.mm.bing.net/th?id=OIP.NFPwxfPRmfjIE8wVOahpTQHaE8&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The cashewnuts add a nice crunch to the dish. Great combination!'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the Thai flavors in this dish. The chicken was cooked to perfection.'
    }
  ]
},
{
  id: 180,
  name: 'Chicken in Dragon Sauce',
  description: 'Chicken cooked in dragon sauce',
  price: 370,
  category: 'Starters',
  image: 'https://i2.wp.com/www.rasoimenu.com/wp-content/uploads/2019/06/Dragon-Chicken-Recipe.jpg?fit=1920%2C1080&ssl=1',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 3,
      date: '2024-06-15',
      comment: 'The sauce was a bit too sweet for my taste.'
    },
    {
      userName: 'David Lee',
      rating: 4,
      date: '2024-06-16',
      comment: 'Good dish, but I expected a bit more heat in the dragon sauce.'
    }
  ]
},
{
  id: 181,
  name: 'Chicken fry Szechuan',
  description: 'Chicken fried in Szechuan style',
  price: 370,
  category: 'Starters',
  image: 'https://myfoodstory.com/wp-content/uploads/2022/02/Szechuan-Chicken-3.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The Szechuan flavor is perfect. Loved the spiciness!'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too oily.'
    }
  ]
},
{
  id: 182,
  name: 'Chicken Lollypop',
  description: 'Chicken on a stick',
  price: 370,
  category: 'Starters',
  image: 'https://bing.com/th?id=OSK.ecffabde50fa1e2b1cf36ec30f362528',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The chicken lollypops were crispy and delicious.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Absolutely loved the chicken lollypops. Perfect for a party!'
    }
  ]
},
{
  id: 183,
  name: 'Chicken in Honey Ginger Sauce',
  description: 'Chicken cooked in honey ginger sauce',
  price: 370,
  category: 'Starters',
  image: 'https://www.yourhomebasedmom.com/wp-content/uploads/2020/10/Slow-Cooker-Honey-Garlic-Ginger-Chicken.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The honey ginger sauce is a perfect balance of sweet and savory.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the chicken in honey ginger sauce. Highly recommend!'
    }
  ]
},
{
  id: 184,
  name: 'Jade Chicken Chilly',
  description: 'Chicken cooked with jade and chillies',
  price: 370,
  category: 'Starters',
  image: 'https://th.bing.com/th/id/OIP.B0c85ddhIFrLMBq-_bLd5AHaFj?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The chillies add a nice kick to the dish. Loved it!'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'The jade chicken chilly is a must-try. Perfect blend of flavors.'
    }
  ]
},
{
  id: 185,
  name: 'Spring Rolls Chicken',
  description: 'Spring rolls with Chicken',
  price: 340,
  category: 'Starters',
  image: 'https://img-global.cpcdn.com/recipes/7f5bc852152b4506/1502x1064cq70/chicken-spring-rolls-recipe-main-photo.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Great taste, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 186,
  name: 'Spring Rolls Prawns',
  description: 'Spring rolls with Prawns',
  price: 400,
  category: 'Starters',
  image: 'https://i.pinimg.com/originals/bd/51/af/bd51afffa851cff7f28263f775700d17.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The prawns in the spring rolls were fresh and delicious.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the spring rolls with prawns. Highly recommend!'
    }
  ]
},
{
  id: 187,
  name: 'Wok with Chicken',
  description: 'Chicken stir-fried in a wok',
  price: 370,
  category: 'Starters',
  image: 'https://images.eatsmarter.com/sites/default/files/styles/max_size/public/chicken-with-vegetables-and-cashews-in-a-wok-581524.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The chicken was tender and the stir-fry was flavorful.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the wok-fried chicken. Perfect for a quick meal.'
    }
  ]
},
{
  id: 188,
  name: 'Chicken Wantons',
  description: 'Chicken wontons',
  price: 330,
  category: 'Starters',
  image: 'https://i0.wp.com/lindseyeatsla.com/wp-content/uploads/2021/07/Lindseyeats_Chicken_Wontons_Spicy_Sauce-6.jpg?w=1280&ssl=1',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 4,
      date: '2024-06-15',
      comment: 'The chicken wantons were crispy and delicious.'
    },
    {
      userName: 'Tom Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Absolutely loved the chicken wantons. Perfect appetizer!'
    }
  ]
},
{
  id: 189,
  name: 'Prawns Wantons',
  description: 'Prawn wontons',
  price: 400,
  category: 'Starters',
  image: 'https://www.naturalhealthmag.com.au/sites/default/files/imagecache/recipes-image/editorial/prawn-wontons.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The prawn wontons were fresh and flavorful.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the prawn wontons. Highly recommend!'
    }
  ]
},
{
  id: 190,
  name: 'Chicken Crispy Sesame',
  description: 'Chicken with crispy sesame seeds',
  price: 360,
  category: 'Starters',
  image: 'https://www.servedfromscratch.com/wp-content/uploads/2018/10/IMG_2580.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The crispy sesame seeds add a nice crunch to the dish.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the chicken crispy sesame. Perfect blend of flavors.'
    }
  ]
},
{
  id: 191,
  name: 'Salt & Pepper Fish / Prawns',
  description: 'Fish or prawns with salt and pepper',
  price: 300,
  category: 'Starters',
  image: 'https://bing.com/th?id=OSK.0fdaf19af3826dbd6e04271e778e96d3',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The salt and pepper seasoning is perfect. Loved it!'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'The fish was fresh and the seasoning was spot on.'
    }
  ]
},
{
  id: 192,
  name: 'Crispy Thread Paneer',
  description: 'Crispy paneer threads',
  price: 500,
  category: 'Starters',
  image: 'https://tse1.mm.bing.net/th?id=OIP.OM_vQdpoWC61NeO7CyQ0GgHaE8&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The paneer threads were crispy and delicious.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the crispy thread paneer. Highly recommend!'
    }
  ]
},
{
  id: 193,
  name: 'Slice Fish Pepper Blast',
  description: 'Fish slices with a peppery blast',
  price: 500,
  category: 'Starters',
  image: 'https://th.bing.com/th/id/OIP.92tzWpcdvSKvO6_y7OrDkAHaEo?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The peppery blast is perfect. Loved the fish slices.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'The fish was fresh and the pepper seasoning was spot on.'
    }
  ]
},
{
  id: 194,
  name: 'Fish / Prawns in choice of Sauce',
  description: 'Fish or prawns in your choice of sauce',
  price: 500,
  category: 'Starters',
  image: 'https://www.4ingredients.com.au/wp-content/uploads/2019/03/4ING-l-Recipe-Image-l-Fresh-Prawns-with-Creamy-Dipping-Sauce.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The choice of sauces is great. Loved the dish.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'The fish was fresh and the sauce was perfect.'
    }
  ]
},
{
  id: 195,
  name: 'Pomfret in Taiwan Sauce',
  description: 'Pomfret cooked in Taiwan sauce',
  price: 2000,
  category: 'Starters',
  image: 'https://tse2.mm.bing.net/th?id=OIP.LVWHDId9xFVHpkiGGLcpAgHaEK&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Taiwan sauce is perfect. Loved the pomfret.'
    },
    {
      userName: 'Tom Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'The pomfret was fresh and the sauce was spot on.'
    }
  ]
},
{
  id: 196,
  name: 'Apple Chicken',
  description: 'Chicken cooked with apples',
  price: 390,
  category: 'Starters',
  image: 'https://www.mommyhatescooking.com/wp-content/uploads/2015/02/DSC_2745.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The apple chicken is a unique and delicious combination.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the apple chicken. Highly recommend!'
    }
  ]
},
{
  id: 197,
  name: 'Chicken in Green Pepper',
  description: 'Chicken cooked with green peppers',
  price: 370,
  category: 'Starters',
  image: 'https://tse3.mm.bing.net/th?id=OIP.RwKlmLAPoj_0lpdNHnLHJgHaEg&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The green pepper adds a nice crunch to the dish.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the chicken in green pepper. Perfect blend of flavors.'
    }
  ]
},

//Main Course Veg - Continue
{
  id: 199,
  name: 'Veg Thai Curry (Red/Green)',
  description: 'Vegetable Thai curry in red or green',
  price: 360,
  category: 'Main Course',
  image: 'https://bing.com/th?id=OSK.9159252a04638404f0d5cab853877912',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Great taste, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 200,
  name: 'Mushroom, Baby Corn in Chilly Garlic Sauce',
  description: 'Mushroom and baby corn in a chilly garlic sauce',
  price: 360,
  category: 'Main Course',
  image: 'https://tse4.mm.bing.net/th?id=OIP.OS0-KUG-zKLNxIvoN62h-wHaEK&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The chilly garlic sauce is amazing. Loved the combination of mushroom and baby corn.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked vegetables with a delicious sauce.'
    }
  ]
},
{
  id: 201,
  name: 'Farmed Veg in chilly coriander sauce',
  description: 'Farmed vegetables in a chilly coriander sauce',
  price: 310,
  category: 'Main Course',
  image: 'https://tse2.mm.bing.net/th?id=OIP.e-bS9fq5DHQFfTQfzMJ28QHaEK&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The coriander sauce adds a nice touch to the farmed vegetables.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the freshness of the vegetables and the flavor of the sauce.'
    }
  ]
},
{
  id: 202,
  name: 'Assorted Veg. in Szechwan Sauce',
  description: 'Assorted vegetables in Szechwan sauce',
  price: 310,
  category: 'Main Course',
  image: 'https://tse2.mm.bing.net/th?id=OIP.7piFwtxg9g65fcsLvDVEQgHaEK&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The Szechwan sauce is perfect. Loved the assorted vegetables.'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too spicy for my taste.'
    }
  ]
},
{
  id: 203,
  name: 'Garden Vegetables tossed in chilly Basil Sauce',
  description: 'Garden vegetables tossed in chilly basil sauce',
  price: 310,
  category: 'Main Course',
  image: 'http://static1.squarespace.com/static/5c6df920d74562c46b234f9e/5e9681606c15cb242623919d/5f51a220f8d6a26d14838b13/1599191300316/IMG_7017.jpg?format=1500w',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The basil sauce adds a nice flavor to the garden vegetables.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the garden vegetables in chilly basil sauce. Highly recommend!'
    }
  ]
},
{
  id: 204,
  name: 'Cottage Cheese in Choice of Sauce',
  description: 'Cottage cheese in your choice of sauce',
  price: 360,
  category: 'Main Course',
  image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/kiah_wadhwani/Spinach_and_Cottage_Cheese_Cannelloni_in_Roasted_Pepper_Sauce.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The cottage cheese is cooked perfectly and the sauce is delicious.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the cottage cheese in the sauce of my choice. Perfect dish!'
    }
  ]
},
{
  id: 205,
  name: 'Paneer & Mushroom in Dragon Sauce',
  description: 'Paneer and mushroom in dragon sauce',
  price: 360,
  category: 'Main Course',
  image: 'https://relishdelish.ca/wp-content/uploads/2019/05/Screen-Shot-2020-07-11-at-4.45.05-PM-800x650.png',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The dragon sauce is amazing. Loved the combination of paneer and mushroom.'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked paneer and mushroom with a delicious sauce.'
    }
  ]
},
{
  id: 206,
  name: 'Assorted Veg in Barbeque Sauce',
  description: 'Assorted vegetables in barbeque sauce',
  price: 310,
  category: 'Main Course',
  image: 'https://www.thespruceeats.com/thmb/MfnEzKj-5LBRbdrD_WQ59zELEX4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mixed-vegetable-curry-1957913-03048999db714405bfe8614c975b8a44.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The barbeque sauce is perfect. Loved the assorted vegetables.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Great dish, the barbeque sauce adds a nice touch to the vegetables.'
    }
  ]
},

//Sea Food
{
  id: 207,
  name: 'Thai Curry (Fish/Prawns)',
  description: 'Seafood cooked in Thai curry',
  price: 550,
  category: 'Sea Food',
  image: 'https://tse2.mm.bing.net/th?id=OIP.EGB5_0twUMKz9AipCICGYwHaHa&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Great taste, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 208,
  name: 'Fish in Peri Peri Sauce',
  description: 'Fish cooked in Peri Peri sauce',
  price: 510,
  category: 'Sea Food',
  image: 'https://th.bing.com/th/id/OIP.PIMmVo_NDJ-WoD7WzfwANAHaEL?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Peri Peri sauce is amazing. Loved the fish.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked fish with a delicious sauce.'
    }
  ]
},
{
  id: 209,
  name: 'Prawns in Dragon Sauce',
  description: 'Prawns cooked in Dragon sauce',
  price: 510,
  category: 'Sea Food',
  image: 'https://i.pinimg.com/originals/6d/27/26/6d272610f596c52810c9c52206220f0d.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The dragon sauce is perfect. Loved the prawns.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Great dish, the prawns were cooked to perfection.'
    }
  ]
},
{
  id: 210,
  name: 'Sauted Prawns served in Spicy Dragon Sauce',
  description: 'Sauted Prawns served in Spicy Dragon Sauce',
  price: 510,
  category: 'Sea Food',
  image: 'https://www.willcookforsmiles.com/wp-content/uploads/2021/02/Sauteed-Shrimp-9.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The spicy dragon sauce is amazing. Loved the sauted prawns.'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too spicy for my taste.'
    }
  ]
},
{
  id: 211,
  name: 'Stir Fried Prawns in Devil Sauce',
  description: 'Stir Fried Prawns in Devil Sauce',
  price: 510,
  category: 'Sea Food',
  image: 'https://tse1.mm.bing.net/th?id=OIP.2TdIpRKwl5NYoVUZ3FUp9AHaEK&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The devil sauce adds a nice flavor to the stir fried prawns.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the stir fried prawns in devil sauce. Highly recommend!'
    }
  ]
},
{
  id: 212,
  name: 'Prawns Sauteed in Spicy',
  description: 'Prawns Sauteed in Spicy',
  price: 510,
  category: 'Sea Food',
  image: 'https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Spicy-Garlic-Shrimp-1.jpg?fit=2000%2C1125&ssl=1',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The prawns are cooked perfectly and the sauce is delicious.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the prawns sauteed in spicy sauce. Perfect dish!'
    }
  ]
},
{
  id: 213,
  name: 'Fish / Prawns cooked in Tangy Red Sauce',
  description: 'Fish or Prawns cooked in Tangy Red Sauce',
  price: 510,
  category: 'Sea Food',
  image: 'http://poormansgourmetkitchen.com/wp-content/uploads/2016/06/Thai-Red-Curry-Shrimp-Main-pic.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The tangy red sauce is perfect. Loved the fish and prawns.'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked seafood with a delicious sauce.'
    }
  ]
},
{
  id: 214,
  name: 'Stir Fried Prawns in B.B.Q. Sauce',
  description: 'Stir Fried Prawns in B.B.Q. Sauce',
  price: 510,
  category: 'Sea Food',
  image: 'https://tse2.mm.bing.net/th?id=OIP.bkHLBr4CCUfNwMiG-nB6WQHaE8&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The B.B.Q. sauce is perfect. Loved the stir fried prawns.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Great dish, the B.B.Q. sauce adds a nice touch to the prawns.'
    }
  ]
},
{
  id: 215,
  name: 'Shallow Fried Prawns',
  description: 'Shallow Fried Prawns served in Sweet & Spicy Sauce',
  price: 510,
  category: 'Sea Food',
  image: 'https://tse2.mm.bing.net/th?id=OIP._nYr0aDUR6LwQVfye1pCuwHaFj&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The sweet and spicy sauce is amazing. Loved the shallow fried prawns.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked prawns with a delicious sauce.'
    }
  ]
},
{
  id: 216,
  name: 'Prawns / Slice Fish',
  description: 'Prawns / Slice Fish, mixed with Celery Roast Chilies & Garlic',
  price: 510,
  category: 'Sea Food',
  image: 'https://tse4.mm.bing.net/th?id=OIP.QVg2-CH2AuR0vQ0VUwuoZwHaE7&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The celery roast chilies and garlic add a nice flavor to the prawns and fish.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Great dish, the prawns and fish were cooked to perfection.'
    }
  ]
},

//Chicken
{
  id: 217,
  name: 'Thai Curry Chicken (Red / Green)',
  description: 'Chicken cooked in Thai curry sauce',
  price: 425,
  category: 'Chicken',
  image: 'https://thatspicychick.com/wp-content/uploads/2019/01/Thai-Green-Chicken-Curry-1_PS-500x333.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Great taste, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 218,
  name: 'Kungpao Chicken',
  description: 'Diced chicken tossed in bell pepper, roast chili and touch of sweet and spicy sauce',
  price: 370,
  category: 'Chicken',
  image: 'https://th.bing.com/th/id/OSK.HEROxgWn43n8JFzrGNdcBtWM06sqUxzc7xBd-2GsUB7RV2A?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The sweet and spicy sauce is amazing. Loved the Kungpao chicken.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked chicken with a delicious sauce.'
    }
  ]
},
{
  id: 219,
  name: 'Lemon Chicken',
  description: 'Escalopes of chicken fillet crispy fried and topped with zesty lemon sauce',
  price: 370,
  category: 'Chicken',
  image: 'https://bing.com/th?id=OSK.d3391c9c75814a7414e7708508a8ab17',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The lemon sauce adds a nice touch to the crispy fried chicken.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Great dish, the chicken was cooked to perfection.'
    }
  ]
},
{
  id: 220,
  name: 'Chicken Chilly (Roasted / Shredded)',
  description: 'The most famous chicken in Asia cooked in home made style',
  price: 370,
  category: 'Chicken',
  image: 'http://4.bp.blogspot.com/_Y9fEWs0C0qQ/Sn0J2TdjE7I/AAAAAAAAET8/4FQEwl2ZRCc/w1200-h630-p-k-no-nu/shredded+chilly+chicken1.bmp.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The homemade style is perfect. Loved the chicken chilly.'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too spicy for my taste.'
    }
  ]
},
{
  id: 221,
  name: 'Chicken & Mushroom in Oyster Sauce',
  description: 'Cubes of chicken and black mushroom tossed in imported oyster sauce',
  price: 370,
  category: 'Chicken',
  image: 'https://i0.wp.com/olverindulgence.com/wp-content/uploads/2020/08/P1070383.jpg?resize=1536%2C1152&ssl=1',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The oyster sauce adds a nice flavor to the chicken and mushroom.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the chicken and mushroom in oyster sauce. Highly recommend!'
    }
  ]
},
{
  id: 222,
  name: 'Diced Chicken in Black Pepper Sauce',
  description: 'Diced chicken tossed in home made pepper sauce',
  price: 370,
  category: 'Chicken',
  image: 'https://asianinspirations.com.au/wp-content/uploads/2018/11/R02107_Sauteed-Diced-Chicken-with-Walnuts.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The black pepper sauce is amazing. Loved the diced chicken.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked chicken with a delicious sauce.'
    }
  ]
},
{
  id: 223,
  name: 'Chicken in Choice of Sauce',
  description: 'Chicken cooked in choice of sauce (Dragon / Szechwan / Butter Garlic / Chilli Coriander/Gullian/peri peri peri)',
  price: 370,
  category: 'Chicken',
  image: 'https://cdn.ngnw.ph/images/blog/images/hickory-bbq-1.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The choice of sauces is great. Loved the dish.'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'The chicken was fresh and the sauce was perfect.'
    }
  ]
},

//Lamb
{
  id: 224,
  name: 'Shredded Lamb in Hong Kong Style',
  description: 'Tender lamb cooked in Hong Kong Style',
  price: 500,
  category: 'Lamb',
  image: 'https://img-global.cpcdn.com/recipes/7b984ee2a698ad87/680x482cq70/hong-kong-style-lamb-shoulder-pot-%E6%B8%AF%E5%BC%8F%E7%BE%8A%E8%85%A9%E7%85%B2-recipe-main-photo.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Great taste, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 225,
  name: 'Roast Lamb in Pecking Style',
  description: 'Lamb and black mushroom cooked together in sweet and spicy sauce',
  price: 500,
  category: 'Lamb',
  image: 'https://img.freepik.com/premium-photo/peking-roast-lamb-food-professional-photography-light-generative-ai_913266-6564.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The sweet and spicy sauce is amazing. Loved the roast lamb.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked lamb with a delicious sauce.'
    }
  ]
},
{
  id: 226,
  name: 'Roast Lamb in Choice of Sauce',
  description: '(Hunan / Black Bean / Green pepper / Szechwan / Hot Garlic)',
  price: 500,
  category: 'Lamb',
  image: 'https://www.thespruceeats.com/thmb/PxT2MOIFi740X2vXGrjutLNGdHA=/4500x3000/filters:fill(auto,1)/traditional-lamb-roast-recipe-256302-hero-01-2d61427d8c264d9e8f2c12a771e75414.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The choice of sauces is great. Loved the dish.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'The lamb was fresh and the sauce was perfect.'
    }
  ]
},
{
  id: 227,
  name: 'Roast Lamb Chilly',
  description: 'Roast lamb cooked in chilli sauce',
  price: 510,
  category: 'Lamb',
  image: 'https://gbc-cdn-public-media.azureedge.net/img79375.768x512.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The chilli sauce is perfect. Loved the roast lamb.'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too spicy for my taste.'
    }
  ]
},
{
  id: 228,
  name: 'Roast Lamb in Chilli Basil Sauce',
  description: 'Roast lamb cooked in chilli basil sauce',
  price: 500,
  category: 'Lamb',
  image: 'https://tse1.mm.bing.net/th?id=OIP.ith6QC-Nu9b2jxpIJ7XRkgAAAA&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The chilli basil sauce adds a nice flavor to the roast lamb.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the roast lamb in chilli basil sauce. Highly recommend!'
    }
  ]
},

//Rice & Noodles
{
  id: 229,
  name: 'Prawns Fried Rice',
  description: 'Fried rice with prawns',
  price: 380,
  category: 'Rice & Noodles',
  image: 'https://tse2.mm.bing.net/th?id=OIP.aF3Sx5TpICE_zKqOu81xqgHaHa&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'Great taste, could be spicier.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved it! Perfect for a cold day.'
    }
  ]
},
{
  id: 230,
  name: 'Mix Seafood Rice in Oyster Sauce',
  description: 'Seafood rice cooked in oyster sauce',
  price: 370,
  category: 'Rice & Noodles',
  image: 'https://i0.wp.com/angsarap.net/wp-content/uploads/2013/02/mixed-seafood-in-oyster-sauce.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The oyster sauce is amazing. Loved the mix seafood rice.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked seafood with a delicious sauce.'
    }
  ]
},
{
  id: 231,
  name: 'Combination Fried Rice (Veg)',
  description: 'Combination of fried rice (Veg)',
  price: 380,
  category: 'Rice & Noodles',
  image: 'https://i2.wp.com/vegecravings.com/wp-content/uploads/2016/03/veg-fried-rice-step-by-step-recipe.jpg?w=2418&quality=65&strip=all&ssl=1',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The combination of vegetables in the fried rice is great.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the freshness of the vegetables and the flavor of the rice.'
    }
  ]
},
{
  id: 232,
  name: 'Combination Fried Rice (Non-Veg)',
  description: 'Combination of fried rice (Non-Veg)',
  price: 380,
  category: 'Rice & Noodles',
  image: 'https://tse3.mm.bing.net/th?id=OIP.qerBDBJ3lpkPbyD2JSEcZQHaEK&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The combination of meats in the fried rice is perfect.'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too spicy for my taste.'
    }
  ]
},
{
  id: 233,
  name: 'Malaysian Fried Rice/Noodles (Veg)',
  description: 'Malaysian Veg fried rice or noodles',
  price: 290,
  category: 'Rice & Noodles',
  image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/06/4-11.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Malaysian style is a nice twist on the usual fried rice.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the Malaysian Veg fried rice. Highly recommend!'
    }
  ]
},
{
  id: 234,
  name: 'Malaysian Fried Rice/Noodles (Non-Veg)',
  description: 'Malaysian Non-Veg fried rice or noodles',
  price: 310,
  category: 'Rice & Noodles',
  image: 'https://tse4.mm.bing.net/th?id=OIP.hztoMFaECaBUwH-trt49kAHaEW&pid=Api&P=0&h=180',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Malaysian style is a nice twist on the usual fried rice.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the Malaysian Non-Veg fried rice. Perfect dish!'
    }
  ]
},
{
  id: 235,
  name: 'Fried Rice / Noodles (Veg)',
  description: 'Veg Fried rice or noodles',
  price: 270,
  category: 'Rice & Noodles',
  image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/06/4-11.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The fried rice is simple yet delicious.'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a nice blend of vegetables.'
    }
  ]
},
{
  id: 236,
  name: 'Fried Rice / Noodles (Non-Veg)',
  description: 'Non-Veg Fried rice or noodles',
  price: 300,
  category: 'Rice & Noodles',
  image: 'https://www.positivenewstrends.com/wp-content/uploads/2019/05/Chicken-Fried-Rice-Ready-1.png',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The fried rice is simple yet delicious.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a nice blend of meats.'
    }
  ]
},
{
  id: 237,
  name: 'Mushroom Fried Rice / Noodles',
  description: 'Mushroom fried rice or noodles',
  price: 300,
  category: 'Rice & Noodles',
  image: 'https://goop-img.com/wp-content/uploads/2015/11/StirFriedNoodleswithMushrooms1.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The mushrooms add a nice flavor to the fried rice.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the mushroom fried rice. Highly recommend!'
    }
  ]
},
{
  id: 238,
  name: 'Packing Fried Rice (Veg)',
  description: 'Packing style Veg fried rice',
  price: 290,
  category: 'Rice & Noodles',
  image: 'https://tse2.mm.bing.net/th?id=OIP.YxiVyHwPzRTOSmCsT_DHPQHaEv&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The packing style is a nice twist on the usual fried rice.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the packing style Veg fried rice. Perfect dish!'
    }
  ]
},
{
  id: 239,
  name: 'P Packing Fried Rice (Non-Veg)',
  description: 'Packing style Non-Veg fried rice',
  price: 310,
  category: 'Rice & Noodles',
  image: 'https://www.positivenewstrends.com/wp-content/uploads/2019/05/Chicken-Fried-Rice-Ready-1.png',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The packing style is a nice twist on the usual fried rice.'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too spicy for my taste.'
    }
  ]
},
{
  id: 240,
  name: 'Ginger/Garlic Tomato Fried Rice (Veg)',
  description: 'Veg Fried rice with ginger and garlic tomato',
  price: 290,
  category: 'Rice & Noodles',
  image: 'https://i2.wp.com/vegecravings.com/wp-content/uploads/2016/03/veg-fried-rice-step-by-step-recipe.jpg?w=2418&quality=65&strip=all&ssl=1',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The ginger and garlic tomato add a nice flavor to the fried rice.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the ginger/garlic tomato fried rice. Highly recommend!'
    }
  ]
},
{
  id: 241,
  name: 'Ginger/Garlic Tomato Fried Rice (Non-Veg)',
  description: 'Non-Veg Fried rice with ginger and garlic tomato',
  price: 320,
  category: 'Rice & Noodles',
  image: 'https://th.bing.com/th/id/OIP.k4ERPOxqxoq0vZZ8VkcAFAHaE7?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The ginger and garlic tomato add a nice flavor to the fried rice.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the ginger/garlic tomato fried rice. Perfect dish!'
    }
  ]
},
{
  id: 242,
  name: 'Chinese Pot Rice (Veg)',
  description: 'Veg Chinese pot rice',
  price: 300,
  category: 'Rice & Noodles',
  image: 'https://tse1.mm.bing.net/th?id=OIP.oY0kYfZuKUhGSoF1bsXFrgHaEK&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Chinese pot rice is simple yet delicious.'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a nice blend of vegetables.'
    }
  ]
},
{
  id: 243,
  name: 'Chinese Pot Rice (Non-Veg)',
  description: 'Non-Veg Chinese pot rice',
  price: 330,
  category: 'Rice & Noodles',
  image: 'https://www.positivenewstrends.com/wp-content/uploads/2019/05/Chicken-Fried-Rice-Ready-1.png',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Chinese pot rice is simple yet delicious.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a nice blend of meats.'
    }
  ]
},
{
  id: 244,
  name: 'Szechwan Noodles (Veg)',
  description: 'Szechwan style Veg noodles',
  price: 270,
  category: 'Rice & Noodles',
  image: 'https://i.pinimg.com/originals/cd/d0/07/cdd007b52ee5b67afe42f03317c8e2f6.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Szechwan sauce is amazing. Loved the noodles.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked noodles with a delicious sauce.'
    }
  ]
},
{
  id: 245,
  name: 'Szechwan Noodles (Non-Veg)',
  description: 'Szechwan style Non-veg noodles',
  price: 310,
  category: 'Rice & Noodles',
  image: 'https://san-j.com/wp-content/uploads/2020/11/Szechuan-Noodles1.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Szechwan sauce is amazing. Loved the noodles.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked noodles with a delicious sauce.'
    }
  ]
},
{
  id: 246,
  name: 'Singapore Noodles (Veg)',
  description: 'Singapore style Veg noodles',
  price: 290,
  category: 'Rice & Noodles',
  image: 'https://www.connoisseurusveg.com/wp-content/uploads/2021/12/singapore-noodles-sq-1-of-1.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The Singapore style is perfect. Loved the noodles.'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too spicy for my taste.'
    }
  ]
},
{
  id: 247,
  name: 'Singapore Noodles (Non-Veg)',
  description: 'Singapore style Non-Veg noodles',
  price: 310,
  category: 'Rice & Noodles',
  image: 'https://thepeskyvegan.com/wp-content/uploads/2020/09/vegan-singapore-noodles-tofu-close-up.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Singapore style is perfect. Loved the noodles.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked noodles with a delicious sauce.'
    }
  ]
},
{
  id: 248,
  name: 'Triple Szechwan Fried Rice (Veg)',
  description: 'Triple Szechwan fried rice (Veg)',
  price: 290,
  category: 'Rice & Noodles',
  image: 'https://ranveerbrar.com/wp-content/uploads/2021/02/Triple-Schezwan-Rice-scaled.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Triple Szechwan sauce is amazing. Loved the fried rice.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a delicious sauce.'
    }
  ]
},
{
  id: 249,
  name: 'Triple Szechwan Fried Rice (Non-Veg)',
  description: 'Triple Szechwan fried rice (Non-Veg)',
  price: 330,
  category: 'Rice & Noodles',
  image: 'https://www.pavaniskitchen.com/wp-content/uploads/2021/08/fried-rice-1024x768.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Triple Szechwan sauce is amazing. Loved the fried rice.'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a delicious sauce.'
    }
  ]
},
{
  id: 250,
  name: 'American Chopsey (Veg)',
  description: 'American style chopsey (Veg)',
  price: 290,
  category: 'Rice & Noodles',
  image: 'https://www.whiskaffair.com/wp-content/uploads/2017/05/Amertican-Chop-Suey-3-1.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The American style is a nice twist on the usual chopsey.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the American style chopsey. Highly recommend!'
    }
  ]
},
{
  id: 251,
  name: 'American Chopsey (Non-Veg)',
  description: 'American style chopsey  (Non-Veg)',
  price: 320,
  category: 'Rice & Noodles',
  image: 'https://th.bing.com/th/id/OIP.opqh23mbugdVze0h425OzQHaEK?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The American style is a nice twist on the usual chopsey.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the American style chopsey. Perfect dish!'
    }
  ]
},
{
  id: 252,
  name: 'Chinese Chopsey (Veg)',
  description: 'Chinese style chopsey (Veg)',
  price: 290,
  category: 'Rice & Noodles',
  image: 'https://i2.wp.com/relaxlangmom.com/wp-content/uploads/2017/10/chopsuey.jpg?fit=1184%2C720&ssl=1',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Chinese style is a nice twist on the usual chopsey.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Loved the Chinese style chopsey. Highly recommend!'
    }
  ]
},
{
  id: 253,
  name: 'Chinese Chopsey (Non-Veg)',
  description: 'Chinese style chopsey (Non-Veg)',
  price: 320,
  category: 'Rice & Noodles',
  image: 'https://www.slurrpy.com/wp-content/uploads/2011/07/chop-suey-11.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The Chinese style is a nice twist on the usual chopsey.'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great dish, but a bit too spicy for my taste.'
    }
  ]
},
{
  id: 254,
  name: 'Stewed Rice (Veg)',
  description: 'Stewed rice (Veg)',
  price: 300,
  category: 'Rice & Noodles',
  image: 'https://lh3.googleusercontent.com/nHllzu7HLYJe6SSlFhK6OVGmcyvQaM60_9whFxds1P23msBl4O-0lkN6MQqZvVdp2mhIe7pxYfWUulFZ-HLSPJQ=w1200-h630-pp-rj-v1-e365',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The stewed rice is simple yet delicious.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a nice blend of vegetables.'
    }
  ]
},
{
  id: 255,
  name: 'Stewed Rice (Non-Veg)',
  description: 'Stewed rice (Non-Veg)',
  price: 320,
  category: 'Rice & Noodles',
  image: 'https://1.bp.blogspot.com/-GSnMoHn3Niw/TuxPlHv0kRI/AAAAAAAAFs8/tC4f7HPXO4Q/s1600/Veg+Fried+Rice.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The stewed rice is simple yet delicious.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a nice blend of meats.'
    }
  ]
},
{
  id: 256,
  name: 'Nasi Goreng (Veg)',
  description: 'Nasi Goreng rice (Veg)',
  price: 290,
  category: 'Rice & Noodles',
  image: 'https://th.bing.com/th/id/R.764141208f4bbea6369bc60816e124a9?rik=64onet%2fPCUzXNg&riu=http%3a%2f%2frealfood.tesco.com%2fmedia%2fimages%2f303-vegetarian-vegetable-nasi-goreng-LH-e6ab7333-fb46-4c34-8a8e-177daabede6e-0-1400x919.jpg&ehk=aEP3l9pSgl6IaHyVUik1V2YcyPrf6k1RD76VRpNUIl0%3d&risl=&pid=ImgRaw&r=0',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Nasi Goreng is simple yet delicious.'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a nice blend of vegetables.'
    }
  ]
},
{
  id: 257,
  name: 'Nasi Goreng (Non-Veg)',
  description: 'Nasi Goreng rice (Non-Veg)',
  price: 330,
  category: 'Rice & Noodles',
  image: 'https://th.bing.com/th/id/OIP.VBOenpRKrcSghnKDWDL-MgHaD4?rs=1&pid=ImgDetMain',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The Nasi Goreng is simple yet delicious.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a nice blend of meats.'
    }
  ]
},
{
  id: 258,
  name: 'Spicy Thai Fried Rice (Veg)',
  description: 'Spicy Thai style fried rice (Veg)',
  price: 290,
  category: 'Rice & Noodles',
  image: 'https://th.bing.com/th/id/OIP.AO2H7DmQVTVBCH6ndPB1bAAAAA?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The spicy Thai sauce is amazing. Loved the fried rice.'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a delicious sauce.'
    }
  ]
},
{
  id: 259,
  name: 'Spicy Thai Fried Rice (Non-Veg)',
  description: 'Spicy Thai style fried rice (Non-Veg)',
  price: 330,
  category: 'Rice & Noodles',
  image: 'https://www.cookwithkushi.com/wp-content/uploads/2023/05/homemade-thai-fried-rice-720x487.jpg',
  isVeg: false,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The spicy Thai sauce is amazing. Loved the fried rice.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly cooked rice with a delicious sauce.'
    }
  ]
},

//Desserts 
{
  id: 260,
  name: 'Halwa (Gajjar/Doodhi)',
  description: 'Traditional Indian sweet dessert',
  price: 140,
  category: 'Desserts',
  image: 'https://th.bing.com/th/id/OIP.M2GoxfSmxxaiDYXf9pNZ-AHaEK?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Alice Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The halwa is rich and flavorful. Loved the traditional taste.'
    },
    {
      userName: 'Mike Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly sweet and creamy. Highly recommend!'
    }
  ]
},
{
  id: 261,
  name: 'Gulab Jamun',
  description: 'Indian sweet syrup balls',
  price: 120,
  category: 'Desserts',
  image: 'https://bolnews.s3.amazonaws.com/wp-content/uploads/2020/12/2-12.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'John Doe',
      rating: 4,
      date: '2024-06-15',
      comment: 'The gulab jamun is soft and soaked in sweet syrup. Delicious!'
    },
    {
      userName: 'Jane Smith',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly soft and sweet. Highly recommend!'
    }
  ]
},
{
  id: 262,
  name: 'Rabri',
  description: 'Indian sweet milk dessert',
  price: 130,
  category: 'Desserts',
  image: 'https://www.palatesdesire.com/wp-content/uploads/2021/02/rabdi@palates_Desire-scaled.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Emily Brown',
      rating: 4,
      date: '2024-06-15',
      comment: 'The rabri is creamy and sweet. Loved the traditional taste.'
    },
    {
      userName: 'David Lee',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly creamy and rich. Highly recommend!'
    }
  ]
},
{
  id: 263,
  name: 'Walnut Brownie with Ice Cream',
  description: 'Walnut brownie served with ice cream',
  price: 250,
  category: 'Desserts',
  image: 'https://th.bing.com/th/id/OIP.n6b4z9akfwUAaox11eaVRQHaEK?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Sarah Connor',
      rating: 5,
      date: '2024-06-15',
      comment: 'The walnut brownie is rich and the ice cream is a perfect complement.'
    },
    {
      userName: 'Tom Brown',
      rating: 4,
      date: '2024-06-16',
      comment: 'Great combination of flavors. Highly recommend!'
    }
  ]
},
{
  id: 264,
  name: 'Crispy Honey Flat Noodles with Ice Cream',
  description: 'Flat noodles with honey and ice cream',
  price: 220,
  category: 'Desserts',
  image: 'https://img-global.cpcdn.com/recipes/34e47d63245c43b1/751x532cq70/honey-crispy-noodles-with-ice-cream-recipe-main-photo.jpg',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Chris Green',
      rating: 4,
      date: '2024-06-15',
      comment: 'The crispy noodles with honey are a nice twist. Loved the ice cream.'
    },
    {
      userName: 'Laura White',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly sweet and crunchy. Highly recommend!'
    }
  ]
},
{
  id: 265,
  name: 'Malai Kulfi / Casatta',
  description: 'Indian ice cream dessert',
  price: 120,
  category: 'Desserts',
  image: 'https://th.bing.com/th/id/OIP.bcR9Kit_jAm-U2-j-YGG_wHaE8?rs=1&pid=ImgDetMain',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Mark Johnson',
      rating: 4,
      date: '2024-06-15',
      comment: 'The malai kulfi is creamy and rich. Loved the traditional taste.'
    },
    {
      userName: 'Natalie Brown',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly creamy and flavorful. Highly recommend!'
    }
  ]
},
{
  id: 266,
  name: 'Choice of Ice Creams',
  description: 'Ice creams (Vanilla, Strawberry, Chocolate/Mango)',
  price: 150,
  category: 'Desserts',
  image: 'https://tse2.mm.bing.net/th?id=OIP.lFEzsOjEyZLb9hK-N-CKeQHaE8&pid=Api&P=0&h=180',
  isVeg: true,
  hasPortions: false,
  hasQuantity: false,
  reviews: [
    {
      userName: 'Robert Lee',
      rating: 4,
      date: '2024-06-15',
      comment: 'The ice creams are smooth and flavorful. Loved the variety.'
    },
    {
      userName: 'Emily Davis',
      rating: 5,
      date: '2024-06-16',
      comment: 'Perfectly sweet and refreshing. Highly recommend!'
    }
  ]
}
];