import { CafesCard } from "../../../../components/CafesCard";
import { cafes } from "../../../../utils/cafes";
import { CafesContainer, CafesGrid } from "./styles";

export default function Cafes() {
  return (
    <CafesContainer id="cafes">
      <h1>Nossos Cafés</h1>
      <CafesGrid>
        {cafes.map((cafe) => (
          <CafesCard key={cafe.id} {...cafe} />
        ))}
      </CafesGrid>
    </CafesContainer>
  );
}
