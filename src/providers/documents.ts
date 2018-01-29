import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DocumentsProvider extends BaseProvider {
  documentsList() {
    return this._http.get(this.API + "documents", this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  saveDocuments(docs) {
    let formData: FormData = new FormData();
    docs.forEach(document => {
      formData.append(document.field_name, document.image, document.image.name)
    });
    return this._http.post(this.API + "documents", formData, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }
}
