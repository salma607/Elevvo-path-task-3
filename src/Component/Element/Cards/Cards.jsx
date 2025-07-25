import React from "react";
import { plans, cardSx, priceSx, buttonSx } from "./Constant";

export default function PricingCards() {
  return (
    <div
      className="flex items-center justify-center min-h-screen "
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      <div
        className="flex flex-wrap justify-center w-full max-w-5xl p-8 rounded-lg shadow-md "
        style={{ backgroundColor: "var(--color-header)" }}
      >
        {plans.map((plan) => (
          <div key={plan.title} style={cardSx}>
            <h2 className="text-xl font-bold mb-1">{plan.title}</h2>
            <div style={priceSx}>{plan.price}</div>
            <div className="mb-2" style={{ color: "#888" }}>{plan.description}</div>
            <ul className="mb-4 text-left" style={{ width: "100%", paddingLeft: "1.2em" }}>
              {plan.features.map((feat, i) => (
                <li key={i} style={{ marginBottom: "0.5em" }}>
                  • {feat}
                </li>
              ))}
            </ul>
            <button
              style={{
                ...buttonSx,
                marginTop: plan.title === "Team" ? "0" : buttonSx.marginTop,
                opacity: plan.title === "Free" ? 0.7 : 1,
                pointerEvents: plan.title === "Free" ? "none" : "auto"
              }}
              disabled={plan.title === "Free"}
              tabIndex={plan.title === "Free" ? -1 : 0}
            >
              {plan.title === "Free" ? "Current Plan" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}