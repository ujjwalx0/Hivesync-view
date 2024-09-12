import React from 'react';

export const Statistics = () => {
  const stats = [
    { quantity: "15+", description: "Clients" },
    { quantity: "300+", description: "Projects Delivered" },
    { quantity: "3", description: "Countries" },
    { quantity: "4", description: "Products" },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {stats.map(({ quantity, description }) => (
          <div
            key={description}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
