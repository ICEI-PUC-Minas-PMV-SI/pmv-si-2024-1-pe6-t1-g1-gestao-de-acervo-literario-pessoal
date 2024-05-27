import { CookieService } from "ngx-cookie-service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Register } from "src/app/models/register.model";
import { BibliotechService } from "src/app/service/bibliotech.service";
import { Toast, ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  optParam!: string;
  user!: Register;

  constructor(
    private service: BibliotechService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.getUser();
    this.initializeForm();

    this.route.params.subscribe((params) => {
      this.optParam = params["opt"];
    });

    this.user = this.service.user;
    this.optParam === "edit" ? this.setForm() : null;
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      email: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  setForm() {
    this.registerForm = this.fb.group({
      email: [this.user.email, [Validators.required]],
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      password: [
        this.user.password,
        [Validators.required, Validators.minLength(6)],
      ],
    });
  }

  register() {
    if (this.optParam === "new") {
      this.service
        .register(this.registerForm.value)
        .subscribe(() =>
          this.toastService.success("Usuário criado com sucesso!")
        );
    } else {
      this.service.updateUser(this.registerForm.value).subscribe((update) => {
        this.service.user = update.data;
        this.service.userId = update.data.id;
        this.cookieService.set("userObject", JSON.stringify(this.service.user));
        this.router.navigate(["/books"]);
        this.toastService.success("Usuário editado com sucesso!");
      });
    }
  }
}
