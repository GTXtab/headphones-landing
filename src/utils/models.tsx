import {
  Minus,
  Waves,
  Droplet,
  BatteryCharging,
  Zap,
  Headphones,
  VolumeX,
  MessageCircle,
  Battery,
  Moon,
  Briefcase,
} from "lucide-react";

export const MODELS = [
  {
    id: "pods2",
    name: "AirPods",
    sub: "2-ге покоління",
    price: "від 4 900 ₴",
    img: "pods2.png",
    imgStyle: "scale-100 hover:scale-105 transition-transform duration-500",
    features: [
      {
        icon: <Minus strokeWidth={1.5} size={32} className="text-gray-300" />,
        text: "",
      },
      {
        icon: <Minus strokeWidth={1.5} size={32} className="text-gray-300" />,
        text: "",
      },
      {
        icon: <Minus strokeWidth={1.5} size={32} className="text-gray-300" />,
        text: "",
      },
      {
        icon: <Waves strokeWidth={1.5} size={32} className="text-black" />,
        text: "Просторовий звук",
      },
      {
        icon: <Droplet strokeWidth={1.5} size={32} className="text-black" />,
        text: "Захист від води",
      },
      {
        icon: (
          <BatteryCharging strokeWidth={1.5} size={32} className="text-black" />
        ),
        text: "Lightning Charging Case",
      },
    ],
    battery: "5 годин",
    batterySub: "прослуховування на одному заряді",
  },
  {
    id: "pods3",
    name: "AirPods",
    sub: "3-тє покоління",
    price: "від 6 900 ₴",
    img: "pods3.png",
    imgStyle: "scale-100 hover:scale-105 transition-transform duration-500",
    features: [
      {
        icon: <Minus strokeWidth={1.5} size={32} className="text-gray-300" />,
        text: "",
      },
      {
        icon: <Minus strokeWidth={1.5} size={32} className="text-gray-300" />,
        text: "",
      },
      {
        icon: <Minus strokeWidth={1.5} size={32} className="text-gray-300" />,
        text: "",
      },
      {
        icon: <Waves strokeWidth={1.5} size={32} className="text-black" />,
        text: "Персоналізований просторовий звук",
      },
      {
        icon: <Droplet strokeWidth={1.5} size={32} className="text-black" />,
        text: "Захист від поту та води",
      },
      {
        icon: <Zap strokeWidth={1.5} size={32} className="text-black" />,
        text: "Lightning або MagSafe Case",
      },
    ],
    battery: "6 годин",
    batterySub: "прослуховування на одному заряді",
  },
  {
    id: "pro2",
    name: "AirPods Pro",
    sub: "2-ге покоління",
    price: "від 9 900 ₴",
    img: "pro2.png",
    imgStyle: "scale-100 hover:scale-105 transition-transform duration-500",
    features: [
      {
        icon: <Headphones strokeWidth={1.5} size={32} className="text-black" />,
        text: "Адаптивний звук",
      },
      {
        icon: <VolumeX strokeWidth={1.5} size={32} className="text-black" />,
        text: "Активне шумозаглушення",
      },
      {
        icon: (
          <MessageCircle strokeWidth={1.5} size={32} className="text-black" />
        ),
        text: "Розпізнавання розмови",
      },
      {
        icon: <Waves strokeWidth={1.5} size={32} className="text-black" />,
        text: "Персоналізований просторовий звук",
      },
      {
        icon: <Droplet strokeWidth={1.5} size={32} className="text-black" />,
        text: "Захист IP54",
      },
      {
        icon: <Battery strokeWidth={1.5} size={32} className="text-black" />,
        text: "MagSafe (USB‑C) Case",
      },
    ],
    battery: "6 годин",
    batterySub: "прослуховування на одному заряді",
  },
  {
    id: "max",
    name: "AirPods Max",
    sub: "",
    price: "від 24 900 ₴",
    img: "max.png",
    imgStyle: "scale-[0.85] hover:scale-95 transition-transform duration-500",
    features: [
      {
        icon: <Minus strokeWidth={1.5} size={32} className="text-gray-300" />,
        text: "",
      },
      {
        icon: <VolumeX strokeWidth={1.5} size={32} className="text-black" />,
        text: "Активне шумозаглушення",
      },
      {
        icon: <Minus strokeWidth={1.5} size={32} className="text-gray-300" />,
        text: "",
      },
      {
        icon: <Waves strokeWidth={1.5} size={32} className="text-black" />,
        text: "Персоналізований просторовий звук",
      },
      {
        icon: <Moon strokeWidth={1.5} size={32} className="text-black" />,
        text: "Режим низького енергоспоживання",
      },
      {
        icon: <Briefcase strokeWidth={1.5} size={32} className="text-black" />,
        text: "Smart Case",
      },
    ],
    battery: "20 годин",
    batterySub: "прослуховування на одному заряді",
  },
];
