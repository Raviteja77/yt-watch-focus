interface IconProps {
  name: string;
  size?: number;
}

export const Icon = ({ name, size = 20 }: IconProps) => {
  return (
    <span
      style={{
        fontSize: size,
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {name}
    </span>
  );
};
