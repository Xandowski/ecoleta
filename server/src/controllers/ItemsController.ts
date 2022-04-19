import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class ItemsController {
  async index(request: Request, response: Response) {
  
    const items = await prismaClient.item.findMany()

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      }
    })

    return response.json(serializedItems)
  }
}