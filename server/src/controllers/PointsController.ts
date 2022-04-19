import { PointItem } from '@prisma/client'
import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class PointsController {
  async create( request: Request, response: Response) {
    const  {
        image,
        name, 
        email, 
        whatsapp, 
        latitude, 
        longitude, 
        city, 
        uf,
        items
    } = request.body
    
    const pointItems: PointItem[] = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((itemId: number) => {
        return {
          itemId
        }
    })

    const createPoint = prismaClient.point.create({
      data: {
        image,
        name,
        email, 
        whatsapp, 
        latitude, 
        longitude, 
        city, 
        uf,
        PointItem: {
          createMany: {
            data: [
              ...pointItems
            ]
          }
        }
      }
    })

    return response.json({
      ... await createPoint
    })
  }
}