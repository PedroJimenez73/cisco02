import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo16',
  templateUrl: './diapo16.component.html',
  styleUrls: ['./diapo16.component.scss']
})
export class Diapo16Component implements OnInit {

    showQuestions = false;
    showAnswer = false;

    constructor() { }

    ngOnInit() {
        this.goTop();
    }

    goTop() {
            const scrollToTop = window.setInterval(() => {
                const pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); 
                } else {
                    window.clearInterval(scrollToTop);
                }
            }, 16);
    }

    startEvaluation() {
        this.showQuestions = true;
    }

    seeAnswer() {
        this.showAnswer = true;
    }
}
