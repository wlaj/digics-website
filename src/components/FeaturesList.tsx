import React from "react";

const features = [
  {
    title: "Support",
    description: "I upload videos covering premium tech, design and lifestyle.",
  },
  {
    title: "Sales",
    description: "I upload videos covering premium tech, design and lifestyle.",
  },
  {
    title: "Marketing",
    description: "I upload videos covering premium tech, design and lifestyle.",
  },
  {
    title: "Design",
    description: "I upload videos covering premium tech, design and lifestyle.",
  },
  {
    title: "Custom solutions",
    description: "I upload videos covering premium tech, design and lifestyle.",
  },
];

const FeaturesList = () => {
  return (
    <div className="grid mx-3 my-48 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-8">
        {features.map((feature: any) => (
          <span key={feature.title}>
            <h4 className="font-semibold text-xl py-2">{feature.title}</h4>
            <p className="text-neutral-600">
              {feature.description}
            </p>
          </span>
        ))}
    </div>
  );
};

export default FeaturesList;
