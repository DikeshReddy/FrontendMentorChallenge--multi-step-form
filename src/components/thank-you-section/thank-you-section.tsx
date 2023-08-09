export const ThankYouSection = (): JSX.Element => {
  return (
    <div className="thank-you-section flex flex-col justify-center items-center gap-[16px]">
      <img className="w-min " src="./images/icon-thank-you.svg" alt="" />
      <h1 className="thank-you  text-blue-100 text-[clamp(2rem,100%,2.5rem)] font-extrabold">
        Thank you!
      </h1>
      <p className="content text-center w-[80%] text-gray-100">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};
