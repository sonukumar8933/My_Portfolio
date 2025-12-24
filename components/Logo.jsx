const Logo = () => {
  return (
    <svg
      width="210"
      height="44"
      viewBox="0 0 210 44"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sonu Kumar Logo"
      className="select-none"
    >
      {/* Text */}
      <text
        x="0"
        y="30"
        fill="var(--logo-text)"
        fontSize="26"
        fontFamily="Poppins, Inter, system-ui, sans-serif"
        fontWeight="600"
        letterSpacing="0.6"
      >
        Sonu Kumar
      </text>

      {/* Accent square */}
      <rect
        x="182"
        y="24"
        width="7"
        height="7"
        rx="1"
        fill="var(--logo-accent)"
      />
    </svg>
  );
};

export default Logo;
