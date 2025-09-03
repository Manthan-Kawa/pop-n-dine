export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Indian-Selection' | 'Starters' | 'Tandoor Sea-Food' | 'Tandoor Selection' | 'Main Course' | 'Lamb Specialities' | 'Sea-Food Specialities' | 'Roti' | 'Rice Preparations' | 'Salad / Raitha' | 'Chinese Selection Soup' | 'Sea Food' | 'Chicken' | 'Lamb' | 'Rice & Noodles' | 'Desserts';
  image: string;
  isVeg: boolean;
  hasPortions?: boolean;
  hasQuantity?: boolean;
  reviews?: Array<{
    userName: string;
    rating: number;
    date: string;
    comment: string;
  }>;
}

export interface TableReservation {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
  isHalf: boolean;
}