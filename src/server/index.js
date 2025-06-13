/* for hashing password creation */

const bcrypt = require('bcrypt');

const plainPassword = 'student123';


const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);
    return hashedPassword;
  } catch (err) {
    console.error('Error hashing password:', err);
  }
};


const comparePasswords = async (plainPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    console.log('Do passwords match?', isMatch);
    return isMatch;
  } catch (err) {
    console.error('Error comparing passwords:', err);
  }
};


(async () => {
  const hashed = await hashPassword(plainPassword);
  await comparePasswords(plainPassword, hashed);            
})();
