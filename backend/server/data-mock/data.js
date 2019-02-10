'use strict';
import Document from '../api/documents/document.model';

export default function mockData() {
    return Document.deleteMany()
        .then(() => {
            Document.create({
                    _id: "5be3601f90e40b35547ae6b4",
                    name: "fiche de paie",
                    date: new Date(),
                    category: "paie",
                    description: "",
                    urlFile: "localhost/111.pdf",
                    expiredDocument: false,
                    expiredDate: null
                },
                {
                    _id: "5be3601f90e40b35547ae6b1",
                    name: "fiche de paie (delete test)",
                    date: new Date(),
                    category: "paie",
                    description: "",
                    urlFile: "localhost/222.pdf",
                    expiredDocument: false,
                    expiredDate: null
                },
                {
                    _id: "1be3601f90e40b35547ae6b1",
                    name: "fiche de paie (patch test)",
                    date: new Date(),
                    category: "paie",
                    description: "",
                    urlFile: "localhost/222.pdf",
                    expiredDocument: false,
                    expiredDate: null
                }
            );
        });
}
