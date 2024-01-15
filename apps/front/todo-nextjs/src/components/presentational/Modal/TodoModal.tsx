'use client';

import styled from 'styled-components';
import Icon from '~/components/container/Icon/Icon';
import Modal from '~/components/presentational/Modal/Modal';

type Props = {
  title: string;
  contents: { h3: string; p: string }[];
  children: JSX.Element;
};

const StyledModalBox = styled.div`
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;
const StyledIcon = styled.div`
  float: right;
  top: 8px;
  position: sticky;
  position: -webkit-sticky;
  margin: 8px 8px 0px 0px;
`;
const StyledContentsBox = styled.div`
  padding: 40px 24px;
`;
const StyledContent = styled.div`
  margin-bottom: 24px;

  > p {
    padding-left: 8px;
  }
`;

export default function TodoModal({ title, contents, children }: Props) {
  return (
    <Modal>
      <StyledModalBox>
        <StyledIcon>
          <Icon presentational={{ name: 'Close', size: 32 }} />
        </StyledIcon>
        <StyledContentsBox>
          <h1>{title}</h1>
          <StyledContent>
            {contents.map((content) => {
              return (
                <>
                  <h3>{content.h3}</h3>
                  <p>{content.p}</p>
                </>
              );
            })}
          </StyledContent>
          {children}
        </StyledContentsBox>
      </StyledModalBox>
    </Modal>
  );
}
