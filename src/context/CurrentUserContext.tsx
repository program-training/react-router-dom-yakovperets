import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

import User from "../interface/userInterface";

const init: User = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

type ContextValue = {
  card: User;
  setCardDetails: Dispatch<SetStateAction<User>>;
};

const CurrentUserContext = createContext<ContextValue | undefined>(undefined);

const { Provider } = CurrentUserContext;

type CurrentUserDetailsProviderProps = {
  children: ReactNode;
};

export const CurrentUserDetailsProvider: FC<
  CurrentUserDetailsProviderProps
> = ({ children }) => {
  const [card, setCardDetails] = useState<User>(init);

  return <Provider value={{ card, setCardDetails }}>{children}</Provider>;
};

export const useCurrentUserDetails = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error(
      "useCurrentUserDetails must be used within a CurrentUserDetailsProvider"
    );
  }
  return context;
};
