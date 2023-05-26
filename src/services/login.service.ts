import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import jwtUtil from '../utils/jwtUtil';

type LoginServiceResponse = ServiceResponse<{ token: string }>;

const loginService = async (username: string, password: string): Promise<LoginServiceResponse> => {
  const user = await UserModel.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' },
    };
  }

  const token: string = jwtUtil.sign({
    id: user.dataValues.id,
    level: user.dataValues.level,
    username: user.dataValues.username,
    vocation: user.dataValues.vocation,
  });

  return { status: 'SUCCESSFUL', data: { token },
  };
};

export default {
  loginService,
};