import { Button } from "@/components/ui/button";

interface CardsProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  cardBackground?: string;
  iconBackground?: string;
  titleColor?: string;
  subtitleColor?: string;
  text?: string;
  buttonText?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
}

const Cards: React.FC<CardsProps> = ({
  buttonText,
  text,
  icon,
  title,
  subtitle,
  cardBackground,
  iconBackground,
  titleColor,
  subtitleColor,
  textColor,
  buttonBackgroundColor,
  buttonTextColor,
}) => {
  return (
    <div
      className={`flex flex-col p-4 w-full rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${cardBackground}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            className={`text-3xl font-bold ${iconBackground} rounded-full p-2`}
          >
            {icon}
          </span>
          <span className={`text-lg ${textColor}`}>{text}</span>
        </div>
        <Button
          className={`flex items-center justify-center rounded-full p-3 bg-white text-black ${buttonBackgroundColor}`}
        >
          <span className={`${buttonTextColor}`}>{buttonText}</span>
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <span className={`text-3xl font-bold ${titleColor}`}>{title}</span>
        <span className={`text-sm ${subtitleColor}`}>{subtitle}</span>
      </div>
    </div>
  );
};

export default Cards;
