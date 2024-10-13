const vegItems = [
    {
      name: "Vegetable Salad",
      image: "https://www.freeiconspng.com/thumbs/salad-png/greek-salad-png-21.png",
      price: "$5.99",
    },
    {
      name: "Paneer Tikka",
      image:"https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices-grilled-tandoor_466689-76793.jpg?w=360",
      price: "$8.99",
    },
    {
      name: "Veg Burger",
      image: "https://pngfile.net/public/uploads/preview/veg-burger-png-image-free-download-11703408304emzspgetme.png",
      price: "$4.99",
    },
    {
      name: "Pasta Primavera",
      image: "https://media.istockphoto.com/id/527905918/photo/pasta-primavera-on-a-vintage-plates.jpg?s=612x612&w=0&k=20&c=coIaNfOtSKkL-U6MAyMyXukXkIv7kUFcVJyhLxgejQc=",
      price: "$7.99",
    },
    {
      name: "Margherita Pizza",
      image: "https://png.pngtree.com/png-vector/20230909/ourmid/pngtree-margherita-pizza-in-a-dish-png-image_10012685.png",
      price: "$10.99",
    },
    {
      name: "Chickpea Curry",
      image: "https://media.istockphoto.com/id/1298346246/photo/vegan-chickpea-curry-with-rice-and-cilantro-in-black-plate-dark-background-indian-cuisine.jpg?s=612x612&w=0&k=20&c=1oQdRXhVWPUTxCqjveDhTIIkEqMGXwqQmIKwwCIuxXc=",
      price: "$9.99",
    },
    {
      name: "Vegetable Stir Fry",
      image: "https://t3.ftcdn.net/jpg/01/04/13/56/360_F_104135636_bH0l3ScKrNedCikbIsEgR49I6phhpzuH.jpg",
      price: "$6.99",
    },
    {
      name: "Quinoa Bowl",
      image: "https://static.vecteezy.com/system/resources/previews/035/063/136/non_2x/ai-generated-bowl-of-quinoa-salad-free-png.png",
      price: "$7.49",
    },
    {
      name: "Veg Sushi",
      image: "https://media.istockphoto.com/id/592689444/photo/eating-healthy-kale-sushi.jpg?s=612x612&w=0&k=20&c=pGohnxnHnU76lnYmlhXdKcAGsQHJdLyaBv0qSBf-dJY=",
      price: "$11.99",
    },
    {
      name: "Stuffed Bell Peppers",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyM_cUDBERDImqkDZM2Iz6UyJRsRpDlOn3Q&s",
    },
  ];
  
  const nonVegItems = [
    {
      name: "Grilled Chicken",
      image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjBfcGhvdG9fb2ZfdGFuZG9vcmlfY2hpY2tlbl9faW5kaWFfZm9vZF9faXNvbGF0ZV83ZjgyOWY5MS1hNDgzLTRmM2YtYmQ0ZC1jYmIxMGE5ZGU2YmQucG5n.png",
      price: "$12.99",
    },
    {
      name: "Beef Burger",
      image: "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger-thumbnail.png",
      price: "$10.99",
    },
    {
      name: "Chicken Tikka",
      image: "https://static.vecteezy.com/system/resources/previews/049/092/964/non_2x/plate-of-grilled-chicken-drumsticks-with-lime-and-herbs-isolated-transparent-png.png",
      price: "$9.99",
    },
    {
      name: "Fish & Chips",
      image: "https://img.freepik.com/premium-psd/fish-chips-png-transparent_1085577-3782.jpg",
      price: "$11.49",
    },
    {
      name: "Shrimp Pasta",
      image: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-large-shrimp-with-pasta-png-image_13146463.png",
      price: "$13.99",
    },
    {
      name: "BBQ Ribs",
      image: "https://t3.ftcdn.net/jpg/03/56/84/72/360_F_356847271_7SJhEe0Lx4dzvLZFp4sUE1TAWZEsoTom.jpg",
      price: "$14.99",
    },
    {
      name: "Lamb Chops",
      image: "https://t4.ftcdn.net/jpg/06/18/23/59/360_F_618235983_RX6pEadtVTOEsR4KqArB1QRuKl6Z3Vdk.jpg",
      price: "$16.99",
    },
    {
      name: "Tandoori Chicken",
      image: "https://static.vecteezy.com/system/resources/previews/025/229/917/original/tasty-tandoori-chicken-plate-isolated-on-transparent-background-png.png",
      price: "$10.99",
    },
    {
      name: "Pork Belly",
      image: "https://e7.pngegg.com/pngimages/670/379/png-clipart-pork-belly-raw-foodism-ribs-domestic-pig-meat-food-beef-thumbnail.png",
      price: "$15.99",
    },
    {
      name: "Chicken Quesadilla",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUVBRMwao5SXbYv9YxgTJ9U9eACvRu-ZGcA&s",
      price: "$9.49",
    },
  ];
  
  const Food = () => {
    return (
      <div className="p-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Food Menu</h2>
  
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Vegetarian Dishes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vegItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
                <h4 className="text-lg font-semibold mt-2">{item.name}</h4>
                <p className="text-blue-600 mt-1">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-4">Non-Vegetarian Dishes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nonVegItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
                <h4 className="text-lg font-semibold mt-2">{item.name}</h4>
                <p className="text-blue-600 mt-1">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Food;
  
  