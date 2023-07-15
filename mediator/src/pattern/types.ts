import { Chat } from "../chat";


export interface ChatEvent {
  from: Chat
  to?: Chat
  payload: object
}
