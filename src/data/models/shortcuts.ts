import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faBugSlash } from "@fortawesome/free-solid-svg-icons";
import { faMasksTheater } from "@fortawesome/free-solid-svg-icons";
import { faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import { IShortCuts } from "../../interfaces/interfaces";

export const shortcuts: IShortCuts = [
  {
    id: 1,
    title: "Fix Typos",
    icon: faPenToSquare,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 2,
    title: "Text Summary",
    icon: faBookOpen,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 3,
    title: "Create Note",
    icon: faPenFancy,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 4,
    title: "Fix Code",
    icon: faWrench,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 5,
    title: "JSON to TS",
    icon: faFile,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 6,
    title: "Javascript",
    icon: faCode,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 7,
    title: "Devops",
    icon: faCodeBranch,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 8,
    title: "Database",
    icon: faBoxArchive,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 9,
    title: "Error",
    icon: faBugSlash,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 10,
    title: "Taiwlind",
    icon: faMasksTheater,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
  {
    id: 11,
    title: "Investing",
    icon: faCommentDollar,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  },
];
