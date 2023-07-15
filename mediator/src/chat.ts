import { Component } from "./pattern/component";
import { type ChatEvent } from "./pattern/types";

export class Chat extends Component<ChatEvent>{
  constructor(
    private id: string
  ) {
    super()
  }

  getIdentification(): string {
    return this.id
  }

  sendMessage(message: ChatEvent): void {
    this.mediator?.notify(
      this,
      {
        from: message.from,
        to: message.to,
        payload: message.payload
      }
    )
  }

  showMessage(payload: object): void {
    console.log(`> ${this.getIdentification()}: `, payload)
  }
}
