import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { initFlowbite } from "flowbite";
import { Book } from "src/app/models/book.model";
import { Status } from "src/app/models/status.enum";
import { BibliotechService } from "src/app/service/bibliotech.service";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"],
})
export class BookDetailsComponent implements OnInit {
  bookItem!: Book;

  constructor(private service: BibliotechService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUser();
    initFlowbite();
    this.bookItem = this.service.bookItem;
  }

  goToEdit() {
    this.service.bookItem = this.bookItem;
    this.router.navigate(["/book-edition", "edit"]);
  }

  getRead(): string {
    let read = "";
    switch (this.bookItem.read) {
      case "reading":
        read = Status.Started;
        break;
      case "not_read":
        read = Status.NotStarted;
        break;
      case "read":
        read = Status.Finished;
        break;
    }
    return read;
  }
}
