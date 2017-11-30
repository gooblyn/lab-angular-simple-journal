import { Component, OnInit } from '@angular/core';
import { JournalService } from './../../services/journal.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  journal: any;
  constructor(
    public journalService: JournalService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.journalService.getJournalbyId(params['id'])
        .subscribe(journal => this.journal = journal);
    });
  }

  ngOnInit() {
  }

}
