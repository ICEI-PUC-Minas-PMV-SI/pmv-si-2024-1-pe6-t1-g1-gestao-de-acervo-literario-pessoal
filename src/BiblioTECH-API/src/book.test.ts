import httpStatusCodes from 'http-status-codes';
import bookController from '../../controllers/book/book.controller';
import bookService from '../../services/book/book.service';

const req = {
  body: {
    title: 'Grande Sertão Veredas',
    authors: 'Guimarães Rosa',
    publishedYear: 2022,
    description: 'Descrição grande sertão veredas',
    edition: 1,
    isbn: '978-3-16-148410-0',
    pageCount: 300,
    categories: ['Category 1', 'Category 2'],
    read: false,
    collection: 'Sample Collection'
  }
};

const res = {
  json: jest.fn(),
  status: jest.fn(() => res),
};

describe('Book Controller', () => {
  test('Deve criar um novo livro', async () => {
    const createMock = jest.spyOn(bookService, 'create').mockImplementation(() => Promise.resolve(req.body));
    await bookController.create(req, res);
    expect(createMock).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.CREATED);
  });

  test('Deve listar os livros', async () => {
    const listMock = jest.spyOn(bookService, 'list').mockImplementation(() => Promise.resolve([req.body]));
    await bookController.list(req, res);
    expect(listMock).toHaveBeenCalledWith({ userId: req.body.userId });
    expect(res.json).toHaveBeenCalledWith([req.body]);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });

  test('Deve atualizar um livro existente', async () => {
    const updateMock = jest.spyOn(bookService, 'update').mockImplementation(() => Promise.resolve(req.body));
    await bookController.update(req, res);
    expect(updateMock).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });

  test('Deve remover um livro existente', async () => {
    const removeMock = jest.spyOn(bookService, 'remove').mockImplementation(() => Promise.resolve(req.body));
    await bookController.remove(req, res);
    expect(removeMock).toHaveBeenCalledWith({ id: req.body.id });
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });
});

describe('Book Service', () => {
  test('Deve criar um novo livro', async () => {
    const createMock = jest.spyOn(bookService, 'create').mockImplementation(() => Promise.resolve(req.body));
    const result = await bookService.create(req.body);
    expect(createMock).toHaveBeenCalledWith(req.body);
    expect(result).toEqual(req.body);
  });

  test('Deve listar os livros', async () => {
    const listMock = jest.spyOn(bookService, 'list').mockImplementation(() => Promise.resolve([req.body]));
    const result = await bookService.list({ userId: req.body.userId });
    expect(listMock).toHaveBeenCalledWith({ userId: req.body.userId });
    expect(result).toEqual([req.body]);
  });

  test('Deve atualizar um livro existente', async () => {
    const updateMock = jest.spyOn(bookService, 'update').mockImplementation(() => Promise.resolve(req.body));
    const result = await bookService.update(req.body);
    expect(updateMock).toHaveBeenCalledWith(req.body);
    expect(result).toEqual(req.body);
  });

  test('Deve remover um livro existente', async () => {
    const removeMock = jest.spyOn(bookService, 'remove').mockImplementation(() => Promise.resolve(req.body));
    const result = await bookService.remove({ id: req.body.id });
    expect(removeMock).toHaveBeenCalledWith({ id: req.body.id });
    expect(result).toEqual(req.body);
  });
});
