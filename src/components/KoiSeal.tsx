type KoiSealProps = {
  variant?: "light" | "dark";
  sizeClass?: string;
};

export function KoiSeal({ variant = "light", sizeClass = "h-14 w-14" }: KoiSealProps) {
  const isDark = variant === "dark";
  const ring = isDark ? "border-white/45 text-white" : "border-urushi text-urushi";

  return (
    <span
      className={`koi-seal grid ${sizeClass} place-items-center rounded-full border-2 ${ring}`}
      aria-hidden="true"
    >
      <svg viewBox="-4 -4 72 72" className="h-[72%] w-[72%] overflow-visible" role="img">
        <path
          d="M33.8 7.2c8.9 3.4 14.2 11.2 13.3 19.7-.8 7.8-6.2 14.6-14.6 18.9 6-.9 11.5-3.4 16.1-7.6-1.8 7.8-7.5 13.5-15.7 15.3-4.8 1.1-10.2.8-15.9-1 4.3-2.1 7.2-5.1 8.8-9-6.9-2-11.4-6.9-11.8-12.7-.3-5.1 2.4-9.9 7.1-13.1-4.6.3-8.5 2.2-11.7 5.8.8-6.9 4.8-12.1 11.7-14.5 4.1-1.4 8.2-1.3 12.7-1.8Z"
          fill="currentColor"
        />
        <path
          d="M34.8 15.1c3.8 2.1 5.9 5.9 5.4 10.5-.6 5.7-4.5 10.2-10.7 13.2-1-5.4.7-10.3 5.1-14.7-5.3 1.4-9.4 4.6-12.1 9.5-1.2-4.7-.2-9.1 3.1-12.7 2.6-2.9 5.9-4.4 9.2-5.8Z"
          fill={isDark ? "#121212" : "#fff"}
          opacity="0.92"
        />
        <circle cx="36.6" cy="21.4" r="1.8" fill={isDark ? "#121212" : "#fff"} />
        <path
          d="M12.5 37.8c4.8 1.1 9.2.5 13.2-1.9M42 10.2c3.1 4.3 4 8.8 2.6 13.6"
          fill="none"
          stroke={isDark ? "#121212" : "#fff"}
          strokeLinecap="round"
          strokeWidth="3"
          opacity="0.7"
        />
        <path
          d="M16.4 44.6c-4.7.5-8.5 2.1-11.6 4.9 2.7-6.8 7.9-10.5 15.4-10.8-1.2 1.9-2.2 3.9-3.8 5.9Z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M50.1 17.2c4-1.9 7.2-4.7 9.5-8.4.1 7.4-3.4 12.9-10.4 16.2.4-2.3.6-4.8.9-7.8Z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
    </span>
  );
}
