import { Input } from "../../../../components/Input";
import { Container } from "./styles";

export function AddressForm() {
  return (
    <Container>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" className="uf" />
    </Container>
  );
}
