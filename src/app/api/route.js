import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs} from 'fs'
 
export async function GET() {
    let dataDir = path.join(process.cwd(), "json")
    async function readDb() {
        let data = await fs.readFile(dataDir+"/data.json")
        return(JSON.parse(data))
    }
  
  
  console.log(await readDb())

  fs.writeFile(dataDir+"/db.json", JSON.stringify({message: "database"}))


 
  return NextResponse.json({message: "Hello world"})
}