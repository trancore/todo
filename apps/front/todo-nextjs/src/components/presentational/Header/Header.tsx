import Link from 'next/link';

import styled from 'styled-components';

import Icon from '~/components/container/Icon/Icon';

import { PAGE_PATH } from '~/constants';

type Props = {
  isSignin: boolean;
  hasPlusIcon: boolean;
  onClickMenuIcon: () => void;
  onClickPlusIcon: () => void;
};

const StyledHeader = styled.header`
  padding: 18px 21px;
  background-color: #8f8f8f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeadingOne = styled.h1`
  margin: auto;
`;

export default function Header({
  isSignin,
  hasPlusIcon,
  onClickMenuIcon,
  onClickPlusIcon,
}: Props) {
  return (
    <StyledHeader>
      {isSignin ? (
        <>
          <Icon
            presentational={{ name: 'Menu', size: 64 }}
            clickIcon={onClickMenuIcon}
          />
          <Link href={PAGE_PATH.TOP}>
            <Icon
              presentational={{
                name: 'UserCircle',
                size: 64,
                color: '#000000',
              }}
            />
          </Link>
          {hasPlusIcon ? (
            <Icon
              presentational={{ name: 'Plus', size: 64 }}
              clickIcon={onClickPlusIcon}
            />
          ) : (
            <Icon presentational={{ name: 'None', size: 64 }} />
          )}
        </>
      ) : (
        <StyledHeadingOne>todo</StyledHeadingOne>
      )}
    </StyledHeader>
  );
}
