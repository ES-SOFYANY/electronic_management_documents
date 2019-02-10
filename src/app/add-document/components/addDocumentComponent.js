import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddDocumentComponent(props) {
    return (
        <form className="form" onSubmit={(ev) => {
            ev.preventDefault();
            props.postDocument(props.document, props.file);
        }}>
            <fieldset>
                <div className="form-group row">
                    <label htmlFor="name-document-input" className="col-md-2 col-form-label">Name</label>
                    <input type="text"
                           value={props.document.name}
                           onChange={(ev) => props.changeFieldDocument('name', ev.target.value)}
                           className="form-control col-md-10"
                           id="name-document-input"
                           placeholder="Enter name"/>
                </div>
                <div className="form-group row">
                    <label htmlFor="category-document-input"
                           className="col-md-2 col-form-label">Category</label>
                    <input type="text"
                           value={props.document.category}
                           onChange={(ev) => props.changeFieldDocument('category', ev.target.value)}
                           className="form-control
                           col-md-10"
                           id="category-document-input"
                           placeholder="Enter Category"/>
                </div>
                <div className="form-group row">
                    <label htmlFor="date-document-input" className="col-md-2 col-form-label">Date</label>
                    <DatePicker
                        selected={props.document.date}
                        onChange={(val) => props.changeFieldDocument('date', val)}
                        dateFormat="dd/MM/yyyy"
                        className="form-control col-md-10"
                        id="date-document-input"
                    />
                </div>
                <div className="form-group row">
                    <label className="col-md-2">Document</label>
                    <div className="input-group col-md-10 element-without-padding">
                        <div className="custom-file">
                            <input type="file"
                                   onChange={(ev) => {
                                       props.changeFileDocument(ev.target.files[0]);
                                   }}
                                   className="custom-file-input"
                                   id="document-input" required/>
                            <label className="custom-file-label" htmlFor="inputGroupFile02">
                                {props.file ? props.file.name : 'Choose file'}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check element-without-padding">
                        <label className="form-check-label" htmlFor="expired-document-input">Expired
                            document</label>
                        <input type="checkbox"
                               checked={props.document.expiredDocument}
                               onChange={(ev) => props.changeFieldDocument('expiredDocument', ev.target.checked)}
                               className="form-check-input col-md-2 col-form-label"
                               id="expired-document-input"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="expired-date-document-input" className="col-md-2 col-form-label">Expired
                        date</label>
                    <DatePicker
                        selected={props.document.expiredDate}
                        dateFormat="dd/MM/yyyy"
                        onChange={(val) => props.changeFieldDocument('expiredDate', val)}
                        className="form-control col-md-10"
                        id="expired-date-document-input"
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="decription-document-input"
                           className="col-md-2 col-form-label">Desciption</label>
                    <textarea
                        checked={props.document.description}
                        onChange={(ev) => props.changeFieldDocument('description', ev.target.value)}
                        className="form-control col-md-10"
                        id="decription-document-input"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    )
}

export default AddDocumentComponent;