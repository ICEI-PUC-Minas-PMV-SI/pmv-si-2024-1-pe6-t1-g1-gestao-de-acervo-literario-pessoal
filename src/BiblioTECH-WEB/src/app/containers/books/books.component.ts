import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { initFlowbite } from "flowbite";
import { Book } from "src/app/models/book.model";
import { Collection } from "src/app/models/collection.model";
import { Status } from "src/app/models/status.enum";
import { BibliotechService } from "src/app/service/bibliotech.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  constructor(private service: BibliotechService, private router: Router) {}

  books: Book[] = [];
  collections: Collection[] = [];

  ngOnInit(): void {
    this.service.getUser();
    initFlowbite();
    this.service.getCollections().subscribe((value) => {
      this.collections = value.data;
    });
    this.service.getBooks().subscribe((value) => (this.books = value.data));
  }

  goToDetails(value: Book) {
    this.service.bookItem = value;
    this.router.navigate(["book-details"]);
  }

  getRead(bookRead: string): string {
    let read = "";
    switch (bookRead) {
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
