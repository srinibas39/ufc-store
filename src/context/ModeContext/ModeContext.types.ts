export type ModeProviderProps = {
  children: React.ReactNode;
};

export type ModeProviderValueProps = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};
