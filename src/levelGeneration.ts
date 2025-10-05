import { wordlist } from "./wordlist"

export type Transection = {
  sender: number
  reciver: number
  value: string
}

const flr = Math.floor
function shuffle<T>(array: T[], amount = array.length) {
  const picked: T[] = []
  amount = Math.min(array.length, amount)

  for (let i = 0; i < amount; i++) {
    picked.push(array.splice(flr(Math.random() * array.length), 1)[0]!)
  }
  return picked
}

export function generateLevel(difficulty: number){
  const isLegit = Math.random() < 0.5
  const auditCount = flr(difficulty/3) + 5
  const fakesCount = difficulty + 3

  const missingCount = isLegit? 0: difficulty > 10? 1: 2
  const wordCount = auditCount + fakesCount + missingCount

  const colors = shuffle([0,1,2,3,4,5])
  const words = shuffle(wordlist.slice(0, 200 + difficulty * 100), wordCount)
  console.log(wordCount)

  const sender = colors.shift()!
  const reciverCount = Math.min(flr(difficulty/3), 4) + 1
  const recivers = colors.splice(0, reciverCount)
  const mainReciver = recivers[0]!

  const audits: Transection[] = []
  for (let i = 0; i < auditCount; i++) {
    audits.push({
      sender,
      reciver: mainReciver,
      value: words.shift() ?? "word list havent loaded lmao"
    })
  }

  const allEntries = audits.slice(missingCount)
  for (let i = 0; i < missingCount + fakesCount; i++) {
    allEntries.push({
      sender,
      reciver: Math.random() < 0.6? recivers[ flr(Math.random()* reciverCount)]!: mainReciver,
      value: words.shift() ?? "word list is missing"
    })
  }

  const pageCount = Math.min(flr(difficulty / 3) + 2, 5)
  const entryPerPage = flr((auditCount + fakesCount) / pageCount)
  const pages: Transection[][] = [shuffle(allEntries)]
  for (let i = 0; i < pageCount -1; i ++) {
    pages.push(pages[0]!.splice(0, entryPerPage))
  }

  return {
    isLegit,
    pages,
    audits,
  }
}
