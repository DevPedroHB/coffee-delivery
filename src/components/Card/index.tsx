import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CafesCard,
  CardFooter,
  CardInfo,
  CardTags,
  FooterButtons,
} from "./styles";

interface CardProps {
  id: number;
  imgUrl: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
}

export function Card({
  id,
  imgUrl,
  tags,
  name,
  description,
  price,
}: CardProps) {
  return (
    <CafesCard key={id}>
      <img src={imgUrl} alt={`Imagem ${name}`} />
      <CardTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CardTags>
      <CardInfo>
        <strong>{name}</strong>
        <span>{description}</span>
      </CardInfo>
      <CardFooter>
        <p>
          R$ <span>{price}</span>
        </p>
        <FooterButtons>
          <div>
            <Minus weight="bold" size={14} />
            1
            <Plus weight="bold" size={14} />
          </div>
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </FooterButtons>
      </CardFooter>
    </CafesCard>
  );
}
