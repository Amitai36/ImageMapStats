import { create } from "zustand";

interface UserProps {
  user: { id: string; name: string };
  setUser: (name: string, id: string) => void;
}

export const useUser = create<UserProps>((set) => ({
  user: {
    id: (window.localStorage.getItem("id") as string) ?? "",
    name: (window.localStorage.getItem("name") as string) ?? "",
  },
  setUser: (name, id) => {
    window.localStorage.setItem("id", id);
    window.localStorage.setItem("name", name);
    set(() => ({
      user: {
        id,
        name,
      },
    }));
  },
}));
