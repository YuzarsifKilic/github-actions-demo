export const environment = {
  production: false,
  apiUrl: process.env['NG_APP_API_URL'] || 'http://localhost:3000' // Bu URL default bir değer olur, build edilince değiştirilecek
};
