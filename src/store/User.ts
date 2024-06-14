import { create } from "zustand";

interface UserProps {
  user: { id: string; name: string };
  setUser: (name: string, id: string) => void;
}

export const useUser = create<UserProps>((set) => ({
  user: { id: "", name: "" },
  setUser: (name, id) => {
    set(() => ({
      user: {
        id,
        name,
      },
    }));
  },
}));
