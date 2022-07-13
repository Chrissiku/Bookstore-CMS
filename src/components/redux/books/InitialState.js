/* eslint-disable quotes */
import { v4 as bookId } from "uuid";

const initialState = [
  {
    id: bookId(),
    title: "The Hunger Games",
    type: "Economy",
  },
  {
    id: bookId(),
    title: "The art of always being right",
    type: "Fiction",
  },
];

export default initialState;
