import ButtonContainer from '~/components/Button/ButtonContainer';

export default function Home() {
  return (
    <main>
      <div>
        <p>Hello, Next.js</p>
        <ButtonContainer
          test="test"
          presentational={{ text: 'text' }}
        ></ButtonContainer>
      </div>
    </main>
  );
}
