export const plans = [
  {
    title: "Free",
    price: "$0",
    description: "Basic features.",
    features: [
      "Manage tasks",
      "Personal dashboard",
      "Light & dark mode",
      "Email support"
    ]
  },
  {
    title: "Pro",
    price: "$9/mo",
    description: "More features.",
    features: [
      "Everything in Free",
      "Reminders & deadlines",
      "Calendar integration",
      "Priority email support"
    ]
  },
  {
    title: "Team",
    price: "$29/mo",
    description: "For multiple users or businesses.",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Advanced permissions",
      "Admin dashboard"
    ]
  }
];

export const cardSx = {
  backgroundColor: "var(--color-header)",
  color: "var(--color-helper)",
  borderRadius: "1rem",
  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
  padding: "2rem",
  minWidth: "260px",
  maxWidth: "320px",
  margin: "1rem",
  flex: "1 1 260px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

export const priceSx = {
  fontSize: "2rem",
  fontWeight: "bold",
  margin: "1rem 0",
  color: "#666a70"
};

export const buttonSx = {
  marginTop: "1.5rem",
  padding: "1rem 2rem",
  backgroundColor: "var(--color-helper)",
  color: "var(--color-header)",
  border: "none",
  borderRadius: "0.5rem",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background 0.2s"
};