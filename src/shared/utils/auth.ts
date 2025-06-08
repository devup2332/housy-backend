import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import environments from '../config/environments';

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => await bcrypt.compare(password, hashedPassword);

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const generateToken = (userId: string) => {
  return jwt.sign(
    {
      userId,
    },
    environments.JWT_SECRET,
    {
      expiresIn: '1d',
    },
  );
};
