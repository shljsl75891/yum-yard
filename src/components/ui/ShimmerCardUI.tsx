import { HtmlHTMLAttributes } from "react";

interface ShimmerUIProps extends HtmlHTMLAttributes<HTMLDivElement> {
  length: number;
}

const ShimmerUI: React.FC<ShimmerUIProps> = (props) => {
  return Array(props.length)
    .fill(0)
    .map((_, idx) => (
      <div
        className="p-4 w-60 h-60 rounded-lg animate-pulse bg-gray-100"
        key={idx}
      >
        <div className="w-full rounded-md bg-gray-200 h-28"></div>
        <div className="m-2 w-40 h-5 rounded-full bg-gray-200"></div>
        <div className="m-2 w-full h-3 rounded-full bg-gray-200"></div>
        <div className="m-2 w-full h-3 rounded-full bg-gray-200"></div>
      </div>
    ));
};

export default ShimmerUI;
