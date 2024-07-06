import React from "react";

export const LoadingSkeleton: React.FC<{ blockRepeatCount: number }> = ({
  blockRepeatCount,
}) => {
  const defaultRepeatCount = 6;

  return (
    <div className="flex flex-col gap-4 animate-pulse">
      {[...Array(blockRepeatCount || defaultRepeatCount)].map((_, i) => (
        <div
          className="h-14 bg-gray-200 rounded-xl dark:bg-gray-700 w-full"
          key={i}
        ></div>
      ))}
    </div>
  );
};
