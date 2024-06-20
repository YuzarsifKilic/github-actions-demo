export const environment = {
  production: true,
  apiUrl: process.env['API_URL'] || 'http://localhost:3000' // Bu URL default bir değer olur, build edilince değiştirilecek
};
