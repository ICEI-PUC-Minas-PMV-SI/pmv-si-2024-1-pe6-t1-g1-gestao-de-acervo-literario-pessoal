import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { initFlowbite } from "flowbite";
import { Book } from "src/app/models/book.model";
import { Categories } from "src/app/models/categoriess.enum";
import { Collection } from "src/app/models/collection.model";
import { Status } from "src/app/models/status.enum";
import { BibliotechService } from "src/app/service/bibliotech.service";

@Component({
  selector: "app-book-edition",
  templateUrl: "./book-edition.component.html",
  styleUrls: ["./book-edition.component.css"],
})
export class BookEditionComponent implements OnInit {
  categories = Object.values(Categories);
  status = Object.values(Status);
  isEdit = false;
  optParam!: string;
  bookItem!: Book;
  bookForm!: FormGroup;
  collectionsOptions: Collection[] = [];
  selectedCategories: string[] = [];

  constructor(
    private service: BibliotechService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    initFlowbite();

    this.collectionsOptions = this.service.collectionList;

    this.initializeForm();

    this.route.params.subscribe((params) => {
      this.optParam = params["opt"];
    });

    this.isEdit = this.optParam === "edit";
    this.bookItem = this.service.bookItem;

    this.isEdit ? this.setForm() : null;
  }

  initializeForm() {
    this.bookForm = this.fb.group({
      title: ["", [Validators.required]],
      authors: ["", [Validators.required]],
      publishedYear: ["", [Validators.required]],
      description: ["", [Validators.required]],
      edition: ["", [Validators.required]],
      isbn: ["", [Validators.required]],
      pageCount: ["", [Validators.required]],
      categories: [[], [Validators.required]],
      read: ["", [Validators.required]],
      collection: ["", [Validators.required]],
    });
  }

  setForm() {
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
    const authors = this.bookItem.authors.join(", ");
    this.selectedCategories = this.bookItem.categories;

    this.bookForm = this.fb.group({
      title: [this.bookItem.title, [Validators.required]],
      authors: [authors, [Validators.required]],
      publishedYear: [this.bookItem.publishedYear, [Validators.required]],
      description: [this.bookItem.description, [Validators.required]],
      edition: [this.bookItem.edition, [Validators.required]],
      isbn: [this.bookItem.isbn, [Validators.required]],
      pageCount: [this.bookItem.pageCount, [Validators.required]],
      categories: [this.bookItem.categories, [Validators.required]],
      read: [read, [Validators.required]],
      collection: [this.bookItem.collection, [Validators.required]],
    });
  }

  onSave() {
    let read = "";
    switch (this.bookForm.get("read")?.value) {
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
    this.bookItem = {
      title: this.bookForm.get("title")?.value,
      authors: this.bookForm.get("authors")?.value.split(","),
      publishedYear: this.bookForm.get("publishedYear")?.value,
      description: this.bookForm.get("description")?.value,
      edition: this.bookForm.get("edition")?.value,
      isbn: this.bookForm.get("isbn")?.value,
      pageCount: this.bookForm.get("pageCount")?.value,
      categories: this.selectedCategories,
      read,
      collection: this.bookForm.get("collection")?.value,
    };

    if (this.isEdit) {
      this.service.updateBook(this.bookItem).subscribe();
    } else {
      this.service.saveBook(this.bookItem).subscribe();
    }
    this.router.navigate(["books"]);
  }

  onRemove() {
    this.service.removeBook(this.bookItem.id).subscribe();
    this.router.navigate(["books"]);
  }

  toggleCategorySelection(category: string) {
    if (this.isSelected(category)) {
      this.selectedCategories = this.selectedCategories.filter(
        (cat) => cat !== category
      );
    } else {
      this.selectedCategories.push(category);
    }
  }

  isSelected(category: string): boolean {
    return this.selectedCategories.includes(category);
  }
}
