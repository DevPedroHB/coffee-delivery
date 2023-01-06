import Cafes from "./components/Cafes";
import Introduction from "./components/Introduction";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Introduction />
      <Cafes />
    </HomeContainer>
  );
}
