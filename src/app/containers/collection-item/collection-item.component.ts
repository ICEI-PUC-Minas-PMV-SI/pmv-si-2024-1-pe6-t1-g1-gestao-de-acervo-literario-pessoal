import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { initFlowbite } from "flowbite";
import { Book } from "src/app/models/book.model";
import { Collection } from "src/app/models/collection.model";
import { Status } from "src/app/models/status.enum";
import { BibliotechService } from "src/app/service/bibliotech.service";

@Component({
  selector: "app-collection-item",
  templateUrl: "./collection-item.component.html",
  styleUrls: ["./collection-item.component.css"],
})
export class CollectionItemComponent implements OnInit {
  constructor(private service: BibliotechService, private router: Router) {}

  collectionItem!: Collection;
  books: Book[] = [];

  ngOnInit() {
    this.service.getUser();
    initFlowbite();
    this.collectionItem = this.service.collectionItem;

    this.service
      .getBooksByCollection(this.collectionItem.id || 0)
      .subscribe((value) => (this.books = value.data));
  }

  goToDetails(value: Book) {
    this.service.bookItem = {...value, collection: this.collectionItem};
    this.router.navigate(["book-details"]);
  }

  onEdit() {
    this.service.collectionItem = this.collectionItem;
    this.router.navigate(["new-collection", "edit"]);
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
