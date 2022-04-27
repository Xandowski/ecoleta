import { PointItem } from '@prisma/client'
import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export interface TypedRequestBody<T> extends Express.Request {
    body: T
}

export class PointsController {
  async index (request: Request, response: Response) { 
    const { city, uf } = request.body

    const points = await prismaClient.point.findMany({
      where: {
        city: city,
        uf: uf
      }
    })

    if ( !points ) {
      return response.status(400).json({ message: "This city doesn't have any point." })
    }

    const serializedPoints = points.map(point => {
      return {
        ...point,
        image_url: `http://192.168.0.105:3333/uploads/${point.image}`,
      }
    })

   return response.json(serializedPoints)
  }

 

  async create( request: TypedRequestBody<{
    image: string
    name: string
    email: string
    whatsapp: string
    latitude: string
    longitude: string
    city: string
    uf: string
    items: string
  }>, response: Response) {
    if (request.file?.filename) {
      let  {
        name, 
        email, 
        whatsapp, 
        latitude, 
        longitude, 
        city, 
        uf,
        items
      } = request.body
      
      const pointItems: Omit<PointItem, 'pointId'|'id'>[] = items
        .split(',')
        .map((item: string) => Number(item.trim()))
        .map((itemId: number) => {
          return {
            itemId
          }
      })

      const createPoint = prismaClient.point.create({
        data: {
          image: request.file?.filename,
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
}