import React from "react";

export interface ProgressBarProps {
  value?: number;
  colorProgress?: string;
  style?: React.CSSProperties;
  styleProgress?: React.CSSProperties;
  className?: string;
  classNameProgress?: string;
}

 const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  colorProgress = "#002652",
  style,
  styleProgress,
  className,
  classNameProgress,
}) => {
  return (
    <div
      className={`w-full h-[5px] bg-[#D7D6D5] rounded-full overflow-hidden ${className}`}
      style={style}
    >
      <div
        className={`h-[100%] rounded-full ${classNameProgress}`}
        style={{
          width: `${value}%`,
          backgroundColor: colorProgress,
          ...styleProgress,
        }}
      />
    </div>
  );
};
export default ProgressBar;