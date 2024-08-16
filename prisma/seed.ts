import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '3d20c2da-ce73-421f-aaf1-e209bacf6800',
      title: 'UNite Summit',
      slug: 'unite-summit',
      details: 'Um Evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})