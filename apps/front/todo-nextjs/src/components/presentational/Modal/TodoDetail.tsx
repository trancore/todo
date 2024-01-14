'use client';

import styled from 'styled-components';
import Button from '~/components/container/Button/Button';
import TodoModal from '~/components/container/Modal/TodoModal';
import { dateFormat } from '~/utiles/date';

type Props = {
  title: string;
  description: string | undefined;
  deadline: Date | undefined;
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

export default function TodoDetail({ title, description, deadline }: Props) {
  const { formatToYYYYMMdd } = dateFormat();

  const formattedDeadline = deadline ? formatToYYYYMMdd(deadline) : '';

  return (
    <TodoModal
      presentational={{
        title: '詳細',
        contents: [
          { h3: 'タイトル', p: title },
          { h3: '説明', p: description || '' },
          { h3: '期限', p: formattedDeadline || '' },
        ],
      }}
    >
      <>
        <StyledButtonBox>
          <Button presentational={{ text: '完了' }} />
          <StyledSecondButtonBox>
            <Button presentational={{ text: '編集', width: 10000 }} />
            <Button presentational={{ text: '削除', width: 10000 }} />
          </StyledSecondButtonBox>
        </StyledButtonBox>
      </>
    </TodoModal>
  );
}
