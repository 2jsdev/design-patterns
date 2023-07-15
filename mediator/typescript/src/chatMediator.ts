import { Chat } from "./chat";
import { Component } from "./pattern/component";
import { Mediator } from "./pattern/mediator";
import { ChatEvent } from "./pattern/types";

export class ChatMediator implements Mediator<ChatEvent>{
  private room: Chat[] = []

  addToRoom(chat: Chat): void {
    this.room.push(chat)
  }

  getChatById(id: string): Chat | undefined {
    return this.room.find(c => c.getIdentification() === id)
  }

  notify(sender: Component<ChatEvent>, event: ChatEvent): void {
    console.log(
      'from', event.from.getIdentification(), 
      'to', event.to?.getIdentification()
    )
    if(event.to) {
      const chat = this.room.find(c => c.getIdentification() === event.to?.getIdentification())
      chat?.showMessage(event.payload)
    } else {
      this.room
        .filter(c => c.getIdentification() !== event.from.getIdentification())
        .forEach(c => {
          event.to = c
          c.showMessage(event.payload)
        })
    }
  }
}
