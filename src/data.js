// import promo image
import PromoJuli from "./assets/img/promo/PROMO-JULI.jpg";
import logo from "./assets/img/logo1.png";

// import house images
import House1 from "./assets/img/car/pajero1.png";
import House2 from "./assets/img/car/triton1.png";
import House3 from "./assets/img/car/xpander1.png";
import House4 from "./assets/img/car/l3001.png";

// import house large images
import Pblack from "./assets/img/car/Pajero/pajero-black.png";
import Psilver from "./assets/img/car/Pajero/pajero-silver.png";
import Pwhite from "./assets/img/car/Pajero/pajero-white.png";
import Pbronze from "./assets/img/car/Pajero/pajero-bronze.png";
import Pgrey from "./assets/img/car/Pajero/pajero-grey.png";
import House2Lg from "./assets/img/car/triton1lg.jpeg";
import House3Lg from "./assets/img/car/xpander1lg.jpg";
import House4Lg from "./assets/img/car/l3001lg.jpg";

// import warna
import Pwarna1 from "./assets/img/car/Pajero/warna/warna1.png";
import Pwarna2 from "./assets/img/car/Pajero/warna/warna2.png";
import Pwarna3 from "./assets/img/car/Pajero/warna/warna3.png";

// import agents images
import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";

// Tentang Kami
import TestimonialImg from "./assets/img/testimonial.png";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";

// Import exterior
import Pds from "./assets/img/car/Pajero/Exterior/1. dynamic-shield.png";
import Ppt from "./assets/img/car/Pajero/Exterior/2. power-tailgate.jpg";
import Phl from "./assets/img/car/Pajero/Exterior/3. head-lamp.png";
import Pcl from "./assets/img/car/Pajero/Exterior/4. cornering-lamp.jpg";
import Prl from "./assets/img/car/Pajero/Exterior/5. rear-light.png";
import Ps from "./assets/img/car/Pajero/Exterior/6. sunroof.png";
import Pv from "./assets/img/car/Pajero/Exterior/7. velg.png";
import Pantena from "./assets/img/car/Pajero/Exterior/8. pajero-shark-fin-antenna-dakar-ultimate-4x4.png";
import Pspoiler from "./assets/img/car/Pajero/Exterior/10. spoiler.jpg";

// Import interior
import Pdb from "./assets/img/car/Pajero/Interior/1. pajero-dashboard-dakar-ultimate-sunroof-opened.jpg";
import Plc from "./assets/img/car/Pajero/Interior/2. lcdjpg.jpg";
import Phu from "./assets/img/car/Pajero/Interior/3. head-unitjpg.jpg";
import P4r from "./assets/img/car/Pajero/Interior/4. 4r3a1028.jpg";
import Pst from "./assets/img/car/Pajero/Interior/5. soft-touch.png";
import Pdz from "./assets/img/car/Pajero/Interior/6. dual-zone.jpg";
import Pepb from "./assets/img/car/Pajero/Interior/7. epb.jpg";
import Pifd from "./assets/img/car/Pajero/Interior/8. pajero-interior-front-dakar-ultimate-4x4.png";
import Prpo from "./assets/img/car/Pajero/Interior/9. 2nd-row-power-outlet.png";
import Pisd from "./assets/img/car/Pajero/Interior/10. pajero-interior-side-dakar-ultimate-4x4.png";
import Plcd from "./assets/img/car/Pajero/Interior/11. lcd-monitor.png";
import Psb from "./assets/img/car/Pajero/Interior/12. pajero-spacious-baggage-dakar-ultimate-4x4.png";

