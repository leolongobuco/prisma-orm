import bcrypt from "bcryptjs";

function passwordIsValid(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}

export default passwordIsValid;
