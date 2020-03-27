const connection = require('../database/connection');

module.exports = {
    /** Método para listagem */
  async index(request, response) {
    /** Paginação */
    const { page = 1} = request.query;

    /** Quantidade de casos */
    const [count] = await connection('incidents').count();
    
    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
          'incidents.*', 
          'ongs.name', 
          'ongs.email', 
          'ongs.whatsapp', 
          'ongs.city', 
          'ongs.uf'
        ]);
    
    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  },

  /** Método para criação */
  async create(request, response){
     const { title, description, value } = request.body;
     const ong_id  = request.headers.authorization;

     /** Armazenar o resultado do insert dentro da constante "result" */
     const [id] = await connection('incidents').insert({
         title,
         description,
         value,
         ong_id,
     });

     return response.json({ id });
     
  },

  /** Método de delete */
  async delete(request, response){
    const { id } = request.params;
    const ong_id = request.headers.authorization; //Essa variável será importante para validar se o pedido de delete foi feito pelo ONG ao qual pertence o caso

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id){
        return response.status(401).json({ error: 'Operation not permitted.'}) //HTTP 401: não autorizado
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send(); // HTTP 204: Sem conteúdo
  }
};