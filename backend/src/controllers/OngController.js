const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index (request, response) {
    const ongs = await connection('ongs').select('*');
      
    return response.json(ongs);
  },
    
  async create (request, response){
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); // Criar um valor string hexadecimal de 4 bites aleatórios

    //** await: espera a função ser executada para prosseguir com o código. Precisa existir o "async" */
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    /**
     * const body = request.body;
     * console.log(body);
    */
    return response.json({ id });
  }
};