﻿'use client';

import styled from 'styled-components';

import Button from '~/components/container/Button/Button';
import Modal from '~/components/container/Modal/Modal';

import { dateFormat } from '~/utils/date';

type Props = {
  title: string;
  description: string | undefined;
  deadlineAt: string | undefined;
  clickCompletedButton: () => void;
  clickEditButton: () => void;
};

const StyledButtonBox = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;
const StyledSecondButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledContent = styled.div`
  margin-bottom: 24px;

  > p {
    padding-left: 8px;
  }
`;

export default function TodoDetail({
  title,
  description,
  deadlineAt,
  clickCompletedButton,
  clickEditButton,
}: Props) {
  const { formatToYYYYMMdd } = dateFormat();

  const formattedDeadline = deadlineAt
    ? formatToYYYYMMdd(new Date(deadlineAt))
    : '';

  return (
    <Modal>
      <>
        <h1>詳細</h1>
        <StyledContent>
          <h3>タイトル</h3>
          <p>{title}</p>
        </StyledContent>
        <StyledContent>
          <h3>説明</h3>
          <p>{description}</p>
        </StyledContent>
        <StyledContent>
          <h3>期限</h3>
          <p>{formattedDeadline}</p>
        </StyledContent>
        <StyledButtonBox>
          <Button
            presentational={{ text: '完了' }}
            onClick={clickCompletedButton}
          />
          <StyledSecondButtonBox>
            <Button
              presentational={{ text: '編集', width: 10000 }}
              onClick={clickEditButton}
            />
            <Button presentational={{ text: '削除', width: 10000 }} />
          </StyledSecondButtonBox>
        </StyledButtonBox>
      </>
    </Modal>
  );
}
