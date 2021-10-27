import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class TokenSerivce {
  async passwordIsValid(password: string, passwordHash: string) {
    return bcrypt.compare(password, passwordHash);
  }

  async getToken(id: number, email: string) {
    const token = jwt.sign({ id, email }, process.env.SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return token;
  }
}

export default new TokenSerivce();
