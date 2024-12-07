
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
}

const Cards: React.FC<CardsProps> = ({
  text,
  icon,
  title,
  subtitle,
  cardBackground,
  iconBackground,
  titleColor,
  subtitleColor,
  textColor,
}) => {
  return (
    <div
      className={`flex flex-col p-4 w-full rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${cardBackground}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className={`text-2xl font-medium ${iconBackground} rounded-full p-2`}
          >
            {icon}
          </span>
          <span className={`text-lg ${textColor}`}>{text}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className={`text-3xl font-medium ${titleColor}`}>{title}</span>
        <span className={`text-sm font-light ${subtitleColor}`}>{subtitle}</span>
      </div>
    </div>
  );
};

export default Cards;
