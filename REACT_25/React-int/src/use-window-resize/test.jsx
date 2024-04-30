import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();// calls the hook to get the current window size. windowSize object returned by the hook contains 'width' and 'height'
  const { width, height } = windowSize;

  return (
    <div>
      <h1>use window resize hook</h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
}
