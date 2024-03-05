import { useState, useEffect } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date(), 1000);
    });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meredium = hours > 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(
      seconds
    )} ${meredium}`;
  }
  function addZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  function changePicture() {
    document.getElementById("rt").style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg')";
  }
  function changePicture1() {
    document.getElementById("rt").style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg')";
  }
  return (
    <>
      <button
        onClick={() => {
          changePicture();
        }}
        onDoubleClick={() => {
          changePicture1();
        }}
      >
        <img
          className="img"
          src="https://cdn-icons-png.flaticon.com/128/7036/7036516.png"
        />
      </button>
      <h1>Digital Clock</h1>
      <div className="container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}
export default DigitalClock;
