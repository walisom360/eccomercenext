import { gql, useQuery } from "@apollo/client";
import { CardProduct } from "../components/CardProduct";
import { Header } from "../components/Header";

import { Container, Wrapper, GridList } from "../styles/pages/home";

interface Product {
  image_url: string;
}

interface ProductData {
  allProducts: Product[];
}

const GET_PRODUCTS = gql`
  query {
    allProducts(page: 1, perPage: 10) {
      id
      name
      description
      image_url
      price_in_cents
      sales
      created_at
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery<ProductData>(GET_PRODUCTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Container>
      <Header />

      <Wrapper>
        <GridList>
          {data?.allProducts?.map((product, index) => (
            <CardProduct product={product} key={index} />
          ))}
        </GridList>
      </Wrapper>
    </Container>
  );
}
