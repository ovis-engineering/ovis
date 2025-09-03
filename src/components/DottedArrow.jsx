export default function DottedArrow({
  direction = "left",
  length = 40,
  color = "text-black",
  head = "text-amber-500",
  className = "",
}) {
  const rotations = {
    right: "rotate-0",
    down: "rotate-90",
    left: "rotate-180",
    up: "-rotate-90",
  };
  const rotationClass = rotations[direction] ?? "rotate-0";

  return (
    <div
      className={`flex items-center justify-center ${rotationClass} ${className}`}
    >
      <div
        className='relative flex items-center'
        style={{ width: `${length}px` }}
      >
        {/* Dotted line */}
        <div className={`border-t-2 border-dotted ${color} flex-1`}></div>
        {/* Arrow head */}
        <div
          className={`w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-current border-b-[8px] border-b-transparent ${head}`}
        ></div>
      </div>
    </div>
  );
}

// Usage examples:
// <DottedArrow direction="right" length={200} color="text-red-500" />
// <DottedArrow direction="down" length={150} color="text-blue-500" />