export const housesData = [
  {
    id: 1,
    type: "Passenger Car",
    name: "New Pajero Sport",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House1,
    exterior: [
      {
        name: "Dynamic Shield",
        image: Pds,
      },
      {
        name: "New Power Tailgate with kick Sensors",
        image: Ppt,
      },
      {
        name: "New Headlamp Design",
        image: Phl,
      },
      {
        name: "New Active Cornering Lamp",
        image: Pcl,
      },
      {
        name: "New Rear Combination Lamp",
        image: Prl,
      },
      {
        name: "Sunroof",
        image: Ps,
      },
      {
        name: "New 18 inch Sporty Alloy Wheel",
        image: Pv,
      },
      {
        name: "New Shark Fin Antenna",
        image: Pantena,
      },
      {
        name: "Sporty Rear Spoiler",
        image: Pspoiler,
      },
    ],
    interior: [
      {
        name: "Tough and Luxury Interior",
        image: Pdb,
      },
      {
        name: "New 8 Inch Color LCD Meter",
        image: Plc,
      },
      {
        name: "Head Unit With Smartphone Link Dispplay Audio",
        image: Phu,
      },
      {
        name: "New Auto Dimming Rear View Mirror",
        image: P4r,
      },
      {
        name: "Stylish Floor Console with Soft Pad",
        image: Pst,
      },
      {
        name: "Dual Zone Automatic AC",
        image: Pdz,
      },
      {
        name: "Electric Parking Brake +New Brake Auto Hold",
        image: Pepb,
      },
      {
        name: "Comfortable Interior Side",
        image: Pifd,
      },
      {
        name: "2nd Row Power Outlet",
        image: Prpo,
      },
      {
        name: "Comfortable 2nd Row Seat with Arm Rest & Cup Holder",
        image: Pisd,
      },
      {
        name: "Roof Monitor",
        image: Plcd,
      },
      {
        name: "Spacious Baggage",
        image: Psb,
      },
    ],
    imageLgg: [
      {
        name: "Black",
        image: Pblack,
      },
      {
        name: "Silver",
        image: Psilver,
      },
      {
        name: "White",
        image: Pwhite,
      },
      {
        name: "Bronze",
        image: Pbronze,
      },
      {
        name: "Grey",
        image: Pgrey,
      },
    ],
    // country: "United States",
    lineup: [
      {
        nama: "Dakar Ultimate (4X4) AT",
        harga: "Rp.723.500.000",
        warna: Pwarna1,
      },
      {
        nama: "Dakar Ultimate (4X2) AT",
        harga: "Rp.675.600.000",
        warna: Pwarna1,
      },
      { nama: "Dakar (4X2) AT", harga: "Rp.625.900.000", warna: Pwarna1 },
      { nama: "Exceed (4X2) AT", harga: "Rp.567.300.000", warna: Pwarna2 },
      { nama: "Exceed (4X2) MT", harga: "Rp.552.100.000", warna: Pwarna2 },
      { nama: "GLX (4X4) MT", harga: "Rp.577.600.000", warna: Pwarna3 },
    ],
    // address: "New Pajero Sport",
    bedrooms: "2477 CC",
    bathrooms: "7",
    surface: "Diesel",
    year: "2016",
    price: "RP. 545.600.000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
    // ini varian warna
    title: "Dapatkan warna terbaikmu",
    products: [
      {
        name: "Black",
        image: Pblack,
      },
      {
        name: "Silver",
        image: Psilver,
      },
      {
        name: "White",
        image: Pwhite,
      },
      {
        name: "Bronze",
        image: Pbronze,
      },
      {
        name: "Grey",
        image: Pgrey,
      },
    ],
  },
  {
    id: 2,
    type: "Light Commercial Vehicle",
    name: "Triton",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House2,
    exterior: [
      {
        name: "Dynamic Shield",
        image: Pds,
      },
      {
        name: "New Power Tailgate with kick Sensors",
        image: Ppt,
      },
      {
        name: "New Headlamp Design",
        image: Phl,
      },
      {
        name: "New Active Cornering Lamp",
        image: Pcl,
      },
      {
        name: "New Rear Combination Lamp",
        image: Prl,
      },
      {
        name: "Sunroof",
        image: Ps,
      },
      {
        name: "New 18 inch Sporty Alloy Wheel",
        image: Pv,
      },
      {
        name: "New Shark Fin Antenna",
        image: Pantena,
      },
      {
        name: "Sporty Rear Spoiler",
        image: Pspoiler,
      },
    ],
    interior: [
      {
        name: "Tough and Luxury Interior",
        image: Pdb,
      },
      {
        name: "New 8 Inch Color LCD Meter",
        image: Plc,
      },
      {
        name: "Head Unit With Smartphone Link Dispplay Audio",
        image: Phu,
      },
      {
        name: "New Auto Dimming Rear View Mirror",
        image: P4r,
      },
      {
        name: "Stylish Floor Console with Soft Pad",
        image: Pst,
      },
      {
        name: "Dual Zone Automatic AC",
        image: Pdz,
      },
      {
        name: "Electric Parking Brake +New Brake Auto Hold",
        image: Pepb,
      },
      {
        name: "Comfortable Interior Side",
        image: Pifd,
      },
      {
        name: "2nd Row Power Outlet",
        image: Prpo,
      },
      {
        name: "Comfortable 2nd Row Seat with Arm Rest & Cup Holder",
        image: Pisd,
      },
      {
        name: "Roof Monitor",
        image: Plcd,
      },
      {
        name: "Spacious Baggage",
        image: Psb,
      },
    ],
    imageLgg: [
      {
        name: "Black",
        image: Pblack,
      },
      {
        name: "Silver",
        image: Psilver,
      },
      {
        name: "White",
        image: Pwhite,
      },
      {
        name: "Bronze",
        image: Pbronze,
      },
      {
        name: "Grey",
        image: Pgrey,
      },
    ],
    // country: "United States",

    lineup: [
      {
        nama: "Dakar Ultimate (4X4) AT",
        harga: "Rp.723.500.000",
        warna: Pwarna1,
      },
      {
        nama: "Dakar Ultimate (4X2) AT",
        harga: "Rp.675.600.000",
        warna: Pwarna1,
      },
      { nama: "Dakar (4X2) AT", harga: "Rp.625.900.000", warna: Pwarna1 },
      { nama: "Exceed (4X2) AT", harga: "Rp.567.300.000", warna: Pwarna2 },
      { nama: "Exceed (4X2) MT", harga: "Rp.552.100.000", warna: Pwarna2 },
      { nama: "GLX (4X4) MT", harga: "Rp.577.600.000", warna: Pwarna3 },
    ],
    imageLg: House2Lg,
    // country: "Canada",
    // address: "Triton",
    bedrooms: "2477 CC",
    bathrooms: "4",
    surface: "Diesel",
    year: "2016",
    price: "RP. 283.550.000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
    // ini varian warna
    title: "Dapatkan warna terbaikmu",
    // subtitle: "Dapatkan warna terbaikmu",
    // link: "Check all",
    // icon: <IoIosArrowRoundForward />,
    products: [
      {
        name: "Black",
        image: Pblack,
      },
      {
        name: "Silver",
        image: Psilver,
      },
      {
        name: "White",
        image: Pwhite,
      },
      {
        name: "Bronze",
        image: Pbronze,
      },
      {
        name: "Grey",
        image: Pgrey,
      },
    ],
  },
  {
    id: 3,
    type: "Passenger Car",
    name: "New Xpander",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House3,
    imageLg: House3Lg,
    // country: "United States",
    address: "New Xpander",
    bedrooms: "1499 CC",
    bathrooms: "7",
    surface: "Bensin",
    year: "2016",
    price: "RP. 257.400.000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
    exterior: [
      {
        name: "Dynamic Shield",
        image: Pds,
      },
      {
        name: "New Power Tailgate with kick Sensors",
        image: Ppt,
      },
      {
        name: "New Headlamp Design",
        image: Phl,
      },
      {
        name: "New Active Cornering Lamp",
        image: Pcl,
      },
      {
        name: "New Rear Combination Lamp",
        image: Prl,
      },
      {
        name: "Sunroof",
        image: Ps,
      },
      {
        name: "New 18 inch Sporty Alloy Wheel",
        image: Pv,
      },
      {
        name: "New Shark Fin Antenna",
        image: Pantena,
      },
      {
        name: "Sporty Rear Spoiler",
        image: Pspoiler,
      },
    ],
    interior: [
      {
        name: "Tough and Luxury Interior",
        image: Pdb,
      },
      {
        name: "New 8 Inch Color LCD Meter",
        image: Plc,
      },
      {
        name: "Head Unit With Smartphone Link Dispplay Audio",
        image: Phu,
      },
      {
        name: "New Auto Dimming Rear View Mirror",
        image: P4r,
      },
      {
        name: "Stylish Floor Console with Soft Pad",
        image: Pst,
      },
      {
        name: "Dual Zone Automatic AC",
        image: Pdz,
      },
      {
        name: "Electric Parking Brake +New Brake Auto Hold",
        image: Pepb,
      },
      {
        name: "Comfortable Interior Side",
        image: Pifd,
      },
      {
        name: "2nd Row Power Outlet",
        image: Prpo,
      },
      {
        name: "Comfortable 2nd Row Seat with Arm Rest & Cup Holder",
        image: Pisd,
      },
      {
        name: "Roof Monitor",
        image: Plcd,
      },
      {
        name: "Spacious Baggage",
        image: Psb,
      },
    ],
    imageLgg: [
      {
        name: "Black",
        image: Pblack,
      },
      {
        name: "Silver",
        image: Psilver,
      },
      {
        name: "White",
        image: Pwhite,
      },
      {
        name: "Bronze",
        image: Pbronze,
      },
      {
        name: "Grey",
        image: Pgrey,
      },
    ],
    // country: "United States",

    lineup: [
      {
        nama: "Dakar Ultimate (4X4) AT",
        harga: "Rp.723.500.000",
        warna: Pwarna1,
      },
      {
        nama: "Dakar Ultimate (4X2) AT",
        harga: "Rp.675.600.000",
        warna: Pwarna1,
      },
      { nama: "Dakar (4X2) AT", harga: "Rp.625.900.000", warna: Pwarna1 },
      { nama: "Exceed (4X2) AT", harga: "Rp.567.300.000", warna: Pwarna2 },
      { nama: "Exceed (4X2) MT", harga: "Rp.552.100.000", warna: Pwarna2 },
      { nama: "GLX (4X4) MT", harga: "Rp.577.600.000", warna: Pwarna3 },
    ],
    products: [
      {
        name: "Black",
        image: Pblack,
      },
      {
        name: "Silver",
        image: Psilver,
      },
      {
        name: "White",
        image: Pwhite,
      },
      {
        name: "Bronze",
        image: Pbronze,
      },
      {
        name: "Grey",
        image: Pgrey,
      },
    ],
  },
  {
    id: 4,
    type: "Light Commercial Vehicle",
    name: "L-300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House4,
    imageLg: House4Lg,
    // country: "Canada",
    address: "L-300",
    bedrooms: "6",
    bathrooms: "2",
    surface: "4200 sq ft",
    year: "2016",
    price: "Rp. 216.650.000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
    exterior: [
      {
        name: "Dynamic Shield",
        image: Pds,
      },
      {
        name: "New Power Tailgate with kick Sensors",
        image: Ppt,
      },
      {
        name: "New Headlamp Design",
        image: Phl,
      },
      {
        name: "New Active Cornering Lamp",
        image: Pcl,
      },
      {
        name: "New Rear Combination Lamp",
        image: Prl,
      },
      {
        name: "Sunroof",
        image: Ps,
      },
      {
        name: "New 18 inch Sporty Alloy Wheel",
        image: Pv,
      },
      {
        name: "New Shark Fin Antenna",
        image: Pantena,
      },
      {
        name: "Sporty Rear Spoiler",
        image: Pspoiler,
      },
    ],
    interior: [
      {
        name: "Tough and Luxury Interior",
        image: Pdb,
      },
      {
        name: "New 8 Inch Color LCD Meter",
        image: Plc,
      },
      {
        name: "Head Unit With Smartphone Link Dispplay Audio",
        image: Phu,
      },
      {
        name: "New Auto Dimming Rear View Mirror",
        image: P4r,
      },
      {
        name: "Stylish Floor Console with Soft Pad",
        image: Pst,
      },
      {
        name: "Dual Zone Automatic AC",
        image: Pdz,
      },
      {
        name: "Electric Parking Brake +New Brake Auto Hold",
        image: Pepb,
      },
      {
        name: "Comfortable Interior Side",
        image: Pifd,
      },
      {
        name: "2nd Row Power Outlet",
        image: Prpo,
      },
      {
        name: "Comfortable 2nd Row Seat with Arm Rest & Cup Holder",
        image: Pisd,
      },
      {
        name: "Roof Monitor",
        image: Plcd,
      },
      {
        name: "Spacious Baggage",
        image: Psb,
      },
    ],
    imageLgg: [
      {
        name: "Black",
        image: Pblack,
      },
      {
        name: "Silver",
        image: Psilver,
      },
      {
        name: "White",
        image: Pwhite,
      },
      {
        name: "Bronze",
        image: Pbronze,
      },
      {
        name: "Grey",
        image: Pgrey,
      },
    ],
    // country: "United States",

    lineup: [
      {
        nama: "Dakar Ultimate (4X4) AT",
        harga: "Rp.723.500.000",
        warna: Pwarna1,
      },
      {
        nama: "Dakar Ultimate (4X2) AT",
        harga: "Rp.675.600.000",
        warna: Pwarna1,
      },
      { nama: "Dakar (4X2) AT", harga: "Rp.625.900.000", warna: Pwarna1 },
      { nama: "Exceed (4X2) AT", harga: "Rp.567.300.000", warna: Pwarna2 },
      { nama: "Exceed (4X2) MT", harga: "Rp.552.100.000", warna: Pwarna2 },
      { nama: "GLX (4X4) MT", harga: "Rp.577.600.000", warna: Pwarna3 },
    ],
    products: [
      {
        name: "Black",
        image: Pblack,
      },
      {
        name: "Silver",
        image: Psilver,
      },
      {
        name: "White",
        image: Pwhite,
      },
      {
        name: "Bronze",
        image: Pbronze,
      },
      {
        name: "Grey",
        image: Pgrey,
      },
    ],
  },
];

export const promoData = [
  {
    id: 1,
    title: "Program Penjualan Bosowa Berlian -",
    year: "2023",
    bulan: "Juli",
    name: "New Pajero Sport",
    merk: "Mitsubishi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: PromoJuli,
    // price: "RP. 545.600.000",
    // ini varian warna
  },
];

export const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "tentang kami",
    href: "/tentangkami",
  },
  {
    name: "produk",
    href: "/produk",
  },
  {
    name: "kontak",
    href: "/kontak",
  },
  {
    name: "promo",
    href: "/promo",
  },
];

export const testimonial = {
  title: "What people are saying about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "1973",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar2Img />,
      name: "1978",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const productMobil = {
  title: "Produk Kami",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      productList: [
        {
          image: <Pblack />,
          // icon: Psilver,
          name: "Pajero Black",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Psilver />,
          // icon: <IoMdAddCircle />,
          name: "Pajero Silver",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Pwhite />,
          // icon: Pbronze,
          name: "Pajero White",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Pbronze />,
          // icon: <IoMdAddCircle />,
          name: "Pajero Bronze",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Pgrey />,
          // icon: <IoMdAddCircle />,
          name: "Pajero Grey",
          price: 200,
          oldPrice: 210,
        },
      ],
    },
  ],
};
