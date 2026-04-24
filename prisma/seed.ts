import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding database...")

  // Create Admin User
  const passwordHash = await bcrypt.hash("admin123", 10)
  const admin = await prisma.user.upsert({
    where: { email: "admin@btpconcept.ci" },
    update: {},
    create: {
      email: "admin@btpconcept.ci",
      name: "Administrateur BTP",
      password: passwordHash,
      role: "SUPER_ADMIN",
    },
  })

  // Create SiteSettings
  const settings = await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      companyName: "BTP CONCEPT",
      tagline: "Bâtissons l'Avenir",
      phone: "+225 00 00 00 00 00",
      email: "contact@btpconcept.ci",
      address: "Cocody, Abidjan, Côte d'Ivoire",
      aboutText: "Expert en construction et rénovation depuis 10 ans.",
      heroTitle: "BÂTISSONS L'AVENIR",
      heroSubtitle: "L'excellence au service de vos plus grands projets en Côte d'Ivoire.",
      metaDescription: "BTP CONCEPT - Votre partenaire construction en Côte d'Ivoire",
    },
  })

  console.log("Seeding finished.")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
