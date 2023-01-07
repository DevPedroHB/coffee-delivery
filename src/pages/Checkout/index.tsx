import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import expressoImg from "../../assets/expresso.png";
import { Card } from "../../components/Card";
import {
  CardBody,
  CardHeader,
  CheckoutColumn,
  CheckoutContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutColumn>
        <h1>Complete seu pedido</h1>
        <Card>
          <CardHeader iconColor="yellowDark">
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <small>Informe o endereço onde deseja receber seu pedido</small>
            </div>
          </CardHeader>
          <CardBody>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </CardBody>
        </Card>
        <Card>
          <CardHeader iconColor="purple">
            <CurrencyDollar size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <small>Informe o endereço onde deseja receber seu pedido</small>
            </div>
          </CardHeader>
          <div>
            <button>
              <CreditCard size={16} />
              Cartão de Crédito
            </button>
            <button>
              <Bank size={16} />
              Cartão de Débito
            </button>
            <button>
              <Money size={16} />
              Dinheiro
            </button>
          </div>
        </Card>
      </CheckoutColumn>
      <CheckoutColumn>
        <h1>Cafés selecionados</h1>
        <Card>
          <div>
            <img src={expressoImg} alt={`Imagem café Expresso`} />
            <div>
              <span>Expresso Tradicional</span>
              <div>
                <div>
                  <Minus weight="bold" size={14} />
                  1
                  <Plus weight="bold" size={14} />
                </div>
                <button>
                  <Trash size={16} />
                  Remover
                </button>
              </div>
            </div>
            <span>R$ 9,90</span>
          </div>
          <div>
            <img src={expressoImg} alt={`Imagem café Expresso`} />
            <div>
              <span>Expresso Tradicional</span>
              <div>
                <div>
                  <Minus weight="bold" size={14} />
                  1
                  <Plus weight="bold" size={14} />
                </div>
                <button>
                  <Trash size={16} />
                  Remover
                </button>
              </div>
            </div>
            <span>R$ 9,90</span>
          </div>
          <div>
            <p>
              <span>Total de Itens</span>
              <span>R$ 29,70</span>
            </p>
            <p>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </p>
            <span>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </span>
          </div>
          <button>Confirmar Pedido</button>
        </Card>
      </CheckoutColumn>
    </CheckoutContainer>
  );
}
