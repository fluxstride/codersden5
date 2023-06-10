import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs} from 'fs'
 
export async function GET() {
  let data = await fs.readFile(path.join(__dirname, "data.json"))
  console.log(data)
 
  return NextResponse.json({message: "Hello world"})
}