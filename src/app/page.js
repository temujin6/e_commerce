"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Users:", data.users);
        setData(data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  return (
    <div>
      {data?.map((item) => (
        <div className="" key={item.id}>
          {item.name} - {item.password}
        </div>
      ))}
    </div>
  );
}
