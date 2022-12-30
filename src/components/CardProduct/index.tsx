import { Container } from "./styles";

import Image from "next/image";

interface Product {
  image_url: string;
}

interface ProductProps {
  product: Product;
}

export function CardProduct({ product }: ProductProps) {
  return (
    <Container>
      <Image width={100} height={256} src={product.image_url} alt={""} />

      <div className="content-product">
        <div className="border">
          <h2 className="name">Camiseta DREAMER</h2>
        </div>

        <h3 className="price">R$ 55,00</h3>
      </div>
    </Container>
  );
}
