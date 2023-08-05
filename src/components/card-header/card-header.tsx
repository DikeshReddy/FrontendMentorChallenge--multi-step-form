export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: string;
};

export const CardHeader = ({
  title,
  children,
  ...props
}: CardHeaderProps): JSX.Element => {
  return (
    <div className="card-header flex flex-col items-start" {...props}>
      <h1 className="card-header__title text-blue-100 text-[clamp(2rem,100%,2.5rem)] font-extrabold">
        {title}
      </h1>
      <p className="card-header__content text-base text-gray-100 ">
        {children}
      </p>
    </div>
  );
};
