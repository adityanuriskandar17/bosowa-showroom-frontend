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

// import apartments images
// import Apartment1 from "./assets/img/apartments/a1.png";
// import Apartment2 from "./assets/img/apartments/a2.png";
// import Apartment3 from "./assets/img/apartments/a3.png";
// import Apartment4 from "./assets/img/apartments/a4.png";
// import Apartment5 from "./assets/img/apartments/a5.png";
// import Apartment6 from "./assets/img/apartments/a6.png";

// import apartments large images
// import Apartment1Lg from "./assets/img/apartments/a1lg.png";
// import Apartment2Lg from "./assets/img/apartments/a2lg.png";
// import Apartment3Lg from "./assets/img/apartments/a3lg.png";
// import Apartment4Lg from "./assets/img/apartments/a4lg.png";
// import Apartment5Lg from "./assets/img/apartments/a5lg.png";
// import Apartment6Lg from "./assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";
// import Agent5 from "./assets/img/agents/agent5.png";
// import Agent6 from "./assets/img/agents/agent6.png";
// import Agent7 from "./assets/img/agents/agent7.png";
// import Agent8 from "./assets/img/agents/agent8.png";
// import Agent9 from "./assets/img/agents/agent9.png";
// import Agent10 from "./assets/img/agents/agent10.png";
// import Agent11 from "./assets/img/agents/agent11.png";
// import Agent12 from "./assets/img/agents/agent12.png";

// Tentang Kami
import TestimonialImg from "./assets/img/testimonial.png";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";

export const housesData = [
  {
    id: 1,
    type: "Passenger Car",
    name: "New Pajero Sport",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House1,
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
  },
  {
    id: 2,
    type: "Light Commercial Vehicle",
    name: "Triton",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House2,
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
  },
];

export const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "tentang kami",
    href: "/about",
  },
  {
    name: "produk",
    href: "/produk",
  },
];

export const testimonial = {
  title: "What people are saying about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Brandi Johns",
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