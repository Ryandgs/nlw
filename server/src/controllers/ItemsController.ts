import knex from '../database/connection';
import { Request, Response} from 'express';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://172.17.1.135:3333/uploads/${item.image}`,
            }
        })
        return response.json(serializedItems);


    } 
}

export default ItemsController;