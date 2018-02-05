import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";

@Injectable()
export class DocumentsProvider extends BaseProvider {
  documentsList() {
    return this.makeRawRequest('get', 'documents');
  }

  saveDocuments(docs) {
    let formData: FormData = new FormData();
    docs.forEach(document => {
      formData.append(document.field_name, document.image, document.image.name)
    });
    return this.makeRawRequest('post', 'documents', formData);
  }
}
