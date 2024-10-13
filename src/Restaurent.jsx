const restaurants = [
    {
      name: "The Hungry Hippo",
      location: "123 Foodie Lane, Yumtown",
      nickname: "Gobbler of Goodness",
      image: "https://via.placeholder.com/100/FF5733/FFFFFF?text=Hippo",
      bgColor: "bg-red-200",
    },
    {
      name: "Pasta Paradise",
      location: "456 Noodle St, Saucy City",
      nickname: "Carb King",
      image: "https://via.placeholder.com/100/FFC300/FFFFFF?text=Pasta",
      bgColor: "bg-yellow-200",
    },
    {
      name: "Burger Bonanza",
      location: "789 Burger Blvd, Meatropolis",
      nickname: "Bun in the Oven",
      image: "https://via.placeholder.com/100/DAF7A6/FFFFFF?text=Burger",
      bgColor: "bg-green-200",
    },
    {
      name: "Taco Town",
      location: "101 Taco Rd, Spicyville",
      nickname: "Chili Chompers",
      image: "https://via.placeholder.com/100/C70039/FFFFFF?text=Taco",
      bgColor: "bg-pink-200",
    },
    {
      name: "Sushi Central",
      location: "202 Fishy Ave, Rollington",
      nickname: "Rice Rocket",
      image: "https://via.placeholder.com/100/900C3F/FFFFFF?text=Sushi",
      bgColor: "bg-purple-200",
    },
    {
      name: "Curry Castle",
      location: "303 Spice St, Flavorland",
      nickname: "Maharaja of Masala",
      image: "https://via.placeholder.com/100/FFC300/FFFFFF?text=Curry",
      bgColor: "bg-orange-200",
    },
    {
      name: "Dessert Den",
      location: "404 Sweet Tooth Way, Sugarland",
      nickname: "Confection Commander",
      image: "https://via.placeholder.com/100/F39C12/FFFFFF?text=Dessert",
      bgColor: "bg-yellow-300",
    },
    {
      name: "BBQ Bliss",
      location: "505 Smokehouse Rd, Grilltopia",
      nickname: "Sauce Slinger",
      image: "https://via.placeholder.com/100/16A085/FFFFFF?text=BBQ",
      bgColor: "bg-teal-200",
    },
    {
      name: "Pizza Palace",
      location: "606 Cheese St, Crustville",
      nickname: "Slice of Heaven",
      image: "https://via.placeholder.com/100/E67E22/FFFFFF?text=Pizza",
      bgColor: "bg-orange-200",
    },
    {
      name: "Breakfast Bistro",
      location: "707 Egg Ave, Morningtown",
      nickname: "Sunny Side Up",
      image: "https://via.placeholder.com/100/F1C40F/FFFFFF?text=Eggs",
      bgColor: "bg-yellow-200",
    },
    {
      name: "Vegan Vortex",
      location: "808 Plant St, Greenery City",
      nickname: "Herbivore Hero",
      image: "https://via.placeholder.com/100/27AE60/FFFFFF?text=Vegan",
      bgColor: "bg-green-300",
    },
    {
      name: "Deli Delight",
      location: "909 Sandwich St, Snacktown",
      nickname: "The Deli-ghtful One",
      image: "https://via.placeholder.com/100/2980B9/FFFFFF?text=Deli",
      bgColor: "bg-blue-200",
    },
  ];
  
  const Restaurant = () => {
    return (
      <div className="p-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Restaurants</h2>
        <div className="space-y-4">
          {restaurants.map((restaurant, index) => (
            <div key={index} className={`flex items-center ${restaurant.bgColor} rounded-lg shadow-md p-4`}>
              <img src={restaurant.image} alt={restaurant.name} className="w-16 h-16 mr-4 rounded" />
              <div>
                <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                <p className="text-gray-700">{restaurant.location}</p>
                <p className="text-sm text-gray-500 italic">{restaurant.nickname}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Restaurant;
  
  