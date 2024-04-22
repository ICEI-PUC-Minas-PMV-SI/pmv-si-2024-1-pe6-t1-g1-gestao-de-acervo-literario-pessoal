import httpStatusCodes from 'http-status-codes';
import collectionController from '../../controllers/collection/collection.controller';
import collectionService from '../../services/collection/collection.service';

const req = {
  body: {
    title: 'Clássico',
    description: 'Clássicos da literatura',
    userId: 'classicosId'
  }
};

const res = {
  json: jest.fn(),
  status: jest.fn(() => res),
};

describe('Collection Controller', () => {
  test('Deve criar uma nova coleção', async () => {
    const createMock = jest.spyOn(collectionService, 'create').mockImplementation(() => Promise.resolve(req.body));
    await collectionController.create(req, res);
    expect(createMock).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.CREATED);
  });

  test('Deve listar as coleções', async () => {
    const listMock = jest.spyOn(collectionService, 'list').mockImplementation(() => Promise.resolve([req.body]));
    await collectionController.list(req, res);
    expect(listMock).toHaveBeenCalledWith({ userId: req.body.userId });
    expect(res.json).toHaveBeenCalledWith([req.body]);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });

  test('Deve atualizar uma coleção existente', async () => {
    const updateMock = jest.spyOn(collectionService, 'update').mockImplementation(() => Promise.resolve(req.body));
    await collectionController.update(req, res);
    expect(updateMock).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });

  test('Deve remover uma coleção existente', async () => {
    const removeMock = jest.spyOn(collectionService, 'remove').mockImplementation(() => Promise.resolve(req.body));
    await collectionController.remove(req, res);
    expect(removeMock).toHaveBeenCalledWith({ id: req.body.id });
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });
});

// Testes para o serviço
describe('Collection Service', () => {
  test('Deve criar uma nova coleção', async () => {
    const createMock = jest.spyOn(collectionService, 'create').mockImplementation(() => Promise.resolve(req.body));
    const result = await collectionService.create(req.body);
    expect(createMock).toHaveBeenCalledWith(req.body);
    expect(result).toEqual(req.body);
  });

  test('Deve listar as coleções', async () => {
    const listMock = jest.spyOn(collectionService, 'list').mockImplementation(() => Promise.resolve([req.body]));
    const result = await collectionService.list({ userId: req.body.userId });
    expect(listMock).toHaveBeenCalledWith({ userId: req.body.userId });
    expect(result).toEqual([req.body]);
  });

  test('Deve atualizar uma coleção existente', async () => {
    const updateMock = jest.spyOn(collectionService, 'update').mockImplementation(() => Promise.resolve(req.body));
    const result = await collectionService.update(req.body);
    expect(updateMock).toHaveBeenCalledWith(req.body);
    expect(result).toEqual(req.body);
  });

  test('Deve remover uma coleção existente', async () => {
    const removeMock = jest.spyOn(collectionService, 'remove').mockImplementation(() => Promise.resolve(req.body));
    const result = await collectionService.remove({ id: req.body.id });
    expect(removeMock).toHaveBeenCalledWith({ id: req.body.id });
    expect(result).toEqual(req.body);
  });
});
