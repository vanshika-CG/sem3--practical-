export default function ItemPage({ params }) {
  const { itemid } = params;

  // Example data (you could fetch from an API here)
  const menuData = {
    1: { name: "Pizza", desc: "Cheesy delight with toppings", price: 299 },
    2: { name: "Burger", desc: "Juicy patty with fresh lettuce", price: 199 },
    3: { name: "Pasta", desc: "Creamy sauce and herbs", price: 249 },
  };

  const item = menuData[itemid] || { name: "Item not found", desc: "", price: "" };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
      <p className="text-gray-700 mb-2">{item.desc}</p>
      <p className="text-lg font-semibold">₹{item.price}</p>
      <a href="/menu" className="text-blue-600 underline mt-4 block">
        ← Back to Menu
      </a>
    </main>
  );
}
