import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../models/login.model";
import { Register } from "../models/register.model";
import { Book } from "../models/book.model";
import { Collection } from "../models/collection.model";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class BibliotechService {
  bookItem!: Book;
  bookList: Book[] = [];
  collectionItem!: Collection;
  collectionList: Collection[] = [];
  user!: Register;
  userId: string = "";
  jwtToken = "";

  private apiUrl = "http://ec2-54-147-29-215.compute-1.amazonaws.com/";

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}
  // auth
  register(register: Register): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + "auth/register", {
      password: register.password,
      email: register.email,
      firstName: register.firstName,
      lastName: register.lastName,
    });
  }

  login(login: Login): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + "auth/login", {
      password: login.password,
      email: login.email,
    });
  }

  // books
  getBooks(): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });

    const params = new HttpParams().set("userId", this.userId);

    return this.httpClient.get<any>(this.apiUrl + "book/", { headers, params });
  }

  getBooksByCollection(collectionId: number): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });

    const params = new HttpParams().set("collectionId", collectionId);

    return this.httpClient.get<any>(this.apiUrl + "book/byCollection", {
      headers,
      params,
    });
  }

  updateBook(book: Book): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });

    return this.httpClient.put<any>(
      this.apiUrl + "book/",
      {
        id: book.id,
        title: book.title,
        authors: book.authors,
        publishedYear: book.publishedYear,
        description: book.description,
        edition: book.edition,
        isbn: book.isbn,
        pageCount: book.pageCount,
        categories: book.categories,
        read: book.read,
        collection: book.collection,
        userId: this.userId,
      },
      { headers }
    );
  }

  saveBook(book: Book): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });

    return this.httpClient.post<any>(
      this.apiUrl + "book/",
      {
        title: book.title,
        authors: book.authors,
        publishedYear: book.publishedYear,
        description: book.description,
        edition: book.edition,
        isbn: book.isbn,
        pageCount: book.pageCount,
        categories: book.categories,
        read: book.read,
        collection: book.collection,
        userId: this.userId,
      },
      { headers }
    );
  }

  removeBook(bookId: number | undefined): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });

    const body = {
      userId: this.userId,
      id: bookId,
    };

    return this.httpClient.delete<any>(this.apiUrl + "book/", {
      headers,
      body,
    });
  }

  // collections
  getCollections(): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });
    const params = new HttpParams().set("userId", this.userId);

    return this.httpClient.get<any>(this.apiUrl + "collection/", {
      headers,
      params,
    });
  }

  updateCollection(collection: Collection): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });

    // const params = new HttpParams().set("userId", this.userId);

    return this.httpClient.put<any>(
      this.apiUrl + "collection/",
      {
        id: collection.id,
        title: collection.title,
        description: collection.description,
      },
      { headers }
    );
  }

  saveCollection(collection: Collection): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });

    return this.httpClient.post<any>(
      this.apiUrl + "collection/",
      {
        title: collection.title,
        description: collection.description,
        userId: this.userId,
      },
      { headers }
    );
  }

  removeCollection(collectionId: number | undefined): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });

    const body = {
      userId: this.userId,
      id: collectionId,
    };

    return this.httpClient.delete<any>(this.apiUrl + "collection/", {
      headers,
      body,
    });
  }

  // user
  updateUser(register: Register): Observable<any> {
    this.getUser();
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });
    const params = new HttpParams().set("userId", this.userId);

    return this.httpClient.put<any>(
      this.apiUrl + "me/",
      {
        firstName: register.firstName,
        lastName: register.lastName,
      },
      { headers, params }
    );
  }

  getUser() {
    this.jwtToken = this.cookieService.get("user");
    this.user = JSON.parse(this.cookieService.get("userObject"));
    this.userId = this.user?.id?.toString() || "";
  }
}
