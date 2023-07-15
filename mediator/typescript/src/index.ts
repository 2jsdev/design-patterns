import { Chat } from "./chat";
import { ChatMediator } from "./chatMediator";

const chatMediator = new ChatMediator()

const ids = [
  'l12dasd12das',
  '2q3awdasd2ed', 
  'asd2qdaswdas',
  '6fd213sad2df',
  'lpd2plpk24kp',
]

ids.forEach(id => {
  const chat = new Chat(id)
  chat.setMediator(chatMediator)
  chatMediator.addToRoom(chat)
})

const sender = chatMediator.getChatById('asd2qdaswdas')
const receiver = chatMediator.getChatById('lpd2plpk24kp')

sender?.sendMessage({
  from: sender,
  to: receiver,
  payload: {
    message: `Hello! ${receiver?.getIdentification()}`
  }
})

