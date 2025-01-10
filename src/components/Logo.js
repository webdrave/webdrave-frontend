import React from "react";

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width="108"
        height="31"
        viewBox="0 0 108 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-[0.65] max-sm:scale-50"
      >
        <path
          d="M101.602 2.27913e-06C103.025 2.27913e-06 104.555 0.114922 105.606 1.07426C105.674 1.13661 105.74 1.20153 105.804 1.26919C106.364 1.81866 106.805 2.51607 107.125 3.36142C107.485 4.20676 107.665 5.13664 107.665 6.15105V23.4594C107.665 24.5584 107.485 25.5305 107.125 26.3759C106.805 27.179 106.364 27.8764 105.804 28.4681C105.244 29.0176 104.584 29.4403 103.823 29.7361C103.103 30.032 102.363 30.1799 101.602 30.1799H49.9961L66.9301 8.7059e-07L101.602 2.27913e-06ZM98.9614 23.4594C99.5616 23.4594 100.082 23.2058 100.522 22.6986C101.002 22.1492 101.242 21.4518 101.242 20.6064V9.00408C101.242 8.15874 101.042 7.48246 100.642 6.97526C100.282 6.42578 99.7417 6.15105 99.0214 6.15105H73.301L63.9723 23.4594H98.9614Z"
          fill="white"
        />
        <path
          d="M58.2047 0H65.8545L48.691 30.1799L38.9933 30.1799L32.5868 16.3631L23.754 30.1799H15.3212L0 0H7.64975L20.7808 23.4866L28.7318 9.1157L23.7323 0H31.3821L44.4529 23.4866L58.2047 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Logo;
