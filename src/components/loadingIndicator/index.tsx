import { Wrapper } from './style';

const LoadingIndicator = (props: any) => {
  return (
    <Wrapper {...props}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
};
export { LoadingIndicator };
