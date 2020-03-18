import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  preguntasMaster = [
    {
      pic: null,
      question: 'A receiving host computes the checksum on a frame and determines that the frame is damaged. The frame is then discarded. At which OSI layer did this happen?',
      answers: ['session','transport','network','data link','physical'],
      corrects: ['D'],
      feedback: [
        'The Data Link layer provides the physical transmission of the data and handles error notification, network topology, and flow control. The Data Link layer formats the message into pieces, each called a data frame, and adds a customized header containing the hardware destination and source address. Protocols Data Unit (PDU) on Datalink layer is called frame. According to this question the frame is damaged and discarded which will happen at the Data Link layer.'
      ]
    }
  ]

  constructor() { }

  getPreguntas() {
    return this.preguntasMaster;
  }
  
}
