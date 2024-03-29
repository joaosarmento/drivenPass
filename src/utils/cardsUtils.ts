import * as cardsRepository from "../repositories/cardsRepository.js"

export async function checkTitle(userId: number, title: string) {
  const existingTitles = await cardsRepository.findTitlesById(userId);
  if (existingTitles.find(existingTitle => existingTitle.title === title)) {
    throw {
      type: "Invalid requisition",
      message: "Title already in use by this user"
    }
  }
}

export async function checkCard(userId: number, id : number) {
  let credential = await cardsRepository.findById(id);
  if (!credential) {
    throw {
      type: "Invalid requisition",
      message: "Card non-existing"
    }
  }
  if (credential.userId!==userId) {
    throw {
      type: "Invalid requisition",
      message: "Not the card owner"
    }
  }
  return credential;
}