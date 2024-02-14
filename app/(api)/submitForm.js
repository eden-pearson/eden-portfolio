// // pages/api/submitForm.js
// import sqlite3 from 'sqlite3'
// import { open } from 'sqlite'

// async function openDb() {
//   return open({
//     filename: './mydb.sqlite',
//     driver: sqlite3.Database,
//   })
// }

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const db = await openDb()
//     const { name, email, message } = req.body

//     try {
//       const statement = await db.prepare(
//         'INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)'
//       )
//       await statement.run(name, email, message)
//       await statement.finalize()
//       res
//         .status(200)
//         .json({ success: true, message: 'Form submitted successfully' })
//     } catch (error) {
//       console.error(error)
//       res.status(500).json({ success: false, message: 'Failed to submit form' })
//     }
//   } else {
//     // Handle any requests that aren't POST
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }
