export type NameResponse = {
   content: NameData[],
   totalPages: number
}

export type NameData = {
   id: number,
   name: string,
   meaning: string,
   gender: string,
   origin: Origin
}

export type Origin = {
   id: number,
   name: string
}