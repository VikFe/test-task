import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const Loader: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-10 w-[200px] mb-2 rounded-md" />{" "}
      <Skeleton className="h-6 w-[150px] mb-2 rounded-md" />{" "}
      <Skeleton className="h-4 w-[250px] mb-2 rounded-md" />{" "}
    </div>
  );
};

export default Loader;
