import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WidgetService {
  constructor(private http: HttpClient) { }

  load(identifier: string): Observable<any> {
    const requestUrl = `../../rest/ui/dashboard/widgets/${identifier}`;
    return this.http.get(requestUrl);
  }
}
