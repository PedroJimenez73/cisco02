import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo21',
  templateUrl: './diapo21.component.html',
  styleUrls: ['./diapo21.component.scss']
})
export class Diapo21Component implements OnInit {

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
