import { nanoid } from 'nanoid'
import { consola } from 'consola'
import { prisma } from './index'

const data = [
  {
    id: nanoid(),
    name: 'Clean the garden premises',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758727500398613/image_28.png',
    points: 5,
  },
  {
    id: nanoid(),
    name: 'Help setup drip irrigation on the terrace',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758727252942919/image_22.png',
    points: 7,
  },

  {
    id: nanoid(),
    name: 'Help out in distributing food to the needy',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758727752077482/image_29.png',
    points: 4,
  },

  {
    id: nanoid(),
    name: 'Gather at least 1kg paper to recycle',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758727995334716/image_30.png',
    points: 5,
  },

  {
    id: nanoid(),
    name: 'Reuse of e-commerce boxes for storage',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758728217624586/image_31.png',
    points: 3,
  },

  {
    id: nanoid(),
    name: 'Collect all the plastic for waste from the campus',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147758728439943199/image_32.png',
    points: 3,
  },
]

const rewardsData = [
  {
    id: nanoid(),
    name: 'Eco Pens',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431620059226/Frame_56.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },

  {
    id: nanoid(),
    name: 'Eco Notebook',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788430936379472/Frame_54.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },

  {
    id: nanoid(),
    name: 'Eco Sticky Notes',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431246770236/Frame_55.png',
    pointsRequired: 10,
    semiDescription: 'Notes made with recycled cardboard and paper',
    description: 'Notes made with recycled paper waste and cardboard.',
  },

  {
    id: nanoid(),
    name: 'Eco Pens',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431620059226/Frame_56.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },

  {
    id: nanoid(),
    name: 'Eco Pens',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431620059226/Frame_56.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },

  {
    id: nanoid(),
    name: 'Eco Pens',
    image: 'https://cdn.discordapp.com/attachments/1147080857492918314/1147788431620059226/Frame_56.png',
    pointsRequired: 10,
    semiDescription: 'Pens made with recycled cardboard and paper',
    description: 'Eco pens made with recycled paper waste and cardboard.',
  },
]

export function seed() {
  return prisma.deedRewards.createMany({
    data: rewardsData,
  })
}

// await seed()
