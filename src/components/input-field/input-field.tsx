import {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {twMerge as tm} from "tailwind-merge";
import {userAppSelector} from "../../store/hooks";

export type InputFieldProps = React.HTMLAttributes<HTMLInputElement> & {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  isEmpty?: boolean;
};

export type InputStateHandle = {
  setIsEmpty: (value: boolean) => void;
  value: string;
};

export const InputField = forwardRef<InputStateHandle, InputFieldProps>(
  ({id, type, label, placeholder, ...props}, ref) => {
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const state = userAppSelector((state) => state.user);

    const user: Record<string, string> = {
      name: state.name,
      email: state.email,
      number: state.number,
    };

    useEffect(() => {
      setValue(user[id]);
    }, []);

    const valueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    };

    useImperativeHandle(
      ref,
      (): InputStateHandle => ({
        setIsEmpty: (value: boolean) => setIsEmpty(value),
        value: value,
      })
    );

    return (
      <div className="input-field gap-[10px]  flex flex-col relative ">
        <label className="font-bold text-blue-100" htmlFor={id}>
          {label}
        </label>
        <input
          className={tm(
            "input border-[2px] rounded-[5px] p-[14px] border-gray-100 font-bold text-blue-100",
            isEmpty && `border-red-100 `
          )}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          {...props}
          onChange={valueHandler}
          defaultValue={user[id]}
        />
        <p
          className={tm(
            "missing-field-error text-red-100 font-bold absolute right-0 hidden",
            isEmpty && "block"
          )}
        >
          This field is required
        </p>
      </div>
    );
  }
);
