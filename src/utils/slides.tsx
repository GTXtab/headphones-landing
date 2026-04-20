export const SLIDES3D = [
  {
    id: "max",
    name: "AirPods Max",
    price: "24 999 ₴",
    modelPath: "/models/airpods_max_opt.glb",
    accentColor: "text-red-700",
    scale: 2.5,
    bgColor: "bg-red-500/10",
  },
  {
    id: "pro",
    name: "AirPods Pro 2",
    price: "9 900 ₴",
    modelPath: "/models/airpods_pro_opt.glb",
    accentColor: "text-gray-900",
    scale: 32,
    bgColor: "bg-gray-500/10",
  },
  {
    id: "pro4",
    name: "AirPods 4",
    price: "19 900 ₴",
    modelPath: "/models/airpods_4_opt.glb",
    accentColor: "text-gray-800",
    scale: 34,
    bgColor: "bg-gray-500/10",
  },
];

export const SLIDES = [
  {
    id: 1,
    name: "AirPods",
    price: "4 900 ₴",
    left: {
      image: "models/airpods_2ndgen_left.png",
      desktop: {
        position: { x: "-30vw", y: "-10vh", rotate: -45, scale: 1 },
        animation: { x: "-10vw", y: "0vh", rotate: 0, scale: 1 },
      },
      mobile: {
        position: { x: "-45vw", y: "-5vh", rotate: -45, scale: 0.7 },
        animation: { x: "-15vw", y: "-2vh", rotate: 0, scale: 0.8 },
      },
    },
    right: {
      image: "models/airpods_2ndgen_right.png",
      desktop: {
        position: { x: "30vw", y: "10vh", rotate: 45, scale: 1 },
        animation: { x: "10vw", y: "0vh", rotate: 0, scale: 1 },
      },
      mobile: {
        position: { x: "45vw", y: "15vh", rotate: 45, scale: 0.7 },
        animation: { x: "15vw", y: "8vh", rotate: 0, scale: 0.8 },
      },
    },
  },
  {
    id: 2,
    name: "AirPods 3",
    price: "6 900 ₴",
    left: {
      image: "models/1.png", 
      desktop: {
        position: { x: "-40vw", y: "-20vh", rotate: -30, scale: 1 },
        animation: { x: "-25vw", y: "-15vh", rotate: 15, scale: 1.4 },
      },
      mobile: {
        position: { x: "-45vw", y: "-25vh", rotate: -30, scale: 0.7 },
        animation: { x: "-20vw", y: "-15vh", rotate: 15, scale: 0.9 },
      },
    },
    right: {
      image: "models/2.png", 
      desktop: {
        position: { x: "40vw", y: "30vh", rotate: 30, scale: 1 },
        animation: { x: "25vw", y: "15vh", rotate: -20, scale: 1.4 },
      },
      mobile: {
        position: { x: "45vw", y: "30vh", rotate: 30, scale: 0.7 },
        animation: { x: "20vw", y: "20vh", rotate: -20, scale: 0.9 },
      },
    },
  },
  {
    id: 3,
    name: "AirPods Max",
    price: "24 900 ₴",
    center: {
      image: "models/airpods_max.png",
      desktop: {
        position: { y: "20vh", scale: 0.85 },
        animation: { y: "0vh", scale: 1 },
      },
      mobile: {
        position: { y: "5vh", scale: 0.7 }, 
        animation: { y: "-2vh", scale: 0.85 },
      },
    },
  },
];
