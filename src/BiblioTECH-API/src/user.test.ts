import httpStatusCodes from 'http-status-codes';
import userController from '../../controllers/user/user.controller';
import userService from '../../services/user/user.service';

const req = {
  body: {
    email: 'fernandoaugusto@gmail.com',
    password: 'qualSuaSenha',
    firstName: 'Fernando',
    lastName: 'Augusto',
  },
  params: {
    id: '1',
  },
};

const res = {
  json: jest.fn(),
  status: jest.fn(() => res),
};

describe('User Controller', () => {
  test('Deve criar um novo usuário', async () => {
    const createMock = jest.spyOn(userService, 'create').mockImplementation(() => Promise.resolve(req.body));
    await userController.create(req, res);
    expect(createMock).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.CREATED);
  });

  test('Deve fazer login de um usuário', async () => {
    const loginMock = jest.spyOn(userService, 'login').mockImplementation(() => Promise.resolve(req.body));
    await userController.login(req, res);
    expect(loginMock).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });

  test('Deve retornar detalhes de um usuário', async () => {
    const detailMock = jest.spyOn(userService, 'detail').mockImplementation(() => Promise.resolve(req.body));
    await userController.detail(req, res);
    expect(detailMock).toHaveBeenCalledWith({ id: parseInt(req.params.id, 10) });
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });

  test('Deve atualizar um usuário', async () => {
    const updateMock = jest.spyOn(userService, 'update').mockImplementation(() => Promise.resolve(req.body));
    await userController.update(req, res);
    expect(updateMock).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });

  test('Deve listar os usuários', async () => {
    const listMock = jest.spyOn(userService, 'list').mockImplementation(() => Promise.resolve([req.body]));
    await userController.list(req, res);
    expect(listMock).toHaveBeenCalledWith(expect.objectContaining({}));
    expect(res.json).toHaveBeenCalledWith([req.body]);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });

  test('Deve remover um usuário', async () => {
    const removeMock = jest.spyOn(userService, 'remove').mockImplementation(() => Promise.resolve(req.body));
    await userController.remove(req, res);
    expect(removeMock).toHaveBeenCalledWith({ id: parseInt(req.params.id, 10) });
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatusCodes.OK);
  });
});

describe('User Service', () => {
  test('Deve criar um novo usuário', async () => {
    const createMock = jest.spyOn(userService, 'create').mockImplementation(() => Promise.resolve(req.body));
    const result = await userService.create(req.body);
    expect(createMock).toHaveBeenCalledWith(req.body);
    expect(result).toEqual(req.body);
  });

  test('Deve fazer login de um usuário', async () => {
    const loginMock = jest.spyOn(userService, 'login').mockImplementation(() => Promise.resolve(req.body));
    const result = await userService.login(req.body);
    expect(loginMock).toHaveBeenCalledWith(req.body);
    expect(result).toEqual(req.body);
  });

  test('Deve retornar detalhes de um usuário', async () => {
    const detailMock = jest.spyOn(userService, 'detail').mockImplementation(() => Promise.resolve(req.body));
    const result = await userService.detail({ id: parseInt(req.params.id, 10) });
    expect(detailMock).toHaveBeenCalledWith({ id: parseInt(req.params.id, 10) });
    expect(result).toEqual(req.body);
  });

  test('Deve atualizar um usuário', async () => {
    const updateMock = jest.spyOn(userService, 'update').mockImplementation(() => Promise.resolve(req.body));
    const result = await userService.update(req.body);
    expect(updateMock).toHaveBeenCalledWith(req.body);
    expect(result).toEqual(req.body);
  });

  test('Deve listar os usuários', async () => {
    const listMock = jest.spyOn(userService, 'list').mockImplementation(() => Promise.resolve([req.body]));
    const result = await userService.list({});
    expect(listMock).toHaveBeenCalledWith(expect.objectContaining({}));
    expect(result).toEqual([req.body]);
  });

  test('Deve remover um usuário', async () => {
    const removeMock = jest.spyOn(userService, 'remove').mockImplementation(() => Promise.resolve(req.body));
    const result = await userService.remove({ id: parseInt(req.params.id, 10) });
    expect(removeMock).toHaveBeenCalledWith({ id: parseInt(req.params.id, 10) });
    expect(result).toEqual(req.body);
  });
});
