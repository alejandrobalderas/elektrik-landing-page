import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

type SpinnerProps = {
  className?: string;
  size?: number | string;
};
const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size }, ref) => {
    return (
      <Loader2
        className={cn("h-4 w-4 animate-spin", className)}
        size={size}
        ref={ref}
      />
    );
  }
);
Spinner.displayName = "Spinner";

export default Spinner;
