import { Book } from "../models/book.model";
import { Categories } from "../models/categoriess.enum";
import { Collection } from "../models/collection.model";
import { Register } from "../models/register.model";

export const mockedUser: Register = {
  email: "teste@teste.com",
  password: "testing1",
  firstName: "first name",
  lastName: "last name",
};

export const mockedCollection: Collection = {
  id: 7,
  title: "title",
  description: "description",
  userId: 21,
};

export const mockedCollection1: Collection = {
  id: 1,
  title: "title 1",
  description: "description 1",
  userId: 21,
};

export const mockedBook: Book = {
  title: "title",
  authors: ["author"],
  publishedYear: 2024,
  description: "description",
  edition: "edition",
  isbn: "isbn",
  pageCount: 190,
  categories: [Categories.ArtesEFotografia],
  read: "reading",
  collection: mockedCollection,
};
