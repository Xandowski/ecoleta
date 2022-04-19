import { prismaClient } from '../prismaClient'

export async function seed() {
  await prismaClient.item.createMany({
    data:[ 
      {
        title: 'Lâmpadas',
        image: 'lampadas.svg',
      },
      {
        title: 'Pilhas e baterias',
        image: 'baterias.svg',
      },
      {
        title: 'Papéis e Papelão',
        image: 'papeis-papelao.svg',
      },
      {
        title: 'Resíduos Eletrônicos',
        image: 'eletronicos.svg',
      },
      {
        title: 'Resíduos Orgânicos',
        image: 'organicos.svg',
      },
      {
        title: 'Óleo de cozinha',
        image: 'oleo.svg',
      },
  ]
  })
}

seed()