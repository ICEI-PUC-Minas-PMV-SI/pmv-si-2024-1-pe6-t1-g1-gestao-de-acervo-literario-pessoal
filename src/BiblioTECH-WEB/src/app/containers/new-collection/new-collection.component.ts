import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { initFlowbite } from "flowbite";
import { ToastrService } from "ngx-toastr";
import { Collection } from "src/app/models/collection.model";
import { BibliotechService } from "src/app/service/bibliotech.service";

@Component({
  selector: "app-new-collection",
  templateUrl: "./new-collection.component.html",
  styleUrls: ["./new-collection.component.css"],
})
export class NewCollectionComponent implements OnInit {
  collectionForm!: FormGroup;

  isEdit = false;
  collectionItem!: Collection;
  optParam!: string;

  constructor(
    private service: BibliotechService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    this.service.getUser();
    initFlowbite();

    this.initializeForm();

    this.route.params.subscribe((params) => {
      this.optParam = params["opt"];
    });

    this.collectionItem = this.service.collectionItem;
    this.isEdit = this.optParam === "edit";
    this.isEdit ? this.setForm() : null;
  }

  onSave() {
    this.collectionItem = {
      ...this.collectionItem,
      title: this.collectionForm.get("title")?.value,
      description: this.collectionForm.get("description")?.value,
      userId: +this.service.userId,
    };

    if (this.isEdit) {
      this.service
        .updateCollection(this.collectionItem)
        .subscribe(() =>
          this.toastService.success("Coleção editada com sucesso!")
        );
    } else {
      this.service
        .saveCollection(this.collectionItem)
        .subscribe(() =>
          this.toastService.success("Coleção salva com sucesso!")
        );
    }
    this.router.navigate(["collection"]);
  }

  onRemove() {
    this.service
      .removeCollection(this.collectionItem.id)
      .subscribe(() =>
        this.toastService.success("Coleção removida com sucesso!")
      );
    this.router.navigate(["collection"]);
  }

  initializeForm() {
    this.collectionForm = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }

  setForm() {
    this.collectionForm = this.fb.group({
      title: [this.collectionItem.title, [Validators.required]],
      description: [this.collectionItem.description, [Validators.required]],
    });
  }
}