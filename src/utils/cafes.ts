import americanoImg from "../assets/americano.png";
import arabeImg from "../assets/arabe.png";
import cafeComLeiteImg from "../assets/cafe-com-leite.png";
import cafeGeladoImg from "../assets/cafe-gelado.png";
import capuccinoImg from "../assets/capuccino.png";
import chocolateQuenteImg from "../assets/chocolate-quente.png";
import cubanoImg from "../assets/cubano.png";
import expressoCremosoImg from "../assets/expresso-cremoso.png";
import expressoImg from "../assets/expresso.png";
import havaianoImg from "../assets/havaiano.png";
import irlandesImg from "../assets/irlandes.png";
import latteImg from "../assets/latte.png";
import macchiatoImg from "../assets/macchiato.png";
import mochaccinoImg from "../assets/mochaccino.png";

export const cafes = [
  {
    id: 1,
    imgUrl: expressoImg,
    tags: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    id: 2,
    imgUrl: americanoImg,
    tags: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
  },
  {
    id: 3,
    imgUrl: expressoCremosoImg,
    tags: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
  },
  {
    id: 4,
    imgUrl: cafeGeladoImg,
    tags: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
  },
  {
    id: 5,
    imgUrl: cafeComLeiteImg,
    tags: ["Tradicional", "Com Leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90",
  },
  {
    id: 6,
    imgUrl: latteImg,
    tags: ["Tradicional", "Com Leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90",
  },
  {
    id: 7,
    imgUrl: capuccinoImg,
    tags: ["Tradicional", "Com Leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9,90",
  },
  {
    id: 8,
    imgUrl: macchiatoImg,
    tags: ["Tradicional", "Com Leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,90",
  },
  {
    id: 9,
    imgUrl: mochaccinoImg,
    tags: ["Tradicional", "Com Leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90",
  },
  {
    id: 10,
    imgUrl: chocolateQuenteImg,
    tags: ["Especial", "Com Leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9,90",
  },
  {
    id: 11,
    imgUrl: cubanoImg,
    tags: ["Tradicional", "Alcoólico", "Gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9,90",
  },
  {
    id: 12,
    imgUrl: havaianoImg,
    tags: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9,90",
  },
  {
    id: 13,
    imgUrl: arabeImg,
    tags: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9,90",
  },
  {
    id: 14,
    imgUrl: irlandesImg,
    tags: ["Especial", "Alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9,90",
  },
];
