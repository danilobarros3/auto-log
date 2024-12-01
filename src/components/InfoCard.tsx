interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    cardBackground?: string;
    iconBackground?: string;
    titleColor?: string;
    subtitleColor?: string;
  }
  
  const InfoCard: React.FC<InfoCardProps> = ({
    icon,
    title,
    subtitle,
    cardBackground = "bg-white",
    iconBackground = "bg-blue-100",
    titleColor = "text-black",
    subtitleColor = "text-gray-500",
  }) => {
    return (
      <div
        className={`flex items-center justify-between p-4 w-full rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${cardBackground}`}
      >
        <div className="flex flex-col">
          <span className={`text-3xl font-bold ${titleColor}`}>{title}</span>
          <span className={`text-sm ${subtitleColor}`}>{subtitle}</span>
        </div>
  
        <div
          className={`flex items-center justify-center rounded-full p-3 ${iconBackground}`}
        >
          {icon}
        </div>
      </div>
    );
  };
  
  export default InfoCard;