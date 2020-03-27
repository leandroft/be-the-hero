const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { id } = request.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) { // "!" significa que não encontrou
        return response.status(400).json({ error: 'No ONG found with this ID' }); //HTTP 400: Bad Request (Algo deu errado)
    }

    return response.json(ong);
  }
}