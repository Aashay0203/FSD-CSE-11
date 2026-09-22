import Item from "./Item.jsx";
import "./ItemStore.css";

// const URL = "https://dummyjson.com/products";

export default function ItemStore() {
  const itemData = [
    {
      image: "https://loremflickr.com/400/300/toyota,corolla",
      title: "Toyota Corolla",
      price: 22500,
    },
    {
      image: "https://loremflickr.com/400/300/honda,civic",
      title: "Honda Civic",
      price: 23800,
    },
    {
      image: "https://loremflickr.com/400/300/ford,mustang",
      title: "Ford Mustang",
      price: 42000,
    },
    {
      image: "https://loremflickr.com/400/300/bmw,car",
      title: "BMW 3 Series",
      price: 45500,
    },
    {
      image: "https://loremflickr.com/400/300/audi,car",
      title: "Audi A4",
      price: 44000,
    },
    {
      image: "https://loremflickr.com/400/300/mercedes,car",
      title: "Mercedes C-Class",
      price: 47500,
    },
    {
      image: "https://loremflickr.com/400/300/tesla,car",
      title: "Tesla Model 3",
      price: 40990,
    },
    {
      image: "https://loremflickr.com/400/300/hyundai,car",
      title: "Hyundai Elantra",
      price: 21500,
    },
  ];
  return (
    <div className="home">
      {itemData.map((item, index) => (
        <Item key={index} props={item} />
      ))}
    </div>
  );
}
