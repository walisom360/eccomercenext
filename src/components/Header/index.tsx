import { useRef } from "react";
import {
  Container,
  SearchContainer,
  HeaderStyled,
  Items,
  Input,
  Typography,
} from "./styles";

import Image from "next/image";

export function Header() {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref?.current?.focus();
  };

  return (
    <Container>
      <HeaderStyled>
        <Typography>capputeeno</Typography>

        <Items className="div-items" onClick={handleClick}>
          <SearchContainer>
            <Input
              ref={ref}
              type="text"
              placeholder="Procurando por algo específico?"
            />
            <div className="search">
              <Image
                width={40}
                height={40}
                src="/search-loupe.svg"
                alt="search-loupe"
              />
            </div>
          </SearchContainer>

          <Image
            width={40}
            height={40}
            src="/shopping-bag.svg"
            alt="shopping"
          />
        </Items>
      </HeaderStyled>
    </Container>
  );
}
