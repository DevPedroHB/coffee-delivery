import { cafes } from "../../../../utils/cafes";
import { CoffeeCard } from "../CoffeeCard";
import { Container, Grid } from "./styles";

export function OurCoffees() {
  return (
    <Container id="cafes">
      <h1>Nossos Cafés</h1>
      <Grid>
        {cafes.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </Grid>
    </Container>
  );
}
