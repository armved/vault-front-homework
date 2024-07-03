import React from "react";

export const LoadingSkeleton: React.FC = () => (
  <div className="flex flex-col gap-4 animate-pulse">
    <div className="h-14 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    <div className="h-14 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    <div className="h-14 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    <div className="h-14 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    <div className="h-14 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    <div className="h-14 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
  </div>
);
