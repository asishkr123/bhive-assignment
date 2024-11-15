import CommunityIcon from "../assets/community.svg";
import AffordableIcon from "../assets/affordable.svg";
import GymIcon from "../assets/gym.svg";
import WifiIcon from "../assets/wifi.svg";
import ComfortIcon from "../assets/lounges.svg";
import BookingIcon from "../assets/booking.svg";
import CafeIcon from "../assets/cafe.svg";
import SportsIcon from "../assets/sports-area.svg";
import { Feature } from "../types";
import { useMobileView } from "../hooks/useMobileView";

interface FeatureCardProps {
  icon: string;
  title: string;
  index: number;
}

const FeaturesSection: React.FC = () => {
  const isMobile = useMobileView();

  const features: Feature[] = [
    { icon: CommunityIcon, title: "Community Events" },
    { icon: GymIcon, title: "Gym Facilities" },
    { icon: WifiIcon, title: "High-Speed WiFi" },
    { icon: CafeIcon, title: "Cafe & Tea Bar" },
    { icon: AffordableIcon, title: "Affordable" },
    { icon: ComfortIcon, title: "Comfort Lounges" },
    { icon: BookingIcon, title: "Quick Booking" },
    { icon: SportsIcon, title: "Sports Area" },
  ];

  return (
    <div className="w-full py-10 ">
      <div className="md:px-12 xl:mx-20 px-8 xl:p-0 ">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 feature-card-container">
          {features.map((feature, index) =>
            isMobile ? (
              <FeatureCardMobile
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
              />
            ) : (
              <FeatureCard
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  index,
  icon,
  title,
}): JSX.Element => {
  return (
    <div key={index} className={`flex items-center px-6 py-8 feature-card`}>
      <img src={icon} alt={title} className="w-8 h-8 mr-4" />
      <p className="text-lg font-medium text-gray-900">{title}</p>
    </div>
  );
};

const FeatureCardMobile: React.FC<FeatureCardProps> = ({
  index,
  icon,
  title,
}): JSX.Element => {
  return (
    <div
      key={index}
      className="flex flex-col items-center border  m-2 p-4 md:px-6 bg-white rounded-lg shadow-lg hover:shadow-xl "
    >
      <img src={icon} alt={title} className="w-6 h-6 mb-2" />
      <p className="text-center text-gray-700 font-semibold">{title}</p>
    </div>
  );
};

export default FeaturesSection;
