import React from 'react';

function HomeComponent(props) {

		if (props.isLoading) {
				return <p className="loading">Loading...</p>
		}
		return (
				<table className="table table-hover">
						<thead>
						<tr>
								<th>Name</th>
								<th>Category</th>
								<th>Date</th>
								<th>download</th>
						</tr>
						</thead>
						<tbody>
						{props.documents.map((document, index) => (
								<tr key={index}>
										<td>{document.name}</td>
										<td>{document.category}</td>
										<td>{document.date}</td>
										<td>
												<a href={`${document.urlFile}`} target="_blank">
														<button type="button" className="btn btn-default" aria-label="Left Align">
																<span className="glyphicon glyphicon-download-alt" >download</span>
														</button>
												</a>
										</td>
								</tr>
						))}

						</tbody>
				</table>
		)
}

export default HomeComponent;