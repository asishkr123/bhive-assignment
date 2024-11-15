import { atom } from "jotai";
import { Workspace } from "../types";

// Create atoms that you want to reuse
export const isLoadingAtom = atom<boolean>(false);
export const workspaceAtom = atom<Workspace[]>([]);
