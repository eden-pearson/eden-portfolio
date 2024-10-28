import db from '../connection'

export async function addMessage(messageObject) {
  return await db('messages').insert(messageObject)
}
