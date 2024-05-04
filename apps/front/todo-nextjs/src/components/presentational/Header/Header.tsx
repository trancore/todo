import styled from 'styled-components';

import Icon from '~/components/container/Icon/Icon';

type Props = {
  isSignin: boolean;
  hasPlusIcon: boolean;
  onClickMenuIcon: () => void;
  onClickPlusIcon: () => void;
  onClickUserIcon: () => void;
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
  onClickUserIcon,
}: Props) {
  return (
    <StyledHeader>
      {isSignin ? (
        <>
          <Icon
            presentational={{ name: 'Menu', size: 64 }}
            clickIcon={onClickMenuIcon}
          />
          <Icon
            presentational={{ name: 'UserCircle', size: 64 }}
            clickIcon={onClickUserIcon}
          />
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
