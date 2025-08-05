import { IconType } from "react-icons";

import {
  HiOutlineEnvelope,
} from "react-icons/hi2";

import { FaDiscord, FaGithub, FaGoogle, FaLinkedin, FaX, FaYoutube, FaInstagram, FaThreads, FaKickstarter, FaTiktok  } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  discord: FaDiscord,
  google: FaGoogle,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  x: FaX,
  email: HiOutlineEnvelope,
  threads: FaThreads,
  kick: FaKickstarter,
  tiktok: FaTiktok,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;