import { Introduction } from "./components/Introduction";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Introduction />
      <OurCoffees />
    </HomeContainer>
  );
}
