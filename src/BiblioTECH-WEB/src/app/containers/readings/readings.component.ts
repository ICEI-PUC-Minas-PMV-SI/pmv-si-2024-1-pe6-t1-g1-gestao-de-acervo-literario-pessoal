import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { initFlowbite } from "flowbite";
import { Book } from "src/app/models/book.model";
import { Collection } from "src/app/models/collection.model";
import { Status } from "src/app/models/status.enum";
import { BibliotechService } from "src/app/service/bibliotech.service";

@Component({
  selector: "app-readings",
  templateUrl: "./readings.component.html",
  styleUrls: ["./readings.component.css"],
})
export class ReadingsComponent implements OnInit {
  status = Object.values(Status);
  booksList: Book[] = [];
  booksFiltered: Book[] = [];
  collections!: Collection[];
  readingForm!: FormGroup;
  constructor(private service: BibliotechService, private fb: FormBuilder) {}

  ngOnInit() {
    initFlowbite();

    this.booksList = this.service.bookList;
    this.collections = this.service.collectionList;
    this.booksFiltered = this.booksList.filter(
      (value) => value.read === "read"
    );
    this.initializeForm();

    this.readingForm.get("read")?.valueChanges.subscribe((value) => {
      let read = "";
      switch (value) {
        case Status.Started:
          read = "reading";
          break;
        case Status.NotStarted:
          read = "not_read";
          break;
        case Status.Finished:
          read = "read";
          break;
      }

      this.booksFiltered.filter((value) => value.read === read);
    });
  }

  initializeForm() {
    this.readingForm = this.fb.group({
      read: [Status.Finished, [Validators.required]],
    });
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
