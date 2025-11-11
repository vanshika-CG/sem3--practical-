import Link from "next/link";

export default function MenuPage() {
  const items = [
    { id: 1, name: "Pizza", price: 299 },
    { id: 2, name: "Burger", price: 199 },
    { id: 3, name: "Pasta", price: 249 },
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Our Menu</h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="border p-3 rounded-lg hover:bg-gray-100">
            <Link href={`/menu/${item.id}`}>
              <div className="flex justify-between">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
