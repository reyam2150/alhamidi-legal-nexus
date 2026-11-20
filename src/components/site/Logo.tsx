import darkLogo from "@/assets/logo-dark.png.asset.json";
import lightLogo from "@/assets/logo-light.png.asset.json";

export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const asset = light ? lightLogo : darkLogo;
  return (
    <img
      src={`/brand/${asset.original_filename}`}
      alt="شعار مكتب الحميدي للمحاماة والاستشارات القانونية"
      width={1048}
      height={318}
      className={`object-contain ${className}`}
    />
  );
}